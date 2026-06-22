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

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                Introduction
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                SmileCraft Dental ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, request appointments, or otherwise interact with us.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Information We Collect
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We may collect personal information such as your name, email address, phone number, address, and other details when you voluntarily submit them through our contact forms, appointment requests, or newsletter sign-ups.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                How We Use Your Information
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We use your information to: respond to your inquiries, schedule appointments, provide dental care information, send appointment reminders, improve our website and services, and comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Sharing Your Information
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted third-party service providers who assist us in operating our website and providing services, provided they agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Data Security
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Your Rights
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                You have the right to: access your personal information, request correction of inaccurate data, request deletion of your personal information, and object to or restrict certain uses of your information.
              </p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Contact Us
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                If you have any questions about this Privacy Policy, please contact us at: privacy@smilecraft.com
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