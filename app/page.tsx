'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyWhatsApp from '@/components/sticky-whatsapp';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerChildren, hoverLift } from '@/lib/animations';

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
      <main className="pt-20">
        
{/**/}
<section className="relative min-h-[85vh] flex items-center pt-8 pb-16 overflow-hidden">
{/**/}
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-transparent z-10 md:w-3/4"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface z-10"></div>
<img alt="Luxury dental clinic interior with modern equipment and calming atmosphere" className="w-full h-full object-cover object-right" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"/>
</div>
<div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full relative z-20">
<motion.div className="max-w-2xl" variants={staggerContainer()} initial="initial" animate="animate">
<motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-fixed/50 border border-secondary-fixed backdrop-blur-sm mb-6 text-on-secondary-fixed-variant font-label-bold text-label-bold">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
                        Award-Winning Precision Care
                    </motion.div>
<motion.h1 variants={fadeInUp} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 text-gradient">
                        Compassionate care,<br/>exceptional results.
                    </motion.h1>
<motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                        Experience a new standard of dentistry where clinical expertise meets boutique comfort. We craft lasting, healthy smiles with meticulous attention to detail.
                    </motion.p>
<motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
<Link href="/book-appointment" className="font-label-bold text-label-bold bg-primary text-on-primary rounded-full px-8 py-4 hover:bg-primary-container transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center flex items-center justify-center gap-2">
                            Book Appointment
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
<button className="font-label-bold text-label-bold bg-surface border border-outline-variant text-primary rounded-full px-8 py-4 hover:bg-surface-container-low transition-all duration-300 text-center flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-primary text-xl">play_circle</span>
                            See how we work
                        </button>
</motion.div>
</motion.div>
</div>
</section>
{/**/}
<section className="py-12 bg-surface border-y border-surface-container-low relative z-20 -mt-8">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
<motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20" variants={staggerContainer()} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }}>
<motion.div variants={staggerChildren} className="flex flex-col items-center text-center pt-4 md:pt-0">
<span className="font-display-lg-mobile text-display-lg-mobile text-primary font-semibold">4.9/5</span>
<span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mt-1">Patient Rating</span>
</motion.div>
<motion.div variants={staggerChildren} className="flex flex-col items-center text-center pt-8 md:pt-0">
<span className="font-display-lg-mobile text-display-lg-mobile text-primary font-semibold">10k+</span>
<span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mt-1">Smiles Created</span>
</motion.div>
<motion.div variants={staggerChildren} className="flex flex-col items-center text-center pt-8 md:pt-0">
<span className="font-display-lg-mobile text-display-lg-mobile text-primary font-semibold">20+</span>
<span className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mt-1">Years Excellence</span>
</motion.div>
</motion.div>
</div>
</section>
{/**/}
<section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-bright">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
<div className="text-center mb-12 md:mb-16">
<h2 className="font-headline-md text-headline-md text-primary mb-4">Comprehensive Dental Solutions</motion.h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Tailored treatments utilizing state-of-the-art technology for optimal oral health and aesthetic perfection.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/**/}
<motion.div variants={hoverLift} initial="initial" whileHover="whileHover" className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow group flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-secondary-fixed/50 flex items-center justify-center mb-6 text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>auto_awesome</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Cosmetic Dentistry</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">Veneers, professional whitening, and aesthetic bonding for a flawless smile.</p>
<a className="font-label-bold text-label-bold text-primary group-hover:text-primary-container inline-flex items-center gap-1 transition-colors mt-auto" href="#">
                            Learn More <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
</motion.div>
{/**/}
<motion.div variants={hoverLift} initial="initial" whileHover="whileHover" className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow group flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-secondary-fixed/50 flex items-center justify-center mb-6 text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>planet</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Dental Implants</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">Permanent, natural-looking tooth replacement with precision surgical placement.</p>
<a className="font-label-bold text-label-bold text-primary group-hover:text-primary-container inline-flex items-center gap-1 transition-colors mt-auto" href="#">
                            Learn More <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
