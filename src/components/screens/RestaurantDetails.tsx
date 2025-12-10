import React from 'react';
import { motion } from 'motion/react';
import { GlowCard } from '../GlowCard';
import { CyberButton } from '../CyberButton';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft, Star, Plus } from 'lucide-react';

interface RestaurantDetailsProps {
  onNavigate: (screen: string) => void;
  onBack: () => void;
}

export function RestaurantDetails({ onNavigate, onBack }: RestaurantDetailsProps) {
  const menuItems = [
    {
      id: 1,
      name: 'Cyber Ramen Bowl',
      description: 'Spicy noodles with neon-infused broth',
      price: 299,
      image: 'https://images.unsplash.com/photo-1759072083030-cb1499d9bb18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcmFtZW4lMjBib3dsfGVufDF8fHx8MTc2MjUwOTM1NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Electric Sushi Roll',
      description: 'Fresh sushi with a glowing presentation',
      price: 349,
      image: 'https://images.unsplash.com/photo-1605727548143-7095d16b5b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY3liZXJwdW5rJTIwZm9vZHxlbnwxfHx8fDE3NjI1MDkzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Neon Gyoza',
      description: 'Pan-fried dumplings with cyber sauce',
      price: 199,
      image: 'https://images.unsplash.com/photo-1605727548143-7095d16b5b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY3liZXJwdW5rJTIwZm9vZHxlbnwxfHx8fDE3NjI1MDkzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      name: 'Matrix Mochi',
      description: 'Sweet rice cakes in digital flavors',
      price: 149,
      image: 'https://images.unsplash.com/photo-1650290147009-bfc3ccccc396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwZGVzc2VydHxlbnwxfHx8fDE3NjI1MDkzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] pb-20">
      {/* Header with Banner */}
      <motion.div 
        className="relative h-64"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759072083030-cb1499d9bb18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcmFtZW4lMjBib3dsfGVufDF8fHx8MTc2MjUwOTM1NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)] via-black/50 to-transparent" />
        
        <motion.button
          onClick={onBack}
          className="absolute top-6 left-6 p-2 bg-black/50 backdrop-blur-sm rounded-lg border border-white/20 hover:border-[var(--neon-cyan)] transition-colors"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <ArrowLeft className="w-6 h-6 text-[var(--neon-cyan)]" />
        </motion.button>
        
        <motion.div 
          className="absolute bottom-6 left-6 right-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h1 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] text-2xl mb-2">
            Neon Noodles
          </h1>
          <p className="text-gray-300 text-sm mb-3">
            Authentic Asian fusion with a cyberpunk twist
          </p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                <Star
                  className="w-5 h-5"
                  fill="var(--neon-lime)"
                  stroke="var(--neon-lime)"
                />
              </motion.div>
            ))}
            <span className="ml-2 text-[var(--neon-lime)]">5.0</span>
            <span className="ml-2 text-gray-400 text-sm">• 30-40 min</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Menu Items */}
      <div className="p-6">
        <h2 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] mb-4">
          Menu
        </h2>
        
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlowCard glowColor="var(--neon-blue)">
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-['JetBrains_Mono'] text-white mb-1">
                      {item.name}
                    </div>
                    <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--neon-lime)]">₹{item.price}</span>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-[var(--neon-magenta)] rounded-lg border border-[var(--neon-pink)] shadow-[0_0_8px_rgba(247,37,133,0.5)]"
                      >
                        <Plus className="w-5 h-5 text-white" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--dark-bg)] to-transparent">
        <CyberButton variant="glowing" fullWidth onClick={() => onNavigate('cart')}>
          View Cart (2 items)
        </CyberButton>
      </div>
    </div>
  );
}
