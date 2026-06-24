const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
  let jsx = html;
  // Replace class= with className=
  jsx = jsx.replace(/class=/g, 'className=');
  // Replace for= with htmlFor=
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  
  // Replace inline styles
  // e.g. style="font-variation-settings: 'FILL' 1;" -> style={{ fontVariationSettings: "'FILL' 1" }}
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    const rules = styleString.split(';').filter(rule => rule.trim() !== '');
    const styleObj = {};
    rules.forEach(rule => {
      let colonIndex = rule.indexOf(':');
      if (colonIndex > -1) {
        let key = rule.slice(0, colonIndex);
        let value = rule.slice(colonIndex + 1);
        key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        styleObj[key] = value.trim();
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });

  // Ensure self-closing tags
  jsx = jsx.replace(/<img([^>]*[^/])>/g, '<img$1 />');
  jsx = jsx.replace(/<input([^>]*[^/])>/g, '<input$1 />');
  jsx = jsx.replace(/<hr([^>]*[^/])>/g, '<hr$1 />');
  jsx = jsx.replace(/<br([^>]*[^/])>/g, '<br$1 />');

  return jsx;
}

function processPage(designFile, outputFile, pageName) {
  const html = fs.readFileSync(designFile, 'utf8');
  
  // Extract content inside <main>
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!mainMatch) {
    console.error('No <main> tag found in ' + designFile);
    return;
  }
  
  let mainContent = mainMatch[1];
  let jsxContent = htmlToJsx(mainContent);

  const componentCode = `'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import StickyWhatsApp from '@/components/sticky-whatsapp';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ${pageName}() {
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
        ${jsxContent}
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
`;

  fs.writeFileSync(outputFile, componentCode, 'utf8');
  console.log(`Successfully updated ${outputFile}`);
}

const homeDesign = path.join(__dirname, '../design/smilecraft_dental_home/code.html');
const homeOutput = path.join(__dirname, 'app/page.tsx');
processPage(homeDesign, homeOutput, 'Home');

const servicesDesign = path.join(__dirname, '../design/our_services_smilecraft_dental/code.html');
const servicesOutput = path.join(__dirname, 'app/services/page.tsx');
processPage(servicesDesign, servicesOutput, 'Services');

