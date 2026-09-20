'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Clock, Flame, ArrowDownRight, CheckCircle2, XCircle } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { CountUp } from '../ui/CountUp';

export function ProblemAgitate() {
  const painPoints = [
    {
      legacy: 'Cold start penalties of 1,200ms+ on standard serverless containers',
      kinetix: 'Sub-4ms warm instantaneous execution across global edge nodes',
    },
    {
      legacy: 'Static provisioning paying for 24/7 idle memory reservations',
      kinetix: 'Micro-second granularity auto-allocation that drains to $0 on idle',
    },
    {
      legacy: 'Brittle multi-cloud orchestration spaghetti requiring dedicated DevOps armies',
      kinetix: 'Single autonomous binary with native self-healing and zero configs',
    },
  ];

  return (
    <section
      id="architecture"
      className="relative py-28 md:py-36 bg-void overflow-hidden border-b border-white/10"
    >
      {/* Huge Rotated Graphic Typography Device in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 left-0 right-0 overflow-hidden select-none opacity-[0.03] whitespace-nowrap -rotate-2"
      >
        <span className="font-display font-black text-[14rem] sm:text-[20rem] text-bone tracking-tighter">
          INEFFICIENCY // LATENCY // CRISIS //
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-16">
          <Badge variant="magenta" pulse>
            THE INFRASTRUCTURE BOTTLENECK
          </Badge>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-bone max-w-4xl leading-[0.96]">
            LEGACY ARCHITECTURE IS{' '}
            <span className="text-transparent text-stroke-magenta">BLEEDING</span> YOUR{' '}
            <span className="text-magenta underline decoration-magenta/50 underline-offset-8">
              RUNWAY DRY.
            </span>
          </h2>
        </div>

        {/* Asymmetric 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (Text & Problem Deep-Dive) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-lg sm:text-xl text-bone/90 font-medium leading-relaxed">
              Traditional hyperscalers were built for static monolithic web servers in 2008. In 2026,
              running agentic workflows and real-time compute on them is like driving a steam
              locomotive on a hyperloop track.
            </p>

            <p className="text-base text-muted leading-relaxed">
              You're forced to over-provision GPU and CPU quotas, swallow 1,500ms cold starts, and
              hire 4 full-time DevOps engineers just to manage Kubernetes YAML sprawl.
            </p>

            {/* Direct Contrast Comparison List */}
            <div className="mt-4 flex flex-col gap-4">
              {painPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-obsidian p-4 sm:p-5 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-start gap-3 text-sm text-red-400 font-sans mb-2.5">
                    <XCircle className="w-5 h-5 flex-shrink-0 text-magenta mt-0.5" />
                    <span className="line-through text-muted">{item.legacy}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-lime font-sans font-semibold">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-lime mt-0.5" />
                    <span className="text-bone">{item.kinetix}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Layered Asymmetric Stat Callouts with Animated Counters */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-magenta/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
              {/* Stat Card 1 (Red/Magenta Pain Stat) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-magenta/40 bg-obsidian/90 backdrop-blur-xl p-6 shadow-[0_10px_30px_rgba(255,0,127,0.15)] relative overflow-hidden"
              >
                <div className="flex items-center justify-between text-xs font-mono text-magenta mb-2">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider font-bold">
                    <AlertTriangle className="w-4 h-4" /> Compute Underutilization
                  </span>
                  <span className="text-white/40">INDUSTRY BENCHMARK</span>
                </div>
                <div className="font-display font-black text-5xl sm:text-6xl text-bone tracking-tight">
                  <CountUp to={74} suffix="%" duration={2000} />
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted">
                  Average GPU idle cycle waste on traditional container clusters before any active
                  payload arrives.
                </p>
                <div className="absolute right-0 bottom-0 translate-x-3 translate-y-3 opacity-10">
                  <TrendingDown className="w-28 h-28 text-magenta" />
                </div>
              </motion.div>

              {/* Stat Card 2 (Overlapping Off-axis Card) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="rounded-2xl border border-white/20 bg-surface/90 backdrop-blur-xl p-6 shadow-2xl relative lg:-ml-8 lg:mr-4 border-l-4 border-l-amber-400"
              >
                <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider font-bold">
                    <Clock className="w-4 h-4" /> Annual Runway Bleed
                  </span>
                  <span className="text-white/40">SERIES B-D TEAMS</span>
                </div>
                <div className="font-display font-black text-5xl sm:text-6xl text-bone tracking-tight">
                  <CountUp to={2.4} prefix="$" suffix="M" decimals={1} duration={2200} />
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted">
                  Capital burned on redundant standby nodes and egress markups before migrating to
                  Kinetix.
                </p>
              </motion.div>

              {/* Stat Card 3 (Lime High-Voltage Victory Stat) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl border border-lime/50 bg-obsidian/90 backdrop-blur-xl p-6 shadow-[0_10px_35px_rgba(204,255,0,0.2)] relative"
              >
                <div className="flex items-center justify-between text-xs font-mono text-lime mb-2">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider font-bold">
                    <Flame className="w-4 h-4" /> Performance Multiplier
                  </span>
                  <span className="text-lime font-bold">KINETIX V4</span>
                </div>
                <div className="font-display font-black text-5xl sm:text-6xl text-lime tracking-tight">
                  <CountUp to={14.2} suffix="x" decimals={1} duration={2400} />
                </div>
                <p className="mt-2 text-xs sm:text-sm text-bone/80">
                  Guaranteed throughput acceleration and cost reduction verified across 500M+ real
                  inference payloads.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
