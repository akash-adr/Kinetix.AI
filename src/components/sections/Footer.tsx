'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, Github, Twitter, Disc as Discord, Linkedin, ShieldCheck, Terminal } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { MagneticButton } from '../ui/MagneticButton';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 700);
  };

  return (
    <footer className="relative bg-obsidian-dark text-bone pt-20 pb-12 overflow-hidden select-none">
      {/* Background Micro Dots */}
      <div className="absolute inset-0 bg-cyber-dots opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Status (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div>
              <a href="#" className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface border border-lime/40 flex items-center justify-center text-lime font-display font-black text-xl shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                  K
                </div>
                <span className="font-display font-black text-2xl tracking-tight text-bone">
                  KINETIX<span className="text-lime">.</span>AI
                </span>
              </a>
              <p className="mt-4 text-xs sm:text-sm text-muted leading-relaxed max-w-sm">
                Next-generation autonomous AI compute infrastructure. Engineered from first silicon
                principles for escape-velocity software teams worldwide.
              </p>
            </div>

            {/* Live Fleet Status Pill */}
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lime/30 bg-lime/10 font-mono text-[11px] text-lime w-fit">
                <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
                <span>ALL 4,096 SHARDS OPERATIONAL</span>
              </div>
              <span className="font-mono text-[10px] text-muted-dark">
                GLOBAL P99 LATENCY: 3.12ms • ZERO OUTAGES
              </span>
            </div>
          </div>

          {/* Column 2: Capabilities (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="font-mono text-xs text-lime uppercase tracking-widest font-bold">
              ENGINE
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-muted font-mono">
              <li>
                <a href="#features" className="hover:text-lime transition-colors">
                  Anycast Mesh
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-lime transition-colors">
                  Autonomous Sharding
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-lime transition-colors">
                  Zero-Cold Starts
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-lime transition-colors">
                  Telemetry Gauges
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-lime transition-colors">
                  Enterprise Dedicated
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Developers (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="font-mono text-xs text-magenta uppercase tracking-widest font-bold">
              DEVELOPERS
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-muted font-mono">
              <li>
                <a href="#features" className="hover:text-magenta transition-colors">
                  TypeScript SDK
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-magenta transition-colors">
                  Python Core
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-magenta transition-colors">
                  cURL Endpoint
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-magenta transition-colors">
                  VPC Peering
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-magenta transition-colors">
                  Changelog & Benchmarks
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Dispatch (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="font-mono text-xs text-cyan uppercase tracking-widest font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" /> RADAR DISPATCH
            </span>
            <p className="text-xs text-muted leading-relaxed">
              Bi-weekly engineering memos on distributed compute, kernel bypass, and high-frequency
              agent infrastructure.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineer@company.com"
                  disabled={subscribed || loading}
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-surface text-bone text-xs font-mono placeholder:text-muted/60 focus:outline-none focus:border-lime transition-colors"
                />
                <button
                  type="submit"
                  disabled={subscribed || loading}
                  className="absolute right-1.5 p-2 rounded-lg bg-lime text-void hover:bg-lime-hover transition-colors disabled:opacity-50"
                  data-cursor-text="SUBMIT"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-void border-t-transparent rounded-full animate-spin block" />
                  ) : subscribed ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </div>

              {subscribed ? (
                <span className="font-mono text-xs text-lime flex items-center gap-1">
                  ✓ Transmitted: Check inbox for invitation key.
                </span>
              ) : (
                <span className="font-mono text-[10px] text-muted-dark">
                  No marketing spam. Unsubscribe anytime in 1-click.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Social & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div className="flex items-center gap-6">
            <span>© 2026 KINETIX SYSTEMS INC.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <a href="#" className="hover:text-bone transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-bone transition-colors">
              SECURITY AUDIT (SOC2)
            </a>
            <a href="#" className="hover:text-bone transition-colors">
              TERMS OF SERVICE
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
              { icon: Github, label: 'GitHub', href: 'https://github.com' },
              { icon: Discord, label: 'Discord', href: 'https://discord.com' },
              { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
            ].map((social, idx) => {
              const IconComp = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  data-cursor-text={social.label.toUpperCase()}
                  className="w-9 h-9 rounded-lg border border-white/10 bg-surface flex items-center justify-center text-muted hover:text-lime hover:border-lime/40 transition-colors"
                >
                  <IconComp className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Massive Graphic Wordmark Footprint */}
        <div className="mt-16 pt-8 border-t border-white/5 overflow-hidden select-none pointer-events-none">
          <h2 className="font-display font-black text-center text-5xl sm:text-8xl md:text-9xl lg:text-[13rem] tracking-tighter text-white/[0.04] leading-none uppercase">
            KINETIX
          </h2>
        </div>
      </div>
    </footer>
  );
}
