import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FilterChip } from '../FilterChip';
import { RestaurantCard } from '../RestaurantCard';
import { ArrowLeft, Search } from 'lucide-react';

interface RestaurantListProps {
  onNavigate: (screen: string, restaurantId?: number) => void;
  onBack: () => void;
}

export function RestaurantList({ onNavigate, onBack }: RestaurantListProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Drinks', 'Snacks', 'Meals', 'Desserts'];
  
  const restaurants = [
    {
      id: 1,
      name: 'Neon Noodles',
      tagline: 'Authentic Asian fusion with a cyberpunk twist',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1759072083030-cb1499d9bb18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcmFtZW4lMjBib3dsfGVufDF8fHx8MTc2MjUwOTM1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Meals'
    },
    {
      id: 2,
      name: 'Cyber Burger Bar',
      tagline: 'Burgers from the future',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1671455626332-4f25dc5c7dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwYnVyZ2VyfGVufDF8fHx8MTc2MjUwOTM1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Meals'
    },
    {
      id: 3,
      name: 'Electric Elixirs',
      tagline: 'Neon cocktails & energy drinks',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1639512763451-27d850252403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwZHJpbmslMjBjb2NrdGFpbHxlbnwxfHx8fDE3NjI1MDkzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Drinks'
    },
    {
      id: 4,
      name: 'Digital Desserts',
      tagline: 'Sweet treats with glowing aesthetics',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1650290147009-bfc3ccccc396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwZGVzc2VydHxlbnwxfHx8fDE3NjI1MDkzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Desserts'
    },
    {
      id: 5,
      name: 'Pixel Snacks',
      tagline: 'Quick bites for gamers',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1605727548143-7095d16b5b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY3liZXJwdW5rJTIwZm9vZHxlbnwxfHx8fDE3NjI1MDkzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Snacks'
    }
  ];
  
  const filteredRestaurants = activeFilter === 'All' 
    ? restaurants 
    : restaurants.filter(r => r.category === activeFilter);

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] pb-20 overflow-y-auto">
      {/* Header - Mobile Optimized */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-3 mb-3">
          <button onClick={onBack} className="text-[var(--neon-cyan)] flex-shrink-0">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] text-lg leading-tight">
            Restaurants
          </h1>
        </div>
        
        {/* Search Bar - Mobile Optimized */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search vendors..."
            className="w-full bg-[var(--dark-navy)] border border-white/10 rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-500 focus:border-[var(--neon-cyan)] focus:outline-none focus:shadow-[0_0_16px_rgba(0,245,255,0.4)] transition-all duration-300"
          />
        </motion.div>
      </div>

      {/* Filters - Mobile Optimized */}
      <div className="px-4 py-3 border-b border-white/10">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
          {filters.map((filter) => (
            <FilterChip
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="p-6 space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filteredRestaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <RestaurantCard
                {...restaurant}
                onClick={() => onNavigate('restaurant-details', restaurant.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}