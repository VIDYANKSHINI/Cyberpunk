import React from 'react';
import { motion } from 'motion/react';

interface CyberButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glowing';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export function CyberButton({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  fullWidth = false 
}: CyberButtonProps) {
  const baseClasses = "px-5 py-2.5 rounded-lg transition-all duration-300 font-['JetBrains_Mono'] text-sm";
  
  const variants = {
    primary: "bg-[var(--neon-magenta)] text-white border border-[var(--neon-pink)] shadow-[0_0_8px_rgba(247,37,133,0.5)] hover:shadow-[0_0_16px_rgba(247,37,133,0.8)]",
    secondary: "bg-transparent text-[var(--neon-cyan)] border border-[var(--neon-cyan)] shadow-[0_0_8px_rgba(0,245,255,0.3)] hover:shadow-[0_0_16px_rgba(0,245,255,0.6)]",
    glowing: "bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-purple)] text-white border border-[var(--neon-pink)] shadow-[0_0_16px_rgba(247,37,133,0.8)] hover:shadow-[0_0_24px_rgba(247,37,133,1)]"
  };
  
  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden ${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Neon shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}