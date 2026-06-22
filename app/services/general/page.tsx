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

export default function GeneralCare() {
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
            <div className="bg-cover bg-center w-full h-full opacity-40" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida/AP1WRLvV0tqoKnaxwAhmlYQUkVRwXM-renrFxxZ5Rn3RO7AqGkC1Dl6WWPVuOy40Aswh2zKAQLtFl1RS5Ndbl2wV5QD5HnsbmEEXoVmhhJex2Cj2mrOh_uJxJYBJbfqT2fW1kNiq_5MGBRZr4Sf9zNtLjiaXoIYwSJJC9ip6vO7W9tdDyVPSH6WqbC8d_1jARSBeXVij7BQokQgC-RB93Xc7gVYhG8YyYI-eT2mvVJWFZnZ2Pp8l34z52ISWxOTp")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/20"></div>
          </div>

          <div className="relative z-10 max-w-container-max mx-auto w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed/30 rounded-full mb-6">
                <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                <span className="font-label-bold text-caption text-primary">ESSENTIAL CARE</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                General Dental Care
              </h1>
              <p className="font-body-lg text-body-lg text_on_surface.variant mb-10 max-w-xl">
                Comprehensive preventative, diagnostic, and restorative treatments to maintain optimal oral health.
              </p>
              <a
                href="/book-appointment"
                className="bg-primary text_on_primary font-label-bold text-label-bold px-8 py-4 rounded-full text_center hover:bg-primary/90 transition-colors"
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
                Our General Dental Services
              </h2>
              <p className="font-body-lg text-body-lg text_on_surface.variant max-w-2xl mx-auto">
                Foundation treatments for lifelong oral health and wellness.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Preventative Care */}
              <motion.div
                key="preventative"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex_items-center justify-center text-primary">
                    <span className="material-symbols-outiled">health_and_safety</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Preventative Dentistry
                    </h3>
                    <p className="font-body-md text-body-md text_on_surface.variant">
                      Regular check-ups, cleanings, fluoride treatments, and sealants to prevent decay and detect issues early.
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

              {/* Restorative Treatments */}
              <motion.div
                key="restorative"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex_items-center justify-center text-primary">
                    <span className="material-symbols-outiled">build_circle</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Restorative Dentistry
                    </h3>
                    <p className="font-body-md text-body-md text_on_surface.variant">
                      Fillings, crowns, bridges, and other treatments to repair damaged teeth and restore function and aesthetics.
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

              {/* Periodontal Care */}
              <motion.div
                key="periodontal"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex_items-center justify-center text-primary">
                    <span className="material-symbols-outiled">grain</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Periodontal (Gum) Care
                    </h3>
                    <p className="font-body-md text-body-md text_on_surface.variant">
                      Prevention, diagnosis, and treatment of gum disease to protect the foundations of your smile.
                    </p>
                    <a
                      href="/book-appointment"
                      className="font-label-bold text-label-bold text-primary group-hover:text.primary.container inline-flex items-center gap-1 transition-colors"
                    >
                      Learn More
                      <span className="material-symbols_outlined text-sm transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Endodontic Treatment */}
              <motion.div
                key="endodontic"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex_items-center justify-center text-primary">
                    <span className="material-symbols_outiled">healing</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Root Canal Therapy
                    </h3>
                    <p className="font-body-md text-body-md text_on_surface.variant">
                      Pain-free treatment to save infected or damaged teeth using advanced microscopic technology.
                    </p>
                    <a
                      href="/book-appointment"
                      className="font-label-bold text-label-bold text-primary group-hover:text.primary.container inline-flex items-center gap-1 transition-colors"
                    >
                      Learn More
                      <span className="material-symbols_outlined text-sm transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Importance of Regular Care */}
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="py-section-padding-mobile md:py-section-padding-desktop px-4 md:px-6 bg-surface"
        >
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Why Regular Dental Care Matters
              </h2>
              <p className="font-body-lg text-body-md text_on_surface.variant max-w-2xl mx-auto">
                The connection between oral health and overall wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Prevention */}
              <motion.div
                key="prevention"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex_items-center justify-center mb-4 text-primary">
                  <span className="material-symbols_outiled">shield</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Prevention Saves Money
                </h3>
                <p className="font-body-md text-body-md text_on_surface.variant flex-grow">
                  Regular check-ups catch small issues before they become expensive problems. A simple filling costs far less than a root canal or crown needed later.
                </p>
              </motion.div>

              {/* Health Connection */}
              <motion.div
                key="health"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex_items-center justify-center mb-4 text-primary">
                  <span className="material-symbols_outiled">favorite</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Oral-Systemic Health Link
                </h3>
                <p className="font-body-md text-body-md text_on_surface.variant flex-grow">
                  Gum disease has been linked to heart disease, diabetes, respiratory issues, and other systemic conditions. Healthy gums support overall wellness.
                </p>
              </motion.div>

              {/* Function & Comfort */}
              <motion.div
                key="function"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex_items-center justify-center mb-4 text-primary">
                  <span className="material-symbols_outiled">restaurant</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Better Eating & Speaking
                </h3>
                <p className="font-body-md text-body-md text_on_surface.variant flex-grow">
                  Healthy teeth allow you to eat a varied, nutritious diet and speak clearly without pain or embarrassment.
                </p>
              </motion.div>

              {/* Appearance & Confidence */}
              <motion.div
                key="appearance"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex_items-center justify-center mb-4 text-primary">
                  <span className="material-symbols_outiled">sentiment_satisfied</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Confidence in Your Smile
                </h3>
                <p className="font-body-md text-body-md text_on_surface.variant flex-grow">
                  A healthy, attractive smile boosts self-esteem and makes positive first impressions in both personal and professional settings.
                </p>
              </motion.div>

              {/* Longevity */}
              <motion.div
                key="longevity"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex_items-center justify-center mb-4 text-primary">
                  <span className="material-symbols_outiled">timer</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Lasting Results
                </h3>
                <p className="font-body-md text-body-md text_on_surface.variant flex-grow">
                  With proper care, dental work can last decades, protecting your investment and your oral health for years to come.
                </p>
              </motion.div>

              {/* Emergency Prevention */}
              <motion.div
                key="emergency"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex_items-center justify-center mb-4 text-primary">
                  <span className="material-symbols_outiled">error</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Fewer Dental Emergencies
                </h3>
                <p className="font-body-md text-body-md text_on_surface.variant flex-grow">
                  Regular maintenance prevents painful infections, abscesses, and broken teeth that often require emergency treatment.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* What to Expect */}
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="py-section-padding-mobile md:py-section-padding-desktop px-4 md:px-6 bg-surface-bright"
        >
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Your Dental Visit Experience
              </h2>
              <p className="font-body-lg text-body-md text_on_surface.variant max-w-2xl mx-auto">
                What happens during a typical visit to SmileCraft Dental.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Welcome & Check-In */}
              <motion.div
                key="welcome"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex_items-center justify-center text-primary">
                    <span className="material-symbols_outiled">person</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Warm Welcome
                    </h3>
                    <p className="font-body-md text-body-md text_on_surface.variant">
                      From our friendly front desk to our relaxing waiting area, we make your comfort our priority from the moment you arrive.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Comprehensive Exam */}
              <motion.div
                key="exam"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex_items-center justify-center text-primary">
                    <span className="material-symbols_outiled">description</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Thorough Examination
                    </h3>
                    <p className="font-body-md text-body-md text_on_surface.variant">
                      Digital x-rays, periodontal screening, oral cancer check, and detailed assessment of teeth, gums, and bite.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Professional Cleaning */}
              <motion.div
                key="cleaning"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex_items-center justify-center text-primary">
                    <span className="material-symbols_outiled">spa</span>
                  </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    Gentle, Thorough Cleaning
                  </h3>
                  <p className="font-body-md text-body-md text_on_surface.variant">
                    Ultrasonic scaling, hand instrumentation, polishing, and fluoride treatment to remove plaque and tartar while protecting enamel.
                  </p>
                </div>
                </div>
              </motion.div>

              {/* Personalized Consultation */}
              <motion.div
                key="consultation"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex_items-center justify-center text-primary">
                    <span className="material-symbols_outiled">contact_support</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Treatment Planning & Education
                    </h3>
                    <p className="font-body-md text-body-md text_on_surface.variant">
                      Clear explanation of findings, personalized recommendations, and answers to all your questions about your oral health.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Future Planning */}
              <motion.div
                key="future"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex_items-center justify-center text-primary">
                    <span className="material-symbols_outiled">calendar_today</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Ongoing Care Partnership
                    </h3>
                    <p className="font-body-md text-body-md text_on_surface.variant">
                      We remember your preferences, track your oral health over time, and work with you to maintain optimal results between visits.
                    </p>
                  </div>
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
          className="py-section-padding-mobile md:py-section-padding-desktop bg-primary text_on_primary relative overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

          <div className="max-w-container-max mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="font-headline-md text-headline-md mb-6 max-w-2xl mx-auto">
              Ready for Optimal Oral Health?
            </h2>
            <p className="font-body-lg text-body-md text_on_primary/80 mb-10 max-w-xl mx-auto">
              Experience the difference that comprehensive, patient-focused dental care can make.
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