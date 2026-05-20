import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Phone, ArrowRight, CheckCircle2, Wind, FileCheck, Wrench, ChevronDown, ClipboardCheck, Camera, Ruler, ShieldCheck } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'
import { cityMap } from '../data/cities'

const cleaningSteps = [
  { icon: Ruler,         step: '01', title: 'Grease Assessment',       desc: 'We measure grease depth throughout the canopy and duct run using TR19 methodology before any work begins.' },
  { icon: Wind,          step: '02', title: 'Baffle Removal & Soak',   desc: 'All baffles are removed and placed in a hot degreasing solution to dissolve accumulated cooking grease.' },
  { icon: Wrench,        step: '03', title: 'Canopy Deep Clean',       desc: 'Hood interior, plenum chamber, and all internal surfaces are pressure-cleaned and hand-degreased to bare metal.' },
  { icon: FileCheck,     step: '04', title: 'Full Duct Run Clean',     desc: 'The complete extraction duct from canopy to discharge point is cleaned — not just the visible canopy section.' },
  { icon: Camera,        step: '05', title: 'Photographic Evidence',   desc: 'Before-and-after photographs of every section are taken and compiled into your compliance evidence pack.' },
  { icon: ClipboardCheck,step: '06', title: 'TR19 Certificate',        desc: 'A signed TR19 compliance certificate is issued on completion — accepted by all major commercial property insurers.' },
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
    ? ` including ${city.nearby.slice(0, 3).join(', ')}`
    : ''
  return [
    {
      q: `What does canopy cleaning involve in ${city.name}?`,
      a: `Canopy cleaning in ${city.name} covers the full extraction system — canopy hood, baffles, plenum chamber, and the complete duct run to the discharge point. Our engineers remove and soak all baffles, pressure-clean internal surfaces, and clean every metre of ductwork. A TR19 compliance certificate and photographic evidence pack are issued on completion.`,
    },
    {
      q: `Is canopy cleaning a legal requirement for ${city.name} kitchens?`,
      a: `Canopy cleaning is not directly mandated by legislation but is required by most commercial property insurance policies. The TR19 standard (published by BESA) defines how often canopies must be cleaned based on cooking type. Failure to maintain TR19-compliant cleaning can invalidate insurance fire claims and may result in a failed fire safety inspection.`,
    },
    {
      q: `How long does canopy cleaning take in ${city.name}?`,
      a: `A standard canopy clean in ${city.name} typically takes 2–4 hours depending on the size of the kitchen, number of canopies, and length of the duct run. Larger sites with multiple canopies or long duct runs may take longer. We work around your service hours to minimise disruption.`,
    },
    {
      q: `Which ${city.name} kitchens need canopy cleaning?`,
      a: `Any commercial kitchen in ${city.name} that produces cooking vapours needs regular canopy cleaning — restaurants, takeaways, hotels, pubs, cafés, schools, care homes, dark kitchens, and food production facilities. The heavier the cooking (wok, charcoal, deep fry), the more frequently cleaning is required under TR19.`,
    },
    {
      q: `How do I know if my ${city.name} canopy needs cleaning?`,
      a: `Signs your canopy needs cleaning include visible grease build-up on baffles, reduced airflow or extraction noise, cooking smells escaping into the dining area, or a TR19 certificate that is overdue. We recommend booking a free assessment — call 07517 758507 and one of our ${city.name} engineers can advise.`,
    },
  ]
}

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

