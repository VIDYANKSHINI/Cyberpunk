import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CyberButton } from '../CyberButton';
import { ShareButton } from '../ShareButton';
import { CheckCircle2, Copy, Check } from 'lucide-react';

interface OrderConfirmationProps {
  onNavigate: (screen: string) => void;
}

export function OrderConfirmation({ onNavigate }: OrderConfirmationProps) {
  const [showShare, setShowShare] = useState(false);
  const [copiedCaption, setCopiedCaption] = useState(false);
  
  const captions = [
    "Charged up at #CyberpunkFest ⚡💜 #GlowEats #NeonMood",
    "Taste the Tech 🔮 #FutureFood #IIITBFest",
    "Neon vibes only 💫 #CyberEats #FestivalLife",
    "Living in 2077 🌌 #CyberpunkFood #GlowUp"
  ];
  
  const [selectedCaption] = useState(captions[Math.floor(Math.random() * captions.length)]);
  
  const copyCaption = () => {
    navigator.clipboard.writeText(selectedCaption);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };
  return (
    <div className="min-h-screen bg-[var(--dark-bg)] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="relative z-10 text-center"
      >
        {/* Animated Success Icon */}
        <motion.div
          className="mb-8 flex justify-center"
          animate={{
            boxShadow: [
              '0 0 20px var(--neon-lime)',
              '0 0 60px var(--neon-lime)',
              '0 0 20px var(--neon-lime)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="p-6 bg-[var(--dark-navy)] rounded-full border-2 border-[var(--neon-lime)]">
            <CheckCircle2 className="w-24 h-24 text-[var(--neon-lime)]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-['JetBrains_Mono'] text-3xl mb-3 text-[var(--neon-lime)]"
        >
          Order Placed!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mb-2"
        >
          Your cyberpunk feast is being prepared
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <div className="inline-block p-4 bg-[var(--dark-navy)] rounded-lg border border-white/10">
            <div className="text-sm text-gray-500 mb-1">Order ID</div>
            <div className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] text-xl">
              #CYBER2025
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-3 mb-8"
        >
          <div className="p-4 bg-[var(--dark-navy)]/50 rounded-lg border border-white/10">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Estimated Delivery</span>
              <span className="text-[var(--neon-magenta)]">30-40 min</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Total Amount</span>
              <span className="text-[var(--neon-lime)]">₹548</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="space-y-3 max-w-sm mx-auto"
        >
          {!showShare ? (
            <>
              <ShareButton onClick={() => setShowShare(true)} />
              <div className="grid grid-cols-2 gap-3">
                <CyberButton variant="glowing" onClick={() => onNavigate('order-status')}>
                  Track Order
                </CyberButton>
                <CyberButton variant="secondary" onClick={() => onNavigate('find-seat')}>
                  Find Seat
                </CyberButton>
              </div>
              <CyberButton variant="secondary" fullWidth onClick={() => onNavigate('home')}>
                Back to Home
              </CyberButton>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[var(--dark-navy)] rounded-lg border border-[var(--neon-magenta)]/30 p-6"
              style={{
                boxShadow: '0 0 30px var(--neon-magenta)'
              }}
            >
              <div className="text-center mb-4">
                <div className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] mb-2">
                  ✨ Share Your Neon Bite ✨
                </div>
                <p className="text-sm text-gray-400">Gen-Z approved caption</p>
              </div>
              
              <div className="bg-[var(--dark-bg)] rounded-lg p-4 mb-4 relative">
                <p className="text-white text-sm mb-3">{selectedCaption}</p>
                <motion.button
                  onClick={copyCaption}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-2 right-2 p-2 bg-[var(--neon-cyan)]/20 rounded-lg border border-[var(--neon-cyan)]/30 hover:bg-[var(--neon-cyan)]/30 transition-colors"
                >
                  {copiedCaption ? (
                    <Check className="w-4 h-4 text-[var(--neon-lime)]" />
                  ) : (
                    <Copy className="w-4 h-4 text-[var(--neon-cyan)]" />
                  )}
                </motion.button>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <CyberButton variant="glowing" onClick={() => {/* Share to IG */}}>
                  Share 📸
                </CyberButton>
                <CyberButton variant="secondary" onClick={() => setShowShare(false)}>
                  Back
                </CyberButton>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      
      {/* Confetti Glow Effect */}
      <AnimatePresence>
        {showShare && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-0"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: ['var(--neon-magenta)', 'var(--neon-cyan)', 'var(--neon-lime)', 'var(--neon-purple)'][i % 4],
                  left: `${Math.random() * 100}%`,
                  top: '50%'
                }}
                animate={{
                  y: [0, -300, -600],
                  x: [0, (Math.random() - 0.5) * 200],
                  opacity: [1, 1, 0],
                  scale: [1, 1.5, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
