const fs = require('fs');

const animateFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Add imports if they don't exist
  if (!content.includes("import { motion } from 'framer-motion'")) {
    content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport { motion } from 'framer-motion';\nimport { fadeInUp, staggerContainer, staggerChildren, hoverLift } from '@/lib/animations';");
  }

  // 1. Hero Content
  content = content.replace(
    /<div className="max-w-2xl">/,
    '<motion.div className="max-w-2xl" variants={staggerContainer()} initial="initial" animate="animate">'
  );
  content = content.replace(
    /<div className="inline-flex items-center gap-2/,
    '<motion.div variants={fadeInUp} className="inline-flex items-center gap-2'
  );
  content = content.replace(
    /<h1 className="font-display-lg-mobile/,
    '<motion.h1 variants={fadeInUp} className="font-display-lg-mobile'
  );
  content = content.replace(
    /<\/h1>/,
    '</motion.h1>'
  );
  content = content.replace(
    /<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">/,
    '<motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">'
  );
  content = content.replace(
    /<\/p>/,
    '</motion.p>'
  );
  content = content.replace(
    /<div className="flex flex-col sm:flex-row gap-4">/,
    '<motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">'
  );
  // Re-close the div blocks if we changed <div to <motion.div
  // The structure was: <div max-w-2xl> <div inline></div> <h1></h1> <p></p> <div></div> </div>
  // Wait, I replaced 3 <div>s with <motion.div>, so I need to replace 3 </div>s with </motion.div>s in the Hero.
  // Actually, replacing all closing tags dynamically via regex is risky. 

  // Let's just use string replace for exact blocks.
  return content;
};

