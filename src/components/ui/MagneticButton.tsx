'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'magenta' | 'outline-magenta' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  strength?: number;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  cursorLabel?: string;
}

export function MagneticButton({
  children,
  variant = 'primary',
  size = 'md',
  strength = 0.25,
  className,
  onClick,
  cursorLabel,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const x = (e.clientX - centerX) * strength;
    const y = (e.clientY - centerY) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-semibold tracking-wider',
    md: 'px-6 py-3 text-sm font-semibold tracking-wider',
    lg: 'px-8 py-4 text-base font-bold tracking-wide',
    xl: 'px-10 py-5 text-lg font-bold tracking-tight',
  };

  const variantStyles = {
    primary:
      'bg-lime text-void hover:bg-lime-hover shadow-[0_0_30px_rgba(204,255,0,0.45)] hover:shadow-[0_0_45px_rgba(204,255,0,0.7)] border border-lime',
    secondary:
      'bg-surface/80 text-bone border border-white/20 hover:border-lime/60 hover:text-lime hover:bg-surface-elevated backdrop-blur-md shadow-lg',
    magenta:
      'bg-magenta text-bone hover:bg-magenta-hover shadow-[0_0_30px_rgba(255,0,127,0.45)] hover:shadow-[0_0_45px_rgba(255,0,127,0.7)] border border-magenta',
    'outline-magenta':
      'bg-magenta/10 text-bone border border-magenta/50 hover:bg-magenta/20 hover:border-magenta backdrop-blur-md',
    ghost:
      'bg-transparent text-muted hover:text-bone border border-transparent hover:border-white/15',
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      data-cursor-text={cursorLabel}
      className={cn(
        'relative inline-flex items-center justify-center font-display uppercase transition-colors duration-200 cursor-pointer overflow-hidden rounded-full group select-none',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...(props as any)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Glint flare animation on hover */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent ease-out" />
    </motion.button>
  );
}
