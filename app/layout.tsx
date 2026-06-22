import './globals.css';
import type { Metadata } from 'next';
import { Outfit, Playfair_Display } from 'next/font/google';
import { MotionConfig } from 'framer-motion';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'SmileCraft Dental - Premium Oral Care',
  description: 'Experience uncompromising dental care in a boutique environment. We craft lasting, healthy smiles with meticulous attention to detail.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${playfair.variable} ${outfit.className} bg-surface text-on-background`}>
        {/* MotionConfig to reduce motion for users who prefer it */}
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}