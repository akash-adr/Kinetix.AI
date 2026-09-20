'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Terminal, Cpu, Activity, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { Badge } from '../ui/Badge';
import { KineticSphere3D } from '../ui/KineticSphere3D';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [cardRotate, setCardRotate] = useState({ x: 12, y: -8 });
  const [isHovered, setIsHovered] = useState(false);

  // Scroll parallax for dashboard card
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Interactive 3D Card Tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / (rect.height / 2)) * 14;
    const rotY = (x / (rect.width / 2)) * 14;

    setCardRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCardRotate({ x: 8, y: -6 }); // subtle resting tilt
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const headlineWords = [
    { text: 'AUTONOMOUS', style: 'text-bone font-black' },
    { text: 'COMPUTE', style: 'text-lime underline decoration-lime/40 underline-offset-8' },
    { text: 'AT', style: 'text-muted-dark font-light italic font-sans' },
    { text: 'ESCAPE', style: 'text-transparent text-stroke-lime font-black tracking-tighter' },
    { text: 'VELOCITY.', style: 'text-magenta font-black' },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center bg-void"
    >
      {/* Background Gradients & Mesh */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lime/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-magenta/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Kinetic 3D Interactive WebGL Element in Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-70 pointer-events-none z-0">
        <KineticSphere3D className="w-[850px] h-[850px] max-w-full" theme="multi" speed={1.1} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Top Floating Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <a
            href="#features"
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-lime/30 bg-obsidian/80 backdrop-blur-xl hover:border-lime transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.15)] cursor-pointer"
            data-cursor-text="EXPLORE"
          >
            <span className="flex h-2 w-2 rounded-full bg-lime animate-pulse" />
            <span className="font-mono text-xs text-lime font-bold uppercase tracking-widest">
              HYPERION 4.2 LAUNCHED
            </span>
            <span className="text-white/30">•</span>
            <span className="font-mono text-xs text-bone group-hover:text-lime transition-colors">
              Read Benchmark Report
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-lime group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Kinetic Staggered Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter leading-[0.92] max-w-5xl">
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.8,
                delay: 0.15 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block mr-3 md:mr-4 ${word.style}`}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>

        {/* Punchy Subheadline (Max 20 words) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-muted font-sans font-medium leading-relaxed"
        >
          Replace legacy cloud bloat with self-optimizing AI compute engines that scale from
          zero to millions at sub-5ms latency.
        </motion.p>

        {/* Dual High-Contrast CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <MagneticButton
            variant="primary"
            size="lg"
            cursorLabel="START"
            onClick={() => {
              const el = document.getElementById('pricing');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shadow-[0_0_35px_rgba(204,255,0,0.45)]"
          >
            <span>INITIALIZE ENGINE FREE</span>
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            size="lg"
            cursorLabel="WATCH"
            onClick={() => {
              const el = document.getElementById('features');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="gap-2.5"
          >
            <Play className="w-4 h-4 text-lime fill-lime" />
            <span>EXPLORE TELEMETRY</span>
          </MagneticButton>
        </motion.div>

        {/* Micro Guarantee Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-muted-dark"
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-lime" /> NO CREDIT CARD REQUIRED
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-magenta" /> DEPLOY IN 45 SECONDS
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-cyan" /> 99.999% SLA GUARANTEE
          </span>
        </motion.div>

        {/* Floating 3D Perspective Dashboard Preview Mockup */}
        <motion.div
          style={{ y: cardY, scale: cardScale }}
          className="w-full mt-16 md:mt-20 perspective-[1400px]"
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${cardRotate.x}deg) rotateY(${cardRotate.y}deg)`,
              transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              transformStyle: 'preserve-3d',
            }}
            className="relative mx-auto max-w-5xl rounded-2xl border border-white/15 bg-obsidian/90 p-4 sm:p-6 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(204,255,0,0.15)] group"
            data-cursor-text="INTERACT"
          >
            {/* Top Glowing Edge Highlight */}
            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-lime to-transparent opacity-70" />

            {/* Window Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                <span className="ml-3 font-mono text-xs text-muted">
                  kinetix-telemetry-us-east // cluster-alpha-9
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="lime" size="sm">
                  STREAM ACTIVE
                </Badge>
                <span className="font-mono text-xs text-lime">4.18ms</span>
              </div>
            </div>

            {/* Dashboard Visual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              {/* Stat Widget 1 */}
              <div className="rounded-xl border border-white/10 bg-surface/60 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-muted font-mono">
                  <span>GLOBAL THROUGHPUT</span>
                  <Activity className="w-4 h-4 text-lime" />
                </div>
                <div className="mt-3">
                  <div className="font-display font-black text-2xl sm:text-3xl text-bone">
                    1.42M <span className="text-xs font-mono text-lime font-normal">req/sec</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-xs font-mono text-lime">
                    <span>↑ +34.8% vs baseline</span>
                  </div>
                </div>
                {/* Micro Bar Sparkline */}
                <div className="flex items-end gap-1 h-8 mt-4">
                  {[35, 45, 60, 50, 75, 65, 80, 70, 95, 88, 100, 92].map((val, idx) => (
                    <div
                      key={idx}
                      style={{ height: `${val}%` }}
                      className={`flex-1 rounded-t-sm transition-all duration-300 ${
                        idx >= 8 ? 'bg-lime' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Stat Widget 2 */}
              <div className="rounded-xl border border-white/10 bg-surface/60 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-muted font-mono">
                  <span>P99 KERNEL LATENCY</span>
                  <Zap className="w-4 h-4 text-magenta" />
                </div>
                <div className="mt-3">
                  <div className="font-display font-black text-2xl sm:text-3xl text-bone">
                    3.12 <span className="text-xs font-mono text-magenta font-normal">milliseconds</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-xs font-mono text-magenta">
                    <span>⚡ Jitter: 0.02ms</span>
                  </div>
                </div>
                {/* Waveform graphic */}
                <div className="relative h-8 mt-4 overflow-hidden rounded bg-obsidian flex items-center px-2">
                  <div className="w-full h-1.5 bg-gradient-to-r from-lime via-cyan to-magenta rounded-full animate-pulse" />
                </div>
              </div>

              {/* Stat Widget 3 */}
              <div className="rounded-xl border border-white/10 bg-surface/60 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-muted font-mono">
                  <span>AUTONOMOUS SHARDING</span>
                  <Cpu className="w-4 h-4 text-cyan" />
                </div>
                <div className="mt-3">
                  <div className="font-display font-black text-2xl sm:text-3xl text-bone">
                    4,096 <span className="text-xs font-mono text-cyan font-normal">cores synced</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-xs font-mono text-cyan">
                    <span>● 0 dropped packets</span>
                  </div>
                </div>
                {/* Core Allocation Matrix */}
                <div className="grid grid-cols-8 gap-1 h-8 mt-4">
                  {Array.from({ length: 24 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`rounded-[2px] transition-colors ${
                        idx % 3 === 0
                          ? 'bg-cyan'
                          : idx % 5 === 0
                          ? 'bg-lime'
                          : 'bg-white/15'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Live Terminal Log Banner */}
            <div className="mt-4 rounded-xl border border-white/10 bg-void/90 p-3.5 font-mono text-xs text-bone flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-lime" />
                <span className="text-muted">[SYS_INGEST_READY]</span>
                <span className="text-lime">2,481 pipelines synthesized</span>
                <span className="text-muted-dark">//</span>
                <span className="text-bone">Zero cold starts detected</span>
              </div>
              <div className="flex items-center gap-2 text-muted text-[11px]">
                <span>SSL TLS 1.3</span>
                <span className="text-lime">● VERIFIED</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
