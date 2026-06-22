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

export default function Technology() {
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologies = [
    {
      title: 'Digital Imaging & 3D Scanning',
      description: 'Advanced iTero® intraoral scanner and CBCT technology for precise diagnostics and treatment planning.',
      icon: 'memory',
      benefit: 'Eliminates messy impressions, reduces radiation exposure, and provides unprecedented accuracy for crowns, implants, and orthodontic treatments.',
    },
    {
      title: 'Laser Dentistry',
      description: 'Soft and hard tissue lasers for minimally invasive procedures with faster healing and reduced discomfort.',
      icon: 'hdr_on',
      benefit: 'Less bleeding, reduced need for anesthesia, minimal post-operative discomfort, and faster recovery times for gum treatments, cavity preparations, and more.',
    },
    {
      title: 'CAD/CAM Same-Day Crowns',
      description: 'In-house milling technology that creates custom ceramic crowns in a single visit.',
      icon: 'template',
      benefit: 'No temporary crowns, no second visit, and precise, durable restorations created while you wait.',
    },
    {
      title: 'Intraoral Cameras',
      description: 'High-resolution cameras that show you exactly what we see in your mouth.',
      icon: 'photo_camera',
      benefit: 'Enables patient education, early detection of issues, and collaborative treatment planning with visual evidence.',
    },
    {
      title: 'Digital Smile Design',
      description: 'Advanced software that previews your cosmetic treatment results before treatment begins.',
      icon: 'palette',
      benefit: 'See your potential smile transformation with veneers, bonding, or orthodontics before committing to treatment.',
    },
    {
      title: 'Paperless Practice',
      description: 'Fully digital records, scheduling, and communication for efficiency and environmental responsibility.',
      icon: 'save_alt',
      benefit: 'Secure, accessible records, automated appointment reminders, and streamlined insurance processing.',
    },
  ];

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
                <span className="font-label-bold text-caption text-primary">ADVANCED TECHNOLOGY</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                Technology-Enhanced Dental Care
              </h1>
              <p className="font-body-lg text-body-lg text_on_surface.variant mb-10 max-w-xl">
                State-of-the-art technology that enhances precision, comfort, and outcomes for every aspect of your dental care.
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

        {/* Technology Overview */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-4 md:px-6 bg-surface-bright">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Our Advanced Technology
              </h2>
              <p className="font-body-lg text-body-lg text_on_surface.variant max-w-2xl mx-auto">
                Investing in the latest dental technology to provide more accurate diagnoses, less invasive treatments, and superior results.
              </p>
            </div>

            <div className="grid gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  variants={staggerChild}
                  initial={false}
                  animate={true}
                  className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex_items-center justify-center text-primary">
                      <span className="material-symbols-outiled">{tech.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                        {tech.title}
                      </h3>
                      <p className="font-body-md text-body-md text_on_surface.variant">
                        {tech.description}
                      </p>
                      <p className="font-body-md text-body-md text_on_surface.variant text-sm bg-primary/10 text-primary/80 px-2 py-1 rounded">
                        {tech.benefit}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Benefits */}
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="py-section-padding-mobile md:py-section-padding-desktop px-4 md:px-6 bg-surface"
        >
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                How Technology Benefits You
              </h2>
              <p className="font-body-lg text-body-md text_on_surface.variant max-w-2xl mx-auto">
                Advanced technology means better experiences and outcomes for our patients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Accuracy & Precision */}
              <motion.div
                key="accuracy"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex_items-center justify-center mb-4 text-primary">
                  <span className="material-symbols_outiled">target</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Unmatched Accuracy
                </h3>
                <p className="font-body-md text-body-md text_on_surface.variant flex-grow">
                  Digital imaging and 3D planning eliminate guesswork, ensuring precise implant placement, crown fit, and orthodontic tooth movements.
                </p>
              </motion.div>

              {/* Comfort & Convenience */}
              <motion.div
                key="comfort"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex_items-center justify-center mb-4 text-primary">
                  <span className="material-symbols_outiled">spa</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Enhanced Comfort
                </h3>
                <p className="font-body-md text-body-md text_on_surface.variant flex-grow">
                  Laser dentistry means less anesthesia and discomfort. Same-day crowns mean fewer appointments. Digital impressions mean no messy molds.
                </p>
              </motion.div>

              {/* Faster Treatment */}
              <motion.div
                key="speed"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex_items-center justify-center mb-4 text-primary">
                  <span className="material-symbols_outiled">timer_off</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Efficient Treatment
                </h3>
                <p className="font-body-md text-body-md text_on_surface.variant flex-grow">
                  Technology streamlines every step of treatment—from diagnosis to recovery—getting you back to your life faster.
                </p>
              </motion.div>

              {/* Better Communication */}
              <motion.div
                key="communication"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex_items-center justify-center mb-4 text-primary">
                  <span className="material-symbols_outiled">share</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Clear Communication
                </h3>
                <p className="font-body-md text-body-md text_on_surface.variant flex-grow">
                  Visual technology lets you see exactly what we see, understand your treatment options, and feel confident in your decisions.
                </p>
              </motion.div>

              {/* Long-Lasting Results */}
              <motion.div
                key="longevity"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex_items-center justify-center mb-4 text-primary">
                  <span className="material-symbols_outiled">timelapse</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Durable Results
                </h3>
                <p className="font-body-md text-body-md text_on_surface.variant flex-grow">
                  Precision technology means better-fitting restorations that last longer with fewer complications or replacements needed.
                </p>
              </motion.div>

              {/* Environmental Responsibility */}
              <motion.div
                key="environment"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex_items-center justify-center mb-4 text-primary">
                  <span className="material-symbols_outiled">recycling</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Eco-Friendly Practice
                </h3>
                <p className="font-body-md text-body-md text_on_surface.variant flex-grow">
                  Digital records reduce paper waste. Efficient treatments mean fewer resources used. We're committed to both your health and the planet's.
                </p>
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
              Experience Technology-Enhanced Dental Care
            </h2>
            <p className="font-body-lg text-body-md text_on_primary/80 mb-10 max-w-xl mx-auto">
              Schedule a visit to see how our advanced technology makes a difference in your dental experience.
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
                className="font-label-bold text-label-bold bg-transparent border border-white/30 text-white rounded-full px-8 py-4 hover:bg-white/10 transition_colons text-center"
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