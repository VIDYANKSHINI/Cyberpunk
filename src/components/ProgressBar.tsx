import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  steps: string[];
}

export function ProgressBar({ currentStep, steps }: ProgressBarProps) {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-700">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-magenta)]"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
            style={{
              boxShadow: '0 0 8px var(--neon-cyan)'
            }}
          />
        </div>
        
        {/* Steps */}
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center gap-2 relative z-10">
            <motion.div
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                index <= currentStep
                  ? 'bg-[var(--neon-cyan)] border-[var(--neon-cyan)] text-[var(--dark-bg)]'
                  : 'bg-[var(--dark-navy)] border-gray-600 text-gray-500'
              }`}
              initial={false}
              animate={
                index <= currentStep
                  ? {
                      boxShadow: '0 0 16px var(--neon-cyan)',
                      scale: [1, 1.1, 1]
                    }
                  : {}
              }
              transition={{ duration: 0.3 }}
            >
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="font-['JetBrains_Mono']">{index + 1}</span>
              )}
            </motion.div>
            <span className="text-xs text-center text-gray-400 max-w-[60px]">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
