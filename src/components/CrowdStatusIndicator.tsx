import React from 'react';
import { motion } from 'motion/react';
import { Users } from 'lucide-react';

interface CrowdStatusIndicatorProps {
  level: 'low' | 'moderate' | 'high';
  count?: number;
}

export function CrowdStatusIndicator({ level, count }: CrowdStatusIndicatorProps) {
  const colors = {
    low: { main: '#00ff9f', shadow: 'rgba(0, 255, 159, 0.6)' },
    moderate: { main: '#ffa500', shadow: 'rgba(255, 165, 0, 0.6)' },
    high: { main: '#ff006e', shadow: 'rgba(255, 0, 110, 0.6)' }
  };
  
  const labels = {
    low: 'Low Crowd',
    moderate: 'Moderate',
    high: 'Full'
  };
  
  const color = colors[level];
  
  return (
    <div className="flex items-center gap-2">
      <motion.div
        className="relative w-8 h-8 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: color.main + '20',
          border: `2px solid ${color.main}`
        }}
        animate={{
          boxShadow: [
            `0 0 10px ${color.shadow}`,
            `0 0 20px ${color.shadow}`,
            `0 0 10px ${color.shadow}`
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Pulsing ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: `2px solid ${color.main}` }}
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.8, 0, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <Users className="w-4 h-4" style={{ color: color.main }} />
      </motion.div>
      
      <div>
        <div className="text-xs text-white">{labels[level]}</div>
        {count !== undefined && (
          <div className="text-xs text-gray-400">{count} seats free</div>
        )}
      </div>
    </div>
  );
}
