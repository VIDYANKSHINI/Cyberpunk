import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CartItemCardProps {
  name: string;
  price: number;
  quantity: number;
  image: string;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({ 
  name, 
  price, 
  quantity,
  image,
  onIncrease,
  onDecrease,
  onRemove
}) => {
  return (
    <motion.div 
      className="bg-[#14141f] border border-[rgba(255,0,110,0.3)] rounded-lg p-3 relative overflow-hidden"
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      
      <div className="flex gap-3 relative z-10">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.2 }}
        >
          <ImageWithFallback 
            src={image} 
            alt={name}
            className="w-16 h-16 object-cover rounded-lg"
          />
        </motion.div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h4 className="text-white text-sm">{name}</h4>
              <motion.p 
                className="text-[#00ff9f] text-sm"
                key={price}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
              >
                ₹{price}
              </motion.p>
            </div>
            {onRemove && (
              <motion.button
                onClick={onRemove}
                className="text-[#ff006e]"
                whileTap={{ scale: 0.8, rotate: 90 }}
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <motion.button
              onClick={onDecrease}
              className="w-6 h-6 flex items-center justify-center bg-[#1f1f2e] border border-[rgba(255,0,110,0.3)] rounded"
              whileTap={{ scale: 0.85 }}
              whileHover={{ 
                scale: 1.1, 
                borderColor: '#ff006e',
                boxShadow: '0 0 8px rgba(255,0,110,0.5)'
              }}
            >
              <Minus className="w-3 h-3 text-[#00f0ff]" />
            </motion.button>
            
            <AnimatePresence mode="wait">
              <motion.span 
                key={quantity}
                className="text-sm text-white w-8 text-center"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {quantity}
              </motion.span>
            </AnimatePresence>
            
            <motion.button
              onClick={onIncrease}
              className="w-6 h-6 flex items-center justify-center bg-[#1f1f2e] border border-[rgba(255,0,110,0.3)] rounded"
              whileTap={{ scale: 0.85 }}
              whileHover={{ 
                scale: 1.1, 
                borderColor: '#ff006e',
                boxShadow: '0 0 8px rgba(255,0,110,0.5)'
              }}
            >
              <Plus className="w-3 h-3 text-[#00f0ff]" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
