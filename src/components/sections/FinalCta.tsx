'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { Badge } from '../ui/Badge';
import confetti from 'canvas-confetti';
import { KineticSphere3D } from '../ui/KineticSphere3D';

export function FinalCta() {
  const handleLaunch = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.7 },
      colors: ['#CCFF00', '#FF007F', '#00F0FF', '#FFFFFF'],
    });
  };

  return (
    <section className="relative py-32 md:py-44 bg-void overflow-hidden border-b border-white/10 flex flex-col items-center justify-center">
      {/* Background Cyber Grid & Radiant Mesh */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-lime/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-magenta/12 rounded-full blur-[140px] pointer-events-none" />

      {/* Bookending 3D Kinetic Canvas */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none z-0">
        <KineticSphere3D className="w-[700px] h-[700px] max-w-full" theme="lime" speed={0.9} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <Badge variant="lime" pulse>
          THE ESCAPE-VELOCITY INVITATION
        </Badge>

        <h2 className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-bone leading-[0.92]">
          STOP SETTLING FOR{' '}
          <span className="text-transparent text-stroke-lime">CLOUD</span>{' '}
          <span className="text-lime underline decoration-lime/50 underline-offset-8">
            SLOW-MOTION.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-base sm:text-xl text-muted font-sans font-medium leading-relaxed">
          Switch to autonomous, sub-5ms compute. Cut your infrastructure invoice by up to 80% with
          zero code refactoring.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <MagneticButton
            variant="primary"
            size="xl"
            onClick={handleLaunch}
            cursorLabel="LAUNCH"
            className="shadow-[0_0_50px_rgba(204,255,0,0.5)]"
          >
            <span>LAUNCH ENGINE NOW</span>
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            size="xl"
            cursorLabel="TALK"
            onClick={() => {
              window.location.href = 'mailto:founders@kinetix.ai';
            }}
          >
            <Terminal className="w-5 h-5 text-lime" />
            <span>TALK TO ARCHITECT</span>
          </MagneticButton>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-muted">
          <span className="flex items-center gap-1.5 text-lime">
            <Zap className="w-4 h-4" /> ZERO CONTRACT COMMITMENTS
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5 text-bone">
            <ShieldCheck className="w-4 h-4 text-cyan" /> 99.999% SLA UPTIME
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5 text-magenta">
            <Sparkles className="w-4 h-4" /> 14-DAY FULL SCALE TRIAL
          </span>
        </div>
      </div>
    </section>
  );
}
