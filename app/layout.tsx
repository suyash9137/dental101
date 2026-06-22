import './globals.css';
import type { Metadata } from 'next';
import { Manrope, Source_Serif_4 } from 'next/font/google';
import { MotionConfig } from 'framer-motion';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const sourceSerif4 = Source_Serif_4({ subsets: ['latin'], variable: '--font-source-serif-4' });

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
      <body className={`${manrope.variable} ${sourceSerif4.variable} ${manrope.className} bg-surface text-on-background`}>
        {/* MotionConfig to reduce motion for users who prefer it */}
        <MotionConfig reducedMotion="user">
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}