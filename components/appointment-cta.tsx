'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Variants for animations
const fadeUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const pulse: Variants = {
  initial: {},
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function AppointmentCTA() {
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
      className="py-section-padding-mobile md:py-section-padding-desktop bg-primary text-on-primary relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-container-max mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.h2
          variants={fadeUp}
          initial={false}
          animate={isVisible}
          className="font-headline-md text-headline-md mb-6 max-w-2xl mx-auto"
        >
          Ready to Transform Your Smile?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial={false}
          animate={isVisible}
          className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-xl mx-auto"
        >
          Schedule a private consultation today and take the first step towards achieving optimal oral health and aesthetic perfection.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial={false}
          animate={isVisible}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/book-appointment"
            className="font-label-bold text-label-bold bg-white text-primary rounded-full px-8 py-4 hover:bg-surface transition-colors shadow-lg text-center"
          >
            Request Appointment
          </Link>

          <Link
            href="tel:+15551234567"
            className="font-label-bold text-label-bold bg-transparent border border-white/30 text-white rounded-full px-8 py-4 hover:bg-white/10 transition-colors text-center"
          >
            Call (555) 123-4567
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}