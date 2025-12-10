import React from 'react';
import { CyberButton } from '../CyberButton';
import { FilterChip } from '../FilterChip';
import { CouponCard } from '../CouponCard';
import { RestaurantCard } from '../RestaurantCard';
import { ProgressBar } from '../ProgressBar';
import { GlowCard } from '../GlowCard';
import { VoiceButton } from '../VoiceButton';
import { FoodTrendCard } from '../FoodTrendCard';
import { CrowdStatusIndicator } from '../CrowdStatusIndicator';
import { ShareButton } from '../ShareButton';
import { LoadingRing } from '../LoadingRing';
import { SoundtrackToggle } from '../SoundtrackToggle';
import { ArrowLeft } from 'lucide-react';

interface ComponentLibraryProps {
  onBack: () => void;
}

export function ComponentLibrary({ onBack }: ComponentLibraryProps) {
  return (
    <div className="min-h-screen bg-[var(--dark-bg)] pb-20">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={onBack} className="text-[var(--neon-cyan)]">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] text-xl">
            Component Library
          </h1>
        </div>
        <p className="text-gray-400 text-sm">Cyberpunk Design System</p>
      </div>

      <div className="p-6 space-y-8">
        {/* Buttons */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Buttons
          </h2>
          <div className="space-y-3">
            <CyberButton variant="primary">Primary Button</CyberButton>
            <CyberButton variant="secondary">Secondary Button</CyberButton>
            <CyberButton variant="glowing">Glowing Button</CyberButton>
          </div>
        </section>

        {/* Filter Chips */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Filter Chips
          </h2>
          <div className="flex gap-2 flex-wrap">
            <FilterChip label="All" active />
            <FilterChip label="Drinks" />
            <FilterChip label="Snacks" />
            <FilterChip label="Meals" />
          </div>
        </section>

        {/* Coupon Cards */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Coupon Cards
          </h2>
          <div className="space-y-3">
            <CouponCard
              code="CYBER100"
              discount="100"
              description="Flat ₹100 off on orders above ₹500"
              type="flat"
              color="var(--neon-lime)"
            />
            <CouponCard
              code="NEON20"
              discount="20"
              description="20% off on all menu items"
              type="percentage"
              color="var(--neon-cyan)"
            />
          </div>
        </section>

        {/* Restaurant Cards */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Restaurant Cards
          </h2>
          <RestaurantCard
            name="Neon Noodles"
            tagline="Authentic Asian fusion"
            rating={5}
            image="https://images.unsplash.com/photo-1759072083030-cb1499d9bb18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcmFtZW4lMjBib3dsfGVufDF8fHx8MTc2MjUwOTM1NHww&ixlib=rb-4.1.0&q=80&w=1080"
          />
        </section>

        {/* Progress Bar */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Progress Bar
          </h2>
          <ProgressBar
            currentStep={2}
            steps={['Order', 'Preparing', 'Delivery', 'Done']}
          />
        </section>

        {/* Glow Cards */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Glow Cards
          </h2>
          <div className="space-y-3">
            <GlowCard glowColor="var(--neon-cyan)">
              <p className="text-white">Cyan Glow Card</p>
            </GlowCard>
            <GlowCard glowColor="var(--neon-magenta)">
              <p className="text-white">Magenta Glow Card</p>
            </GlowCard>
            <GlowCard glowColor="var(--neon-lime)">
              <p className="text-white">Lime Glow Card</p>
            </GlowCard>
          </div>
        </section>

        {/* NEW COMPONENTS - Voice & Interactive */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] mb-4">
            🎤 Voice & Interactive
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-2">Voice Button</p>
              <div className="flex gap-4">
                <VoiceButton isActive={false} />
                <VoiceButton isActive={true} />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Crowd Status Indicators</p>
              <div className="space-y-2">
                <CrowdStatusIndicator level="low" count={20} />
                <CrowdStatusIndicator level="moderate" count={12} />
                <CrowdStatusIndicator level="high" count={5} />
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Loading Ring</p>
              <LoadingRing size={60} color="var(--neon-cyan)" />
            </div>
          </div>
        </section>

        {/* Food Trend Cards */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] mb-4">
            🔥 Food Trend Cards
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <FoodTrendCard
              name="Neon Noodles"
              price={299}
              image="https://images.unsplash.com/photo-1759072083030-cb1499d9bb18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcmFtZW4lMjBib3dsfGVufDF8fHx8MTc2MjUwOTM1NHww&ixlib=rb-4.1.0&q=80&w=1080"
              trending={true}
            />
            <FoodTrendCard
              name="Cyber Burger"
              price={249}
              image="https://images.unsplash.com/photo-1671455626332-4f25dc5c7dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwYnVyZ2VyfGVufDF8fHx8MTc2MjUwOTM1NXww&ixlib=rb-4.1.0&q=80&w=1080"
              trending={true}
            />
          </div>
        </section>

        {/* Share Button */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] mb-4">
            ✨ Share Button
          </h2>
          <ShareButton />
        </section>

        {/* Soundtrack Toggle */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] mb-4">
            🎵 Soundtrack Toggle
          </h2>
          <SoundtrackToggle />
        </section>

        {/* Typography */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Typography
          </h2>
          <div className="space-y-4">
            <div>
              <div className="font-['JetBrains_Mono'] text-2xl text-[var(--neon-magenta)] mb-2">
                JetBrains Mono
              </div>
              <p className="text-sm text-gray-400">Used for headings and technical text</p>
            </div>
            <div>
              <div className="font-['Inter'] text-white mb-2">
                Inter Regular
              </div>
              <p className="text-sm text-gray-400">Used for body text and content</p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Color Palette
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Dark BG', var: '--dark-bg', value: '#0a0a0f' },
              { name: 'Dark Navy', var: '--dark-navy', value: '#0f0f1e' },
              { name: 'Neon Pink', var: '--neon-pink', value: '#ff006e' },
              { name: 'Neon Magenta', var: '--neon-magenta', value: '#f72585' },
              { name: 'Neon Cyan', var: '--neon-cyan', value: '#00f5ff' },
              { name: 'Neon Blue', var: '--neon-blue', value: '#3a86ff' },
              { name: 'Neon Lime', var: '--neon-lime', value: '#ccff00' },
              { name: 'Neon Purple', var: '--neon-purple', value: '#b000ff' }
            ].map((color) => (
              <div key={color.name} className="bg-[var(--dark-navy)] rounded-lg p-3 border border-white/10">
                <div
                  className="w-full h-12 rounded mb-2 border border-white/20"
                  style={{ backgroundColor: `var(${color.var})` }}
                />
                <div className="text-xs text-white font-['JetBrains_Mono'] mb-1">
                  {color.name}
                </div>
                <div className="text-xs text-gray-500">{color.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Tokens */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Design Tokens
          </h2>
          <GlowCard glowColor="var(--neon-purple)">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Border Radius</span>
                <span className="text-white font-['JetBrains_Mono']">8px</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Grid Spacing</span>
                <span className="text-white font-['JetBrains_Mono']">4pt base</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Glow Shadow</span>
                <span className="text-white font-['JetBrains_Mono']">8px active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Card Stroke</span>
                <span className="text-white font-['JetBrains_Mono']">1px inner</span>
              </div>
            </div>
          </GlowCard>
        </section>
      </div>
    </div>
  );
}
