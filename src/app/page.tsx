import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { LogoTicker } from '@/components/sections/LogoTicker';
import { ProblemAgitate } from '@/components/sections/ProblemAgitate';
import { FeatureBento } from '@/components/sections/FeatureBento';
import { Testimonials } from '@/components/sections/Testimonials';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Pricing } from '@/components/sections/Pricing';
import { Faq } from '@/components/sections/Faq';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-void">
      <Navbar />
      <Hero />
      <LogoTicker />
      <ProblemAgitate />
      <FeatureBento />
      <Testimonials />
      <HowItWorks />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
