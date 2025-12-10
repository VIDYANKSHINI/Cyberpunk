import React from 'react';
import { motion } from 'motion/react';
import { GlowCard } from '../GlowCard';
import { CrowdStatusIndicator } from '../CrowdStatusIndicator';
import { CyberButton } from '../CyberButton';
import { ArrowLeft, MapPin, Sparkles } from 'lucide-react';

interface FindSeatScreenProps {
  onBack: () => void;
  onNavigate: (screen: string) => void;
}

export function FindSeatScreen({ onBack, onNavigate }: FindSeatScreenProps) {
  const zones = [
    { 
      id: 1, 
      name: 'Main Canteen', 
      crowd: 'high' as const, 
      seats: 5,
      position: { top: '30%', left: '20%' }
    },
    { 
      id: 2, 
      name: 'Garden Lawn', 
      crowd: 'low' as const, 
      seats: 35,
      position: { top: '45%', left: '60%' }
    },
    { 
      id: 3, 
      name: 'Amphitheater', 
      crowd: 'low' as const, 
      seats: 20,
      position: { top: '65%', left: '30%' },
      recommended: true
    },
    { 
      id: 4, 
      name: 'Study Area', 
      crowd: 'moderate' as const, 
      seats: 12,
      position: { top: '25%', left: '70%' }
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] pb-20">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-[var(--neon-cyan)]">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] text-xl">
              Find a Seat
            </h1>
            <p className="text-gray-400 text-sm">IIIT-B Campus Zones</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* AI Suggestion */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <GlowCard glowColor="var(--neon-lime)">
            <div className="flex items-start gap-3">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-[var(--neon-lime)]" />
              </motion.div>
              <div>
                <div className="font-['JetBrains_Mono'] text-[var(--neon-lime)] mb-1">
                  AI Suggestion
                </div>
                <p className="text-white text-sm">
                  Try <span className="text-[var(--neon-cyan)]">Amphitheater</span> – 20 seats free with great vibes! 🌟
                </p>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        {/* Campus Map */}
        <div className="mb-6">
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Campus Map
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-[var(--dark-navy)] rounded-lg border border-white/10 overflow-hidden"
            style={{
              height: '400px',
              backgroundImage: 'linear-gradient(var(--neon-cyan)/5 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan)/5 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          >
            {/* Map zones */}
            {zones.map((zone, index) => (
              <motion.div
                key={zone.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="absolute"
                style={zone.position}
              >
                {/* Pulsing glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    width: '80px',
                    height: '80px',
                    marginLeft: '-40px',
                    marginTop: '-40px',
                    border: zone.crowd === 'low' 
                      ? '3px solid #00ff9f' 
                      : zone.crowd === 'moderate' 
                      ? '3px solid #ffa500' 
                      : '3px solid #ff006e'
                  }}
                  animate={{
                    scale: [1, 1.3, 1.3],
                    opacity: [0.6, 0, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
                
                {/* Zone marker */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-16 h-16 -ml-8 -mt-8 rounded-full cursor-pointer flex items-center justify-center"
                  style={{
                    background: zone.crowd === 'low' 
                      ? 'rgba(0, 255, 159, 0.3)' 
                      : zone.crowd === 'moderate' 
                      ? 'rgba(255, 165, 0, 0.3)' 
                      : 'rgba(255, 0, 110, 0.3)',
                    border: zone.crowd === 'low' 
                      ? '2px solid #00ff9f' 
                      : zone.crowd === 'moderate' 
                      ? '2px solid #ffa500' 
                      : '2px solid #ff006e',
                    boxShadow: zone.crowd === 'low' 
                      ? '0 0 20px rgba(0, 255, 159, 0.6)' 
                      : zone.crowd === 'moderate' 
                      ? '0 0 20px rgba(255, 165, 0, 0.6)' 
                      : '0 0 20px rgba(255, 0, 110, 0.6)'
                  }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </motion.div>
                
                {/* Recommended badge */}
                {zone.recommended && (
                  <motion.div
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[var(--neon-lime)] text-[var(--dark-bg)] px-2 py-1 rounded-full text-xs font-['JetBrains_Mono']"
                  >
                    ⭐ Best Pick
                  </motion.div>
                )}
              </motion.div>
            ))}
            
            {/* Map legend */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-[#00ff9f]" />
                  <span className="text-white">Low</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-[#ffa500]" />
                  <span className="text-white">Moderate</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-[#ff006e]" />
                  <span className="text-white">Full</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Zone List */}
        <div className="space-y-3 mb-6">
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)]">
            All Zones
          </h2>
          
          {zones.map((zone, index) => (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <GlowCard 
                glowColor={
                  zone.crowd === 'low' ? '#00ff9f' : 
                  zone.crowd === 'moderate' ? '#ffa500' : 
                  '#ff006e'
                }
                className={zone.recommended ? 'border-[var(--neon-lime)]' : ''}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="font-['JetBrains_Mono'] text-white">
                        {zone.name}
                      </div>
                      {zone.recommended && (
                        <span className="text-xs bg-[var(--neon-lime)] text-[var(--dark-bg)] px-2 py-0.5 rounded-full">
                          Recommended
                        </span>
                      )}
                    </div>
                    <CrowdStatusIndicator level={zone.crowd} count={zone.seats} />
                  </div>
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <CyberButton variant="glowing" fullWidth onClick={onBack}>
          Got It!
        </CyberButton>
      </div>
    </div>
  );
}
