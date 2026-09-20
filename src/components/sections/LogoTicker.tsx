'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Flame, Layers, ShieldCheck, Terminal, Zap, Globe, Server } from 'lucide-react';

export function LogoTicker() {
  const logos = [
    { name: 'NEURALSCALE', icon: Cpu, accent: 'hover:text-lime hover:border-lime/60' },
    { name: 'SYNTHETIX', icon: Flame, accent: 'hover:text-magenta hover:border-magenta/60' },
    { name: 'QUANTUM.OS', icon: Zap, accent: 'hover:text-cyan hover:border-cyan/60' },
    { name: 'HYPERSTACK', icon: Layers, accent: 'hover:text-lime hover:border-lime/60' },
    { name: 'CYBERSHIELD', icon: ShieldCheck, accent: 'hover:text-magenta hover:border-magenta/60' },
    { name: 'CORE_ENGINE', icon: Terminal, accent: 'hover:text-cyan hover:border-cyan/60' },
    { name: 'VORTEX_AI', icon: Globe, accent: 'hover:text-lime hover:border-lime/60' },
    { name: 'TERAGRID', icon: Server, accent: 'hover:text-magenta hover:border-magenta/60' },
  ];

  return (
    <section className="relative py-12 bg-obsidian-dark border-y border-white/10 overflow-hidden select-none">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-cyber-dots opacity-20 pointer-events-none" />

      {/* Header Label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
          <span className="font-mono text-xs text-muted uppercase tracking-widest font-semibold">
            POWERING 2,400+ HIGH-THROUGHPUT ENGINEERING TEAMS GLOBALLY
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-muted-dark">
          <span>99.999% FLEET UPTIME</span>
          <span>•</span>
          <span className="text-lime">ZERO OUTAGES IN 2025</span>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex items-center group">
        {/* Left & Right Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-obsidian-dark to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-obsidian-dark to-transparent" />

        {/* Double Track for Seamless Loop */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap min-w-full">
          {[...logos, ...logos, ...logos].map((logo, index) => {
            const IconComponent = logo.icon;
            return (
              <div
                key={index}
                data-cursor-text={logo.name}
                className={`mx-3 sm:mx-6 px-6 py-3.5 rounded-xl border border-white/10 bg-surface/40 backdrop-blur-md flex items-center gap-3 transition-all duration-300 opacity-50 hover:opacity-100 hover:scale-105 hover:bg-surface-elevated cursor-pointer group/logo ${logo.accent}`}
              >
                <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover/logo:rotate-6" />
                <span className="font-display font-black text-sm tracking-wider text-bone group-hover/logo:text-current">
                  {logo.name}
                </span>
                <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase">
                  ENTERPRISE
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
