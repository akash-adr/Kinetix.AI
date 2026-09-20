import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#07070A',
        obsidian: {
          DEFAULT: '#0E0E14',
          light: '#13131D',
          dark: '#0A0A0F',
        },
        surface: {
          DEFAULT: '#161622',
          elevated: '#1E1E2E',
          active: '#27273C',
        },
        lime: {
          DEFAULT: '#CCFF00',
          hover: '#DDFF33',
          glow: 'rgba(204, 255, 0, 0.35)',
          muted: 'rgba(204, 255, 0, 0.12)',
        },
        magenta: {
          DEFAULT: '#FF007F',
          hover: '#FF3399',
          glow: 'rgba(255, 0, 127, 0.35)',
          muted: 'rgba(255, 0, 127, 0.12)',
        },
        cyan: {
          DEFAULT: '#00F0FF',
          hover: '#33F3FF',
          glow: 'rgba(0, 240, 255, 0.35)',
          muted: 'rgba(0, 240, 255, 0.12)',
        },
        bone: '#F4F4EE',
        muted: '#9E9EA8',
        'muted-dark': '#52525E',
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        widest: '0.2em',
      },
      boxShadow: {
        'lime-glow': '0 0 50px -10px rgba(204, 255, 0, 0.4)',
        'magenta-glow': '0 0 50px -10px rgba(255, 0, 127, 0.4)',
        'cyan-glow': '0 0 50px -10px rgba(0, 240, 255, 0.4)',
        'multi-glow': '0 0 60px -15px rgba(204, 255, 0, 0.25), 0 0 60px -15px rgba(255, 0, 127, 0.25)',
        'card-hard': '6px 6px 0px 0px rgba(204, 255, 0, 0.9)',
        'card-hard-magenta': '6px 6px 0px 0px rgba(255, 0, 127, 0.9)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
