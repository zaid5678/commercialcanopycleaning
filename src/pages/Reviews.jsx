import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Phone } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

export default function Reviews() {
  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 70% 30%, rgba(26,95,168,0.1) 0%, transparent 60%), #0A0A0A',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 font-body text-white/30 text-sm mb-6">
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Reviews</span>
            </div>
            <span className="section-label">What Our Clients Say</span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-4">
              Client Reviews
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Coming Soon */}
      <section className="py-24 sm:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <ScrollReveal>
            {/* Animated stars */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-2 mb-10"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                >
                  <Star size={28} className="text-brand-blue-bright/40" />
                </motion.div>
              ))}
            </motion.div>

            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-5">
              Coming Soon
            </h2>
            <p className="font-body text-white/50 text-base sm:text-lg max-w-md leading-relaxed mb-12">
              We're gathering reviews from our clients across the UK. Check back soon.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:07517758507" className="btn-primary justify-center">
                <Phone size={17} />
                Call 07517 758507
              </a>
              <a
                href="https://wa.me/447517758507"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost justify-center"
              >
                <WhatsAppIcon size={16} />
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
