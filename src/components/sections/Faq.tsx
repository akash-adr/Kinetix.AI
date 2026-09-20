'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does Kinetix achieve sub-4ms latency while traditional clouds average 400ms+?',
      a: 'Traditional clouds route traffic through multiple layers of DNS resolvers, TLS proxies, container cold-starts, and unoptimized virtual hypervisors. Kinetix uses a proprietary Anycast BGP hardware mesh with bare-metal runtime execution and predictive kernel memory pre-warming, executing code directly on silicon nearest to the requester.',
    },
    {
      q: 'Does switching require rewriting our existing Python or TypeScript applications?',
      a: 'Zero rewriting required. Kinetix provides drop-in compatible bindings for standard fetch, OpenAI SDK, LangChain, Vercel AI SDK, and standard REST/gRPC endpoints. You simply change your initialization endpoint or install @kinetix/core and deploy.',
    },
    {
      q: 'What happens when our traffic surges 50x in 3 seconds during a viral event?',
      a: 'Traditional autoscalers take 3-7 minutes to spin up new container pods, causing timeouts and 504 gateway errors. Kinetix maintains distributed dormant tensor shards across 4,096 nodes that ignite in under 1.8 milliseconds, effortlessly absorbing 10M+ concurrent requests without degradation.',
    },
    {
      q: 'How does the zero idle cost guarantee work mathematically?',
      a: 'We do not charge for reserved VM instances or idle memory quotas. When your workload completes an execution cycle, all state is compressed into our high-speed NVMe flash tier, and compute billing halts immediately at microsecond resolution.',
    },
    {
      q: 'Is Kinetix compliant for HIPAA, SOC2 Type II, and financial institutions?',
      a: 'Yes. Kinetix is independently audited for SOC2 Type II, ISO 27001, HIPAA, and GDPR compliance. All data in transit is encrypted with quantum-resistant TLS 1.3, and data at rest is secured via AES-256 with customer-managed KMS keys.',
    },
    {
      q: 'Can we connect directly to private databases inside AWS VPC or GCP Cloud SQL?',
      a: 'Absolutely. Enterprise Core tiers include zero-latency direct VPC peering, private wire tunnels, and mutual TLS connections with zero egress markup fees.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 md:py-36 bg-obsidian-dark border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Badge variant="magenta" pulse>
            CLEAR ANSWERS // ZERO BULLSHIT
          </Badge>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-bone leading-[0.95]">
            FREQUENTLY PROBED{' '}
            <span className="text-transparent text-stroke-magenta">TECHNICAL</span>{' '}
            <span className="text-magenta">TRUTHS.</span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg">
            Everything you need to know about migrating from archaic infrastructure to Kinetix.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-lime/60 bg-surface/90 shadow-[0_0_30px_rgba(204,255,0,0.1)]'
                    : 'border-white/10 bg-obsidian hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 select-none cursor-pointer"
                  data-cursor-text={isOpen ? 'CLOSE' : 'OPEN'}
                >
                  <span className="font-display font-bold text-lg sm:text-xl text-bone tracking-tight">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                      isOpen
                        ? 'border-lime text-lime bg-lime/10'
                        : 'border-white/20 text-muted hover:text-bone'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-muted font-sans leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-surface/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-bold text-bone text-base">
              Have unique latency constraints or hardware requirements?
            </h4>
            <p className="font-mono text-xs text-muted mt-1">
              Talk directly with our distributed systems engineering team.
            </p>
          </div>
          <a
            href="mailto:engineering@kinetix.ai"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-lime hover:underline font-bold tracking-wider uppercase flex-shrink-0"
            data-cursor-text="CONTACT"
          >
            <span>JOIN DISCORD WAR ROOM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
