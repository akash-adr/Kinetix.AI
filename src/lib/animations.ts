import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const wordReveal: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: (i: number = 0) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const magneticSpring = {
  type: 'spring',
  damping: 15,
  stiffness: 150,
  mass: 0.1,
};
