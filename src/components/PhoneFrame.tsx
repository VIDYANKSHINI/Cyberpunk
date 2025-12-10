import React from 'react';
import { motion } from 'motion/react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-black flex items-center justify-center p-4 sm:p-8">
      {/* Phone Device Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {/* Phone Body - Modern Bezel-less Design */}
        <div 
          className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[48px] p-3 shadow-2xl"
          style={{
            width: '393px',
            boxShadow: `
              0 30px 90px rgba(0, 0, 0, 0.9),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              0 0 60px rgba(255, 0, 110, 0.15),
              inset 0 0 30px rgba(0, 240, 255, 0.05)
            `,
          }}
        >
          {/* Side Buttons */}
          {/* Volume Buttons - Left */}
          <div className="absolute -left-[2.5px] top-[140px] w-[2.5px] h-[50px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-l-sm shadow-inner" />
          <div className="absolute -left-[2.5px] top-[200px] w-[2.5px] h-[50px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-l-sm shadow-inner" />
          
          {/* Power Button - Right */}
          <div className="absolute -right-[2.5px] top-[160px] w-[2.5px] h-[80px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-r-sm shadow-inner" />

          {/* Inner Screen Container */}
          <div className="relative bg-black rounded-[36px] overflow-hidden">
            {/* Status Bar Space (Top Notch Area) */}
            <div className="absolute top-0 left-0 right-0 h-[44px] z-50 pointer-events-none">
              {/* Subtle gradient for status bar */}
              <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-black/50 to-transparent" />
            </div>

            {/* Screen Content */}
            <div 
              className="relative bg-[var(--dark-bg)] overflow-y-auto overflow-x-hidden scrollbar-hide"
              style={{
                width: '393px',
                height: '852px',
              }}
            >
              {children}
            </div>
          </div>

          {/* Cyberpunk Screen Glow Effect */}
          <motion.div 
            className="absolute inset-[12px] rounded-[36px] pointer-events-none"
            animate={{
              boxShadow: [
                'inset 0 0 40px rgba(0, 240, 255, 0.1)',
                'inset 0 0 50px rgba(255, 0, 110, 0.1)',
                'inset 0 0 40px rgba(0, 255, 159, 0.1)',
                'inset 0 0 40px rgba(0, 240, 255, 0.1)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Screen Glass Reflection */}
          <div 
            className="absolute inset-[12px] rounded-[36px] pointer-events-none opacity-40"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)',
            }}
          />
        </div>

        {/* Device Info Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-[10px] font-['JetBrains_Mono'] whitespace-nowrap tracking-wider"
        >
          MOBILE DEVICE • 393 × 852
        </motion.div>

        {/* Ambient Glow Under Device */}
        <motion.div
          className="absolute -inset-12 -z-10 blur-3xl opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at center, rgba(0, 240, 255, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle at center, rgba(255, 0, 110, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle at center, rgba(0, 255, 159, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle at center, rgba(0, 240, 255, 0.3) 0%, transparent 70%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </div>
  );
}
