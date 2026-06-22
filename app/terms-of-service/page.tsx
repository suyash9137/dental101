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

export default function TermsOfService() {
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
              Terms of Service
            </h1>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial={false}
            animate={true}
            className="space-y-8"
          >
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Acceptance of Terms
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                By accessing and using the SmileCraft Dental website, you agree to comply with and be bound by these Terms of Service. If you do not agree to any part of these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Use of Our Website
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                You may use our website for lawful purposes only. You agree not to use our website for any illegal or unauthorized purpose, including violating any laws in your jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Intellectual Property
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                The content on our website, including text, graphics, logos, images, and software, is the property of SmileCraft Dental or its content suppliers and is protected by international copyright laws.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Our website is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted or error-free.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Limitation of Liability
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                To the maximum extent permitted by law, SmileCraft Dental shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Governing Law
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Changes to Terms
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Contact Us
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                If you have any questions about these Terms of Service, please contact us at: legal@smilecraft.com
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-outline-variant/20">
              <p className="font-caption text-caption text-on-surface-variant/60">
                Last updated: June 22, 2026
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}