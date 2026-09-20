'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap, Terminal, Sparkles } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { Badge } from '../ui/Badge';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Overview' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'features', label: 'Capabilities' },
  { id: 'process', label: 'Pipeline' },
  { id: 'testimonials', label: 'Proof' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  // Scroll position and directional hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if past top threshold for capsule transformation
      setIsScrolled(currentScrollY > 80);

      // Hide navbar when scrolling down quickly, show when scrolling up
      if (currentScrollY > 200 && currentScrollY > lastScrollY.current + 8) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current - 4 || currentScrollY <= 80) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to accurately track active section in viewport
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Navbar Wrapper with Directional Slide Hide/Show */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isHidden ? -100 : 0,
          opacity: 1,
        }}
        transition={{
          y: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.3 },
        }}
        className={cn(
          'fixed left-0 right-0 z-40 flex justify-center pointer-events-none transition-all duration-500 ease-out',
          isScrolled ? 'top-3 sm:top-5 px-3 sm:px-6' : 'top-0 px-4 sm:px-8 py-5'
        )}
      >
        {/* Animated Capsule / Pill Bar Container */}
        <motion.div
          layout
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 28,
            mass: 0.6,
          }}
          className={cn(
            'pointer-events-auto flex items-center justify-between transition-all duration-500',
            isScrolled
              ? 'w-full max-w-5xl rounded-full border border-white/15 bg-obsidian/85 backdrop-blur-2xl px-4 py-2 sm:px-5 sm:py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(204,255,0,0.1)]'
              : 'w-full max-w-7xl rounded-none border-transparent bg-transparent px-0 py-0 shadow-none'
          )}
        >
          {/* Brand Logo with Idle Glow and Hover Dynamics */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            data-cursor-text="KINETIX"
            className="group flex items-center gap-2.5 select-none cursor-pointer flex-shrink-0"
          >
            {/* Animated Logo Icon */}
            <div
              className={cn(
                'relative flex items-center justify-center rounded-xl bg-surface border transition-all duration-300',
                isScrolled
                  ? 'w-8 h-8 border-lime/40 group-hover:border-lime shadow-[0_0_12px_rgba(204,255,0,0.25)]'
                  : 'w-10 h-10 border-lime/30 group-hover:border-lime shadow-[0_0_16px_rgba(204,255,0,0.2)]'
              )}
            >
              <span className="font-display font-black text-lime tracking-tighter transition-transform duration-300 group-hover:scale-110">
                K
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-magenta animate-ping opacity-80" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-magenta shadow-[0_0_6px_#FF007F]" />
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-bone group-hover:text-lime transition-colors leading-none">
                KINETIX<span className="text-lime">.</span>AI
              </span>
              {!isScrolled && (
                <span className="font-mono text-[9px] tracking-widest text-muted uppercase mt-0.5 hidden sm:block">
                  HYPER-SCALE ENGINE
                </span>
              )}
            </div>
          </a>

          {/* Desktop Nav Items with Sliding Pill Indicator & Cyber Hover Brackets */}
          <nav className="hidden lg:flex items-center gap-1 relative px-2 py-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredLink === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  onMouseEnter={() => setHoveredLink(item.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  data-cursor-text="NAV"
                  className={cn(
                    'relative px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors duration-200 select-none flex items-center',
                    isActive ? 'text-lime font-bold' : 'text-muted hover:text-bone font-medium'
                  )}
                >
                  {/* Sliding Background Pill Behind Active Section */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-full bg-lime/15 border border-lime/35 shadow-[0_0_15px_rgba(204,255,0,0.2)]"
                    />
                  )}

                  {/* Kinetic Hover Bracket Animations */}
                  <span className="relative z-10 flex items-center gap-1">
                    <motion.span
                      animate={{
                        opacity: isHovered && !isActive ? 1 : 0,
                        x: isHovered && !isActive ? 0 : 4,
                      }}
                      transition={{ duration: 0.15 }}
                      className="text-lime font-mono text-[10px] font-black"
                    >
                      [
                    </motion.span>

                    <span>{item.label}</span>

                    <motion.span
                      animate={{
                        opacity: isHovered && !isActive ? 1 : 0,
                        x: isHovered && !isActive ? 0 : -4,
                      }}
                      transition={{ duration: 0.15 }}
                      className="text-lime font-mono text-[10px] font-black"
                    >
                      ]
                    </motion.span>
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster: Status Badge & Magnetic CTA */}
          <div className="hidden sm:flex items-center gap-3.5 flex-shrink-0">
            {/* Status Indicator (Compact on Pill) */}
            <div
              className={cn(
                'hidden xl:flex items-center gap-2 px-3 py-1 rounded-full border border-lime/30 bg-lime/10 font-mono text-[10px] text-lime uppercase tracking-wider',
                isScrolled ? 'hidden xl:hidden' : 'flex'
              )}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-ping" />
              <span>V4.2 LIVE</span>
            </div>

            {/* High-Contrast Magnetic Button */}
            <MagneticButton
              variant="primary"
              size={isScrolled ? 'sm' : 'sm'}
              cursorLabel="DEPLOY"
              onClick={() => {
                const el = document.getElementById('pricing');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                'gap-1.5 transition-all duration-300 shadow-[0_0_25px_rgba(204,255,0,0.4)]',
                isScrolled ? 'py-1.5 px-4 text-[11px]' : 'py-2 px-5 text-xs'
              )}
            >
              <span>DEPLOY NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Morphing Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 rounded-full border border-white/15 bg-surface/80 flex items-center justify-center text-bone hover:text-lime hover:border-lime/40 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            data-cursor-text={mobileMenuOpen ? 'CLOSE' : 'MENU'}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between items-center">
              {/* Top Bar */}
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { rotate: 45, y: 7, backgroundColor: '#CCFF00' }
                    : { rotate: 0, y: 0, backgroundColor: '#F4F4EE' }
                }
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-0.5 rounded-full origin-center"
              />

              {/* Middle Bar */}
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1, backgroundColor: '#CCFF00' }
                }
                transition={{ duration: 0.2 }}
                className="w-3/4 self-start h-0.5 rounded-full origin-left"
              />

              {/* Bottom Bar */}
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { rotate: -45, y: -7, backgroundColor: '#CCFF00' }
                    : { rotate: 0, y: 0, backgroundColor: '#F4F4EE' }
                }
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-0.5 rounded-full origin-center"
              />
            </div>
          </button>
        </motion.div>
      </motion.header>

      {/* Full-Screen Animated Mobile Menu Takeover (Curtain Clip-path reveal) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 flex flex-col justify-between bg-void/98 backdrop-blur-3xl px-6 pt-28 pb-10 lg:hidden select-none overflow-y-auto"
          >
            {/* Background Ambience Blobs in Mobile Menu */}
            <div className="absolute top-1/4 -right-10 w-72 h-72 bg-lime/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-10 w-72 h-72 bg-magenta/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs text-lime uppercase tracking-widest font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> KINETIX MESH MATRIX
                </span>
                <Badge variant="lime" size="sm" pulse>
                  CONNECTED
                </Badge>
              </div>

              {/* Bold Display Nav Links with Staggered Entrance */}
              <div className="flex flex-col gap-2 pt-2">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + idx * 0.05,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={cn(
                        'group flex items-center justify-between py-3 border-b border-white/5 transition-colors',
                        isActive ? 'text-lime' : 'text-bone hover:text-lime'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-display font-black text-3xl sm:text-4xl tracking-tight uppercase">
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
                        )}
                      </div>
                      <span className="font-mono text-xs text-muted group-hover:text-lime transition-colors">
                        // 0{idx + 1}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Bottom Mobile Action & Telemetry */}
            <div className="relative z-10 flex flex-col gap-4 pt-6 border-t border-white/10 mt-8">
              <MagneticButton
                variant="primary"
                size="lg"
                className="w-full justify-center text-sm py-4"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById('pricing');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>DEPLOY FREE TRIAL</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>

              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-lime" /> SOC2 VERIFIED
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-magenta" /> SUB-5MS SLA
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
