import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingUp } from 'lucide-react';

interface FoodTrendCardProps {
  name: string;
  price: number;
  image: string;
  trending?: boolean;
  onClick?: () => void;
}

export function FoodTrendCard({ name, price, image, trending = true, onClick }: FoodTrendCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="relative min-w-[140px] cursor-pointer flex-shrink-0"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsing glow background */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--neon-magenta)] to-[var(--neon-cyan)]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.02, 1]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ filter: 'blur(10px)' }}
      />
      
      <div className="relative bg-[var(--dark-navy)] rounded-lg border border-[var(--neon-cyan)]/30 overflow-hidden">
        {/* Image */}
        <div className="h-24 relative overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Trending badge */}
          {trending && (
            <motion.div
              className="absolute top-1.5 right-1.5 px-1.5 py-0.5 bg-[var(--neon-magenta)]/90 backdrop-blur-sm rounded-full flex items-center gap-0.5"
              animate={{
                boxShadow: [
                  '0 0 10px var(--neon-magenta)',
                  '0 0 20px var(--neon-magenta)',
                  '0 0 10px var(--neon-magenta)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <TrendingUp className="w-2.5 h-2.5 text-white" />
              <span className="text-[9px] text-white">Hot</span>
            </motion.div>
          )}
          
          {/* Price tag */}
          <div className="absolute bottom-1.5 left-1.5 px-2 py-0.5 bg-[var(--neon-lime)] rounded-full">
            <span className="text-[10px] font-['JetBrains_Mono'] text-[var(--dark-bg)]">
              ₹{price}
            </span>
          </div>
        </div>
        
        {/* Name */}
        <div className="p-2">
          <div className="font-['JetBrains_Mono'] text-[11px] text-[var(--neon-cyan)] leading-tight">
            {name}
          </div>
        </div>
      </div>
    </motion.div>
  );
}