import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuItemCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  onAdd?: () => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ 
  name, 
  description, 
  price, 
  image,
  onAdd 
}) => {
  return (
    <motion.div 
      className="bg-[#14141f] border border-[rgba(255,0,110,0.3)] rounded-lg overflow-hidden relative"
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      
      <div className="flex gap-3 p-3 relative z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <ImageWithFallback 
            src={image} 
            alt={name}
            className="w-24 h-24 object-cover rounded-lg"
          />
        </motion.div>
        
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h4 className="text-white mb-1">{name}</h4>
            <p className="text-xs text-[#9090a0] line-clamp-2">{description}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <motion.div 
              className="inline-block px-2 py-1 bg-[#00ff9f] rounded"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm text-[#0a0a14]">₹{price}</span>
            </motion.div>
            
            {onAdd && (
              <motion.button
                onClick={onAdd}
                className="p-2 bg-[#ff006e] text-white rounded-lg"
                whileTap={{ scale: 0.9 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 16px rgba(255,0,110,0.8)'
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Plus className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
