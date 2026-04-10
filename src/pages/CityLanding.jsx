import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Phone, ArrowRight, CheckCircle2, Zap, Wind, FileCheck, Wrench } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import { cityMap } from '../data/cities'

const services = [
  { icon: Wrench, title: 'Fan Repair & Breakdown', desc: 'Emergency same-day response for failed extraction fans. We diagnose, source parts, and restore your system fast.' },
  { icon: Wind,   title: 'Canopy Cleaning',        desc: 'Full TR19-compliant degreasing of canopy hoods, baffles, and plenum chambers. Certificate issued after every clean.' },
  { icon: FileCheck, title: 'Duct Cleaning',       desc: 'Complete extraction run cleaned from canopy to discharge point. Every metre documented with photographic evidence.' },
  { icon: Zap,    title: 'Emergency Callout',       desc: '24/7 emergency availability nationwide. Call and speak directly with an engineer — callouts from £150.' },
]

const includes = [
  'TR19 compliance certificate issued after every job',
  'Photographic before & after evidence pack',
  'Grease depth measurement report',
  'Signed engineer certificate for insurance',
  'Same-day emergency response available',
  'Full duct run covered — not just the hood',
]

export default function CityLanding() {
  const { city: slug } = useParams()
  const city = cityMap[slug]

  if (!city) return <Navigate to="/" replace />

  return (
    <PageTransition>
      <Helmet>
        <title>Commercial Canopy Cleaning {city.name} | TR19 Certified | Fan Repair</title>
        <meta name="description" content={`Professional commercial canopy cleaning in ${city.name}. TR19 certified engineers, emergency fan repair, duct cleaning and compliance certification. Call 07517 758507.`} />
        <meta property="og:title" content={`Commercial Canopy Cleaning ${city.name} | TR19 Certified`} />
        <meta property="og:description" content={`TR19 canopy cleaning, fan repair and duct cleaning in ${city.name}. Certified engineers, 24/7 emergency response. Call 07517 758507.`} />
        <link rel="canonical" href={`https://commercialcanopycleaning.co.uk/commercial-canopy-cleaning/${slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `Commercial Canopy Cleaning ${city.name}`,
          provider: {
            '@type': 'LocalBusiness',
            name: 'Commercial Canopy Cleaning',
            telephone: '07517758507',
            url: 'https://commercialcanopycleaning.co.uk',
          },
          areaServed: { '@type': 'City', name: city.name },
          description: `TR19 certified canopy cleaning, duct cleaning and fan repair services in ${city.name}.`,
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 70% 50%,rgba(26,95,168,0.12) 0%,transparent 60%),#0A0A0A' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="section-label">Serving {city.name}</span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-5">
              Commercial Canopy<br />
              <span className="text-brand-blue-bright">Cleaning {city.name}</span>
            </h1>
            <p className="font-body text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              TR19 certified canopy cleaning, duct cleaning, and emergency fan repair in {city.name} and the surrounding area. Certified engineers, full compliance documentation, 24/7 availability.
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

      {/* What's included */}
      <section className="py-16 sm:py-20 bg-[#070b11]">
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
      <section className="py-16 sm:py-20 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <span className="section-label">Why Choose Us</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white">
              The {city.name} Area's Trusted<br />Ventilation Specialists
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
    </PageTransition>
  )
}
