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

export default function Specialists() {
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const doctors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      title: 'Lead Dentist',
      specialty: 'Cosmetic & Restorative Dentistry',
      bio: 'Dr. Sharma has over 15 years of experience in cosmetic dentistry, specializing in veneers, smile makeovers, and full-mouth reconstructions. She graduated from Mumbai University and completed advanced training in aesthetic dentistry at the Los Angeles Institute for Clinical Dentistry.',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLvV0tqoKnaxwAhmlYQUkVRwXM-renrFxxZ5Rn3RO7AqGkC1Dl6WWPVuOy40Aswh2zKAQLtFl1RS5Ndbl2wV5QD5HnsbmEEXoVmhhJex2Cj2mrOh_uJxJYBJbfqT2fW1kNiq_5MGBRZr4Sf9zNtLjiaXoIYwSJJC9ip6vO7W9tdDyVPSH6WqbC8d_1jARSBeXVij7BQokQgC-RB93Xc7gVYhG8YyYI-eT2mvVJWFZnZ2Pp8l34z52ISWxOTp',
    },
    {
      id: 2,
      name: 'Dr. Arjun Mehta',
      title: 'Oral Surgeon & Implant Specialist',
      specialty: 'Dental Implants & Oral Surgery',
      bio: 'Dr. Mehta is a board-certified oral surgeon with expertise in dental implant placement, bone grafting, and complex oral surgery procedures. He completed his oral surgery residency at Tata Memorial Hospital and has placed over 2,000 successful dental implants.',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLtxhoNPu3s3FxIyISKb3ShC82Y9kbNj0PIUAepxmH_WeFG27wWUE1x0tgPfQSM4RsFFqOrHpbT7elYgu18Kqa-6wVsaTc9ECDPAugWQGMfyKqK5cDhE0O3r1vZ2kop5_FfGV-A6G6bTWHRVm2XRVqBqGN9skYMlzKUtzzO_GzSa-OqwhtNoZfeTEUgxgkYnRLMBpeNDlqe1HOJUHavwkFoNxa-gJBtHj2d0y49oGWOadHsVoVd_mZmM2p0',
    },
    {
      id: 3,
      name: 'Dr. Neha Patel',
      title: 'Orthodontist',
      specialty: 'Orthodontics & Invisalign',
      bio: 'Dr. Patel specializes in orthodontic treatment for children and adults, including traditional braces and Invisalign clear aligners. She is a certified Invisalign provider and has helped hundreds of patients achieve straighter, healthier smiles.',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLvV0tqoKnaxwAhmlYQUkVRwXM-renrFxxZ5Rn3RO7AqGkC1Dl6WWPVuOy40Aswh2zKAQLtFl1RS5Ndbl2wV5QD5HnsbmEEXoVmhhJex2Cj2mrOh_uJxJYBJbfqT2fW1kNiq_5MGBRZr4Sf9zNtLjiaXoIYwSJJC9ip6vO7W9tdDyVPSH6WqbC8d_1jARSBeXVij7BQokQgC-RB93Xc7gVYhG8YyYI-eT2mvVJWFZnZ2Pp8l34z52ISWxOTp',
    },
    {
      id: 4,
      name: 'Dr. Vikram Singh',
      title: 'Pediatric Dentist',
      specialty: 'Pediatric Dentistry',
      bio: 'Dr. Singh focuses on creating positive dental experiences for children, emphasizing preventive care and education. He uses gentle techniques and a child-friendly approach to ensure young patients feel comfortable and safe during their visits.',
      image: 'https://lh3.googleusercontent.com/aida/AP1WRLvV0tqoKnaxwAhmlYQUkVRwXM-renrFxxZ5Rn3RO7AqGkC1Dl6WWPVuOy40Aswh2zKAQLtFl1RS5Ndbl2wV5QD5HnsbmEEXoVmhhJex2Cj2mrOh_uJxJYBJbfqT2fW1kNiq_5MGBRZr4Sf9zNtLjiaXoIYwSJJC9ip6vO7W9tdDyVPSH6WqbC8d_1jARSBeXVij7BQokQgC-RB93Xc7gVYhG8YyYI-eT2mvVJWFZnZ2Pp8l34z52ISWxOTp',
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
                <span className="font-label-bold text-caption text-primary">EXPERT CARE</span>
              </div>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                Meet Our Expert Team
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                Our team of specialists brings together decades of combined experience to provide comprehensive, personalized care in a comfortable, state-of-the-art environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/book-appointment"
                  className="bg-primary text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-full text-center hover:bg-primary/90 transition-colors"
                >
                  Book Consultation
                </a>
                <a
                  href="#team"
                  className="border border-primary text-primary font-label-bold text-label-bold px-8 py-4 rounded-full text-center hover:bg-primary-fixed/20 transition-colors flex items-center justify-center gap-2"
                >
                  View Our Team
                  <span className="material-symbols-outlined">arrow_downward</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <section className="py-section-padding-mobile md:py-section-padding-desktop px-4 md:px-6 max-w-container-max mx-auto" id="team">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">
              Our Dental Specialists
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Get to know the experienced professionals who will care for your smile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                variants={fadeUp}
                initial={false}
                animate={true}
                className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col h-full"
              >
                <div className="relative">
                  <img
                    alt={`Photo of Dr. ${doctor.name.split(' ')[0]}`}
                    className="w-full h-48 object-cover rounded-t-xl"
                    src={doctor.image}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-on-primary px-4 py-2 text-center text-sm">
                    {doctor.specialty}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    {doctor.name}
                  </h3>
                  <p className="font-label-bold text-label-bold text-on-surface-variant mb-3">
                    {doctor.title}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-4">
                    {doctor.bio}
                  </p>
                  <a
                    href="/book-appointment"
                    className="font-label-bold text-label-bold text-primary group-hover:text-primary-container inline-flex items-center gap-1 transition-colors"
                  >
                    Book Consultation
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}