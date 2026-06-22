'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

// Variants for animations
const fadeUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerChild: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function TrustMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isVisible ? undefined : { opacity: 0 }}
      className="py-12 bg-surface border-y border-surface-container-low relative z-20 -mt-8"
    >
      <div className="max-w-container-max mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial={false}
          animate={isVisible ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20"
        >
          {/* Patient Rating */}
          <motion.div
            variants={staggerChild}
            initial={false}
            animate={isVisible ? "animate" : "initial"}
            className="flex flex-col items-center text-center pt-4 md:pt-0"
          >
            <span className="font-display-lg-mobile text-display-lg-mobile text-primary font-semibold">
              4.9/5
            </span>
            <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mt-1">
              Patient Rating
            </span>
          </motion.div>

          {/* Smiles Created */}
          <motion.div
            variants={staggerChild}
            initial={false}
            animate={isVisible ? "animate" : "initial"}
            className="flex flex-col items-center text-center pt-8 md:pt-0"
          >
            <span className="font-display-lg-mobile text-display-lg-mobile text-primary font-semibold">
              10k+
            </span>
            <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mt-1">
              Smiles Created
            </span>
          </motion.div>

          {/* Years Excellence */}
          <motion.div
            variants={staggerChild}
            initial={false}
            animate={isVisible ? "animate" : "initial"}
            className="flex flex-col items-center text-center pt-8 md:pt-0"
          >
            <span className="font-display-lg-mobile text-display-lg-mobile text-primary font-semibold">
              20+
            </span>
            <span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mt-1">
              Years Excellence
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}