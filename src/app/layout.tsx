import type { Metadata } from 'next';
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KINETIX // Autonomous Compute at Escape Velocity',
  description:
    'The modern maximalist autonomous infrastructure engine for high-velocity AI engineering teams. Sub-5ms latency, zero cold starts, and zero idle memory drain.',
  keywords: [
    'AI compute',
    'autonomous infrastructure',
    'edge latency',
    'zero cold start',
    'cloud optimization',
    'Kinetix',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jakarta.variable} ${jetbrains.variable} dark`}
    >
      <body className="bg-void text-bone antialiased selection:bg-lime selection:text-void min-h-screen overflow-x-hidden font-sans">
        <SmoothScrollProvider>
          <CustomCursor />
          <NoiseOverlay />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
