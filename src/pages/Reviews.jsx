import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight, Phone } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal, { ScrollRevealContainer, ScrollRevealItem } from '../components/ScrollReveal'

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

const reviews = [
  {
    name: 'Marcus T.',
    role: 'Head Chef',
    business: 'Private Members Club, London',
    rating: 5,
    text: "We've used Commercial Canopy Cleaning for two years now. They always turn up on time, do a thorough job, and the compliance paperwork is ready within 24 hours. Our fire risk assessor was impressed with the documentation quality. Wouldn't use anyone else.",
    service: 'Canopy & Duct Clean',
  },
  {
    name: 'Sandra B.',
    role: 'Operations Manager',
    business: 'Hotel Chain, Manchester',
    rating: 5,
    text: "We have five sites across the north of England and they service all of them. Having one contractor who understands our TR19 requirements and delivers consistent standards across every location is invaluable. Highly recommended for multi-site operators.",
    service: 'Compliance Programme',
  },
  {
    name: 'James K.',
    role: 'Restaurant Owner',
    business: 'Italian Restaurant, Birmingham',
    rating: 5,
    text: "Called them on a Tuesday morning when our extraction fan stopped working mid-service. They had an engineer with us by the afternoon, diagnosed a failed motor, and sourced a replacement that evening. Back up and running by Wednesday. Absolute lifesavers.",
    service: 'Emergency Fan Repair',
  },
  {
    name: 'Rachel M.',
    role: 'Facilities Manager',
    business: 'NHS Trust, Leeds',
    rating: 5,
    text: "Working in a healthcare setting means compliance documentation has to be absolutely watertight. Commercial Canopy Cleaning understand that. Their reports are detailed, professional, and exactly what our estates team needs for audits. Excellent service throughout.",
    service: 'HVAC Servicing',
  },
  {
    name: 'David P.',
    role: 'Pub Manager',
    business: 'Gastro Pub, Bristol',
    rating: 5,
    text: "Straight talking, no nonsense. They quoted a fair price, arrived when they said they would, and left the kitchen cleaner than they found it. The certificate came through the next morning. Exactly what you want from a trade service.",
    service: 'Canopy Cleaning',
  },
  {
    name: 'Claire H.',
    role: 'Catering Manager',
    business: 'Secondary School, Edinburgh',
    rating: 5,
    text: "We need our kitchen operational during term time, so scheduling is everything. They worked around our calendar, did the job out of hours, and were completely tidy. The team were professional and courteous throughout. Will definitely book again.",
    service: 'Duct Cleaning',
  },
  {
    name: 'Tom R.',
    role: 'Owner',
    business: 'Burger Restaurant, Nottingham',
    rating: 5,
    text: "Had a couple of other companies quote before these guys. They were the only ones who actually explained what TR19 required for our kitchen usage level rather than just sending a generic price. That attention to detail carries through to the work itself.",
    service: 'Compliance Certification',
  },
  {
    name: 'Priya S.',
    role: 'General Manager',
    business: 'Hotel & Conference Centre, Milton Keynes',
    rating: 5,
    text: "We had a pre-inspection clean required at very short notice before an EHO visit. They mobilised quickly, did an excellent job, and we passed without issue. Their emergency callout capability is something you only really appreciate when you need it.",
    service: 'Emergency Callout',
  },
  {
    name: 'Andrew F.',
    role: 'Executive Chef',
    business: 'Fine Dining Restaurant, Bath',
    rating: 5,
    text: "The level of thoroughness is exceptional. They cleaned areas other companies had simply ignored for years. The before and after photos were quite revealing — and that documentation is now filed with our insurer. Cannot fault them.",
    service: 'Deep Canopy & Duct Clean',
  },
]

const featuredReview = reviews[0]

