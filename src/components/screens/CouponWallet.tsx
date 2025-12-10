import React from 'react';
import { motion } from 'motion/react';
import { CouponCard } from '../CouponCard';
import { ArrowLeft } from 'lucide-react';

interface CouponWalletProps {
  onBack: () => void;
}

export function CouponWallet({ onBack }: CouponWalletProps) {
  const coupons = [
    {
      code: 'CYBER100',
      discount: '100',
      description: 'Flat ₹100 off on orders above ₹500',
      type: 'flat' as const,
      color: 'var(--neon-lime)'
    },
    {
      code: 'NEON20',
      discount: '20',
      description: '20% off on all menu items',
      type: 'percentage' as const,
      color: 'var(--neon-cyan)'
    },
    {
      code: 'FIRST50',
      discount: '50',
      description: 'Flat ₹50 off on first order',
      type: 'flat' as const,
      color: 'var(--neon-magenta)'
    },
    {
      code: 'FESTIVAL25',
      discount: '25',
      description: '25% off during festival hours',
      type: 'percentage' as const,
      color: 'var(--neon-purple)'
    },
    {
      code: 'COMBO30',
      discount: '30',
      description: '30% off on combo meals',
      type: 'percentage' as const,
      color: 'var(--neon-blue)'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] pb-20">
      {/* Header */}
      <motion.div 
        className="p-6 border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-4">
          <motion.button 
            onClick={onBack} 
            className="text-[var(--neon-cyan)]"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
          <div>
            <h1 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] text-xl">
              Coupon Wallet
            </h1>
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {coupons.length} coupons available
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Coupons List */}
      <div className="p-6 space-y-4">
        {coupons.map((coupon, index) => (
          <motion.div
            key={coupon.code}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CouponCard {...coupon} />
          </motion.div>
        ))}
      </div>

      {/* Info Banner */}
      <div className="px-6 mt-4">
        <div className="p-4 bg-[var(--dark-navy)]/50 rounded-lg border border-[var(--neon-cyan)]/30 text-center">
          <p className="text-sm text-gray-400">
            Tap any coupon to copy the code
          </p>
        </div>
      </div>
    </div>
  );
}
