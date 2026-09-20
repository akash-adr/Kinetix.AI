'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Play,
  Copy,
  Check,
  Zap,
  Sliders,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Shield,
  Gauge,
  Radio,
  Workflow,
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { MagneticButton } from '../ui/MagneticButton';

export function FeatureBento() {
  // --- Card 1: Interactive Code Playground state ---
  const [activeTab, setActiveTab] = useState<'typescript' | 'python' | 'curl'>('typescript');
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [executionOutput, setExecutionOutput] = useState<string | null>(null);

  const codeSnippets = {
    typescript: `import { Kinetix } from '@kinetix/core';

// Initialize hyper-speed autonomous cluster
const client = new Kinetix({
  apiKey: process.env.KINETIX_SECRET_KEY,
  region: 'global-mesh',
  latencyBudgetMs: 5,
});

// Dispatch inference payload to nearest low-latency node
const result = await client.compute.stream({
  model: 'kinetix-reasoner-70b',
  payload: { stream: true, autoOptimize: true },
});

console.log(\`Execution complete: \${result.telemetry.durationMs}ms\`);`,
    python: `from kinetix import KinetixMesh
import os

# Connect to autonomous zero-cold-start cluster
mesh = KinetixMesh(
    api_key=os.environ["KINETIX_SECRET_KEY"],
    routing="hyper-low-latency"
)

# Broadcast real-time execution job across 4,096 shards
response = mesh.compute.execute(
    model="kinetix-reasoner-70b",
    priority="ultra_high",
    zero_memory_drain=True
)

print(f"Latency: {response.latency_ms}ms | Cost: $0.000004")`,
    curl: `curl -X POST https://api.kinetix.ai/v1/compute/stream \\
  -H "Authorization: Bearer $KINETIX_SECRET_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "kinetix-reasoner-70b",
    "region": "auto-mesh",
    "acceleration": "maximal"
  }'`,
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunExecution = () => {
    setIsRunning(true);
    setExecutionOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      setExecutionOutput('✓ [200 OK] Handshake established | Shard #042 | 3.42ms execution | 0.00018s latency');
    }, 850);
  };

  // --- Card 2: Interactive Before/After Comparison Slider state ---
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  // --- Card 3: Interactive Region Telemetry state ---
  const [selectedRegion, setSelectedRegion] = useState<'us' | 'eu' | 'asia'>('us');
  const regionMetrics = {
    us: { latency: '3.12ms', throughput: '840k ops/s', load: '18%', status: 'OPTIMAL' },
    eu: { latency: '4.08ms', throughput: '620k ops/s', load: '24%', status: 'OPTIMAL' },
    asia: { latency: '5.21ms', throughput: '710k ops/s', load: '31%', status: 'BALANCED' },
  };

  return (
    <section id="features" className="relative py-28 md:py-36 bg-obsidian-dark border-b border-white/10">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-lime/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-magenta/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <Badge variant="lime" pulse>
            MAXIMALIST CAPABILITIES MATRIX
          </Badge>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-bone leading-[0.94]">
            NOT JUST FAST.{' '}
            <span className="text-transparent text-stroke-lime">CATEGORICALLY</span>{' '}
            <span className="text-lime">UNTOUCHABLE.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted">
            Engineered from raw hardware primitives to eliminate micro-bottlenecks. Every layer of
            the Kinetix stack is built for kinetic velocity.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bento Item 1: Interactive Code Playground Terminal (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-obsidian/90 backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between shadow-2xl relative group overflow-hidden">
            {/* Ambient Border Glow on Hover */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-lime/30 via-transparent to-magenta/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              {/* Card Header & Tabs */}
              <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-lime/10 border border-lime/30 text-lime">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-bone">
                      Developer Console SDK
                    </h3>
                    <p className="text-xs font-mono text-muted">
                      Zero configuration • 3-line drop-in integration
                    </p>
                  </div>
                </div>

                {/* Language Switcher Tabs */}
                <div className="flex items-center gap-1 rounded-lg bg-surface p-1 border border-white/10">
                  {(['typescript', 'python', 'curl'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveTab(lang)}
                      className={`px-3 py-1 rounded text-xs font-mono transition-all capitalize ${
                        activeTab === lang
                          ? 'bg-lime text-void font-bold shadow-sm'
                          : 'text-muted hover:text-bone'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Editor Window */}
              <div className="mt-4 rounded-xl bg-void border border-white/10 p-4 font-mono text-xs sm:text-sm text-bone relative overflow-x-auto min-h-[220px]">
                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="absolute top-3 right-3 p-1.5 rounded-md border border-white/10 bg-surface/80 text-muted hover:text-lime hover:border-lime/40 transition-colors flex items-center gap-1 text-[11px]"
                  title="Copy code"
                  data-cursor-text="COPY"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-lime" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>

                <pre className="text-bone leading-relaxed pr-16">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>
            </div>

            {/* Run Execution Action & Terminal Feedback */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <MagneticButton
                  variant="primary"
                  size="sm"
                  onClick={handleRunExecution}
                  disabled={isRunning}
                  cursorLabel="RUN"
                  className="gap-2 text-xs py-2 px-4"
                >
                  <Play className={`w-3.5 h-3.5 fill-current ${isRunning ? 'animate-spin' : ''}`} />
                  <span>{isRunning ? 'TRANSMITTING...' : 'DISPATCH KINETIX STREAM'}</span>
                </MagneticButton>

                <span className="font-mono text-xs text-muted">
                  Instantaneous feedback • Sub-5ms loop
                </span>
              </div>

              {/* Execution Output Simulation */}
              <AnimatePresence>
                {executionOutput && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="rounded-lg bg-lime/10 border border-lime/30 p-2.5 font-mono text-xs text-lime flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
                    <span>{executionOutput}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bento Item 2: Interactive Before / After Comparison Slider (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-obsidian/90 backdrop-blur-xl p-5 sm:p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="p-2 rounded-lg bg-magenta/10 border border-magenta/30 text-magenta">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-bone">
                    Interactive Stack Comparison
                  </h3>
                  <p className="text-xs font-mono text-muted">
                    Drag slider to compare architecture delta
                  </p>
                </div>
              </div>

              {/* Comparison Slider Container */}
              <div
                ref={sliderRef}
                onMouseMove={(e) => handleSliderMove(e.clientX)}
                onTouchMove={(e) => handleSliderMove(e.touches[0].clientX)}
                className="mt-6 relative h-64 rounded-xl border border-white/15 overflow-hidden select-none cursor-ew-resize bg-surface"
                data-cursor-text="DRAG"
              >
                {/* Right Side: Kinetix Autonomous Engine (Active Layer) */}
                <div className="absolute inset-0 bg-void p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <Badge variant="lime" size="sm">
                      KINETIX MESH
                    </Badge>
                    <span className="font-mono text-xs text-lime font-bold">14.2x FASTER</span>
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-display font-black text-lime">
                      3.18ms <span className="text-xs font-mono text-bone font-normal">p99</span>
                    </div>
                    <div className="text-xl font-display font-bold text-bone">
                      $0 Idle Cost <span className="text-xs font-mono text-muted font-normal">(Instant drain)</span>
                    </div>
                    <div className="text-xs font-mono text-cyan">
                      1 Global Autonomous Binary • Auto-healing
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-muted-dark">
                    SLIDER POSITION: {Math.round(sliderPos)}% KINETIX
                  </div>
                </div>

                {/* Left Side: Legacy Cloud (Clipped Overlay) */}
                <div
                  className="absolute inset-0 bg-[#160B12] p-5 flex flex-col justify-between border-r-2 border-magenta"
                  style={{ width: `${sliderPos}%` }}
                >
                  <div className="flex items-center justify-between">
                    <Badge variant="magenta" size="sm">
                      LEGACY HYPERSCALER
                    </Badge>
                    <span className="font-mono text-xs text-magenta font-bold">LEGACY</span>
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-display font-black text-magenta">
                      480ms <span className="text-xs font-mono text-muted font-normal">p99</span>
                    </div>
                    <div className="text-xl font-display font-bold text-bone/60">
                      $14,200/mo <span className="text-xs font-mono text-muted font-normal">(80% idle waste)</span>
                    </div>
                    <div className="text-xs font-mono text-red-400">
                      18 Brittle Microservices • 4 DevOps FTEs
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-magenta">
                    TRADITIONAL CLOUD
                  </div>
                </div>

                {/* Draggable Divider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-magenta cursor-ew-resize flex items-center justify-center -translate-x-1/2"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-magenta border-2 border-bone flex items-center justify-center shadow-[0_0_15px_#FF007F]">
                    <Sliders className="w-3.5 h-3.5 text-bone" />
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs font-mono text-muted flex items-center gap-2">
              <span className="text-lime">💡</span> Drag horizontally across the card to reveal side-by-side benchmarks.
            </p>
          </div>

          {/* Bento Item 3: Live Telemetry & Quantum Routing (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/15 bg-obsidian/90 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan/10 border border-cyan/30 text-cyan">
                    <Radio className="w-4 h-4 animate-pulse" />
                  </div>
                  <h4 className="font-display font-bold text-bone text-base">
                    Edge Routing Telemetry
                  </h4>
                </div>
                <Badge variant="cyan" size="sm">
                  LIVE
                </Badge>
              </div>

              {/* Region Selectors */}
              <div className="grid grid-cols-3 gap-1.5 mt-4">
                {(['us', 'eu', 'asia'] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedRegion(r)}
                    className={`py-1.5 px-2 rounded font-mono text-xs uppercase tracking-wider transition-all border ${
                      selectedRegion === r
                        ? 'bg-cyan/20 border-cyan text-cyan font-bold shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                        : 'border-white/10 text-muted hover:text-bone'
                    }`}
                  >
                    {r.toUpperCase()}-EDGE
                  </button>
                ))}
              </div>

              {/* Telemetry Metric Display */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface border border-white/10">
                  <span className="font-mono text-xs text-muted">Edge Latency:</span>
                  <span className="font-display font-black text-xl text-cyan">
                    {regionMetrics[selectedRegion].latency}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-surface border border-white/10">
                  <span className="font-mono text-xs text-muted">Throughput:</span>
                  <span className="font-display font-bold text-lg text-bone">
                    {regionMetrics[selectedRegion].throughput}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-surface border border-white/10">
                  <span className="font-mono text-xs text-muted">Mesh Load:</span>
                  <span className="font-mono text-xs text-lime">
                    {regionMetrics[selectedRegion].load} ({regionMetrics[selectedRegion].status})
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[11px] text-muted flex items-center justify-between">
              <span>BGP ANYCAST ROUTING</span>
              <span className="text-cyan">● SYNCHRONIZED</span>
            </div>
          </div>

          {/* Bento Item 4: Autonomous Sharding & Self-Healing (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/15 bg-obsidian/90 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
                <div className="p-2 rounded-lg bg-lime/10 border border-lime/30 text-lime">
                  <Workflow className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-bone text-base">
                  Self-Healing Mesh
                </h4>
              </div>

              <div className="mt-4 space-y-3">
                <p className="text-xs text-muted leading-relaxed">
                  If an upstream cloud provider experiences fiber cut or hardware degradation,
                  Kinetix reroutes active state in &lt;1.8 milliseconds without dropping a packet.
                </p>

                {/* Micro Visual Topology */}
                <div className="h-32 rounded-xl bg-void border border-white/10 p-3 flex flex-col justify-around">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-muted">Node A (US-East)</span>
                    <span className="text-lime">● ACTIVE (100%)</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-lime animate-pulse" />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-muted">Node B (Frankfurt)</span>
                    <span className="text-lime">● ACTIVE (100%)</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-cyan" />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-muted">Node C (Tokyo)</span>
                    <span className="text-magenta">● HEALING (99.8%)</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-magenta" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[11px] text-muted flex items-center justify-between">
              <span>ZERO HUMAN INTERVENTION</span>
              <span className="text-lime">● 99.999% SLA</span>
            </div>
          </div>

          {/* Bento Item 5: Predictive Pre-warming & Zero Cold Starts (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/15 bg-obsidian/90 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
                <div className="p-2 rounded-lg bg-magenta/10 border border-magenta/30 text-magenta">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-bone text-base">
                  Predictive JIT Warm-Up
                </h4>
              </div>

              <p className="mt-4 text-xs text-muted leading-relaxed">
                Machine learning models analyze traffic patterns 12 seconds in advance, pre-warming
                GPU tensors so cold starts are mathematically impossible.
              </p>

              {/* Visual Latency Comparison Bar */}
              <div className="mt-5 space-y-2 font-mono text-xs">
                <div className="flex justify-between text-[11px]">
                  <span className="text-muted">Standard Cloud Lambda:</span>
                  <span className="text-magenta">1,450ms cold</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-magenta w-full" />
                </div>

                <div className="flex justify-between text-[11px] pt-2">
                  <span className="text-muted">Kinetix JIT Engine:</span>
                  <span className="text-lime">1.8ms warm</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-lime w-[4%]" />
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[11px] text-muted flex items-center justify-between">
              <span>PATENTED TENSOR PIPELINE</span>
              <span className="text-lime">VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