export default function CanopyCleaningLanding() {
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
      { '@type': 'ListItem', position: 2, name: 'Canopy Cleaning', item: 'https://commercialcanopycleaning.co.uk' },
      { '@type': 'ListItem', position: 3, name: city.name, item: `https://commercialcanopycleaning.co.uk/canopy-cleaning/${slug}` },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Canopy Cleaning ${city.name}`,
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
    description: `Professional TR19-certified canopy cleaning service in ${city.name}${city.region ? `, ${city.region}` : ''}. Full duct run cleaning, photographic evidence, and compliance certificate included.`,
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
        <title>Canopy Cleaning {city.name} | TR19 Certified Kitchen Canopy Cleaning</title>
        <meta name="description" content={`Professional canopy cleaning in ${city.name}${city.region ? `, ${city.region}` : ''}. TR19 certified engineers clean your full extraction system — canopy, baffles, duct run — with photographic evidence and compliance certificate. Call 07517 758507.`} />
        <meta property="og:title" content={`Canopy Cleaning ${city.name} | TR19 Certified`} />
        <meta property="og:description" content={`Expert canopy cleaning in ${city.name}. TR19 certified, full duct run, photographic evidence. Compliance certificate issued. Call 07517 758507.`} />
        <link rel="canonical" href={`https://commercialcanopycleaning.co.uk/canopy-cleaning/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 30% 50%,rgba(26,95,168,0.12) 0%,transparent 60%),#0A0A0A' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <nav className="flex items-center gap-2 font-body text-xs text-white/30 mb-5" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/50">Canopy Cleaning</span>
              <span>/</span>
              <span className="text-white/70">{city.name}</span>
            </nav>
            <span className="section-label">Canopy Cleaning — {city.name}{city.region ? `, ${city.region}` : ''}</span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-5">
              Canopy Cleaning<br />
              <span className="text-brand-blue-bright">{city.name}</span>
            </h1>
            <p className="font-body text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed mb-4">
              Professional kitchen canopy cleaning in {city.name} — TR19 certified, full duct run covered, photographic evidence and compliance certificate included as standard.
            </p>
            <p className="font-body text-white/40 text-sm max-w-2xl leading-relaxed mb-8">
              Also need emergency fan repair or full commercial canopy cleaning?{' '}
              <Link to={`/commercial-canopy-cleaning/${slug}`} className="text-brand-blue-bright hover:underline">
                See our full commercial canopy cleaning service in {city.name} →
              </Link>
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

      {/* How We Clean */}
      <section className="py-16 sm:py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <span className="section-label">Our Process</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white">
              How We Clean Your<br />Canopy in {city.name}
            </h2>
            <p className="font-body text-white/50 text-sm mt-3 max-w-2xl leading-relaxed">
              Every canopy cleaning visit in {city.name} follows a structured TR19-compliant process from initial assessment through to certification.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cleaningSteps.map(({ icon: Icon, step, title, desc }) => (
              <ScrollReveal key={step}>
                <div className="card-surface p-6 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 font-heading text-5xl text-white/[0.04] leading-none select-none">{step}</div>
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
                Canopy Cleaning in {city.name} &amp; Nearby Areas
              </h2>
              <p className="font-body text-white/50 text-sm max-w-2xl leading-relaxed">
                Our canopy cleaning engineers based near {city.name} cover the surrounding towns throughout {city.region || 'the region'}.
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
              <span className="section-label">Every Canopy Clean in {city.name}</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-white mb-4">What's Always Included</h2>
              <p className="font-body text-white/50 leading-relaxed mb-8">
                Every canopy cleaning visit in {city.name} includes the same thorough process and documentation — no add-ons, no hidden costs.
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
                <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-2">Book a Clean</div>
                <h3 className="font-heading text-3xl text-white mb-4">Canopy Cleaning Quote — {city.name}</h3>
                <p className="font-body text-white/50 text-sm mb-6 leading-relaxed">
                  Call us directly to speak with an engineer, or send an enquiry and we'll quote for your {city.name} kitchen.
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

      {/* TR19 Compliance Banner */}
      <section className="py-12 bg-[#070b11] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-7 border border-brand-blue-bright/20 bg-brand-blue-bright/5">
              <ShieldCheck size={40} className="text-brand-blue-bright flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-heading text-2xl text-white mb-1">TR19 Certified Canopy Cleaning</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  All our canopy cleaning work in {city.name} is carried out to TR19 specification — the UK standard for kitchen ventilation hygiene. Your certificate is valid for insurance purposes and fire safety inspections.
                </p>
              </div>
              <Link to="/compliance" className="btn-ghost flex-shrink-0 justify-center">
                About TR19 <ArrowRight size={15} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <span className="section-label">Common Questions</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white">
              Canopy Cleaning FAQs — {city.name}
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
