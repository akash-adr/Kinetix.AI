'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DownloadCloud, GitBranch, Cpu, Rocket, Check, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    {
      num: '01',
      title: 'DROP-IN BINARY REPLACEMENT',
      desc: 'Swap bloated cloud provider SDKs with the single Kinetix client. No infrastructure rewrites, no YAML orchestration, no terraform debt.',
      metric: 'DEPLOY IN 45 SECONDS',
      icon: DownloadCloud,
      color: 'border-lime text-lime bg-lime/10',
      badgeVariant: 'lime' as const,
    },
    {
      num: '02',
      title: 'AUTONOMOUS TOPOLOGY COMPILATION',
      desc: 'Our distributed compiler analyzes your execution call graphs and automatically partitions work across 4,096 globally distributed GPU/CPU edge shards.',
      metric: 'ZERO MANUAL ROUTING',
      icon: GitBranch,
      color: 'border-cyan text-cyan bg-cyan/10',
      badgeVariant: 'cyan' as const,
    },
    {
      num: '03',
      title: 'PREDICTIVE JIT PRE-WARMING',
      desc: 'Machine learning pipelines anticipate incoming traffic spikes 12 seconds in advance, ensuring zero cold starts and deterministic sub-4ms execution.',
      metric: 'SUB-4MS EXECUTION',
      icon: Cpu,
      color: 'border-magenta text-magenta bg-magenta/10',
      badgeVariant: 'magenta' as const,
    },
    {
      num: '04',
      title: 'SCALE TO INFINITY OR VACUUM TO ZERO',
      desc: 'Seamlessly absorb viral surges of 2M concurrent requests without dropping a packet, then automatically drain idle memory reservations to $0 cost.',
      metric: '$0 IDLE RUNWAY DRAIN',
      icon: Rocket,
      color: 'border-lime text-lime bg-lime/10',
      badgeVariant: 'lime' as const,
    },
  ];

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative py-28 md:py-36 bg-obsidian border-b border-white/10 overflow-hidden"
    >
      {/* Background Grids */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
          <Badge variant="lime" pulse>
            THE HYPER-VELOCITY ENGINE
          </Badge>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-bone leading-[0.94]">
            FROM LOCAL HOST TO GLOBAL MESH IN{' '}
            <span className="text-transparent text-stroke-lime">FOUR</span>{' '}
            <span className="text-lime">ATOMIC STEPS.</span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg">
            No Kubernetes certifications required. No standby instances. Just sheer computational supremacy.
          </p>
        </div>

        {/* Timeline Grid with SVG Path */}
        <div className="relative">
          {/* Animated Connecting SVG Path (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-2 pointer-events-none z-0">
            <svg className="w-full h-12 overflow-visible" preserveAspectRatio="none">
              {/* Background Dim Track */}
              <line
                x1="6%"
                y1="50%"
                x2="94%"
                y2="50%"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {/* Animated Progress Line */}
              <motion.line
                x1="6%"
                y1="50%"
                x2="94%"
                y2="50%"
                stroke="#CCFF00"
                strokeWidth="3"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* 4 Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="rounded-2xl border border-white/15 bg-obsidian-dark/95 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:border-lime/60 hover:-translate-y-2 transition-all duration-300 shadow-xl group"
                  data-cursor-text="STEP"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                      <span className="font-display font-black text-3xl sm:text-4xl text-white/30 group-hover:text-lime transition-colors">
                        {step.num}
                      </span>
                      <div className={`p-3 rounded-xl border ${step.color} transition-transform duration-300 group-hover:scale-110`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-display font-black text-lg sm:text-xl text-bone tracking-tight leading-snug">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-muted font-sans leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Step Metric Pill */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-[11px] text-lime font-bold uppercase tracking-wider">
                      {step.metric}
                    </span>
                    <Check className="w-4 h-4 text-lime" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
