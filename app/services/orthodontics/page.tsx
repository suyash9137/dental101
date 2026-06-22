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

export default function Orthodontics() {
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
            <div className="bg-cover bg-center w-full h-full opacity-40" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/20"></div>
          </div>

          <div className="relative z-10 max-w-container-max mx-auto w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed/30 rounded-full mb-6">
                <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                <span className="font-label-bold text-caption text-primary">ORTHODONTIC EXCELLENCE</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                Orthodontics & Clear Aligners
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                Achieve a perfectly aligned smile discreetly with state-of-the-art orthodontic solutions.
              </p>
              <a
                href="/book-appointment"
                className="bg-primary text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-full text-center hover:bg-primary/90 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </motion.div>

        {/* Services Overview */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-4 md:px-6 bg-surface-bright">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Our Orthodontic Services
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Comprehensive orthodontic solutions for children, teens, and adults.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Invisalign Clear Aligners */}
              <motion.div
                key="invisalign"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">square_foot</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Invisalign® Clear Aligners
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Virtually invisible, removable aligners that gradually straighten teeth without the brackets and wires of traditional braces.
                    </p>
                    <a
                      href="/book-appointment"
                      className="font-label-bold text-label-bold text-primary group-hover:text-primary-container inline-flex items-center gap-1 transition-colors"
                    >
                      Learn More
                      <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Traditional Braces */}
              <motion.div
                key="braces"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">straighten</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Traditional Braces
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Time-tested orthodontic treatment using advanced bracket systems for precise tooth movement and bite correction.
                    </p>
                    <a
                      href="/book-appointment"
                      className="font-label-bold text-label-bold text-primary group-hover:text-primary-container inline-flex items-center gap-1 transition-colors"
                    >
                      Learn More
                      <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Lingual Braces */}
              <motion.div
                key="lingual"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outiled">rotate_left</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Lingual Braces
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Braces placed on the inner surface of teeth for completely hidden orthodontic treatment.
                    </p>
                    <a
                      href="/book-appointment"
                      className="font-label-bold text-label-bold text-primary group-hover:text-primary-container inline-flex items-center gap-1 transition-colors"
                    >
                      Learn More
                      <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Retainers */}
              <motion.div
                key="retainers"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outiled">repeat</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Retainers & Aftercare
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Custom retainers to maintain your newly aligned smile and prevent teeth from shifting back to their original positions.
                    </p>
                    <a
                      href="/book-appointment"
                      className="font-label-bold text-label-bold text-primary group-hover:text-primary-container inline-flex items-center gap-1 transition-colors"
                    >
                      Learn More
                      <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="py-section-padding-mobile md:py-section-padding-desktop px-4 md:px-6 bg-surface"
        >
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                How Invisalign Works
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface.variant max-w-2xl mx-auto">
                The clear path to a straighter smile with our advanced digital treatment planning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Side: Image */}
              <motion.div
                key="process-image"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="hidden md:block"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-outline-variant/20">
                  <img
                    alt="Invisalign treatment process illustration"
                    className="w-full h-48 object-cover"
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
                  >
                  </img>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-on-primary/0 hover:bg-black/30 hover:text-on-primary/100 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <span className="material-symbols-outlined text-xl">zoom_out_map</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Side: Steps */}
              <motion.div
                key="process-steps"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="space-y-6"
              >
                {/* Step 1 */}
                <motion.div
                  key="step1"
                  variants={staggerChild}
                  initial={false}
                  animate={true}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outiled">1</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Digital Scan
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface.variant">
                      We use the iTero® scanner to create a precise 3D digital model of your teeth—no messy impressions needed.
                    </p>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  key="step2"
                  variants={staggerChild}
                  initial={false}
                  animate={true}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outiled">2</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Custom Treatment Plan
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface.variant">
                      Using ClinCheck® software, we map out your precise tooth movements and show you your expected results before treatment even begins.
                    </p>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  key="step3"
                  variants={staggerChild}
                  initial={false}
                  animate={true}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outiled">3</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Custom Aligners
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface.variant">
                      Your personalized series of clear aligners is manufactured to move your teeth gradually according to your treatment plan.
                    </p>
                  </div>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  key="step4"
                  variants={staggerChild}
                  initial={false}
                  animate={true}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outiled">4</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Regular Check-Ups
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface.variant">
                      Brief visits every 6-8 weeks to monitor progress and receive your next sets of aligners.
                    </p>
                  </div>
                </motion.div>

                {/* Step 5 */}
                <motion.div
                  key="step5"
                  variants={staggerChild}
                  initial={false}
                  animate={true}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outiled">5</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Beautiful Results
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface.variant">
                      Enjoy your newly aligned smile and maintain it with custom retainers as prescribed by your orthodontist.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Before & After */}
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="py-section-padding-mobile md:py-section-padding-desktop px-4 md:px-6 bg-surface"
        >
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                See the Transformation
              </h2>
              <p className="font-body-lg text-body-lg text_on_surface.variant max-w-2xl mx-auto">
                Actual patient results from our orthodontic treatments.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Before/After 1 */}
              <motion.div
                key="ba1"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="relative rounded-xl overflow-hidden shadow-lg border border-outline-variant/20"
              >
                <img
                  alt="Before and after Invisalign treatment for crowded teeth"
                  className="w-full h-48 object-cover"
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
                >
                </img>
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 text_on_primary/0 hover:bg-black/30 hover:text_on_primary/100 transition_all duration-300 opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-xl">zoom_out_map</span>
                </div>
              </motion.div>

              {/* Before/After 2 */}
              <motion.div
                key="ba2"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="relative rounded-xl overflow-hidden shadow-lg border border-outline-variant/20"
              >
                <img
                  alt="Before and after traditional braces treatment for overbite correction"
                  className="w-full h-48 object-cover"
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80"
                >
                </img>
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 text_on_primary/0 hover:bg-black/30 hover:text_on_primary/100 transition_all duration-300 opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-xl">zoom_out_map</span>
                </div>
              </motion.div>

              {/* Before/After 3 */}
              <motion.div
                key="ba3"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="relative rounded-xl overflow-hidden shadow-lg border border-outline-variant/20"
              >
                <img
                  alt="Before and after lingual braces treatment"
                  className="w-full h-48 object-cover"
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
                >
                </img>
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 text_on_primary/0 hover:bg-black/30 hover:text_on_primary/100 transition_all duration-300 opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-xl">zoom_out_map</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
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
              Ready for a Straighter Smile?
            </h2>
            <p className="font-body-lg text-body-lg text_on_primary/80 mb-10 max-w-xl mx-auto">
              Discover which orthodontic solution is right for your smile goals and lifestyle.
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