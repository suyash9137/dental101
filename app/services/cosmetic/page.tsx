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

export default function CosmeticDentistry() {
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
                <span className="font-label-bold text-caption text-primary">COSMETIC ENHANCEMENT</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                Cosmetic Dentistry
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                Transform your smile with bespoke aesthetic solutions designed to complement your natural features.
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
                Our Cosmetic Services
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Enhance your smile with our comprehensive range of cosmetic dental treatments.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Porcelain Veneers */}
              <motion.div
                key="veneers"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outiled">toys</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Porcelain Veneers
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Ultra-thin ceramic shells bonded to the front of teeth to correct discoloration, chips, gaps, and misalignment for a radiant, uniform smile.
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

              {/* Professional Whitening */}
              <motion.div
                key="whitening"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">wb_sunny</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Professional Teeth Whitening
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Safe, effective whitening treatments that brighten your smile by several shades in just one visit or through customized take-home kits.
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

              {/* Dental Bonding */}
              <motion.div
                key="bonding"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">border_color</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Cosmetic Bonding
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Tooth-colored resin applied and sculpted to repair chips, close gaps, and improve the appearance of discolored or misshapen teeth.
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

              {/* Smile Makeover */}
              <motion.div
                key="makeover"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">sparkles</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Complete Smile Makeover
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      A comprehensive treatment plan combining multiple cosmetic procedures to achieve your ideal smile transformation.
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
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Actual patient results from our cosmetic dental treatments.
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
                  alt="Before and after porcelain veneers treatment"
                  className="w-full h-48 object-cover"
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
                >
                  </img>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-on-primary/0 hover:bg-black/30 hover:text-on-primary/100 transition-all duration-300 opacity-0 group-hover:opacity-100">
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
                    alt="Before and after teeth whitening treatment"
                    className="w-full h-48 object-cover"
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
                  >
                  </img>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-on-primary/0 hover:bg-black/30 hover:text-on-primary/100 transition-all duration-300 opacity-0 group-hover:opacity-100">
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
                    alt="Before and after cosmetic bonding treatment"
                    className="w-full h-48 object-cover"
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80"
                  >
                  </img>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-on-primary/0 hover:bg-black/30 hover:text-on-primary/100 transition-all duration-300 opacity-0 group-hover:opacity-100">
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
              Ready for Your Smile Transformation?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-xl mx-auto">
              Schedule a consultation to discover which cosmetic treatments are right for you.
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