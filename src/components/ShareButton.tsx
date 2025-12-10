import React from 'react';
import { motion } from 'motion/react';
import { Share2, Sparkles } from 'lucide-react';

interface ShareButtonProps {
  onClick?: () => void;
}

export function ShareButton({ onClick }: ShareButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative w-full bg-gradient-to-r from-[var(--neon-magenta)] to-[var(--neon-purple)] rounded-lg p-4 border border-[var(--neon-pink)] overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        boxShadow: [
          '0 0 20px var(--neon-magenta)',
          '0 0 40px var(--neon-magenta)',
          '0 0 20px var(--neon-magenta)'
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-100%', '200%']
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      
      <div className="relative flex items-center justify-center gap-2">
        <Sparkles className="w-5 h-5 text-white" />
        <span className="font-['JetBrains_Mono'] text-white">
          Share your Neon Bite
        </span>
        <Share2 className="w-5 h-5 text-white" />
      </div>
    </motion.button>
  );
}
