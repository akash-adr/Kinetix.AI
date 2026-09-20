'use client';

import React from 'react';
import { Star, Quote, ArrowUpRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Marcus Vance',
      role: 'Head of Infrastructure, Synthetix',
      company: 'SYNTHETIX',
      quote:
        'We migrated 1,400 active LLM microservices to Kinetix over a weekend. Our p99 dropped from 640ms to 3.8ms, and our cloud invoice plummeted by 84%. It feels like cheating.',
      metric: '84% COST REDUCTION',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      tag: 'AI INFRASTRUCTURE',
    },
    {
      name: 'Sophia Chen',
      role: 'VP Engineering, HyperScale OS',
      company: 'HYPERSCALE',
      quote:
        'Zero cold starts is not a marketing gimmick here. It actually works. Our real-time voice agents now feel like human conversation with zero perceptible hesitation.',
      metric: '3.1MS P99 LATENCY',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      tag: 'VOICE AI',
    },
    {
      name: 'Devon Scott',
      role: 'Principal Architect, TeraGrid',
      company: 'TERAGRID',
      quote:
        'Before Kinetix, managing Kubernetes YAML and GPU cluster scheduling consumed half my engineering team. We completely dissolved that overhead and shipped 4x faster.',
      metric: '4X FASTER SHIP CYCLE',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      tag: 'FINTECH',
    },
    {
      name: 'Amara Okafor',
      role: 'Founder & CEO, NeuralStream',
      company: 'NEURALSTREAM',
      quote:
        'The developer experience is an absolute masterpiece. When an infrastructure tool looks and feels this polished, you know the underlying distributed systems are bulletproof.',
      metric: '500M+ REQ / DAY',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      tag: 'MEDIA STREAMING',
    },
    {
      name: 'Liam Gallagher',
      role: 'Lead AI Engineer, OmniRobotics',
      company: 'OMNIROBOTICS',
      quote:
        'When you are processing live sensor telemetry from 50,000 autonomous units, 50ms latency is catastrophic. Kinetix gives us deterministic sub-5ms guarantees everywhere.',
      metric: '0 PACKETS DROPPED',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      tag: 'ROBOTICS',
    },
    {
      name: 'Kavita Patel',
      role: 'Chief Architect, Apex Trading',
      company: 'APEX',
      quote:
        'High-frequency execution requires uncompromising reliability. Kinetix has delivered 100% uptime through our highest trading volatility days of the year.',
      metric: '100% RELIABILITY',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      tag: 'QUANT TRADING',
    },
  ];

  return (
    <section id="testimonials" className="relative py-28 md:py-36 bg-void border-b border-white/10 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-magenta/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" pulse>
            VERIFIED PRODUCTION PROOF
          </Badge>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-bone leading-[0.95]">
            BUILT FOR TEAMS WHO CANNOT AFFORD{' '}
            <span className="text-transparent text-stroke-lime">DOWNTIME</span> OR{' '}
            <span className="text-lime">EXCUSES.</span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg">
            Over $1.2B in annualized transaction volume and 400M daily agent interactions run on Kinetix.
          </p>
        </div>

        {/* Hero Spotlight Testimonial Card */}
        <div className="mb-20 rounded-3xl border-2 border-lime/40 bg-obsidian/95 backdrop-blur-2xl p-6 sm:p-12 shadow-[0_0_60px_-15px_rgba(204,255,0,0.25)] relative overflow-hidden group">
          {/* Top Edge Glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime via-cyan to-magenta" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Star Rating & Verified Pill */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-lime text-lime" />
                  ))}
                </div>
                <span className="text-white/20">•</span>
                <span className="font-mono text-xs text-lime uppercase tracking-widest font-bold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> VERIFIED ENTERPRISE BENCHMARK
                </span>
              </div>

              {/* Massive Bold Headline Quote */}
              <blockquote className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-bone leading-[1.05]">
                “WE CUT OUR ANNUAL CLOUD BILL BY{' '}
                <span className="text-lime underline decoration-lime/50 underline-offset-8">
                  $1.8 MILLION
                </span>{' '}
                WHILE DOUBLING OUR ACTIVE CONCURRENT AGENT INFERENCES. SWITCHING WAS THE EASIEST DECISION
                WE MADE THIS DECADE.”
              </blockquote>

              {/* Author & Credential */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                {/* [SWAP REAL ASSET: Verified CTO Photo] */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80"
                  alt="Elena Vance"
                  className="w-14 h-14 rounded-full border-2 border-lime object-cover shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                />
                <div>
                  <h4 className="font-display font-black text-lg text-bone">
                    Elena Vance
                  </h4>
                  <p className="font-mono text-xs text-muted">
                    Co-Founder & CTO • Synthetix Intelligence (Series B)
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Metrics Tile */}
            <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-surface/80 p-6 flex flex-col gap-5 justify-between">
              <span className="font-mono text-xs text-muted uppercase tracking-wider">
                SYNTHETIX VERIFIED DELTA
              </span>

              <div className="space-y-4">
                <div>
                  <div className="font-display font-black text-4xl text-lime">
                    $1.8M
                  </div>
                  <div className="font-mono text-xs text-muted">Annual capital redirected to R&D</div>
                </div>

                <div className="h-px w-full bg-white/10" />

                <div>
                  <div className="font-display font-black text-4xl text-magenta">
                    3.8ms
                  </div>
                  <div className="font-mono text-xs text-muted">Global p99 latency down from 640ms</div>
                </div>

                <div className="h-px w-full bg-white/10" />

                <div>
                  <div className="font-display font-black text-4xl text-cyan">
                    4.2B+
                  </div>
                  <div className="font-mono text-xs text-muted">Autonomous tokens processed monthly</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Row 1 (Left Scrolling) */}
        <div className="relative w-full overflow-hidden flex items-center group mb-6">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-36 z-10 bg-gradient-to-r from-void to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-36 z-10 bg-gradient-to-l from-void to-transparent" />

          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap min-w-full gap-6">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="w-[340px] sm:w-[420px] rounded-2xl border border-white/15 bg-obsidian/90 p-6 flex-shrink-0 flex flex-col justify-between hover:border-lime/60 transition-all duration-300 shadow-lg group/card"
                data-cursor-text="READ"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-lime uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-lime/10 border border-lime/30">
                      {t.metric}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-lime text-lime" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-bone/90 font-sans leading-relaxed whitespace-normal">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-5 mt-5 border-t border-white/10">
                  {/* [SWAP REAL ASSET: Customer Avatar] */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border border-white/20 object-cover"
                  />
                  <div>
                    <h5 className="font-display font-bold text-sm text-bone">{t.name}</h5>
                    <p className="font-mono text-[11px] text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Right Scrolling - Opposing kinetic motion) */}
        <div className="relative w-full overflow-hidden flex items-center group">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-36 z-10 bg-gradient-to-r from-void to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-36 z-10 bg-gradient-to-l from-void to-transparent" />

          <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused] whitespace-nowrap min-w-full gap-6">
            {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((t, idx) => (
              <div
                key={idx}
                className="w-[340px] sm:w-[420px] rounded-2xl border border-white/15 bg-obsidian/90 p-6 flex-shrink-0 flex flex-col justify-between hover:border-magenta/60 transition-all duration-300 shadow-lg group/card"
                data-cursor-text="READ"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-magenta uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-magenta/10 border border-magenta/30">
                      {t.metric}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-magenta text-magenta" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-bone/90 font-sans leading-relaxed whitespace-normal">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-5 mt-5 border-t border-white/10">
                  {/* [SWAP REAL ASSET: Customer Avatar] */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full border border-white/20 object-cover"
                  />
                  <div>
                    <h5 className="font-display font-bold text-sm text-bone">{t.name}</h5>
                    <p className="font-mono text-[11px] text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
