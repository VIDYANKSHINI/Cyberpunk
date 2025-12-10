import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CyberButton } from '../CyberButton';
import { GlowCard } from '../GlowCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ChevronRight, Ticket, ShoppingBag } from 'lucide-react';
import { VoiceButton } from '../VoiceButton';
import { VoiceModal } from '../VoiceModal';
import { FoodTrendCard } from '../FoodTrendCard';
import { SoundtrackToggle } from '../SoundtrackToggle';

interface HomePageProps {
  onNavigate: (screen: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  const combos = [
    {
      id: 1,
      name: 'Neon Ramen Bowl',
      price: 299,
      image: 'https://images.unsplash.com/photo-1759072083030-cb1499d9bb18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcmFtZW4lMjBib3dsfGVufDF8fHx8MTc2MjUwOTM1NHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Cyber Burger Combo',
      price: 349,
      image: 'https://images.unsplash.com/photo-1671455626332-4f25dc5c7dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwYnVyZ2VyfGVufDF8fHx8MTc2MjUwOTM1NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Electric Smoothie',
      price: 199,
      image: 'https://images.unsplash.com/photo-1639512763451-27d850252403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwZHJpbmslMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjI1MDkzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] pb-20 overflow-y-auto">
      {/* Header - Mobile Optimized */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h1 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] text-xl leading-tight truncate">
              Cyberpunk Fest
            </h1>
            <p className="text-gray-400 text-xs mt-0.5">IIIT-B Campus</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <SoundtrackToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => onNavigate('cart')}
              className="relative p-2.5 bg-[var(--dark-navy)] rounded-lg border border-[var(--neon-cyan)]/30"
            >
              <ShoppingBag className="w-5 h-5 text-[var(--neon-cyan)]" />
              <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 bg-[var(--neon-magenta)] rounded-full flex items-center justify-center text-[10px]">
                2
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Festival Banner - Mobile Optimized */}
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-40 rounded-lg overflow-hidden"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1627740660376-bc7506720b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjaXR5JTIwbmVvbnxlbnwxfHx8fDE3NjI0MjE0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Festival Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="font-['JetBrains_Mono'] text-[var(--neon-lime)] text-base mb-1.5 leading-tight">
              Limited Time Only
            </h2>
            <p className="text-white text-xs mb-2 leading-tight">
              Nov 7-10, 2025 • Experience the future of food
            </p>
          </div>
        </motion.div>
      </div>

      {/* Popular Now Section - Mobile Optimized */}
      <div className="px-4 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] text-sm">
            Popular Now 🔥
          </h3>
          <button className="text-[var(--neon-cyan)] text-xs flex items-center gap-1">
            View All <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
          <FoodTrendCard
            name="Neon Noodles"
            price={299}
            image="https://images.unsplash.com/photo-1759072083030-cb1499d9bb18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcmFtZW4lMjBib3dsfGVufDF8fHx8MTc2MjUwOTM1NHww&ixlib=rb-4.1.0&q=80&w=1080"
            trending={true}
          />
          <FoodTrendCard
            name="Cyber Samosa"
            price={99}
            image="https://images.unsplash.com/photo-1605727548143-7095d16b5b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY3liZXJwdW5rJTIwZm9vZHxlbnwxfHx8fDE3NjI1MDkzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            trending={true}
          />
          <FoodTrendCard
            name="Glow Burger"
            price={249}
            image="https://images.unsplash.com/photo-1671455626332-4f25dc5c7dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwYnVyZ2VyfGVufDF8fHx8MTc2MjUwOTM1NXww&ixlib=rb-4.1.0&q=80&w=1080"
            trending={true}
          />
          <FoodTrendCard
            name="Holographic Ice Tea"
            price={149}
            image="https://images.unsplash.com/photo-1639512763451-27d850252403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwZHJpbmslMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjI1MDkzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            trending={true}
          />
        </div>
      </div>

      {/* Neon Combos Carousel - Mobile Optimized */}
      <div className="px-4 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] text-sm">Neon Combos</h3>
          <button className="text-[var(--neon-magenta)] text-xs flex items-center gap-1">
            View All <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
          {combos.map((combo) => (
            <motion.div
              key={combo.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="min-w-[160px] flex-shrink-0"
            >
              <GlowCard glowColor="var(--neon-purple)" className="cursor-pointer">
                <div className="h-28 rounded-lg overflow-hidden mb-2.5 relative">
                  <ImageWithFallback
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-[var(--neon-lime)] text-[var(--dark-bg)] px-1.5 py-0.5 rounded text-[10px] font-['JetBrains_Mono']">
                    ₹{combo.price}
                  </div>
                </div>
                <div className="font-['JetBrains_Mono'] text-xs text-white leading-tight">
                  {combo.name}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Buttons - Mobile Optimized */}
      <div className="px-4 space-y-2.5">
        <CyberButton variant="glowing" fullWidth onClick={() => onNavigate('restaurants')}>
          Order Now
        </CyberButton>
        <CyberButton variant="secondary" fullWidth onClick={() => onNavigate('coupons')}>
          <Ticket className="w-4 h-4 inline mr-2" />
          View Coupons
        </CyberButton>
      </div>

      {/* Quick Stats - Mobile Optimized */}
      <div className="px-4 mt-6 grid grid-cols-3 gap-2.5">
        {[
          { label: 'Vendors', value: '15+', color: 'var(--neon-magenta)' },
          { label: 'Dishes', value: '100+', color: 'var(--neon-cyan)' },
          { label: 'Active', value: 'Live', color: 'var(--neon-lime)' }
        ].map((stat, index) => (
          <GlowCard key={index} glowColor={stat.color}>
            <div className="text-center py-1">
              <div className="font-['JetBrains_Mono'] text-lg mb-0.5 leading-none" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-400 leading-tight">{stat.label}</div>
            </div>
          </GlowCard>
        ))}
      </div>
      
      {/* Voice Assistant Button - Mobile Optimized */}
      <div className="fixed bottom-20 right-4 z-40">
        <VoiceButton onClick={() => setIsVoiceOpen(true)} />
      </div>
      
      {/* Voice Modal */}
      <VoiceModal isOpen={isVoiceOpen} onClose={() => setIsVoiceOpen(false)} />
    </div>
  );
}