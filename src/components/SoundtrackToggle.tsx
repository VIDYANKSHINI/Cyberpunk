import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

export function SoundtrackToggle() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <motion.button
      onClick={() => setIsMuted(!isMuted)}
      className="relative w-12 h-12 rounded-full flex items-center justify-center bg-[var(--dark-navy)] border border-[var(--neon-purple)]/30"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      animate={!isMuted ? {
        boxShadow: [
          '0 0 10px var(--neon-purple)',
          '0 0 20px var(--neon-purple)',
          '0 0 10px var(--neon-purple)'
        ]
      } : {}}
      transition={{ duration: 1.5, repeat: isMuted ? 0 : Infinity }}
    >
      {/* Soundwave animation when not muted */}
      {!isMuted && (
        <div className="absolute inset-0 rounded-full flex items-center justify-center gap-0.5">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-0.5 bg-[var(--neon-purple)] rounded-full"
              animate={{
                height: ['4px', '12px', '4px']
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      )}
      
      {/* Icon */}
      <div className="relative z-10">
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-gray-400" />
        ) : (
          <Volume2 className="w-5 h-5 text-[var(--neon-purple)]" />
        )}
      </div>
    </motion.button>
  );
}
