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

export default function Contact() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    const type = target.type;
    const checked = (target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setIsFormSubmitted(true);
    // Reset form after delay
    setTimeout(() => {
      setIsFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 5000);
  };

  return (
    <>
      <Header scrolled={headerScrolled} />
      <main className="flex-grow pt-28 pb-section-padding-desktop">
        {/* Hero Section */}
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="px-4 md:px-6 max-w-container-max mx-auto mb-24 md:mb-32 text-center md:text-left pt-12 md:pt-20"
        >
          <div className="max-w-3xl">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
              Get in Touch
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Experience uncompromising dental care in a boutique environment. Our specialists are ready to design your perfect smile. Contact us to schedule a consultation or inquire about our premium services.
            </p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="px-4 md:px-6 max-w-container-max mx-auto mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left Column: Details & Form */}
            <div className="lg:col-span-7 flex flex-col gap-12">
              {/* Emergency Card */}
              <motion.div
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-error-container text-on-error-container p-8 rounded-xl soft-shadow border border-error/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden"
              >
                <div className="absolute -right-12 -top-12 opacity-10 pointer-events-none">
                  <span className="material-symbols-outlined text-9xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    emergency
                  </span>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>
                      medical_services
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-error font-bold">
                      Dental Emergencies
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-error-container/80">
                    Immediate attention for severe pain, trauma, or urgent dental needs.
                  </p>
                </div>
                <a
                  className="relative z-10 whitespace-nowrap bg-error text-on-error font-label-bold text-label-bold px-6 py-3 rounded-full hover:bg-error/90 transition-colors shadow-sm flex items-center gap-2"
                  href="tel:+15551234567"
                >
                  <span className="material-symbols-outlined">call</span> Call Now
                </a>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                key="contact-form"
                variants={fadeUp}
                initial={false}
                animate={!isFormSubmitted}
                className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl soft-shadow border border-outline-variant/20 relative"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed rounded-full blur-3xl opacity-20 -z-10 -translate-y-1/2 translate-x-1/4"></div>
                <h2 className="font-headline-md text-headline-md text-primary mb-8 border-b border-outline-variant/20 pb-4">
                  Send a Message
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-bold text-label-bold text-on-surface-variant block" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-outline-variant/50 focus:border-primary text-primary font-body-md text-body-md py-3 px-1 outline-none transition-colors placeholder-on-surface-variant/40"
                        id="name"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-bold text-label-bold text-on-surface-variant block" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-outline-variant/50 focus:border-primary text-primary font-body-md text-body-md py-3 px-1 outline-none transition-colors placeholder-on-surface-variant/40"
                        id="email"
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant block" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className="w-full bg-transparent border-b border-outline-variant/50 focus:border-primary text-primary font-body-md text-body-md py-3 px-1 outline-none transition-colors placeholder-on-surface-variant/40"
                      id="phone"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant block" htmlFor="subject">
                      Inquiry Type
                    </label>
                    <select
                      className="w-full bg-transparent border-b border-outline-variant/50 focus:border-primary text-primary font-body-md text-body-md py-3 px-1 outline-none transition-colors appearance-none cursor-pointer"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option disabled value="">
                        Select a topic...
                      </option>
                      <option value="consultation">New Patient Consultation</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="implants">Dental Implants</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2 pt-2">
                    <label className="font-label-bold text-label-bold text-on-surface-variant block" htmlFor="message">
                      Your Message
                    </label>
                    <textarea
                      className="w-full bg-transparent border border-outline-variant/50 rounded-lg focus:border-primary text-primary font-body-md text-body-md p-4 outline-none transition-colors placeholder-on-surface-variant/40 resize-none"
                      id="message"
                      placeholder="How can we assist you today?"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>
                  <div className="pt-4">
                    <button
                      className="w-full sm:w-auto bg-primary text-on-primary font-label-bold text-label-bold px-10 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg flex justify-center items-center gap-3 group"
                      type="submit"
                    >
                                      Submit Request <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                  </div>
                </form>
              </motion.div>

              {/* Success Message */}
              <motion.div
                key="success-message"
                variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                initial={false}
                animate={isFormSubmitted}
                className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl soft-shadow border border-outline-variant/20"
              >
                <h2 className="font-headline-md text-headline-md text-primary mb-6">
                  Message Sent!
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Thank you for contacting SmileCraft Dental. Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Info & Map */}
            <motion.div
              key="info-column"
              variants={fadeUp}
              initial={false}
              animate={true}
              className="lg:col-span-5 flex flex-col gap-8"
            >
              {/* Details Card */}
              <motion.div
                key="details-card"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10"
              >
                <h3 className="font-headline-sm text-headline-sm text-primary mb-8">
                  Clinic Details
                </h3>
                <div className="space-y-8">
                  <motion.div
                    key="address-item"
                    variants={staggerChild}
                    initial={false}
                    animate={true}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-primary/5 p-3 rounded-full text-primary shrink-0">
                      <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        location_on
                      </span>
                    </div>
                    <div>
                      <h4 className="font-label-bold text-label-bold text-primary mb-1">
                        Address
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                        123 Clinical Way, Suite 400<br/>
                                        Medical District, NY 10001
                                    </p>
                      <a
                        className="inline-flex items-center gap-1 font-label-bold text-label-bold text-secondary mt-2 hover:text-primary transition-colors"
                        href="#"
                      >
                                        Get Directions <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    </a>
                    </div>
                  </motion.div>

                  <motion.div
                    key="phone-item"
                    variants={staggerChild}
                    initial={false}
                    animate={true}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-primary/5 p-3 rounded-full text-primary shrink-0">
                      <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        call
                      </span>
                    </div>
                    <div>
                      <h4 className="font-label-bold text-label-bold text-primary mb-1">
                        Phone
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        (555) 123-4567
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    key="hours-item"
                    variants={staggerChild}
                    initial={false}
                    animate={true}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-primary/5 p-3 rounded-full text-primary shrink-0">
                      <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        schedule
                      </span>
                    </div>
                    <div className="w-full">
                      <h4 className="font-label-bold text-label-bold text-primary mb-3">
                        Operating Hours
                      </h4>
                      <ul className="font-body-md text-body-md text-on-surface-variant space-y-2">
                        <motion.div
                          key="weekdays"
                          variants={staggerChild}
                          initial={false}
                          animate={true}
                          className="flex justify-between border-b border-outline-variant/10 pb-2"
                        >
                          <span>Monday - Friday</span>
                          <span className="text-primary font-medium">8:00 AM - 6:00 PM</span>
                        </motion.div>
                        <motion.div
                          key="saturday"
                          variants={staggerChild}
                          initial={false}
                          animate={true}
                          className="flex justify-between border-b border-outline-variant/10 py-2"
                        >
                          <span>Saturday</span>
                          <span className="text-primary font-medium">9:00 AM - 2:00 PM</span>
                        </motion.div>
                        <motion.div
                          key="sunday"
                          variants={staggerChild}
                          initial={false}
                          animate={true}
                          className="flex justify-between pt-2"
                        >
                          <span>Sunday</span>
                          <span className="text-outline">Closed</span>
                        </motion.div>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                key="map-placeholder"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="rounded-2xl overflow-hidden border border-outline-variant/20 h-64 relative bg-surface-variant flex items-center justify-center group cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  data-alt="A stylized, minimalist street map centered on a medical district in New York City, using a refined color palette of deep navy blues, soft greys, and pristine whites, conveying a clean, high-end corporate aesthetic."
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUo2sA9UiIthuwxzBH7u6elbHT2-xTcxF_sWpw94pOmvyttdVny5zfU8SIuWyy9GWZTB0YLPuF4wc0IOcoq9eWPaXzdHQwQvqNwHmu5hVyqNpAoiguuGG6OEt-RnuxyYqGmP0BxCJKKTzpc-sXGdesvFREvMYqrp9aHqB7UaySPNTE8aKj9nkVeDdH0uUgPfVUkkdtX86KakhH2_QxcNE6AoWmqOb3GhVUkioWx1-M2NweaTCsAVibe5e5NbhlxE2qdVcOScOLxKlq")' }}
                ></div>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-surface shadow-primary/30 transform group-hover:-translate-y-2 transition-transform duration-300"
                  >
                    <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      dentistry
                    </span>
                  </div>
                  <div className="mt-2 bg-surface px-3 py-1 rounded shadow-sm text-xs font-label-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    SmileCraft Dental
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div
                key="whatsapp-cta"
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-primary text-on-primary p-6 rounded-2xl flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                    {/* Using chat icon as generic fallback for WA */}
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                      chat
                    </span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold mb-1">
                      Instant Consultation
                    </h4>
                    <p className="text-sm opacity-80">
                      Message us directly on WhatsApp
                    </p>
                  </div>
                </div>
                <a
                  className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-label-bold transition-colors"
                  href="#"
                >
                  Chat
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          variants={fadeUp}
          initial={false}
          animate={true}
          className="px-4 md:px-6 max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-headline-md text-headline-md text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {/* Accordion Item 1 */}
            <motion.div
              key="faq-1"
              variants={staggerChild}
              initial={false}
              animate={true}
              className="border border-outline-variant/30 rounded-xl bg-surface-container-lowest overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
              >
                <span className="font-label-bold text-label-bold text-primary group-hover:text-secondary transition-colors">
                  Is there parking available at the clinic?
                </span>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                  expand_more
                </span>
              </button>
              <motion.div
                key="faq-1-content"
                variants={{ initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto', transition: { opacity: { duration: 0.3 }, height: { duration: 0.4 } } } }}
                initial={false}
                animate={false}
                className="px-6 pb-5 pt-0 hidden text-on-surface-variant font-body-md text-body-md border-t border-outline-variant/10 mt-2 pt-4"
              >
                        Yes, we offer complimentary valet parking for all our patients. Alternatively, there is a secure underground parking garage located directly beneath our building with direct elevator access to our suite.
                    </motion.div>
              </motion.div>

              {/* Accordion Item 2 */}
              <motion.div
                key="faq-2"
                variants={staggerChild}
                initial={false}
                animate={true}
                className="border border-outline-variant/30 rounded-xl bg-surface-container-lowest overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
                >
                  <span className="font-label-bold text-label-bold text-primary group-hover:text-secondary transition-colors">
                    What should I bring to my first visit?
                  </span>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                    expand_more
                  </span>
                </button>
                <motion.div
                  key="faq-2-content"
                  variants={{ initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto', transition: { opacity: { duration: 0.3 }, height: { duration: 0.4 } } } }}
                  initial={false}
                  animate={false}
                  className="px-6 pb-5 pt-0 hidden text-on-surface-variant font-body-md text-body-md border-t border-outline-variant/10 mt-2 pt-4"
                >
                        Please bring a valid photo ID, your insurance information (if applicable), and any previous dental records or x-rays you may have. We recommend arriving 15 minutes early to complete our digital registration process in our lounge.
                    </motion.div>
                </motion.div>

                {/* Accordion Item 3 */}
                <motion.div
                  key="faq-3"
                  variants={staggerChild}
                  initial={false}
                  animate={true}
                  className="border border-outline-variant/30 rounded-xl bg-surface-container-lowest overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
                  >
                    <span className="font-label-bold text-label-bold text-primary group-hover:text-secondary transition-colors">
                      Do you offer virtual consultations?
                    </span>
                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                      expand_more
                    </span>
                  </button>
                  <motion.div
                    key="faq-3-content"
                    variants={{ initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto', transition: { opacity: { duration: 0.3 }, height: { duration: 0.4 } } } }}
                    initial={false}
                    animate={false}
                    className="px-6 pb-5 pt-0 hidden text-on-surface-variant font-body-md text-body-md border-t border-outline-variant/10 mt-2 pt-4"
                  >
                        Yes, we offer initial cosmetic and implant consultations virtually. You can request a virtual consultation through our contact form, and our treatment coordinator will send you a secure link for a video appointment.
                    </motion.div>
                  </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}