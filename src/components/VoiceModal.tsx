import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface VoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoiceModal({ isOpen, onClose }: VoiceModalProps) {
  const [isListening, setIsListening] = useState(true);
  const [response, setResponse] = useState('');
  
  useEffect(() => {
    if (isOpen) {
      setIsListening(true);
      setResponse('');
      
      // Simulate listening then response
      const timer1 = setTimeout(() => {
        setIsListening(false);
        setResponse('Found 3 restaurants serving Neon Noodles! Opening menu...');
      }, 3000);
      
      return () => clearTimeout(timer1);
    }
  }, [isOpen]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90%] max-w-sm bg-[var(--dark-navy)] rounded-lg border border-[var(--neon-cyan)]/30 p-6"
            style={{
              boxShadow: '0 0 40px var(--neon-cyan)'
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Content */}
            <div className="text-center">
              {isListening ? (
                <>
                  {/* Pulsing circle */}
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      className="relative w-32 h-32"
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {/* Outer rings */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-[var(--neon-magenta)]"
                        animate={{
                          scale: [1, 1.5, 1.5],
                          opacity: [0.8, 0, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-[var(--neon-cyan)]"
                        animate={{
                          scale: [1, 1.5, 1.5],
                          opacity: [0.8, 0, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                      />
                      
                      {/* Center circle */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--neon-magenta)] to-[var(--neon-cyan)] flex items-center justify-center">
                        {/* Waveform bars */}
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1 bg-white rounded-full"
                              animate={{
                                height: ['20px', '40px', '20px']
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.1
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-2"
                  >
                    Listening to your craving...
                  </motion.div>
                  <p className="text-sm text-gray-400">
                    Try: "I want Neon Noodles"
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-[var(--neon-lime)]/20 border-2 border-[var(--neon-lime)] flex items-center justify-center">
                    <span className="text-4xl">✓</span>
                  </div>
                  
                  <div className="font-['JetBrains_Mono'] text-[var(--neon-lime)]">
                    Got it!
                  </div>
                  
                  <p className="text-white">{response}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
