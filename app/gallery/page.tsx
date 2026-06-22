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

export default function Gallery() {
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: 'Smile Makeover',
      description: 'Complete smile transformation with porcelain veneers',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLtxhoNPu3s3FxIyISKb3ShC82Y9kbNj0PIUAepxmH_WeFG27wWUE1x0tgPfQSM4RsFFqOrHpbT7elYgu18Kqa-6wVsaTc9ECDPAugWQGMfyKqK5cDhE0O3r1vZ2kop5_FfGV-A6G6bTWHRVm2XRVqBqGN9skYMlzKUtzzO_GzSa-OqwhtNoZfeTEUgxgkYnRLMBpeNDlqe1HOJUHavwkFoNxa-gJBtHj2d0y49oGWOadHsVoVd_mZmM2p0',
      category: 'Cosmetic',
    },
    {
      id: 2,
      title: 'Dental Implants',
      description: 'Full arch restoration with implant-supported bridge',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLvV0tqoKnaxwAhmlYQUkVRwXM-renrFxxZ5Rn3RO7AqGkC1Dl6WWPVuOy40Aswh2zKAQLtFl1RS5Ndbl2wV5QD5HnsbmEEXoVmhhJex2Cj2mrOh_uJxJYBJbfqT2fW1kNiq_5MGBRZr4Sf9zNtLjiaXoIYwSJJC9ip6vO7W9tdDyVPSH6WqbC8d_1jARSBeXVij7BQokQgC-RB93Xc7gVYhG8YyYI-eT2mvVJWFZnZ2Pp8l34z52ISWxOTp',
      category: 'Implants',
    },
    {
      id: 3,
      title: 'Orthodontic Treatment',
      description: 'Invisalign treatment for crowded teeth',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLtxhoNPu3s3FxIyISKb3ShC82Y9kbNj0PIUAepxmH_WeFG27wWUE1x0tgPfQSM4RsFFqOrHpbT7elYgu18Kqa-6wVsaTc9ECDPAugWQGMfyKqK5cDhE0O3r1vZ2kop5_FfGV-A6G6bTWHRVm2XRVqBqGN9skYMlzKUtzzO_GzSa-OqwhtNoZfeTEUgxgkYnRLMBpeNDlqe1HOJUHavwkFoNxa-gJBtHj2d0y49oGWOadHsVoVd_mZmM2p0',
      category: 'Orthodontics',
    },
    {
      id: 4,
      title: 'Teeth Whitening',
      description: 'Professional laser whitening treatment',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLvV0tqoKnaxwAhmlYQUkVRwXM-renrFxxZ5Rn3RO7AqGkC1Dl6WWPVuOy40Aswh2zKAQLtFl1RS5Ndbl2wV5QD5HnsbmEEXoVmhhJex2Cj2mrOh_uJxJYBJbfqT2fW1kNiq_5MGBRZr4Sf9zNtLjiaXoIYwSJJC9ip6vO7W9tdDyVPSH6WqbC8d_1jARSBeXVij7BQokQgC-RB93Xc7gVYhG8YyYI-eT2mvVJWFZnZ2Pp8l34z52ISWxOTp',
      category: 'Preventive',
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
                <span className="font-label-bold text-caption text-primary">SMILE TRANSFORMATIONS</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                See Our Results
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                Browse our gallery of actual patient results showcasing the quality and artistry of our dental work.
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

        {/* Gallery Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-4 md:px-6 bg-surface-bright">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              Smile Gallery
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Actual patient results from our SmileCraft Dental practice.
            </p>
          </div>

          {/* Filter Tabs */}
          <motion.div
            variants={fadeUp}
            initial={false}
            animate={true}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            <button
              className="font-label-bold text-label-bold bg-surface border border-outline-variant/30 text-on-surface-variant rounded-full px-4 py-2 hover:bg-surface-container-low transition-colors"
            >
              All
            </button>
            <button
              className="font-label-bold text-label-bold bg-surface border border-outline-variant/30 text-on-surface-variant rounded-full px-4 py-2 hover:bg-surface-container-low transition-colors"
            >
              Cosmetic
            </button>
            <button
              className="font-label-bold text-label-bold bg-surface border border-outline-variant/30 text-on-surface-variant rounded-full px-4 py-2 hover:bg-surface-container-low transition-colors"
            >
              Implants
            </button>
            <button
              className="font-label-bold text-label-bold bg-surface border border-outline-variant/30 text-on-surface-variant rounded-full px-4 py-2 hover:bg-surface-container-low transition-colors"
            >
              Orthodontics
            </button>
            <button
              className="font-label-bold text-label-bold bg-surface border border-outline-variant/30 text-on-surface-variant rounded-full px-4 py-2 hover:bg-surface-container-low transition-colors"
            >
              Preventive
            </button>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={staggerContainer}
            initial={false}
            animate={true}
            className="grid gap-6"
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerChild}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-4 border border-outline-variant/30 hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="relative">
                  <img
                    alt={item.description}
                    className="w-full h-48 object-cover rounded-xl"
                    src={item.image}
                  >
                  </img>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-on-primary/0 hover:bg-black/30 hover:text-on-primary/100 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <span className="material-symbols-outlined text-xl">zoom_out_map</span>
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                    {item.description}
                  </p>
                  <span className="font-label-bold text-label-bold text-primary text-xs bg-primary/10 text-primary/80 px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              Inspired to Transform Your Smile?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-xl mx-auto">
              See what's possible for your smile with a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book-appointment"
                className="font-label-bold text-label-bold bg-white text-primary rounded-full px-8 py-4 hover:bg-surface transition-colors shadow-lg text-center"
              >
                Book Your Consultation
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