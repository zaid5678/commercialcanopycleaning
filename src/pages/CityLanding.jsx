import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Phone, ArrowRight, CheckCircle2, Zap, Wind, FileCheck, Wrench, ChevronDown } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import { cityMap } from '../data/cities'

const services = [
  { icon: Wrench,     title: 'Fan Repair & Breakdown', desc: 'Emergency same-day response for failed extraction fans. We diagnose, source parts, and restore your system fast.' },
  { icon: Wind,       title: 'Canopy Cleaning',         desc: 'Full TR19-compliant degreasing of canopy hoods, baffles, and plenum chambers. Certificate issued after every clean.' },
  { icon: FileCheck,  title: 'Duct Cleaning',           desc: 'Complete extraction run cleaned from canopy to discharge point. Every metre documented with photographic evidence.' },
  { icon: Zap,        title: 'Emergency Callout',       desc: '24/7 emergency availability nationwide. Call and speak directly with an engineer — callouts from £150.' },
]

const includes = [
  'TR19 compliance certificate issued after every job',
  'Photographic before & after evidence pack',
  'Grease depth measurement report',
  'Signed engineer certificate for insurance',
  'Same-day emergency response available',
  'Full duct run covered — not just the hood',
]

function buildFaqs(city) {
  const nearbyText = city.nearby && city.nearby.length
    ? ` including ${city.nearby.slice(0, 3).join(', ')} and surrounding towns`
    : ''
  return [
    {
      q: `Do you offer commercial canopy cleaning in ${city.name}?`,
      a: `Yes, we provide TR19-certified commercial canopy cleaning throughout ${city.name} and the surrounding area${nearbyText}. Our engineers are available 24/7 for both scheduled cleans and emergency callouts.`,
    },
    {
      q: `How much does commercial canopy cleaning cost in ${city.name}?`,
      a: `Prices for commercial canopy cleaning in ${city.name} start from £150 for emergency callouts and vary based on kitchen size and duct run length. Contact us for a free no-obligation quote tailored to your ${city.name} premises.`,
    },
    {
      q: `How quickly can you respond to an emergency in ${city.name}?`,
      a: `We offer same-day emergency response for kitchen extraction breakdowns in ${city.name}. Call 07517 758507 and you will speak directly with an engineer who can advise on immediate steps and dispatch if required.`,
    },
    {
      q: `What TR19 documentation do you provide after cleaning in ${city.name}?`,
      a: `Every job we complete in ${city.name} includes a full TR19 compliance certificate, a photographic before-and-after evidence pack, a grease depth measurement report, and a signed engineer certificate — everything your insurer requires.`,
    },
    {
      q: `Do you clean the full duct run, not just the canopy, in ${city.name}?`,
      a: `Yes. Our ${city.name} service covers the complete extraction system — canopy hood, baffles, plenum chamber, and the full duct run from canopy to the discharge point on the roof or external wall. Partial cleaning is not TR19 compliant.`,
    },
  ]
}

function CityFaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-white/[0.08] bg-white/[0.02]">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base sm:text-lg text-white tracking-wide leading-snug">{faq.q}</span>
        <ChevronDown
          size={18}
          className={`text-brand-blue-bright flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="font-body text-white/55 text-sm leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function CityLanding() {
  const { city: slug } = useParams()
  const city = cityMap[slug]
  const [openFaq, setOpenFaq] = useState(null)

  if (!city) return <Navigate to="/" replace />

  const faqs = buildFaqs(city)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://commercialcanopycleaning.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Commercial Canopy Cleaning', item: 'https://commercialcanopycleaning.co.uk' },
      { '@type': 'ListItem', position: 3, name: city.name, item: `https://commercialcanopycleaning.co.uk/commercial-canopy-cleaning/${slug}` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Commercial Canopy Cleaning ${city.name}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Commercial Canopy Cleaning',
      telephone: '07517758507',
      url: 'https://commercialcanopycleaning.co.uk',
      areaServed: {
        '@type': 'City',
        name: city.name,
        ...(city.region ? { containedInPlace: { '@type': 'AdministrativeArea', name: city.region } } : {}),
      },
    },
    areaServed: { '@type': 'City', name: city.name },
    description: `TR19 certified canopy cleaning, duct cleaning and emergency fan repair services in ${city.name}${city.region ? `, ${city.region}` : ''}.`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Canopy Cleaning Services in ${city.name}`,
      itemListElement: services.map(s => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.desc },
      })),
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Commercial Canopy Cleaning {city.name} | TR19 Certified | Fan Repair</title>
        <meta name="description" content={`Professional commercial canopy cleaning in ${city.name}${city.region ? `, ${city.region}` : ''}. TR19 certified engineers, emergency fan repair, duct cleaning and compliance certification. Serving ${city.name} and surrounding areas. Call 07517 758507.`} />
        <meta property="og:title" content={`Commercial Canopy Cleaning ${city.name} | TR19 Certified`} />
        <meta property="og:description" content={`TR19 canopy cleaning, fan repair and duct cleaning in ${city.name}. Certified engineers, 24/7 emergency response. Call 07517 758507.`} />
        <link rel="canonical" href={`https://commercialcanopycleaning.co.uk/commercial-canopy-cleaning/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 70% 50%,rgba(26,95,168,0.12) 0%,transparent 60%),#0A0A0A' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <nav className="flex items-center gap-2 font-body text-xs text-white/30 mb-5" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/50">Commercial Canopy Cleaning</span>
              <span>/</span>
              <span className="text-white/70">{city.name}</span>
            </nav>
            <span className="section-label">Serving {city.name}{city.region ? `, ${city.region}` : ''}</span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-5">
              Commercial Canopy<br />
              <span className="text-brand-blue-bright">Cleaning {city.name}</span>
            </h1>
            <p className="font-body text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              TR19 certified canopy cleaning, duct cleaning, and emergency fan repair in {city.name}{city.region ? ` and across ${city.region}` : ' and the surrounding area'}. Certified engineers, full compliance documentation, 24/7 availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:07517758507" className="btn-primary justify-center sm:justify-start">
                <Phone size={18} /> Call 07517 758507
              </a>
              <Link to="/contact" className="btn-ghost justify-center sm:justify-start">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-px bg-white/[0.06]" /></div>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <span className="section-label">What We Do in {city.name}</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white">Our Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <ScrollReveal key={title}>
                <div className="card-surface p-6 h-full">
                  <div className="w-10 h-10 flex items-center justify-center border border-brand-blue-bright/30 bg-brand-blue-bright/5 mb-4">
                    <Icon size={18} className="text-brand-blue-bright" />
                  </div>
                  <h3 className="font-heading text-lg text-white mb-2 tracking-wide">{title}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {city.nearby && city.nearby.length > 0 && (
        <section className="py-12 sm:py-16 bg-[#070b11] border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="mb-6">
              <span className="section-label">Coverage Area</span>
              <h2 className="font-heading text-3xl sm:text-4xl text-white mb-3">
                Serving {city.name} &amp; Surrounding Areas
              </h2>
              <p className="font-body text-white/50 text-sm max-w-2xl leading-relaxed">
                Our {city.name} engineers cover the surrounding towns and areas throughout {city.region || 'the region'}, providing the same TR19-certified canopy cleaning and emergency fan repair service.
              </p>
            </ScrollReveal>
            <div className="flex flex-wrap gap-2 mt-5">
              {city.nearby.map(area => (
                <span key={area} className="font-body text-white/60 text-xs px-3 py-1.5 border border-white/10 bg-white/[0.02]">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What's included */}
      <section className="py-16 sm:py-20 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="section-label">Every Job in {city.name}</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-white mb-4">What's Always Included</h2>
              <p className="font-body text-white/50 leading-relaxed mb-8">
                Every visit we make in {city.name} — whether a routine clean or an emergency callout — comes with full documentation and compliance certification as standard. No extras, no hidden costs.
              </p>
              <ul className="space-y-3">
                {includes.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-blue-bright mt-0.5 flex-shrink-0" />
                    <span className="font-body text-white/65 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="card-surface p-8">
                <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-2">Get in Touch</div>
                <h3 className="font-heading text-3xl text-white mb-4">Book a Clean in {city.name}</h3>
                <p className="font-body text-white/50 text-sm mb-6 leading-relaxed">
                  Call us directly to speak with an engineer, or send an enquiry and we'll get back to you with a tailored quote for your {city.name} premises.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="tel:07517758507" className="btn-primary justify-center">
                    <Phone size={18} /> 07517 758507
                  </a>
                  <Link to="/contact" className="btn-ghost justify-center">
                    Send an Enquiry <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 sm:py-20 bg-[#070b11] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <span className="section-label">Why Choose Us</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white">
              {city.name}'s Trusted<br />Ventilation Specialists
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { value: 'TR19', label: 'Certified Standard — Every Job' },
              { value: '24/7', label: 'Emergency Availability' },
              { value: '£150', label: 'Emergency Callouts From' },
            ].map(({ value, label }) => (
              <ScrollReveal key={label}>
                <div className="card-surface p-8">
                  <div className="font-heading text-5xl sm:text-6xl text-brand-blue-bright mb-3">{value}</div>
                  <div className="font-body text-white/50 text-sm uppercase tracking-widest">{label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <span className="section-label">Common Questions</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white">
              FAQs — {city.name}
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i}>
                <CityFaqItem
                  faq={faq}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-10">
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:07517758507" className="btn-primary justify-center sm:justify-start">
                <Phone size={18} /> Call 07517 758507
              </a>
              <Link to="/contact" className="btn-ghost justify-center sm:justify-start">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
