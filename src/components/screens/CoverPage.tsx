import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import { CyberButton } from '../CyberButton';

interface CoverPageProps {
  onEnter: () => void;
  onNavigate?: (screen: string) => void;
}

export function CoverPage({ onEnter, onNavigate }: CoverPageProps) {
  return (
    <div className="min-h-screen bg-[var(--dark-bg)] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center w-full max-w-[343px]"
      >
        {/* Logo */}
        <motion.div
          className="mb-6 flex justify-center"
          animate={{
            textShadow: [
              '0 0 20px var(--neon-magenta)',
              '0 0 40px var(--neon-cyan)',
              '0 0 20px var(--neon-magenta)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Zap className="w-16 h-16 text-[var(--neon-magenta)]" />
        </motion.div>
        
        <h1 className="font-['JetBrains_Mono'] text-3xl mb-1.5 text-white leading-tight">
          <span className="text-[var(--neon-magenta)]">Cyberpunk</span>
        </h1>
        <h2 className="font-['JetBrains_Mono'] text-xl mb-3 text-[var(--neon-cyan)] leading-tight">
          Food Festival
        </h2>
        
        <p className="text-gray-400 text-sm mb-6 leading-tight px-4">
          IIIT-B's Neon-Themed Digital Ordering Platform
        </p>
        
        {/* Color Palette */}
        <div className="flex gap-2.5 justify-center mb-6">
          {[
            { color: 'var(--neon-magenta)', name: 'Magenta' },
            { color: 'var(--neon-cyan)', name: 'Cyan' },
            { color: 'var(--neon-blue)', name: 'Blue' },
            { color: 'var(--neon-lime)', name: 'Lime' }
          ].map((swatch) => (
            <motion.div
              key={swatch.name}
              className="flex flex-col items-center gap-1.5"
              whileHover={{ scale: 1.1 }}
            >
              <div
                className="w-10 h-10 rounded-lg border border-white/20"
                style={{
                  backgroundColor: swatch.color,
                  boxShadow: `0 0 12px ${swatch.color}`
                }}
              />
              <span className="text-[10px] text-gray-500 leading-none">{swatch.name}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Typography Tiles */}
        <div className="mb-8 p-4 bg-[var(--dark-navy)]/50 rounded-lg border border-white/10">
          <div className="mb-3">
            <div className="font-['JetBrains_Mono'] text-sm text-[var(--neon-cyan)] mb-0.5 leading-tight">
              JetBrains Mono
            </div>
            <div className="text-[10px] text-gray-500 leading-tight">Headings & Tech Text</div>
          </div>
          <div>
            <div className="font-['Inter'] text-sm text-white mb-0.5 leading-tight">
              Inter Regular
            </div>
            <div className="text-[10px] text-gray-500 leading-tight">Body & Content</div>
          </div>
        </div>
        
        <div className="space-y-2.5">
          <CyberButton variant="glowing" fullWidth onClick={onEnter}>
            Enter Festival
          </CyberButton>
          
          {onNavigate && (
            <div className="grid grid-cols-2 gap-2">
              <CyberButton variant="secondary" onClick={() => onNavigate('components')}>
                Components
              </CyberButton>
              <CyberButton variant="secondary" onClick={() => onNavigate('handoff')}>
                Handoff
              </CyberButton>
            </div>
          )}
        </div>
        
        <div className="mt-6 text-[10px] text-gray-600 leading-tight space-y-0.5">
          <p>Grid Spacing: 4pt Base • Border Radius: 8px</p>
          <p>Glow Shadow: 8px Active Elements</p>
        </div>
      </motion.div>
    </div>
  );
}