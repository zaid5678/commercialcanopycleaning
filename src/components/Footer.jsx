import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, ShieldCheck, Globe } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'TR19 Compliance', href: '/compliance' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/[0.06]">
      {/* Badge strip */}
      <div className="border-b border-white/[0.06] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-2 text-white/50 font-body text-xs uppercase tracking-widest">
            <ShieldCheck size={14} className="text-brand-blue-bright" />
            TR19 Certified
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2 text-white/50 font-body text-xs uppercase tracking-widest">
            <Globe size={14} className="text-brand-blue-bright" />
            Nationwide Coverage
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2 text-white/50 font-body text-xs uppercase tracking-widest">
            <ShieldCheck size={14} className="text-brand-blue-bright" />
            Certified Engineers
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2 text-white/50 font-body text-xs uppercase tracking-widest">
            <Phone size={14} className="text-brand-blue-bright" />
            Emergency Callout
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.JPG"
                alt="Commercial Canopy Cleaning"
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="font-heading text-base text-white leading-none tracking-wider">Commercial Canopy</div>
                <div className="font-heading text-sm text-brand-blue-bright leading-none tracking-widest">Cleaning</div>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Professional canopy & duct cleaning to TR19 standards. Keeping commercial kitchens clean, compliant, and safe — nationwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center rounded-sm text-white/50 hover:text-white hover:border-brand-blue-bright transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-white tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-white/50 text-sm hover:text-brand-blue-bright transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-4 h-px bg-brand-blue-deep inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="font-heading text-lg text-white tracking-wider mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:07517758507"
                  className="flex items-start gap-3 text-white/50 hover:text-white font-body text-sm transition-colors duration-200"
                >
                  <Phone size={16} className="text-brand-blue-bright mt-0.5 flex-shrink-0" />
                  <span>07517 758507</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@commercialcanopycleaning.co.uk"
                  className="flex items-start gap-3 text-white/50 hover:text-white font-body text-sm transition-colors duration-200"
                >
                  <Mail size={16} className="text-brand-blue-bright mt-0.5 flex-shrink-0" />
                  <span>info@commercialcanopycleaning.co.uk</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50 font-body text-sm">
                  <MapPin size={16} className="text-brand-blue-bright mt-0.5 flex-shrink-0" />
                  <span>Nationwide Coverage<br />United Kingdom</span>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <Link to="/contact" className="btn-primary text-sm px-6 py-3">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/30 text-xs">
            &copy; 2025 Commercial Canopy Cleaning. All rights reserved.
          </p>
          <p className="font-body text-white/20 text-xs">
            TR19 Certified | Nationwide Coverage
          </p>
        </div>
      </div>
    </footer>
  )
}
