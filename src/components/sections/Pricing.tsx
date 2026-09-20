'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { MagneticButton } from '../ui/MagneticButton';
import confetti from 'canvas-confetti';

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  const handleCheckoutCelebrate = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#CCFF00', '#FF007F', '#00F0FF', '#ffffff'],
    });
  };

  const plans = [
    {
      name: 'DEVELOPER SEED',
      badge: 'PROTOTYPE',
      desc: 'Ideal for autonomous agent experiments and fast developer sandboxes.',
      monthlyPrice: 0,
      annualPrice: 0,
      priceLabel: 'FREE FOREVER',
      highlight: false,
      ctaText: 'INITIALIZE FREE TIER',
      ctaVariant: 'secondary' as const,
      features: [
        'Up to 100,000 edge executions/mo',
        'Sub-15ms guaranteed edge latency',
        'Single-region cluster partition',
        'Standard community support',
        'TypeScript, Python, cURL SDKs',
        'Public telemetry dashboard',
      ],
    },
    {
      name: 'HYPER SCALE',
      badge: 'MOST POPULAR // UNLIMITED BURST',
      desc: 'High-throughput production infrastructure for breakout AI platforms.',
      monthlyPrice: 99,
      annualPrice: 79,
      priceLabel: '/month',
      highlight: true,
      ctaText: 'LAUNCH WITH 14-DAY TRIAL',
      ctaVariant: 'primary' as const,
      features: [
        '10,000,000 edge executions/mo included',
        'Sub-3.5ms global anycast mesh',
        'Zero-cold-start predictive pre-warming',
        '4,096 autonomous shard partitions',
        'SOC2 Type II & HIPAA compliance',
        'Automated failover & self-healing',
        'Dedicated 24/7 Slack / Discord war room',
      ],
    },
    {
      name: 'ENTERPRISE CORE',
      badge: 'MISSION CRITICAL',
      desc: 'Bespoke high-performance clusters with custom tensor hardware reservation.',
      monthlyPrice: 499,
      annualPrice: 399,
      priceLabel: '/month',
      highlight: false,
      ctaText: 'DEPLOY BESPOKE CLUSTER',
      ctaVariant: 'outline-magenta' as const,
      features: [
        'Unlimited executions & custom bursts',
        'Sub-2ms deterministic P99 guarantee',
        'Dedicated bare-metal H100 GPU slices',
        '99.999% SLA with financial penalty backing',
        'Air-gapped VPC peering & on-prem options',
        'Dedicated Principal Systems Architect',
        'Custom legal MSA & procurement invoicing',
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-28 md:py-36 bg-void border-b border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-lime/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Badge variant="lime" pulse>
            TRANSPARENT VALUE EQUATION
          </Badge>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-bone leading-[0.94]">
            PAY FOR RESULTS.{' '}
            <span className="text-transparent text-stroke-lime">NEVER FOR</span>{' '}
            <span className="text-lime">IDLE DUST.</span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg">
            Straightforward pricing that scales down to zero when idle. No hidden egress surcharges or DNS extortion.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-10 flex items-center gap-4 p-1.5 rounded-full border border-white/15 bg-obsidian backdrop-blur-xl">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                !annual ? 'bg-white/15 text-bone font-bold shadow-md' : 'text-muted hover:text-bone'
              }`}
            >
              MONTHLY BILLING
            </button>

            <button
              onClick={() => setAnnual(true)}
              className={`relative px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                annual
                  ? 'bg-lime text-void font-bold shadow-[0_0_20px_rgba(204,255,0,0.5)]'
                  : 'text-muted hover:text-bone'
              }`}
            >
              <span>ANNUAL BILLING</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-mono uppercase font-black transition-colors ${
                  annual ? 'bg-void text-lime' : 'bg-lime/20 text-lime'
                }`}
              >
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = annual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlight
                    ? 'border-2 border-lime bg-obsidian-dark shadow-[0_0_60px_-10px_rgba(204,255,0,0.35)] lg:-translate-y-4 z-10'
                    : 'border border-white/15 bg-obsidian hover:border-white/30 shadow-xl'
                }`}
                data-cursor-text="PLAN"
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-lime text-void font-mono font-black text-xs uppercase tracking-widest shadow-[0_0_15px_#CCFF00] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 fill-void" /> {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
                      {plan.name}
                    </span>
                    {!plan.highlight && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-muted">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Morphing Price Display */}
                  <div className="mt-5 flex items-baseline gap-2">
                    {price === 0 ? (
                      <span className="font-display font-black text-4xl sm:text-5xl text-bone">
                        $0
                      </span>
                    ) : (
                      <>
                        <span className="font-display font-black text-5xl sm:text-6xl text-bone">
                          ${price}
                        </span>
                        <span className="font-mono text-sm text-muted">
                          {plan.priceLabel}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                    {plan.desc}
                  </p>

                  <div className="my-6 h-px w-full bg-white/10" />

                  {/* Feature Checkpoints */}
                  <div className="space-y-3">
                    <span className="font-mono text-[11px] text-muted-dark uppercase tracking-wider block">
                      INCLUDED CAPABILITIES:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-bone/90">
                        <Check
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            plan.highlight ? 'text-lime' : 'text-muted'
                          }`}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="mt-8 pt-4">
                  <MagneticButton
                    variant={plan.ctaVariant}
                    size="lg"
                    onClick={handleCheckoutCelebrate}
                    className="w-full justify-center"
                    cursorLabel="SELECT"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>

                  <div className="mt-3 text-center text-[11px] font-mono text-muted-dark flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-lime" />
                    <span>Cancel anytime • 30-day money-back</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
