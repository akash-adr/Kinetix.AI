'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on devices with fine pointer (mouse/trackpad)
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering an element with cursor text or interactive element
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('[data-cursor-text], a, button, [role="button"], input, textarea');

      if (interactiveEl) {
        setIsHovered(true);
        const text = interactiveEl.getAttribute('data-cursor-text');
        setCursorText(text || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow / Expanding Ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full text-void font-display font-black uppercase text-[10px] tracking-wider select-none mix-blend-difference"
        animate={{
          x: mousePosition.x - (cursorText ? 44 : isHovered ? 28 : 16),
          y: mousePosition.y - (cursorText ? 44 : isHovered ? 28 : 16),
          width: cursorText ? 88 : isHovered ? 56 : 32,
          height: cursorText ? 88 : isHovered ? 56 : 32,
          backgroundColor: cursorText ? '#CCFF00' : isHovered ? '#CCFF00' : 'rgba(255, 255, 255, 0.15)',
          borderColor: isHovered ? '#CCFF00' : 'rgba(255, 255, 255, 0.4)',
          scale: 1,
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 300,
          mass: 0.15,
        }}
        style={{
          borderWidth: cursorText ? 0 : 1.5,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-void px-1 text-center font-extrabold tracking-tighter"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Tiny Core Dot */}
      {!cursorText && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full bg-lime select-none shadow-[0_0_8px_#CCFF00]"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: isHovered ? 0 : 1,
          }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 450,
            mass: 0.05,
          }}
        />
      )}
    </>
  );
}