function StarRow({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-brand-blue-bright fill-brand-blue-bright' : 'text-white/20'}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review, index }) {
  return (
    <ScrollRevealItem>
      <div className="card-surface p-6 sm:p-7 h-full flex flex-col group hover:border-white/12 transition-colors duration-300 relative overflow-hidden">
        <div className="absolute top-4 right-4 text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-300">
          <Quote size={48} />
        </div>

        <div className="mb-4">
          <StarRow rating={review.rating} />
        </div>

        <p className="font-body text-white/60 text-sm leading-relaxed mb-6 flex-1">
          "{review.text}"
        </p>

        <div className="flex items-end justify-between gap-3 pt-5 border-t border-white/[0.06]">
          <div>
            <div className="font-body font-semibold text-white text-sm">{review.name}</div>
            <div className="font-body text-white/40 text-xs mt-0.5">{review.role}</div>
            <div className="font-body text-white/30 text-xs">{review.business}</div>
          </div>
          <div className="flex-shrink-0">
            <div className="font-body text-brand-blue-bright text-xs px-2 py-1 border border-brand-blue-bright/20 bg-brand-blue-bright/5 whitespace-nowrap">
              {review.service}
            </div>
          </div>
        </div>
      </div>
    </ScrollRevealItem>
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
            <p className="font-body text-white/50 text-base sm:text-lg max-w-2xl">
              Trusted by commercial kitchens, hotels, schools, and healthcare facilities across the United Kingdom. Here's what our clients say about our work.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.15} className="mt-10">
            <div className="flex flex-wrap gap-8 sm:gap-12">
              {[
                { value: '5.0', label: 'Average Rating' },
                { value: '100%', label: 'Recommend Us' },
                { value: 'UK', label: 'Nationwide Clients' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-heading text-3xl sm:text-4xl text-brand-blue-bright tracking-wider">{value}</div>
                  <div className="font-body text-white/40 text-xs uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Featured review */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div
              className="relative overflow-hidden p-8 sm:p-10 lg:p-14"
              style={{
                background: 'linear-gradient(135deg, #0d1e35 0%, #0e2240 100%)',
                border: '1px solid rgba(46,141,232,0.15)',
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue-deep to-brand-blue-bright" />
              <div className="absolute -top-6 -right-6 opacity-[0.04]">
                <Quote size={120} className="text-brand-blue-bright" />
              </div>

              <div className="relative max-w-3xl">
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="text-brand-blue-bright fill-brand-blue-bright" />
                  ))}
                </div>
                <blockquote className="font-body text-white text-lg sm:text-xl leading-relaxed mb-8">
                  "{featuredReview.text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-blue-deep/30 border border-brand-blue-bright/20 flex items-center justify-center font-heading text-brand-blue-bright text-lg">
                    {featuredReview.name[0]}
                  </div>
                  <div>
                    <div className="font-body font-semibold text-white">{featuredReview.name}</div>
                    <div className="font-body text-white/40 text-sm">{featuredReview.role} — {featuredReview.business}</div>
                  </div>
                  <div className="ml-auto hidden sm:block">
                    <div className="font-body text-brand-blue-bright text-xs px-3 py-1.5 border border-brand-blue-bright/20 bg-brand-blue-bright/5">
                      {featuredReview.service}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Review grid */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <span className="section-label">All Reviews</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white">
              More from our clients
            </h2>
          </ScrollReveal>

          <ScrollRevealContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {reviews.slice(1).map((review, index) => (
              <ReviewCard key={review.name} review={review} index={index} />
            ))}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-16 sm:py-20 bg-[#070b11] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <span className="section-label">Work With Us</span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
                Ready to join our<br />
                <span className="text-brand-blue-bright">satisfied clients?</span>
              </h2>
              <p className="font-body text-white/50 leading-relaxed">
                Get in touch today for a no-obligation quote. We service commercial kitchens, hotels, schools, healthcare facilities, and more — nationwide.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="tel:07517758507" className="btn-primary flex-1 justify-center">
                  <Phone size={17} />
                  Call 07517 758507
                </a>
                <a
                  href="https://wa.me/447517758507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1 justify-center"
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp Us
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
