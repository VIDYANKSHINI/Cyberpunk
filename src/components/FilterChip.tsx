import React from 'react';
import { motion } from 'motion/react';

interface FilterChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function FilterChip({ label, active = false, onClick }: FilterChipProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg border transition-all duration-300 whitespace-nowrap relative overflow-hidden ${
        active
          ? "bg-[var(--neon-cyan)] text-[var(--dark-bg)] border-[var(--neon-cyan)] shadow-[0_0_8px_rgba(0,245,255,0.6)]"
          : "bg-transparent text-[var(--neon-cyan)] border-[var(--neon-cyan)]/30 hover:border-[var(--neon-cyan)]"
      }`}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      animate={active ? {
        boxShadow: [
          '0 0 8px rgba(0,245,255,0.6)',
          '0 0 16px rgba(0,245,255,0.8)',
          '0 0 8px rgba(0,245,255,0.6)'
        ]
      } : {}}
      transition={{ duration: 1.5, repeat: active ? Infinity : 0 }}
    >
      {/* Shimmer on active */}
      {active && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
}
