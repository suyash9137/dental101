import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  scrolled?: boolean;
}

export default function Header({ scrolled = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Fragment>
      {/* Desktop Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-surface/95 shadow-md' : 'bg-surface/90'
        } backdrop-blur-md border-b border-outline-variant/30`}
      >
        <div className="flex justify-between items-center px-4 md:px-6 max-w-container-max mx-auto h-20">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 text-primary dark:text-primary-fixed">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              medical_services
            </span>
            <span className="font-headline-sm text-headline-sm font-bold tracking-tight">
              SmileCraft Dental
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8 items-center h-full">
            <Link href="/" className="font-label-bold text-label-bold text-on-surface-variant dark:text-surface-variant hover:text-primary hover:bg-primary/5 transition-colors duration-200 h-full flex items-center px-2">
              Home
            </Link>
            <Link href="/services" className="font-label-bold text-label-bold text-on-surface-variant dark:text-surface-variant hover:text-primary hover:bg-primary/5 transition-colors duration-200 h-full flex items-center px-2">
              Services
            </Link>
            <Link href="/specialists" className="font-label-bold text-label-bold text-on-surface-variant dark:text-surface-variant hover:text-primary hover:bg-primary/5 transition-colors duration-200 h-full flex items-center px-2">
              Specialists
            </Link>
            <Link href="/gallery" className="font-label-bold text-label-bold text-on-surface-variant dark:text-surface-variant hover:text-primary hover:bg-primary/5 transition-colors duration-200 h-full flex items-center px-2">
              Gallery
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/book-appointment"
              className={`hidden md:block font-label-bold text-label-bold bg-primary text-on-primary rounded-full px-6 py-2 hover:bg-primary-container transition-colors duration-200 shadow-md`}
            >
              Book Now
            </Link>
            <button
              aria-label="Open menu"
              className={`md:hidden text-on-surface p-2`}
              onClick={toggleMenu}
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <nav
        className={`fixed inset-y-0 left-0 w-80 z-[60] bg-surface dark:bg-surface-dim shadow-xl rounded-r-full transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden flex flex-col`}
      >
        <div className="p-6 border-b border-surface-container-low flex justify-between items-center">
          <span className="font-headline-sm text-headline-sm text-primary">Patient Portal</span>
          <button
            className="text-on-surface-variant p-2 rounded-full hover:bg-surface-container-high transition-colors"
            onClick={toggleMenu}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex-1 py-4 overflow-y-auto flex flex-col gap-1">
          <Link
            href="/"
            className="flex items-center gap-4 px-6 py-3 font-label-bold text-label-bold text-on-surface-variant hover:bg-surface-container-high transition-colors group"
          >
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
              dentistry
            </span>
            Services
          </Link>
          <Link
            href="/specialists"
            className="flex items-center gap-4 px-6 py-3 font-label-bold text-label-bold text-on-surface-variant hover:bg-surface-container-high transition-colors group"
          >
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
              groups
            </span>
            Specialists
          </Link>
          <Link
            href="/gallery"
            className="flex items-center gap-4 px-6 py-3 font-label-bold text-label-bold text-on-surface-variant hover:bg-surface-container-high transition-colors group"
          >
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
              photo_library
            </span>
            Gallery
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-4 px-6 py-3 font-label-bold text-label-bold text-on-surface-variant hover:bg-surface-container-high transition-colors group"
          >
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
              call
            </span>
            Contact
          </Link>
        </nav>
        <div className="p-6 border-t border-surface-container-low">
          <Link
            href="/book-appointment"
            className="w-full font-label-bold text-label-bold bg-primary text-on-primary rounded-full px-6 py-3 shadow-md active:scale-95 transition-transform"
          >
            Book Appointment
          </Link>
        </div>
      </nav>

      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-[55] hidden transition-opacity ${
          isMenuOpen ? 'block opacity-100' : 'hidden opacity-0'
        } md:hidden`}
        onClick={toggleMenu}
      ></div>
    </Fragment>
  );
}