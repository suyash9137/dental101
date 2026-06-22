import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function StickyWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      aria-label="WhatsApp Consultation"
      href="https://wa.me/15551234567"
      className={`fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center ${
        isHovered ? 'scale-105' : ''
      }`}
      whileHover={{ scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
        chat
      </span>
    </motion.a>
  );
}