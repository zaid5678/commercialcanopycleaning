import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Phone, ArrowRight, CheckCircle2, ChevronDown, ShieldCheck } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import { cityMap } from '../data/cities'
import { serviceConfigs } from '../data/serviceConfigs'

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-white/[0.08] bg-white/[0.02]">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base sm:text-lg text-white tracking-wide leading-snug">{faq.q}</span>
        <ChevronDown size={18} className={`text-brand-blue-bright flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="font-body text-white/55 text-sm leading-relaxed">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function ServiceCityLanding({ serviceSlug }) {
  const { city: slug } = useParams()
  const city = cityMap[slug]
  const config = serviceConfigs[serviceSlug]
  const [openFaq, setOpenFaq] = useState(null)

  if (!city || !config) return <Navigate to="/" replace />

  const faqs = config.faqs(city.name)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',                      item: 'https://commercialcanopycleaning.co.uk' },
      { '@type': 'ListItem', position: 2, name: config.keyword,              item: `https://commercialcanopycleaning.co.uk/${serviceSlug}/london` },
      { '@type': 'ListItem', position: 3, name: city.name,                   item: `https://commercialcanopycleaning.co.uk/${serviceSlug}/${slug}` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${config.keyword} ${city.name}`,
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
    description: config.metaDesc(city.name, city.region),
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

  const relatedLinks = config.relatedLinks(slug, city.name)

  return (
    <PageTransition>
      <Helmet>
        <title>{config.title(city.name)}</title>
        <meta name="description" content={config.metaDesc(city.name, city.region)} />
        <meta property="og:title" content={config.title(city.name)} />
        <meta property="og:description" content={config.metaDesc(city.name, city.region)} />
        <link rel="canonical" href={`https://commercialcanopycleaning.co.uk/${serviceSlug}/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 60% 50%,rgba(26,95,168,0.12) 0%,transparent 60%),#0A0A0A' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <nav className="flex items-center gap-2 font-body text-xs text-white/30 mb-5" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/50">{config.keyword}</span>
              <span>/</span>
              <span className="text-white/70">{city.name}</span>
            </nav>
            <span className="section-label">{config.sectionLabel(city.name)}{city.region ? ` — ${city.region}` : ''}</span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-5">
              {config.h1Line1}<br />
              <span className="text-brand-blue-bright">{config.h1Line2(city.name)}</span>
            </h1>
            <p className="font-body text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              {config.intro(city.name, city.region)}
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

      {/* Highlights */}
      <section className="py-16 sm:py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <span className="section-label">What We Cover</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white">
              Our {config.keyword} Service<br />in {city.name}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {config.highlights.map(({ title, desc }, i) => (
              <ScrollReveal key={i}>
                <div className="card-surface p-6 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 font-heading text-5xl text-white/[0.04] leading-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="w-2 h-8 bg-brand-blue-bright mb-4" />
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
                {config.keyword} in {city.name} &amp; Surrounding Areas
              </h2>
              <p className="font-body text-white/50 text-sm max-w-2xl leading-relaxed">
                Our engineers cover {city.name} and the surrounding towns throughout {city.region || 'the region'}.
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

      {/* What's Included */}
      <section className="py-16 sm:py-20 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="section-label">Every Job in {city.name}</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-white mb-4">What's Always Included</h2>
              <p className="font-body text-white/50 leading-relaxed mb-8">
                Every {config.keyword.toLowerCase()} visit in {city.name} comes with the same thorough service and documentation as standard — no hidden costs.
              </p>
              <ul className="space-y-3">
                {config.includes.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-blue-bright mt-0.5 flex-shrink-0" />
                    <span className="font-body text-white/65 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="card-surface p-8">
                <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-2">Book Now</div>
                <h3 className="font-heading text-3xl text-white mb-4">{config.keyword} Quote — {city.name}</h3>
                <p className="font-body text-white/50 text-sm mb-6 leading-relaxed">
                  Call us directly to speak with an engineer, or send an enquiry for a tailored quote for your {city.name} premises.
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

      {/* TR19 Banner (cleaning services only) */}
      {serviceSlug !== 'fan-repairs' && serviceSlug !== 'fan-replacements' && (
        <section className="py-12 bg-[#070b11] border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-7 border border-brand-blue-bright/20 bg-brand-blue-bright/5">
                <ShieldCheck size={40} className="text-brand-blue-bright flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-heading text-2xl text-white mb-1">TR19 Certified — Every Job</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    All our {config.keyword.toLowerCase()} work in {city.name} is carried out to TR19 specification. Your certificate is valid for insurance purposes and fire safety inspections.
                  </p>
                </div>
                <Link to="/compliance" className="btn-ghost flex-shrink-0 justify-center">
                  About TR19 <ArrowRight size={15} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <span className="section-label">Common Questions</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white">
              {config.keyword} FAQs — {city.name}
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i}>
                <FaqItem
                  faq={faq}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 sm:py-16 bg-[#070b11] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="section-label">Also Available in {city.name}</span>
            <h2 className="font-heading text-3xl sm:text-4xl text-white mb-6">Related Services</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              {relatedLinks.map(({ to, label }) => (
                <Link key={to} to={to} className="btn-ghost justify-center sm:justify-start text-sm">
                  {label} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
