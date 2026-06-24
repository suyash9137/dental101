'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyWhatsApp from '@/components/sticky-whatsapp';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideInLeft } from '@/lib/animations';

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
      <main className="pt-20">
        
{/**/}
<section className="relative pt-section-padding-mobile md:pt-section-padding-desktop pb-section-padding-mobile md:pb-section-padding-desktop px-margin-mobile md:px-gutter overflow-hidden flex items-center min-h-[618px]">
{/**/}
<div className="absolute inset-0 z-0">
<div className="bg-cover bg-center w-full h-full opacity-40" data-alt="A brightly lit, modern dental clinic room featuring state-of-the-art dental equipment and a comfortable patient chair. The room is pristine, characterized by white surfaces, subtle clinical blue accents, and large windows allowing soft natural light to flood in. The mood is calm, professional, and hygienic, emphasizing a premium healthcare environment. High resolution, architectural photography style." style={{"backgroundImage":"url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80')"}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/20"></div>
</div>
<div className="relative z-10 max-w-container-max mx-auto w-full">
<motion.div variants={staggerContainer()} initial="initial" animate="animate" className="max-w-2xl">
<motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed/30 rounded-full mb-6">
<span className="material-symbols-outlined text-primary text-[16px]">verified</span>
<span className="font-label-bold text-caption text-primary">COMPREHENSIVE CARE</span>
</motion.div>
<motion.h1 variants={fadeInUp} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Precision Dental Services</motion.h1>
<motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                        Experience uncompromising oral care in a serene, boutique environment. We combine clinical purity with advanced technology to deliver lasting results.
                    </motion.p>
<motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
<a className="bg-primary text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-full text-center hover:bg-primary/90 transition-colors" href="#book">Book Consultation</a>
<a className="border border-primary text-primary font-label-bold text-label-bold px-8 py-4 rounded-full text-center hover:bg-primary-fixed/20 transition-colors flex items-center justify-center gap-2" href="#services">
                            Explore Treatments
                            <span className="material-symbols-outlined">arrow_downward</span>
</a>
</motion.div>
</motion.div>
</div>
</section>
{/**/}
<section className="py-12 bg-surface-container-low px-margin-mobile md:px-gutter" id="services">
<div className="max-w-container-max mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<a className="bg-surface p-6 rounded-xl ambient-shadow hover-lift flex flex-col items-center justify-center text-center gap-3 group border border-outline-variant/20" href="#implants">
<span className="material-symbols-outlined text-primary text-[32px] group-hover:text-tertiary-container transition-colors" style={{"fontVariationSettings":"'FILL' 1"}}>planet</span>
<span className="font-label-bold text-label-bold text-primary">Implants</span>
</a>
<a className="bg-surface p-6 rounded-xl ambient-shadow hover-lift flex flex-col items-center justify-center text-center gap-3 group border border-outline-variant/20" href="#root-canal">
<span className="material-symbols-outlined text-primary text-[32px] group-hover:text-tertiary-container transition-colors" style={{"fontVariationSettings":"'FILL' 1"}}>medical_services</span>
<span className="font-label-bold text-label-bold text-primary">Root Canal</span>
</a>
<a className="bg-surface p-6 rounded-xl ambient-shadow hover-lift flex flex-col items-center justify-center text-center gap-3 group border border-outline-variant/20" href="#cosmetic">
<span className="material-symbols-outlined text-primary text-[32px] group-hover:text-tertiary-container transition-colors" style={{"fontVariationSettings":"'FILL' 1"}}>clean_hands</span>
<span className="font-label-bold text-label-bold text-primary">Cosmetic</span>
</a>
<a className="bg-surface p-6 rounded-xl ambient-shadow hover-lift flex flex-col items-center justify-center text-center gap-3 group border border-outline-variant/20" href="#cleaning">
<span className="material-symbols-outlined text-primary text-[32px] group-hover:text-tertiary-container transition-colors" style={{"fontVariationSettings":"'FILL' 1"}}>water_drop</span>
<span className="font-label-bold text-label-bold text-primary">Cleaning</span>
</a>
<a className="bg-surface p-6 rounded-xl ambient-shadow hover-lift flex flex-col items-center justify-center text-center gap-3 group border border-outline-variant/20 col-span-2 md:col-span-1" href="#ortho">
<span className="material-symbols-outlined text-primary text-[32px] group-hover:text-tertiary-container transition-colors" style={{"fontVariationSettings":"'FILL' 1"}}>health_and_safety</span>
<span className="font-label-bold text-label-bold text-primary">Orthodontics</span>
</a>
</div>
</div>
</section>
{/**/}
{/**/}
<section className="py-section-padding-mobile md:py-section-padding-desktop px-margin-mobile md:px-gutter max-w-container-max mx-auto" id="implants">
<motion.div variants={slideInLeft} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
<div className="order-2 md:order-1 relative rounded-xl overflow-hidden aspect-[4/3] ambient-shadow">
<div className="bg-cover bg-center w-full h-full" data-alt="A close up, stylized and highly detailed 3D render of a premium dental implant screw integrating flawlessly with a white ceramic tooth crown. The background is a clean, sterile clinical blue environment. The lighting is soft but emphasizes the metallic precision of the titanium screw and the natural translucency of the ceramic tooth. Mood is advanced, medical, and high-end." style={{"backgroundImage":"url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80')"}}></div>
</div>
<div className="order-1 md:order-2">
<h2 className="font-headline-md text-headline-md text-primary mb-6">Dental Implants</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                        Permanent, natural-looking tooth replacement engineered for exceptional stability. Our advanced surgical precision ensures flawless integration, restoring both aesthetics and full functionality.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1" style={{"color":"#D1FAE5"}}>check_circle</span>
<span className="font-body-md text-body-md text-on-surface">Biocompatible titanium fixtures</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1" style={{"color":"#D1FAE5"}}>check_circle</span>
<span className="font-body-md text-body-md text-on-surface">3D-guided surgical placement</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1" style={{"color":"#D1FAE5"}}>check_circle</span>
<span className="font-body-md text-body-md text-on-surface">Lifelike ceramic crowns</span>
</li>
</ul>
<a className="inline-block border border-primary text-primary font-label-bold text-label-bold px-6 py-3 rounded-full hover:bg-primary-fixed/10 transition-colors" href="#book">Consult an Implant Specialist</a>
</div>
</motion.div>
</section>
{/**/}
<section className="py-section-padding-mobile md:py-section-padding-desktop bg-primary text-on-primary px-margin-mobile md:px-gutter" id="book">
<div className="max-w-container-max mx-auto text-center">
<h2 className="font-headline-md text-headline-md mb-6">Ready for Exceptional Care?</h2>
<p className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-2xl mx-auto">
                    Schedule your comprehensive consultation today. Experience dentistry defined by precision, comfort, and uncompromising quality.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link href="/book-appointment" className="bg-surface text-primary font-label-bold text-label-bold px-8 py-4 rounded-full hover:bg-surface-dim transition-colors text-center">Book Online Now</Link>
<a href="tel:+919137499107" className="border border-on-primary text-on-primary font-label-bold text-label-bold px-8 py-4 rounded-full hover:bg-on-primary/10 transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined">call</span>
                        Call +91 91374 99107
                    </a>
</div>
</div>
</section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
