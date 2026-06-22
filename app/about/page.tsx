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

const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
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

export default function About() {
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
      <main className="min-h-[calc(100vh-4rem)]">
        {/* Hero Section */}
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="pt-section-padding-mobile md:pt-section-padding-desktop pb-section-padding-mobile md:pb-section-padding-desktop px-4 md:px-6 overflow-hidden flex items-center min-h-[618px]"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="bg-cover bg-center w-full h-full opacity-40" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/20"></div>
          </div>

          <div className="relative z-10 max-w-container-max mx-auto w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed/30 rounded-full mb-6">
                <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                <span className="font-label-bold text-caption text-primary">OUR STORY</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                About SmileCraft Dental
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                Our journey began with a simple vision: to create a dental clinic where world-class expertise meets genuine care and comfort.
              </p>
              <a
                href="/book-appointment"
                className="bg-primary text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-full text-center hover:bg-primary/90 transition-colors"
              >
                Begin Your Journey
              </a>
            </div>
          </div>
        </motion.div>

        {/* Our Story Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-4 md:px-6 bg-surface-bright">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Our Story
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Founded in 2010 by Dr. Priya Sharma, SmileCraft Dental started as a small practice with a big dream: to redefine what dental care could be in Mumbai. What began as a single-doctor clinic has grown into a multi-specialty practice while maintaining our core values of personalized attention and uncompromising quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Image */}
              <motion.div
                variants={fadeUp}
                initial={false}
                animate={true}
                className="hidden md:block"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-outline-variant/20">
                  <img
                    alt="Founder Dr. Priya Sharma interacting with patients"
                    className="w-full h-auto object-cover"
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded-xl pointer-events-none"></div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={fadeUp}
                initial={false}
                animate={true}
                className="space-y-6"
              >
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                  Our Mission
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  To provide exceptional dental care that enhances both oral health and overall well-being, delivered with compassion, integrity, and clinical excellence.
                </p>

                <h3 className="font-headline-sm text-headline-sm text-primary mb-3 mt-6">
                  Our Values
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">favorite</span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Patient-Centered Care
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">science</span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Clinical Excellence
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">security</span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Trust & Transparency
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">auto_awesome</span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Aesthetic Precision
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">eco</span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Sustainable Practices
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-4 md:px-6 bg-surface">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Why Choose SmileCraft
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Discover what makes our approach to dental care unique and effective.
              </p>
            </div>

            <div className="grid gap-8">
              {/* Reason 1 */}
              <motion.div
                key="reason1"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">verified</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      Expert-Led Care
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Our team includes specialists with advanced training in cosmetic dentistry, implantology, orthodontics, and more. We invest continuously in education to bring you the latest advancements in dental care.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Reason 2 */}
              <motion.div
                key="reason2"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">auto_awesome</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      Artistry & Precision
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      We combine clinical expertise with artistic vision to create smiles that are not only healthy but also beautifully natural-looking. Every treatment plan is customized to your unique facial features and goals.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Reason 3 */}
              <motion.div
                key="reason3"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">healing</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      Comfort-Focused Environment
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      From our calming waiting area to our gentle techniques, we prioritize your comfort at every step. We offer amenities like noise-canceling headphones, warm blankets, and sedation options for anxious patients.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Reason 4 */}
              <motion.div
                key="reason4"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">receipt_long</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                      Transparent Communication
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      We believe in clear, honest communication about treatment options, costs, and expected outcomes. You'll never feel pressured or confused about your dental care decisions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="py-section-padding-mobile md:py-section-padding-desktop bg-primary text-on-primary relative overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

          <div className="max-w-container-max mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="font-headline-md text-headline-md mb-6 max-w-2xl mx-auto">
              Ready to Experience Exceptional Dental Care?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-xl mx-auto">
              Join the thousands of patients who trust SmileCraft Dental for their oral health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-appointment"
                className="font-label-bold text-label-bold bg-white text-primary rounded-full px-8 py-4 hover:bg-surface transition-colors shadow-lg text-center"
              >
                Schedule Your Consultation
              </a>
              <a
                href="tel:+15551234567"
                className="font-label-bold text-label-bold bg-transparent border border-white/30 text-white rounded-full px-8 py-4 hover:bg-white/10 transition-colors text-center"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}