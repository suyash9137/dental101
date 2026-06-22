'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import ServicesGrid from '@/components/services-grid';
import Footer from '@/components/footer';
import StickyWhatsApp from '@/components/sticky-whatsapp';

export default function Services() {
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
        <ServicesGrid />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}