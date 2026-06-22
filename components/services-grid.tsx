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

const hoverLift: Variants = {
  initial: {},
  animate: {
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
};

export default function ServicesGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  const services = [
    {
      title: 'Cosmetic Dentistry',
      description: 'Veneers, professional whitening, and aesthetic bonding for a flawless smile.',
      icon: 'auto_awesome',
      href: '/services/cosmetic',
    },
    {
      title: 'Dental Implants',
      description: 'Permanent, natural-looking tooth replacement with precision surgical placement.',
      icon: 'planet',
      href: '/services/implants',
    },
    {
      title: 'Orthodontics',
      description: 'Clear aligners and modern braces for precise, comfortable bite correction.',
      icon: 'orthopedics',
      href: '/services/orthodontics',
    },
    {
      title: 'General Care',
      description: 'Preventative hygiene, thorough exams, and restorative treatments.',
      icon: 'health_and_safety',
      href: '/services/general',
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isVisible ? undefined : { opacity: 0 }}
      className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-bright"
    >
      <div className="max-w-container-max mx-auto px-4 md:px-6">
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={isVisible ? "animate" : "initial"}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-headline-md text-headline-md text-primary mb-4">
            Comprehensive Dental Solutions
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Tailored treatments utilizing state-of-the-art technology for optimal oral health and aesthetic perfection.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial={false}
          animate={isVisible ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={staggerChild}
              initial={false}
              animate={isVisible ? "animate" : "initial"}
              className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-full bg-secondary-fixed/50 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {service.icon}
                </span>
              </div>

              <h3 className="font-headline-sm text-headline-sm text-primary mb-3 flex-grow">
                {service.title}
              </h3>

              <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="font-label-bold text-label-bold text-primary group-hover:text-primary-container inline-flex items-center gap-1 transition-colors mt-auto"
              >
                Learn More
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}