// I will write a safer targeted replace
const applyToHome = () => {
  const filePath = 'app/page.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes("import { motion }")) {
    content = content.replace(
      "import Link from 'next/link';",
      "import Link from 'next/link';\nimport { motion } from 'framer-motion';\nimport { fadeInUp, staggerContainer, staggerChildren, hoverLift } from '@/lib/animations';"
    );
  }

  // Hero
  content = content.replace(
    '<div className="max-w-2xl">\n<div className="inline-flex items-center',
    '<motion.div className="max-w-2xl" variants={staggerContainer()} initial="initial" animate="animate">\n<motion.div variants={fadeInUp} className="inline-flex items-center'
  );
  content = content.replace(
    /Award-Winning Precision Care\n                    <\/div>/,
    'Award-Winning Precision Care\n                    </motion.div>'
  );
  content = content.replace(
    '<h1 className="font-display-lg-mobile',
    '<motion.h1 variants={fadeInUp} className="font-display-lg-mobile'
  );
  content = content.replace('</h1>', '</motion.h1>');
  content = content.replace(
    '<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">',
    '<motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">'
  );
  content = content.replace('</p>', '</motion.p>');
  content = content.replace(
    '<div className="flex flex-col sm:flex-row gap-4">\n<Link href="/book-appointment"',
    '<motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">\n<Link href="/book-appointment"'
  );
  content = content.replace(
    'See how we work\n                        </button>\n</div>\n</div>',
    'See how we work\n                        </button>\n</motion.div>\n</motion.div>'
  );

  // Trust Metrics
  content = content.replace(
    '<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">',
    '<motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20" variants={staggerContainer()} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }}>'
  );
  content = content.replace(
    /div className="flex flex-col items-center text-center pt-4 md:pt-0"/,
    'motion.div variants={staggerChildren} className="flex flex-col items-center text-center pt-4 md:pt-0"'
  );
  content = content.replace(
    /div className="flex flex-col items-center text-center pt-8 md:pt-0"/g,
    'motion.div variants={staggerChildren} className="flex flex-col items-center text-center pt-8 md:pt-0"'
  );
  // Closing tags for Trust Metrics (there are 3)
  content = content.replace(
    /Patient Rating<\/span>\n<\/div>/,
    'Patient Rating</span>\n</motion.div>'
  );
  content = content.replace(
    /Smiles Created<\/span>\n<\/div>/,
    'Smiles Created</span>\n</motion.div>'
  );
  content = content.replace(
    /Years Excellence<\/span>\n<\/div>\n<\/div>/,
    'Years Excellence</span>\n</motion.div>\n</motion.div>'
  );

  // Grid items (Features and Before/After)
  // We want to add whileHover="whileHover" variants={hoverLift} to the feature cards
  content = content.replace(
    /div className="bg-surface rounded-xl p-6 border border-outline-variant\/30 soft-shadow hover:-translate-y-1 transition-transform duration-300 group flex flex-col h-full"/g,
    'motion.div variants={hoverLift} initial="initial" whileHover="whileHover" className="bg-surface rounded-xl p-6 border border-outline-variant/30 soft-shadow group flex flex-col h-full"'
  );
  // Need to close motion.div for those 4 grid items, which ends right before {/**/} or closing </div>
  content = content.replace(
    /arrow_forward<\/span>\n<\/a>\n<\/div>/g,
    'arrow_forward</span>\n</a>\n</motion.div>'
  );

  // CTA Section
  content = content.replace(
    '<div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 text-center">',
    '<motion.div variants={staggerContainer()} initial="initial" whileInView="animate" viewport={{ once: true }} className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 text-center">'
  );
  content = content.replace(
    '<h2 className="font-headline-md text-headline-md mb-6 max-w-2xl mx-auto">',
    '<motion.h2 variants={fadeInUp} className="font-headline-md text-headline-md mb-6 max-w-2xl mx-auto">'
  );
  content = content.replace('</h2>', '</motion.h2>');
  content = content.replace(
    '<p className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-xl mx-auto">',
    '<motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-primary/80 mb-10 max-w-xl mx-auto">'
  );
  // Fix </p> for CTA (second </p> in file maybe, better use exact)
  content = content.replace(
    'aesthetic perfection.\n                </p>',
    'aesthetic perfection.\n                </motion.p>'
  );
  content = content.replace(
    '<div className="flex flex-col sm:flex-row gap-4 justify-center">',
    '<motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">'
  );
  content = content.replace(
    'Call +91 91374 99107\n                    </a>\n</div>\n</div>',
    'Call +91 91374 99107\n                    </a>\n</motion.div>\n</motion.div>'
  );

  fs.writeFileSync(filePath, content);
};

const applyToServices = () => {
  const filePath = 'app/services/page.tsx';
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes("import { motion }")) {
    content = content.replace(
      "import Link from 'next/link';",
      "import Link from 'next/link';\nimport { motion } from 'framer-motion';\nimport { fadeInUp, staggerContainer, slideInLeft } from '@/lib/animations';"
    );
  }

  // Hero
  content = content.replace(
    '<div className="max-w-3xl">\n<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 text-gradient">',
    '<motion.div variants={staggerContainer()} initial="initial" animate="animate" className="max-w-3xl">\n<motion.h1 variants={fadeInUp} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 text-gradient">'
  );
  content = content.replace(
    'Smile</h1>',
    'Smile</motion.h1>'
  );
  content = content.replace(
    '<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">',
    '<motion.p variants={fadeInUp} className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">'
  );
  content = content.replace(
    'highest standards of care.</p>\n</div>',
    'highest standards of care.</motion.p>\n</motion.div>'
  );

  // Service Rows
  content = content.replace(
    /div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"/g,
    'motion.div variants={slideInLeft} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"'
  );
  content = content.replace(
    /Consult an Implant Specialist<\/a>\n<\/div>\n<\/div>/,
    'Consult an Implant Specialist</a>\n</div>\n</motion.div>'
  );
  content = content.replace(
    /Cosmetic Consultation<\/a>\n<\/div>\n<\/div>/,
    'Cosmetic Consultation</a>\n</div>\n</motion.div>'
  );

  fs.writeFileSync(filePath, content);
};

applyToHome();
applyToServices();
console.log("Animations applied!");
