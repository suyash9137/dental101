'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyWhatsApp from '@/components/sticky-whatsapp';

// Variants for animations
const fadeUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const bounce: Variants = {
  initial: { scale: 0.5, rotate: -15 },
  animate: {
    scale: [0.5, 1.1, 0.9, 1],
    rotate: [-15, 0, 5, 0],
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

export default function NotFound() {
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header scrolled={headerScrolled} />
      <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="text-center px-6"
        >
          <motion.div
            variants={bounce}
            initial={false}
            animate={true}
            className="inline-block mb-8"
          >
            <span className="material-symbols-outlined text-6xl text-primary/20">
              error
            </span>
          </motion.div>

          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
            Page Not Found
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            We're sorry, but the page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="font-label-bold text-label-bold bg-primary text-on-primary rounded-full px-8 py-4 hover:bg-primary-container transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
            >
              Return to Homepage
              <span className="material-symbols-outlined text-sm">home</span>
            </Link>

            <Link
              href="/book-appointment"
              className="font-label-bold text-label-bold bg-surface border border-outline-variant text-primary rounded-full px-8 py-4 hover:bg-surface-container-low transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              Schedule Appointment
              <span className="material-symbols-outlined text-sm">calendar_today</span>
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}