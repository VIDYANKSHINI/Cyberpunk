import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export function GlowCard({ 
  children, 
  className = '', 
  glowColor = 'var(--neon-cyan)',
  onClick 
}: GlowCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-[var(--dark-navy)] rounded-lg p-3 border-[1px] border-white/10 ${className}`}
      style={{
        boxShadow: `inset 0 0 1px rgba(255,255,255,0.1), 0 0 8px ${glowColor}20`
      }}
    >
      {children}
    </div>
  );
}