'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import TrustMetrics from '@/components/trust-metrics';
import ServicesGrid from '@/components/services-grid';
import BeforeAfterGallery from '@/components/before-after-gallery';
import AppointmentCTA from '@/components/appointment-cta';
import Footer from '@/components/footer';
import StickyWhatsApp from '@/components/sticky-whatsapp';

export default function Home() {
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
        <HeroSection />
        <TrustMetrics />
        <ServicesGrid />
        <BeforeAfterGallery />
        <AppointmentCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}