import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lime' | 'magenta' | 'cyan' | 'neutral';
  pulse?: boolean;
  className?: string;
  size?: 'sm' | 'md';
}

export function Badge({
  children,
  variant = 'lime',
  pulse = true,
  className,
  size = 'md',
}: BadgeProps) {
  const variantStyles = {
    lime: 'border-lime/40 bg-lime/10 text-lime',
    magenta: 'border-magenta/40 bg-magenta/10 text-magenta',
    cyan: 'border-cyan/40 bg-cyan/10 text-cyan',
    neutral: 'border-white/20 bg-white/5 text-bone',
  };

  const pulseColors = {
    lime: 'bg-lime shadow-[0_0_8px_#CCFF00]',
    magenta: 'bg-magenta shadow-[0_0_8px_#FF007F]',
    cyan: 'bg-cyan shadow-[0_0_8px_#00F0FF]',
    neutral: 'bg-white shadow-[0_0_8px_#ffffff]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono uppercase tracking-widest border transition-all duration-300 backdrop-blur-md select-none',
        size === 'sm' ? 'px-2.5 py-0.5 text-[11px] rounded-sm' : 'px-3.5 py-1.5 text-xs rounded-full',
        variantStyles[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              pulseColors[variant]
            )}
          />
          <span
            className={cn(
              'relative inline-flex rounded-full h-2 w-2',
              pulseColors[variant]
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}
