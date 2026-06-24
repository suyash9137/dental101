'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Variants for animations
const fadeUp: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const pulseStrong: Variants = {
  initial: {},
  animate: {
    scale: [1, 1.08, 1],
    transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
  }
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
          animate={isVisible ? "animate" : "initial"}
          className="font-headline-md text-headline-md mb-6 max-w-2xl mx-auto text-gradient-primary"
        >
          Ready to Transform Your Smile?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial={false}
          animate={isVisible ? "animate" : "initial"}
          className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-xl mx-auto"
        >
          Schedule a private consultation today and take the first step towards achieving optimal oral health and aesthetic perfection.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial={false}
          animate={isVisible ? "animate" : "initial"}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/book-appointment"
            className="font-label-bold text-label-bold bg-white text-primary rounded-full px-8 py-4 hover:bg-surface transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
          >
            Request Appointment
            <motion.span
              whileHover={{ scale: 1.08 }}
              className="material-symbols-outlined text-sm inline-block"
            >
              arrow_forward
            </motion.span>
          </Link>

          <Link
            href="tel:+15551234567"
            className="font-label-bold text-label-bold bg-transparent border border-white/30 text-white rounded-full px-8 py-4 hover:bg-white/10 transition-all duration-500 text-center flex items-center justify-center gap-2"
          >
            <motion.span
              whileHover={{ rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="material-symbols-outlined text-primary text-xl"
            >
              phone
            </motion.span>
            Call (555) 123-4567
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
