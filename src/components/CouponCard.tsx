import React from 'react';
import { motion } from 'motion/react';
import { GlowCard } from './GlowCard';
import { Tag } from 'lucide-react';

interface CouponCardProps {
  code: string;
  discount: string;
  description: string;
  type: 'percentage' | 'flat';
  color?: string;
}

export function CouponCard({ code, discount, description, type, color = 'var(--neon-lime)' }: CouponCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <GlowCard glowColor={color} className="cursor-pointer relative overflow-hidden">
        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
        
        <div className="flex items-start gap-4 relative z-10">
          <motion.div 
            className="p-3 bg-gradient-to-br from-[var(--neon-lime)]/20 to-transparent rounded-lg border border-[var(--neon-lime)]/30"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Tag className="w-6 h-6" style={{ color }} />
          </motion.div>
          <div className="flex-1">
            <motion.div 
              className="font-['JetBrains_Mono'] mb-1" 
              style={{ color }}
              whileHover={{ x: 2 }}
            >
              {code}
            </motion.div>
            <div className="text-white mb-1">
              {type === 'percentage' ? `${discount}% OFF` : `₹${discount} OFF`}
            </div>
            <div className="text-sm text-gray-400">{description}</div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
