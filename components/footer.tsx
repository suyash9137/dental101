import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full pt-section-padding-mobile pb-8 bg-primary dark:bg-primary-container border-t border-primary-container text-on-primary dark:text-on-primary-container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-4 md:px-6 max-w-container-max mx-auto mb-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              medical_services
            </span>
            <span className="font-headline-sm text-headline-sm font-bold text-on-primary tracking-tight">
              SmileCraft
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-primary/80 mb-6">
            Premium Oral Care.<br /> Crafting healthy, beautiful smiles with uncompromising precision.
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="col-span-1">
          <h4 className="font-label-bold text-label-bold mb-4 uppercase tracking-wider text-on-primary/60">
            Services
          </h4>
          <ul className="space-y-3">
            <Link href="/services/cosmetic" className="font-body-md text-body-md text-on-primary/80 hover:text-on-primary hover:opacity-100 transition-opacity">
              Cosmetic Dentistry
            </Link>
            <Link href="/services/implants" className="font-body-md text-body-md text-on-primary/80 hover:text-on-primary hover:opacity-100 transition-opacity">
              Dental Implants
            </Link>
            <Link href="/services/orthodontics" className="font-body-md text-body-md text-on-primary/80 hover:text-on-primary hover:opacity-100 transition-opacity">
              Orthodontics
            </Link>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="col-span-1">
          <h4 className="font-label-bold text-label-bold mb-4 uppercase tracking-wider text-on-primary/60">
            Clinic
          </h4>
          <ul className="space-y-3">
            <Link href="/about" className="font-body-md text-body-md text-on-primary/80 hover:text-on-primary hover:opacity-100 transition-opacity">
              About Us
            </Link>
            <Link href="/specialists" className="font-body-md text-body-md text-on-primary/80 hover:text-on-primary hover:opacity-100 transition-opacity">
              Our Team
            </Link>
            <Link href="/gallery" className="font-body-md text-body-md text-on-primary/80 hover:text-on-primary hover:opacity-100 transition-opacity">
              Patient Gallery
            </Link>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="col-span-1">
          <h4 className="font-label-bold text-label-bold mb-4 uppercase tracking-wider text-on-primary/60">
            Contact
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-on-primary/80 font-body-md text-body-md">
              <span className="material-symbols-outlined text-sm mt-1">location_on</span>
              <span>
                123 Medical Plaza, Suite 400<br />
                Beverly Hills, CA 90210
              </span>
            </li>
            <li className="flex items-center gap-2 text-on-primary/80 font-body-md text-body-md">
              <span className="material-symbols-outlined text-sm">call</span>
              <span>(555) 123-4567</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-4 md:px-6 max-w-container-max mx-auto border-t border-on-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body-md text-body-md text-on-primary/60 text-sm">
          © 2024 SmileCraft Dental Clinic. Premium Oral Care.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="font-body-md text-body-md text-sm text-on-primary/60 hover:text-on-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="font-body-md text-body-md text-sm text-on-primary/60 hover:text-on-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="/sitemap" className="font-body-md text-body-md text-sm text-on-primary/60 hover:text-on-primary transition-colors">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}