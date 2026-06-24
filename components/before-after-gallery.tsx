'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

// Variants for animations
const fadeUp: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const staggerChild: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const imageFloat: Variants = {
  initial: { y: 0, scale: 1 },
  animate: {
    y: [0, -10, 0],
    scale: [1, 1.02, 1],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  }
};


const contentFadeIn: Variants = {
  initial: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const pulseAnimation: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function BeforeAfterGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  useEffect(() => {
    if (inView) setIsVisible(true);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={isVisible ? undefined : { opacity: 0 }}
      className="py-section-padding-mobile md:py-section-padding-desktop bg-surface"
    >
      <div className="max-w-container-max mx-auto px-4 md:px-6">
        <motion.div
          variants={{ initial: { x: '100%', opacity: 0 }, animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } }}
          initial={false}
          animate={isVisible ? "animate" : "initial"}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial={false}
            animate={isVisible ? "animate" : "initial"}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-xl overflow-hidden border border-outline-variant/20 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-500">
              <motion.div
                whileHover={{ scale: 1.02, rotate: 2 }}
                whileTap={{ scale: 0.98, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="overflow-hidden"
              >
                <img
                  alt="Clinical before and after comparison of professional teeth whitening and porcelain veneers, showing a transformation from stained teeth to a perfect white smile."
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
                />
              </motion.div>
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded-xl pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={contentFadeIn}
            initial={false}
            animate={isVisible ? "animate" : "initial"}
            className="w-full md:w-1/2 lg:pl-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/30 text-on-secondary-fixed-variant font-label-bold text-label-bold mb-4 hover:bg-secondary-fixed/40 transition-colors duration-300">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
              Transformative Results
            </div>

            <motion.h2
              variants={fadeUp}
              initial={false}
              animate={isVisible ? "animate" : "initial"}
              className="font-headline-md text-headline-md text-primary mb-6 text-gradient-primary"
            >
              Visualizing Dental Excellence
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial={false}
              animate={isVisible ? "animate" : "initial"}
              className="font-body-lg text-body-lg text-on-surface-variant mb-6"
            >
              We believe the results speak for themselves. Our clinical portfolio showcases the meticulous artistry and technical precision that defines SmileCraft Dental. Every smile is a testament to personalized, high-end care.
            </motion.p>

            <motion.ul
              variants={staggerContainer}
              initial={false}
              animate={isVisible ? "animate" : "initial"}
              className="space-y-4 mb-8"
            >
              <motion.li
                key="1"
                variants={staggerChild}
                initial={false}
                animate={isVisible ? "animate" : "initial"}
                className="flex items-start gap-3 hover-lift-medium"
              >
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">
                  Minimally invasive veneer procedures
                </span>
              </motion.li>

              <motion.li
                key="2"
                variants={staggerChild}
                initial={false}
                animate={isVisible ? "animate" : "initial"}
                className="flex items-start gap-3 hover-lift-medium"
              >
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">
                  Advanced color-matching technology
                </span>
              </motion.li>

              <motion.li
                key="3"
                variants={staggerChild}
                initial={false}
                animate={isVisible ? "animate" : "initial"}
                className="flex items-start gap-3 hover-lift-medium"
              >
                <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">
                  Digital smile design preview
                </span>
              </motion.li>
            </motion.ul>

            <motion.a
              href="#"
              variants={{ initial: { scale: 0.95, opacity: 0 }, animate: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } } }}
              initial={false}
              animate={isVisible ? "animate" : "initial"}
              className="font-label-bold text-label-bold bg-surface border border-outline text-on-surface rounded-full px-6 py-3 hover:bg-surface-container-low transition-colors inline-block hover-lift-lift"
            >
              View Full Gallery
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
