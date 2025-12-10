import React from 'react';
import { motion } from 'motion/react';
import { GlowCard } from './GlowCard';
import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RestaurantCardProps {
  name: string;
  tagline: string;
  rating: number;
  image: string;
  onClick?: () => void;
  size?: 'small' | 'large';
}

export function RestaurantCard({ 
  name, 
  tagline, 
  rating, 
  image, 
  onClick,
  size = 'large' 
}: RestaurantCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <GlowCard 
        glowColor="var(--neon-magenta)" 
        className="cursor-pointer relative overflow-hidden group"
        onClick={onClick}
      >
        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
        
        <div className={`${size === 'large' ? 'flex flex-col gap-3' : 'flex gap-3'} relative z-10`}>
          <motion.div 
            className={`${size === 'large' ? 'w-full h-40' : 'w-24 h-24'} rounded-lg overflow-hidden relative`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
          <div className="flex-1">
            <motion.div 
              className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-1"
              whileHover={{ x: 2 }}
            >
              {name}
            </motion.div>
            <div className="text-sm text-gray-400 mb-2">{tagline}</div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Star
                    className="w-4 h-4"
                    fill={i < rating ? 'var(--neon-lime)' : 'none'}
                    stroke={i < rating ? 'var(--neon-lime)' : '#666'}
                  />
                </motion.div>
              ))}
              <span className="ml-2 text-sm text-[var(--neon-lime)]">{rating}.0</span>
            </div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
