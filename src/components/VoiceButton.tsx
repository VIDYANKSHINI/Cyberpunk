import React from 'react';
import { motion } from 'motion/react';
import { Mic } from 'lucide-react';

interface VoiceButtonProps {
  isActive?: boolean;
  onClick?: () => void;
}

export function VoiceButton({ isActive = false, onClick }: VoiceButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative w-14 h-14 rounded-full flex items-center justify-center ${
        isActive 
          ? 'bg-[var(--neon-magenta)]' 
          : 'bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)]'
      }`}
      whileTap={{ scale: 0.9 }}
      animate={isActive ? {
        boxShadow: [
          '0 0 20px var(--neon-magenta)',
          '0 0 40px var(--neon-magenta)',
          '0 0 20px var(--neon-magenta)'
        ]
      } : {
        boxShadow: '0 0 20px var(--neon-cyan)'
      }}
      transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
    >
      {/* Pulsing rings when active */}
      {isActive && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[var(--neon-magenta)]"
            animate={{
              scale: [1, 1.8, 1.8],
              opacity: [1, 0, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[var(--neon-magenta)]"
            animate={{
              scale: [1, 1.8, 1.8],
              opacity: [1, 0, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
          />
        </>
      )}
      
      <motion.div
        animate={isActive ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
      >
        <Mic className="w-6 h-6 text-white" />
      </motion.div>
    </motion.button>
  );
}
