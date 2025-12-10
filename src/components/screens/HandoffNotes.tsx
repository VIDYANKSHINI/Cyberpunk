import React from 'react';
import { GlowCard } from '../GlowCard';
import { ArrowLeft, Copy } from 'lucide-react';

interface HandoffNotesProps {
  onBack: () => void;
}

export function HandoffNotes({ onBack }: HandoffNotesProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] pb-20">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-4 mb-2">
          <button onClick={onBack} className="text-[var(--neon-cyan)]">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="font-['JetBrains_Mono'] text-[var(--neon-magenta)] text-xl">
            Handoff Notes
          </h1>
        </div>
        <p className="text-gray-400 text-sm">Design specifications & tokens</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Color Tokens */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Color Tokens (CSS Variables)
          </h2>
          <GlowCard glowColor="var(--neon-cyan)">
            <div className="space-y-3">
              {[
                { token: '--dark-bg', value: '#0a0a0f', description: 'Main background' },
                { token: '--dark-navy', value: '#0f0f1e', description: 'Card background' },
                { token: '--neon-pink', value: '#ff006e', description: 'Accent pink' },
                { token: '--neon-magenta', value: '#f72585', description: 'Primary magenta' },
                { token: '--neon-cyan', value: '#00f5ff', description: 'Primary cyan' },
                { token: '--neon-blue', value: '#3a86ff', description: 'Electric blue' },
                { token: '--neon-lime', value: '#ccff00', description: 'Accent lime' },
                { token: '--neon-purple', value: '#b000ff', description: 'Accent purple' }
              ].map((color) => (
                <div key={color.token} className="flex items-start justify-between gap-3 p-3 bg-[var(--dark-bg)] rounded border border-white/10">
                  <div className="flex-1 min-w-0">
                    <div className="font-['JetBrains_Mono'] text-sm text-white mb-1">
                      {color.token}
                    </div>
                    <div className="text-xs text-gray-400 mb-1">{color.description}</div>
                    <div className="text-xs text-gray-500">{color.value}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded border border-white/20 flex-shrink-0"
                      style={{ backgroundColor: color.value }}
                    />
                    <button
                      onClick={() => copyToClipboard(color.token)}
                      className="p-1 text-[var(--neon-cyan)] hover:text-[var(--neon-magenta)]"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>
        </section>

        {/* Typography */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Typography
          </h2>
          <GlowCard glowColor="var(--neon-magenta)">
            <div className="space-y-4">
              <div>
                <div className="font-['JetBrains_Mono'] text-white mb-2">
                  JetBrains Mono
                </div>
                <div className="text-sm text-gray-400 mb-2">
                  Headings, buttons, technical text
                </div>
                <div className="bg-[var(--dark-bg)] p-2 rounded border border-white/10">
                  <code className="text-xs text-[var(--neon-cyan)]">
                    font-family: 'JetBrains Mono', monospace;
                  </code>
                </div>
              </div>
              
              <div>
                <div className="font-['Inter'] text-white mb-2">
                  Inter
                </div>
                <div className="text-sm text-gray-400 mb-2">
                  Body text, paragraphs, descriptions
                </div>
                <div className="bg-[var(--dark-bg)] p-2 rounded border border-white/10">
                  <code className="text-xs text-[var(--neon-cyan)]">
                    font-family: 'Inter', sans-serif;
                  </code>
                </div>
              </div>
            </div>
          </GlowCard>
        </section>

        {/* Spacing System */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Spacing System
          </h2>
          <GlowCard glowColor="var(--neon-lime)">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Base Unit</span>
                <span className="font-['JetBrains_Mono'] text-white">4pt (4px)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Border Radius</span>
                <span className="font-['JetBrains_Mono'] text-white">8px (2 × base)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Card Padding</span>
                <span className="font-['JetBrains_Mono'] text-white">16px (4 × base)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Section Gap</span>
                <span className="font-['JetBrains_Mono'] text-white">24px (6 × base)</span>
              </div>
            </div>
          </GlowCard>
        </section>

        {/* Effects & Shadows */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Effects & Shadows
          </h2>
          <GlowCard glowColor="var(--neon-purple)">
            <div className="space-y-4">
              <div>
                <div className="text-white mb-2">Active Element Glow</div>
                <div className="bg-[var(--dark-bg)] p-2 rounded border border-white/10">
                  <code className="text-xs text-[var(--neon-cyan)]">
                    box-shadow: 0 0 8px rgba(color, 0.5);
                  </code>
                </div>
              </div>
              
              <div>
                <div className="text-white mb-2">Strong Glow (Glowing Buttons)</div>
                <div className="bg-[var(--dark-bg)] p-2 rounded border border-white/10">
                  <code className="text-xs text-[var(--neon-cyan)]">
                    box-shadow: 0 0 16px rgba(color, 0.8);
                  </code>
                </div>
              </div>
              
              <div>
                <div className="text-white mb-2">Card Inner Stroke</div>
                <div className="bg-[var(--dark-bg)] p-2 rounded border border-white/10">
                  <code className="text-xs text-[var(--neon-cyan)]">
                    box-shadow: inset 0 0 1px rgba(255,255,255,0.1);
                  </code>
                </div>
              </div>
              
              <div>
                <div className="text-white mb-2">Card Border</div>
                <div className="bg-[var(--dark-bg)] p-2 rounded border border-white/10">
                  <code className="text-xs text-[var(--neon-cyan)]">
                    border: 1px solid rgba(255,255,255,0.1);
                  </code>
                </div>
              </div>
            </div>
          </GlowCard>
        </section>

        {/* Component Specs */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Component Specifications
          </h2>
          <div className="space-y-3">
            <GlowCard glowColor="var(--neon-cyan)">
              <div className="font-['JetBrains_Mono'] text-white mb-2">Button</div>
              <div className="text-sm text-gray-400 space-y-1">
                <div>• Padding: 12px 24px (3 × base, 6 × base)</div>
                <div>• Border radius: 8px</div>
                <div>• Border: 1px solid (matching color)</div>
                <div>• Font: JetBrains Mono</div>
              </div>
            </GlowCard>
            
            <GlowCard glowColor="var(--neon-magenta)">
              <div className="font-['JetBrains_Mono'] text-white mb-2">Filter Chip</div>
              <div className="text-sm text-gray-400 space-y-1">
                <div>• Padding: 8px 16px (2 × base, 4 × base)</div>
                <div>• Border radius: 8px</div>
                <div>• Active: filled with neon cyan</div>
                <div>• Inactive: transparent with border</div>
              </div>
            </GlowCard>
            
            <GlowCard glowColor="var(--neon-lime)">
              <div className="font-['JetBrains_Mono'] text-white mb-2">GlowCard</div>
              <div className="text-sm text-gray-400 space-y-1">
                <div>• Background: var(--dark-navy)</div>
                <div>• Padding: 16px (4 × base)</div>
                <div>• Border: 1px solid rgba(255,255,255,0.1)</div>
                <div>• Inner shadow + outer glow</div>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Animation Guidelines */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Animation Guidelines
          </h2>
          <GlowCard glowColor="var(--neon-blue)">
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-white mb-1">Transitions</div>
                <div className="text-gray-400">Duration: 300ms • Easing: ease-in-out</div>
              </div>
              <div>
                <div className="text-white mb-1">Hover Scale</div>
                <div className="text-gray-400">transform: scale(1.02)</div>
              </div>
              <div>
                <div className="text-white mb-1">Tap Scale</div>
                <div className="text-gray-400">transform: scale(0.95)</div>
              </div>
              <div>
                <div className="text-white mb-1">Screen Transitions</div>
                <div className="text-gray-400">Fade + Slide • Duration: 300ms</div>
              </div>
            </div>
          </GlowCard>
        </section>

        {/* Implementation Notes */}
        <section>
          <h2 className="font-['JetBrains_Mono'] text-[var(--neon-cyan)] mb-4">
            Implementation Notes
          </h2>
          <GlowCard glowColor="var(--neon-pink)">
            <div className="space-y-2 text-sm text-gray-400">
              <div>✓ Mobile-first responsive design (max-width: 448px)</div>
              <div>✓ All colors using CSS custom properties</div>
              <div>✓ Consistent 4pt spacing system</div>
              <div>✓ Motion/React for animations (Framer Motion compatible)</div>
              <div>✓ Google Fonts for typography</div>
              <div>✓ All images from Unsplash API</div>
              <div>✓ Dark theme only (cyberpunk aesthetic)</div>
            </div>
          </GlowCard>
        </section>
      </div>
    </div>
  );
}
