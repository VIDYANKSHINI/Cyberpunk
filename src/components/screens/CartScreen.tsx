import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GlowCard } from '../GlowCard';
import { CyberButton } from '../CyberButton';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Minus, Plus, Trash2, Tag } from 'lucide-react';

interface CartScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

export function CartScreen({ onNavigate, onBack }: CartScreenProps) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(false);
  const [quantities, setQuantities] = useState({ 1: 1, 2: 1 });

  const cartItems = [
    {
      id: 1,
      name: 'Cyber Ramen Bowl',
      restaurant: 'Neon Noodles',
      price: 299,
      image: 'https://images.unsplash.com/photo-1759072083030-cb1499d9bb18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcmFtZW4lMjBib3dsfGVufDF8fHx8MTc2MjUwOTM1NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Electric Sushi Roll',
      restaurant: 'Neon Noodles',
      price: 349,
      image: 'https://images.unsplash.com/photo-1605727548143-7095d16b5b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY3liZXJwdW5rJTIwZm9vZHxlbnwxfHx8fDE3NjI1MDkzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * quantities[item.id as keyof typeof quantities]), 0);
  const discount = appliedCoupon ? 100 : 0;
  const total = subtotal - discount;

  const updateQuantity = (id: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, prev[id as keyof typeof prev] + delta)
    }));
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'CYBER100') {
      setAppliedCoupon(true);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] pb-20 overflow-y-auto">
      {/* Header - Mobile Optimized */}
      <motion.div 
        className="p-4 border-b border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <motion.button 
            onClick={onBack} 
            className="text-[var(--neon-cyan)] flex-shrink-0"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <h1 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] text-lg leading-tight">
            Your Cart
          </h1>
        </div>
      </motion.div>

      <div className="p-4">
        {/* Cart Items - Mobile Optimized */}
        <div className="space-y-3 mb-5">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <GlowCard glowColor="var(--neon-magenta)">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-['JetBrains_Mono'] text-white text-sm mb-1">
                      {item.name}
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{item.restaurant}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--neon-lime)]">₹{item.price}</span>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-[var(--dark-bg)] rounded-lg border border-white/10 p-1">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-[var(--neon-cyan)]"
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          <span className="text-white min-w-[20px] text-center">
                            {quantities[item.id as keyof typeof quantities]}
                          </span>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-[var(--neon-cyan)]"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>
                        
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          className="p-1 text-red-400"
                        >
                          <Trash2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Coupon Entry */}
        <GlowCard glowColor="var(--neon-lime)" className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-5 h-5 text-[var(--neon-lime)]" />
            <span className="font-['JetBrains_Mono'] text-white">Apply Coupon</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 bg-[var(--dark-bg)] border border-[var(--neon-lime)]/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-[var(--neon-lime)] focus:outline-none transition-colors shadow-[0_0_8px_rgba(204,255,0,0.2)] focus:shadow-[0_0_16px_rgba(204,255,0,0.4)]"
            />
            <CyberButton variant="secondary" onClick={applyCoupon}>
              Apply
            </CyberButton>
          </div>
          {appliedCoupon && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-[var(--neon-lime)]"
            >
              ✓ Coupon CYBER100 applied!
            </motion.div>
          )}
        </GlowCard>

        {/* Order Summary */}
        <GlowCard glowColor="var(--neon-cyan)" className="mb-6">
          <h3 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Order Summary
          </h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            {appliedCoupon && (
              <div className="flex justify-between text-[var(--neon-lime)]">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
            )}
            <div className="pt-2 border-t border-white/10 flex justify-between text-white">
              <span className="font-['JetBrains_Mono']">Total</span>
              <span className="font-['JetBrains_Mono'] text-[var(--neon-lime)]">
                ₹{total}
              </span>
            </div>
          </div>
        </GlowCard>

        <CyberButton variant="glowing" fullWidth onClick={() => onNavigate('checkout')}>
          Proceed to Checkout
        </CyberButton>
      </div>
    </div>
  );
}