import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ProgressBar } from '../ProgressBar';
import { GlowCard } from '../GlowCard';
import { ArrowLeft, MapPin, Clock, Phone } from 'lucide-react';

interface OrderStatusProps {
  onBack: () => void;
}

export function OrderStatus({ onBack }: OrderStatusProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ['Order Placed', 'Preparing', 'On the Way', 'Delivered'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
              Track Order
            </h1>
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Order #CYBER2025
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="p-6">
        {/* Progress */}
        <ProgressBar currentStep={currentStep} steps={steps} />

        {/* Current Status */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <GlowCard glowColor="var(--neon-cyan)">
            <div className="flex items-start gap-4">
              <motion.div
                className="p-3 bg-[var(--neon-cyan)]/20 rounded-lg"
                animate={{
                  boxShadow: [
                    '0 0 10px var(--neon-cyan)',
                    '0 0 20px var(--neon-cyan)',
                    '0 0 10px var(--neon-cyan)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Clock className="w-6 h-6 text-[var(--neon-cyan)]" />
              </motion.div>
              <div className="flex-1">
                <div className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-1">
                  {steps[currentStep]}
                </div>
                <p className="text-sm text-gray-400">
                  {currentStep === 0 && 'Your order has been received'}
                  {currentStep === 1 && 'Your food is being prepared with care'}
                  {currentStep === 2 && 'Delivery partner is on the way'}
                  {currentStep === 3 && 'Order delivered successfully!'}
                </p>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        {/* Delivery Info */}
        <GlowCard glowColor="var(--neon-magenta)" className="mb-4">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-5 h-5 text-[var(--neon-magenta)] mt-1" />
            <div className="flex-1">
              <div className="font-['JetBrains_Mono'] text-white mb-1">
                Delivery Address
              </div>
              <p className="text-sm text-gray-400">
                Block A, Room 204, IIIT-B Campus
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[var(--neon-lime)] mt-1" />
            <div className="flex-1">
              <div className="font-['JetBrains_Mono'] text-white mb-1">
                Estimated Time
              </div>
              <p className="text-sm text-[var(--neon-lime)]">
                {currentStep < 3 ? '30-40 minutes' : 'Delivered'}
              </p>
            </div>
          </div>
        </GlowCard>

        {/* Contact Support */}
        {currentStep < 3 && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full p-4 bg-[var(--dark-navy)] rounded-lg border border-white/10 flex items-center justify-center gap-2 text-[var(--neon-cyan)]"
          >
            <Phone className="w-5 h-5" />
            <span>Contact Delivery Partner</span>
          </motion.button>
        )}
      </div>
    </div>
  );
}
