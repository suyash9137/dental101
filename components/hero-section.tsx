'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

// Variants for animations
const fadeUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const slideUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerChild: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HeroSection() {
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
      className="relative min-h-[85vh] flex items-center pt-8 pb-16 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-transparent z-10 md:w-3/4"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface z-10"></div>
        <img
          alt="Luxury dental clinic interior with modern equipment and calming atmosphere"
          className="w-full h-full object-cover object-right"
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80"
        />
      </div>

      <div className="max-w-container-max mx-auto px-4 md:px-6 w-full relative z-20">
        <motion.div
          initial={false}
          animate={isVisible ? undefined : { opacity: 0, y: 20 }}
          className="max-w-2xl"
        >
          {/* Award Badge */}
          <motion.div
            variants={fadeUp}
            initial={false}
            animate={isVisible ? "animate" : "initial"}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-fixed/50 border border-secondary-fixed backdrop-blur-sm mb-6 text-on-secondary-fixed-variant font-label-bold text-label-bold"
          >
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            Award-Winning Precision Care
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial={false}
            animate={isVisible ? "animate" : "initial"}
            className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 text-gradient"
          >
            Compassionate care,<br /> exceptional results.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial={false}
            animate={isVisible ? "animate" : "initial"}
            className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg"
          >
            Experience a new standard of dentistry where clinical expertise meets boutique comfort. We craft lasting, healthy smiles with meticulous attention to detail.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial={false}
            animate={isVisible ? "animate" : "initial"}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/book-appointment"
              className="font-label-bold text-label-bold bg-primary text-on-primary rounded-full px-8 py-4 hover:bg-primary-container transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
            >
              Book Appointment
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>

            <button
              className="font-label-bold text-label-bold bg-surface border border-outline-variant text-primary rounded-full px-8 py-4 hover:bg-surface-container-low transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-primary text-xl">play_circle</span>
              See how we work
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Import Link at the bottom to avoid circular reference issues
import Link from 'next/link';