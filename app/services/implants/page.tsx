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

export default function DentalImplants() {
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
                <span className="font-label-bold text-caption text-primary">IMPLANT EXCELLENCE</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                Dental Implants
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                Permanent, natural-looking tooth replacement solutions engineered for exceptional stability and aesthetics.
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
                Our Implant Services
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Advanced implant solutions for single tooth, multiple teeth, or full arch replacement.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Single Tooth Implant */}
              <motion.div
                key="single"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">shine</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Single Tooth Implant
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Replace a missing tooth with a titanium implant post and custom ceramic crown that looks, feels, and functions like a natural tooth.
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

              {/* Implant-Supported Bridge */}
              <motion.div
                key="bridge"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">link</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Implant-Supported Bridge
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Replace multiple consecutive missing teeth with fewer implants supporting a custom bridge for stable, long-term restoration.
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

              {/* All-on-4 Implants */}
              <motion.div
                key="allon4"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">qr_code_2</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      All-on-4® Treatment Concept
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Full arch restoration using just four strategically placed implants to support a complete set of fixed, natural-looking teeth.
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

              {/* Implant Retained Denture */}
              <motion.div
                key="denture"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">feed</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                      Implant-Retained Denture
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Secure, comfortable dentures that snap onto dental implants for improved stability, function, and confidence compared to traditional dentures.
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

        {/* The Implant Process */}
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="py-section-padding-mobile md:py-section-padding-desktop px-4 md:px-6 bg-surface"
        >
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                The Dental Implant Process
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Our comprehensive approach ensures optimal results at every stage of your implant journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Consultation & Planning */}
              <motion.div
                key="planning"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outiled">description</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Consultation & Planning
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  Comprehensive evaluation including 3D imaging, digital impressions, and treatment planning to ensure precise implant placement and optimal results.
                </p>
              </motion.div>

              {/* Implant Placement */}
              <motion.div
                key="placement"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outiled">construction</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Implant Placement
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  Precise surgical placement of titanium implant posts using guided surgery techniques for optimal positioning and minimal discomfort.
                </p>
              </motion.div>

              {/* Healing & Integration */}
              <motion.div
                key="healing"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outiled">hourglass_bottom</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Healing & Integration
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  Period allowing the implant to fuse with the jawbone (osseointegration), creating a strong foundation for the final restoration.
                </p>
              </motion.div>

              {/* Abutment Placement */}
              <motion.div
                key="abutment"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outiled">build</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Abutment Placement
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  Connection piece attached to the implant that serves as the foundation for the final crown, bridge, or denture.
                </p>
              </motion.div>

              {/* Final Restoration */}
              <motion.div
                key="restoration"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outiled">smart_toy</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Final Restoration
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  Custom-crafted crown, bridge, or denture secured to the implant(s) for beautiful, functional, and long-lasting results.
                </p>
              </motion.div>

              {/* Aftercare */}
              <motion.div
                key="aftercare"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center mb-4 text-primary">
                  <span className="material-symbols-outiled">health_and_safety</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  Long-Term Aftercare
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                  Ongoing maintenance and monitoring to ensure the health and longevity of your dental implants for decades to come.
                </p>
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
                See the Results
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Actual patient results showing the transformative power of dental implants.
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
                  alt="Before and after dental implant treatment for single tooth replacement"
                  className="w-full h-48 object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLvV0tqoKnaxwAhmlYQUkVRwXM-renrFxxZ5Rn3RO7AqGkC1Dl6WWPVuOy40Aswh2zKAQLtFl1RS5Ndbl2wV5QD5HnsbmEEXoVmhhJex2Cj2mrOh_uJxJYBJbfqT2fW1kNiq_5MGBRZr4Sf9zNtLjiaXoIYwSJJC9ip6vO7W9tdDyVPSH6WqbC8d_1jARSBeXVij7BQokQgC-RB93Xc7gVYhG8YyYI-eT2mvVJWFZnZ2Pp8l34z52ISWxOTp"
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
                  alt="Before and after All-on-4 implant treatment"
                  className="w-full h-48 object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLtxhoNPu3s3FxIyISKb3ShC82Y9kbNj0PIUAepxmH_WeFG27wWUE1x0tgPfQSM4RsFFqOrHpbT7elYgu18Kqa-6wVsaTc9ECDPAugWQGMfyKqK5cDhE0O3r1vZ2kop5_FfGV-A6G6bTWHRVm2XRVqBqGN9skYMlzKUtzzO_GzSa-OqwhtNoZfeTEUgxgkYnRLMBpeNDlqe1HOJUHavwkFoNxa-gJBtHj2d0y49oGWOadHsVoVd_mZmM2p0"
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
                  alt="Before and after implant-supported bridge treatment"
                  className="w-full h-48 object-cover"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLvV0tqoKnaxwAhmlYQUkVRwXM-renrFxxZ5Rn3RO7AqGkC1Dl6WWPVuOy40Aswh2zKAQLtFl1RS5Ndbl2wV5QD5HnsbmEEXoVmhhJex2Cj2mrOh_uJxJYBJbfqT2fW1kNiq_5MGBRZr4Sf9zNtLjiaXoIYwSJJC9ip6vO7W9tdDyVPSH6WqbC8d_1jARSBeXVij7BQokQgC-RB93Xc7gVYhG8YyYI-eT2mvVJWFZnZ2Pp8l34z52ISWxOTp"
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
              Ready to Replace Missing Teeth?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-xl mx-auto">
              Discover how dental implants can restore your smile, confidence, and quality of life.
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