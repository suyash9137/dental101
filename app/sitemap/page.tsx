'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyWhatsApp from '@/components/sticky-whatsapp';

// Variants for animations
const fadeUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Sitemap() {
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
      <main className="min-h-[calc(100vh-4rem)] py-12">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeUp}
            initial={false}
            animate={true}
            className="mb-8"
          >
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
              Website Sitemap
            </h1>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial={false}
            animate={true}
            className="space-y-6"
          >
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Main Pages
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a href="/" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/specialists" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    Smile Gallery
                  </a>
                </li>
                <li>
                  <a href="/contact" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/book-appointment" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    Book Appointment
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Service Pages
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a href="/services/cosmetic" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    Cosmetic Dentistry
                  </a>
                </li>
                <li>
                  <a href="/services/implants" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    Dental Implants
                  </a>
                </li>
                <li>
                  <a href="/services/orthodontics" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    Orthodontics
                  </a>
                </li>
                <li>
                  <a href="/services/general" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    General Care
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Legal & Information Pages
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a href="/privacy-policy" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}