</motion.div>
{/**/}
<motion.div variants={hoverLift} initial="initial" whileHover="whileHover" className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow group flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-secondary-fixed/50 flex items-center justify-center mb-6 text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>orthopedics</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Orthodontics</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">Clear aligners and modern braces for precise, comfortable bite correction.</p>
<a className="font-label-bold text-label-bold text-primary group-hover:text-primary-container inline-flex items-center gap-1 transition-colors mt-auto" href="#">
                            Learn More <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
</motion.div>
{/**/}
<motion.div variants={hoverLift} initial="initial" whileHover="whileHover" className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow group flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-secondary-fixed/50 flex items-center justify-center mb-6 text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>health_and_safety</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">General Care</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">Preventative hygiene, thorough exams, and restorative treatments.</p>
<a className="font-label-bold text-label-bold text-primary group-hover:text-primary-container inline-flex items-center gap-1 transition-colors mt-auto" href="#">
                            Learn More <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
</motion.div>
</div>
</div>
</section>
{/**/}
<section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2">
<div className="relative rounded-xl overflow-hidden shadow-xl border border-outline-variant/20">
<img alt="Clinical before and after comparison of professional teeth whitening and porcelain veneers, showing a transformation from stained teeth to a perfect white smile." className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80"/>
<div className="absolute inset-0 ring-1 ring-inset ring-primary/10 rounded-xl pointer-events-none"></div>
</div>
</div>
<div className="w-full md:w-1/2 lg:pl-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/30 text-on-secondary-fixed-variant font-label-bold text-label-bold mb-4">
<span className="material-symbols-outlined text-sm">photo_camera</span>
                            Transformative Results
                        </div>
<h2 className="font-headline-md text-headline-md text-primary mb-6">Visualizing Dental Excellence</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                            We believe the results speak for themselves. Our clinical portfolio showcases the meticulous artistry and technical precision that defines SmileCraft Dental. Every smile is a testament to personalized, high-end care.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
<span className="font-body-md text-body-md text-on-surface">Minimally invasive veneer procedures</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
<span className="font-body-md text-body-md text-on-surface">Advanced color-matching technology</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
<span className="font-body-md text-body-md text-on-surface">Digital smile design preview</span>
</li>
</ul>
<a className="font-label-bold text-label-bold bg-surface border border-outline text-on-surface rounded-full px-6 py-3 hover:bg-surface-container-low transition-colors inline-block" href="#">View Full Gallery</a>
</div>
</div>
</div>
</section>
{/**/}
<section className="py-section-padding-mobile md:py-section-padding-desktop bg-primary text-on-primary relative overflow-hidden">
{/**/}
<div className="absolute inset-0 opacity-10" style={{"backgroundImage":"radial-gradient(circle at 2px 2px, white 1px, transparent 0)","backgroundSize":"32px 32px"}}></div>
<motion.div variants={staggerContainer()} initial="initial" whileInView="animate" viewport={{ once: true }} className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 text-center">
<motion.h2 variants={fadeInUp} className="font-headline-md text-headline-md mb-6 max-w-2xl mx-auto">Ready to Transform Your Smile?</h2>
<motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-xl mx-auto">
                    Schedule a private consultation today and take the first step towards achieving optimal oral health and aesthetic perfection.
                </motion.p>
<motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
<Link href="/book-appointment" className="font-label-bold text-label-bold bg-white text-primary rounded-full px-8 py-4 hover:bg-surface transition-colors shadow-lg text-center">
                        Request Appointment
                    </Link>
<a href="tel:+919137499107" className="font-label-bold text-label-bold bg-transparent border border-white/30 text-white rounded-full px-8 py-4 hover:bg-white/10 transition-colors text-center">
                        Call +91 91374 99107
                    </a>
</motion.div>
</motion.div>
</section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
