import { Link } from 'react-router-dom'
import { Phone, MapPin, Instagram, ShieldCheck, Globe, MessageCircle, Star } from 'lucide-react'

function TikTokIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.589 5.861a4.119 4.119 0 0 1-2.834-.974V14a4.117 4.117 0 1 1-4.116-4.116 4.117 4.117 0 0 1 3.213 1.548v-4.41c-.49-.03-.98-.05-1.471-.05-7.025 0-12.727 5.7-12.727 12.727s5.7 12.727 12.727 12.727 12.727-5.7 12.727-12.727V8.928a9.575 9.575 0 0 0 2.813 1.933V6.835a4.117 4.117 0 0 1-2.336-.974Z"/>
    </svg>
  )
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'TR19 Compliance', href: '/compliance' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
]

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/[0.06]">
      {/* Badge strip */}
      <div className="border-b border-white/[0.06] py-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center gap-6 flex-wrap min-w-max mx-auto">
          <div className="flex items-center gap-2 text-white/50 font-body text-xs uppercase tracking-widest whitespace-nowrap">
            <ShieldCheck size={14} className="text-brand-blue-bright" />
            TR19 Certified
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2 text-white/50 font-body text-xs uppercase tracking-widest whitespace-nowrap">
            <Globe size={14} className="text-brand-blue-bright" />
            Nationwide Coverage
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2 text-white/50 font-body text-xs uppercase tracking-widest whitespace-nowrap">
            <ShieldCheck size={14} className="text-brand-blue-bright" />
            Certified Engineers
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2 text-white/50 font-body text-xs uppercase tracking-widest whitespace-nowrap">
            <Phone size={14} className="text-brand-blue-bright" />
            Emergency Callout
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.JPG"
                alt="Commercial Canopy Cleaning"
                className="h-10 w-auto object-contain rounded-sm"
              />
              <div>
                <div className="font-heading text-base text-white leading-none tracking-wider">Commercial Canopy</div>
                <div className="font-heading text-sm text-brand-blue-bright leading-none tracking-widest">Cleaning</div>
              </div>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Professional canopy &amp; duct cleaning to TR19 standards. Keeping commercial kitchens clean, compliant, and safe — nationwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/commercial_canopy_cleaning"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center rounded-sm text-white/50 hover:text-white hover:border-brand-blue-bright transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://tiktok.com/@commercial.canopy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center rounded-sm text-white/50 hover:text-white hover:border-brand-blue-bright transition-colors duration-200"
                aria-label="TikTok"
              >
                <TikTokIcon size={16} />
              </a>
              <a
                href="https://wa.me/447517758507"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center rounded-sm text-white/50 hover:text-white hover:border-brand-blue-bright transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links + Socials */}
          <div>
            <h4 className="font-heading text-lg text-white tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-white/50 text-sm hover:text-brand-blue-bright transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-4 h-px bg-brand-blue-deep inline-block flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <a
                href="https://instagram.com/commercial_canopy_cleaning"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-white/40 text-xs hover:text-brand-blue-bright transition-colors duration-200"
              >
                <Instagram size={13} className="text-brand-blue-bright" />
                @commercial_canopy_cleaning
              </a>
              <a
                href="https://tiktok.com/@commercial.canopy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-white/40 text-xs hover:text-brand-blue-bright transition-colors duration-200"
              >
                <TikTokIcon size={13} className="text-brand-blue-bright" />
                @commercial.canopy
              </a>
              <div className="flex items-center gap-2 font-body text-white/25 text-xs">
                <Star size={13} className="text-brand-blue-bright/40" />
                Google Reviews — coming soon
              </div>
            </div>
          </div>

          {/* Column 3 — Emergency */}
          <div>
            <h4 className="font-heading text-lg text-brand-blue-bright tracking-wider mb-2">Emergency?</h4>
            <p className="font-body text-white/40 text-xs mb-5">Fan breakdown or urgent clean — we're available 24/7.</p>
            <a
              href="tel:07517758507"
              className="block font-heading text-4xl sm:text-5xl text-white hover:text-brand-blue-bright transition-colors duration-200 leading-none mb-6 tracking-wide"
            >
              07517 758507
            </a>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:07517758507"
                  className="flex items-center gap-2.5 text-white/50 hover:text-white font-body text-sm transition-colors duration-200"
                >
                  <Phone size={14} className="text-brand-blue-bright flex-shrink-0" />
                  Call us
                </a>
              </li>
              <li>
                <a
                  href="sms:07517758507"
                  className="flex items-center gap-2.5 text-white/50 hover:text-white font-body text-sm transition-colors duration-200"
                >
                  <MessageCircle size={14} className="text-brand-blue-bright flex-shrink-0" />
                  Send a text
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447517758507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/50 hover:text-white font-body text-sm transition-colors duration-200"
                >
                  <span className="text-brand-blue-bright flex-shrink-0"><WhatsAppIcon size={14} /></span>
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/30 text-xs text-center sm:text-left">
            &copy; 2025 Commercial Canopy Cleaning. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="font-body text-white/25 text-xs hover:text-white/50 transition-colors duration-200">Privacy Policy</Link>
            <span className="text-white/10 text-xs">|</span>
            <Link to="/cookies" className="font-body text-white/25 text-xs hover:text-white/50 transition-colors duration-200">Cookie Policy</Link>
            <span className="text-white/10 text-xs">|</span>
            <Link to="/terms" className="font-body text-white/25 text-xs hover:text-white/50 transition-colors duration-200">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
