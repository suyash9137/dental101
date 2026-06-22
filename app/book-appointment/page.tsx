'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyWhatsApp from '@/components/sticky-whatsapp';
import Link from 'next/link';

// Variants for animations
const fadeUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const slideUp: Variants = {
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

export default function BookAppointment() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    service: 'cosmetic',
    date: '',
    time: 'afternoon',
    name: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Appointment request submitted! Our team will contact you shortly.');
    // Reset form
    setFormData({
      service: 'cosmetic',
      date: '',
      time: 'afternoon',
      name: '',
      phone: '',
      email: '',
    });
    setActiveStep(1);
  };

  const nextStep = () => {
    if (activeStep < 3) setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Header scrolled={headerScrolled} />
      <main className="flex-grow pt-24 md:pt-32 px-4 md:px-6 max-w-3xl mx-auto w-full space-y-12">
        {/* Progress Indicator */}
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="w-full bg-surface-container h-1"
        >
          <div className={`bg-primary h-1 w-[${activeStep * 33.33}%] transition-all duration-500 ease-in-out`}></div>
        </motion.div>

        <div className="max-w-container-max mx-auto px-4 md:px-6 py-2 flex justify-between items-center font-caption text-caption text-secondary">
          <span>Step 1: Service</span>
          <span>Step 2: Time</span>
          <span>Step 3: Details</span>
        </div>

        {/* Trust Badge */}
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full border border-surface-variant">
            <span className="material-symbols-outlined text-primary text-sm">shield_lock</span>
            <span className="font-label-bold text-label-bold text-primary">Secure &amp; Private Booking</span>
          </div>
        </motion.div>

        {/* Form Container */}
        <form className="space-y-12" onSubmit={handleSubmit}>
          {/* Section 1: Service Selection */}
          <motion.div
            key="service-section"
            variants={fadeUp}
            initial={false}
            animate={true}
            className="space-y-6"
          >
            <h2 className="font-headline-sm text-headline-sm text-primary border-b border-surface-variant pb-2">
              1. Select Service
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Option 1: Cosmetic Dentistry */}
              <motion.div
                key="service-cosmetic"
                variants={staggerChild}
                initial={false}
                animate={true}
              >
                <label
                  htmlFor="service-cosmetic"
                  className="flex items-start p-4 border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors h-full group"
                >
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1 group-hover:text-primary transition-colors">
                    auto_awesome
                  </span>
                  <div>
                    <h3 className="font-label-bold text-label-bold text-primary mb-1 group-hover:text-primary transition-colors">
                      Cosmetic Dentistry
                    </h3>
                    <p className="font-caption text-caption text-on-surface-variant">
                      Veneers, whitening, smile design.
                    </p>
                  </div>
                  <input
                    checked={formData.service === 'cosmetic'}
                    className="service-radio hidden"
                    id="service-cosmetic"
                    name="service"
                    type="radio"
                    value="cosmetic"
                    onChange={handleChange}
                  />
                </label>
              </motion.div>

              {/* Option 2: Dental Implants */}
              <motion.div
                key="service-implant"
                variants={staggerChild}
                initial={false}
                animate={true}
              >
                <label
                  htmlFor="service-implant"
                  className="flex items-start p-4 border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors h-full group"
                >
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1 group-hover:text-primary transition-colors">
                    dentistry
                  </span>
                  <div>
                    <h3 className="font-label-bold text-label-bold text-primary mb-1 group-hover:text-primary transition-colors">
                      Dental Implants
                    </h3>
                    <p className="font-caption text-caption text-on-surface-variant">
                      Permanent replacements &amp; restoration.
                    </p>
                  </div>
                  <input
                    checked={formData.service === 'implant'}
                    className="service-radio hidden"
                    id="service-implant"
                    name="service"
                    type="radio"
                    value="implant"
                    onChange={handleChange}
                  />
                </label>
              </motion.div>

              {/* Option 3: Orthodontics */}
              <motion.div
                key="service-ortho"
                variants={staggerChild}
                initial={false}
                animate={true}
              >
                <label
                  htmlFor="service-ortho"
                  className="flex items-start p-4 border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors h-full group"
                >
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1 group-hover:text-primary transition-colors">
                    align_horizontal_center
                  </span>
                  <div>
                    <h3 className="font-label-bold text-label-bold text-primary mb-1 group-hover:text-primary transition-colors">
                      Orthodontics
                    </h3>
                    <p className="font-caption text-caption text-on-surface-variant">
                      Clear aligners &amp; comprehensive care.
                    </p>
                  </div>
                  <input
                    checked={formData.service === 'ortho'}
                    className="service-radio hidden"
                    id="service-ortho"
                    name="service"
                    type="radio"
                    value="ortho"
                    onChange={handleChange}
                  />
                </label>
              </motion.div>

              {/* Option 4: General Care */}
              <motion.div
                key="service-general"
                variants={staggerChild}
                initial={false}
                animate={true}
              >
                <label
                  htmlFor="service-general"
                  className="flex items-start p-4 border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors h-full group"
                >
                  <span className="material-symbols-outlined text-secondary mr-4 mt-1 group-hover:text-primary transition-colors">
                    health_and_safety
                  </span>
                  <div>
                    <h3 className="font-label-bold text-label-bold text-primary mb-1 group-hover:text-primary transition-colors">
                      General Care
                    </h3>
                    <p className="font-caption text-caption text-on-surface-variant">
                      Exams, cleaning, and maintenance.
                    </p>
                  </div>
                  <input
                    checked={formData.service === 'general'}
                    className="service-radio hidden"
                    id="service-general"
                    name="service"
                    type="radio"
                    value="general"
                    onChange={handleChange}
                  />
                </label>
              </motion.div>
            </div>
          </motion.div>

          {/* Section 2: Schedule */}
          <motion.div
            key="schedule-section"
            variants={fadeUp}
            initial={false}
            animate={activeStep >= 2}
            className="space-y-6"
          >
            <h2 className="font-headline-sm text-headline-sm text-primary border-b border-surface-variant pb-2">
              2. Preferred Date &amp; Time
            </h2>
            <div className="glass-card p-6 rounded-xl space-y-6">
              {/* Date Picker Placeholder */}
              <motion.div
                key="date-picker"
                variants={fadeUp}
                initial={false}
                animate={activeStep >= 2}
              >
                <label className="block font-label-bold text-label-bold text-primary mb-2">
                  Select Date
                </label>
                <div className="flex items-center border border-outline-variant rounded-lg px-4 py-3 bg-surface">
                  <span className="material-symbols-outlined text-secondary mr-3">calendar_month</span>
                  <input
                    className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-md"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  />
                </div>
              </motion.div>

              {/* Time Slots */}
              <motion.div
                key="time-slots"
                variants={fadeUp}
                initial={false}
                animate={activeStep >= 2}
              >
                <label className="block font-label-bold text-label-bold text-primary mb-3">
                  Preferred Time
                </label>
                <div className="flex flex-wrap gap-3">
                  <motion.div
                    key="time-morning"
                    variants={staggerChild}
                    initial={false}
                    animate={activeStep >= 2}
                  >
                    <div>
                      <input
                        checked={formData.time === 'morning'}
                        className="time-slot-radio hidden"
                        id="time-morning"
                        name="time"
                        type="radio"
                        value="morning"
                        onChange={handleChange}
                      />
                      <label
                        className="inline-block px-5 py-2 border border-outline-variant rounded-full font-label-bold text-label-bold text-secondary cursor-pointer hover:bg-surface-container transition-colors"
                        htmlFor="time-morning"
                      >
                        Morning (8am - 12pm)
                      </label>
                    </div>
                  </motion.div>

                  <motion.div
                    key="time-afternoon"
                    variants={staggerChild}
                    initial={false}
                    animate={activeStep >= 2}
                  >
                    <div>
                      <input
                        checked={formData.time === 'afternoon'}
                        className="time-slot-radio hidden"
                        id="time-afternoon"
                        name="time"
                        type="radio"
                        value="afternoon"
                        onChange={handleChange}
                      />
                      <label
                        className="inline-block px-5 py-2 border border-outline-variant rounded-full font-label-bold text-label-bold text-secondary cursor-pointer hover:bg-surface-container transition-colors"
                        htmlFor="time-afternoon"
                      >
                        Afternoon (12pm - 4pm)
                      </label>
                    </div>
                  </motion.div>

                  <motion.div
                    key="time-evening"
                    variants={staggerChild}
                    initial={false}
                    animate={activeStep >= 2}
                  >
                    <div>
                      <input
                        checked={formData.time === 'evening'}
                        className="time-slot-radio hidden"
                        id="time-evening"
                        name="time"
                        type="radio"
                        value="evening"
                        onChange={handleChange}
                      />
                      <label
                        className="inline-block px-5 py-2 border border-outline-variant rounded-full font-label-bold text-label-bold text-secondary cursor-pointer hover:bg-surface-container transition-colors"
                        htmlFor="time-evening"
                      >
                        Evening (4pm - 7pm)
                      </label>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Section 3: Patient Details */}
          <motion.div
            key="details-section"
            variants={fadeUp}
            initial={false}
            animate={activeStep === 3}
            className="space-y-6"
          >
            <h2 className="font-headline-sm text-headline-sm text-primary border-b border-surface-variant pb-2">
              3. Patient Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                key="name-field"
                variants={staggerChild}
                initial={false}
                animate={activeStep === 3}
              >
                <label className="font-label-bold text-label-bold text-primary block" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="w-full border-outline-variant rounded-lg bg-surface px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface"
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                />
              </motion.div>

              <motion.div
                key="phone-field"
                variants={staggerChild}
                initial={false}
                animate={activeStep === 3}
              >
                <label className="font-label-bold text-label-bold text-primary block" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="w-full border-outline-variant rounded-lg bg-surface px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface"
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                />
              </motion.div>

              <motion.div
                key="email-field"
                variants={staggerChild}
                initial={false}
                animate={activeStep === 3}
                className="md:col-span-2"
              >
                <label className="font-label-bold text-label-bold text-primary block" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full border-outline-variant rounded-lg bg-surface px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-on-surface"
                  id="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                />
              </motion.div>
            </div>
          </motion.div>
        </form>

        {/* Alternative Action */}
        <motion.div
          key="alt-action"
          variants={fadeUp}
          initial={false}
          animate={true}
          className="mt-12 bg-surface-container p-6 rounded-xl text-center"
        >
          <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
            Prefer to chat?
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4">
            Our concierges are available via WhatsApp to help you book.
          </p>
          <button
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-label-bold text-label-bold hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              chat
            </span>
            Message on WhatsApp
          </button>
        </motion.div>
      </main>

      {/* Sticky Confirm Button */}
      <motion.div
        key="sticky-button"
        variants={fadeUp}
        initial={false}
        animate={true}
        className="fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-md border-t border-outline-variant/30 p-4 md:p-6 z-40"
      >
        <div className="max-w-3xl mx-auto flex justify-between items-center gap-4">
          <div className="hidden sm:block text-sm text-on-surface-variant">
            By confirming, you agree to our <Link href="/privacy-policy" className="underline text-primary">Privacy Policy</Link>.
          </div>
          <button
            type="button"
            className={`w-full sm:w-auto bg-primary-container text-on-primary px-8 py-3 rounded-full font-label-bold text-label-bold hover:bg-primary transition-colors shadow-sm whitespace-nowrap ${
              activeStep === 3 ? 'pulse' : ''
            }`}
            onClick={activeStep === 3 ? handleSubmit : nextStep}
          >
            {activeStep === 3 ? 'Confirm Appointment Request' : 'Next Step'}
          </button>
        </div>
      </motion.div>
    </>
  );
}