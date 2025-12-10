import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlowCard } from '../GlowCard';
import { CyberButton } from '../CyberButton';
import { LoadingRing } from '../LoadingRing';
import { ArrowLeft, MapPin, Wallet, CreditCard, DollarSign, Check } from 'lucide-react';

interface CheckoutScreenProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

export function CheckoutScreen({ onNavigate, onBack }: CheckoutScreenProps) {
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onNavigate('confirmation');
    }, 2000);
  };

  const addresses = [
    { id: 1, label: 'Campus Hostel', address: 'Block A, Room 204, IIIT-B Campus' },
    { id: 2, label: 'Academic Block', address: 'Main Building, 3rd Floor, IIIT-B' }
  ];

  const paymentMethods = [
    { id: 'upi', label: 'UPI', icon: Wallet },
    { id: 'card', label: 'Card', icon: CreditCard },
    { id: 'cash', label: 'Cash on Delivery', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] pb-20">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-[var(--neon-cyan)]">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] text-xl">
            Checkout
          </h1>
        </div>
      </div>

      <div className="p-6">
        {/* Delivery Address */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-[var(--neon-cyan)]" />
            <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)]">
              Delivery Address
            </h2>
          </div>
          
          <div className="space-y-3">
            {addresses.map((addr) => (
              <motion.div
                key={addr.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedAddress(addr.id)}
              >
                <GlowCard
                  glowColor={selectedAddress === addr.id ? 'var(--neon-cyan)' : 'transparent'}
                  className={`cursor-pointer transition-all ${
                    selectedAddress === addr.id
                      ? 'border-[var(--neon-cyan)]'
                      : 'border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedAddress === addr.id
                        ? 'border-[var(--neon-cyan)] bg-[var(--neon-cyan)]'
                        : 'border-gray-600'
                    }`}>
                      {selectedAddress === addr.id && (
                        <Check className="w-3 h-3 text-[var(--dark-bg)]" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-['JetBrains_Mono'] text-white mb-1">
                        {addr.label}
                      </div>
                      <p className="text-sm text-gray-400">{addr.address}</p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Wallet className="w-5 h-5 text-[var(--neon-magenta)]" />
            <h2 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)]">
              Payment Method
            </h2>
          </div>
          
          <div className="space-y-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPayment(method.id)}
                >
                  <GlowCard
                    glowColor={selectedPayment === method.id ? 'var(--neon-magenta)' : 'transparent'}
                    className={`cursor-pointer transition-all ${
                      selectedPayment === method.id
                        ? 'border-[var(--neon-magenta)]'
                        : 'border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        selectedPayment === method.id
                          ? 'bg-[var(--neon-magenta)]/20 text-[var(--neon-magenta)]'
                          : 'bg-gray-800 text-gray-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="flex-1 text-white">{method.label}</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedPayment === method.id
                          ? 'border-[var(--neon-magenta)] bg-[var(--neon-magenta)]'
                          : 'border-gray-600'
                      }`}>
                        {selectedPayment === method.id && (
                          <Check className="w-3 h-3 text-[var(--dark-bg)]" />
                        )}
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Order Summary */}
        <GlowCard glowColor="var(--neon-lime)" className="mb-6">
          <h3 className="font-['JetBrains_Mono'] text-[var(--neon-lime)] mb-4">
            Bill Summary
          </h3>
          
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between text-gray-400">
              <span>Item Total</span>
              <span>₹648</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Delivery Fee</span>
              <span className="text-[var(--neon-lime)]">FREE</span>
            </div>
            <div className="flex justify-between text-[var(--neon-lime)]">
              <span>Discount</span>
              <span>-₹100</span>
            </div>
            <div className="pt-3 border-t border-white/10 flex justify-between text-white">
              <span className="font-['JetBrains_Mono']">To Pay</span>
              <span className="font-['JetBrains_Mono'] text-[var(--neon-lime)] text-xl">
                ₹548
              </span>
            </div>
          </div>
        </GlowCard>

        <CyberButton variant="glowing" fullWidth onClick={handlePlaceOrder} className={isProcessing ? 'opacity-50 cursor-not-allowed' : ''}>
          {isProcessing ? 'Processing...' : 'Place Order'}
        </CyberButton>
      </div>
      
      {/* Processing Overlay */}
      <AnimatePresence>
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center"
          >
            <LoadingRing size={80} color="var(--neon-magenta)" />
            <motion.p
              className="mt-6 font-['JetBrains_Mono'] text-[var(--neon-cyan)]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Processing your order...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
