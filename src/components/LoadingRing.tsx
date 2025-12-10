import React from 'react';
import { motion } from 'motion/react';

interface LoadingRingProps {
  size?: number;
  color?: string;
}

export function LoadingRing({ size = 60, color = 'var(--neon-cyan)' }: LoadingRingProps) {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative"
        style={{ width: size, height: size }}
      >
        {/* Spinning ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: `3px solid transparent`,
            borderTopColor: color,
            borderRightColor: color
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Glowing outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: `2px solid ${color}`,
            opacity: 0.3
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Center glow */}
        <motion.div
          className="absolute inset-0 rounded-full flex items-center justify-center"
          animate={{
            boxShadow: [
              `0 0 10px ${color}`,
              `0 0 20px ${color}`,
              `0 0 10px ${color}`
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
