import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  Wind, FileCheck, Wrench, Shield, Zap, Clock,
  ArrowRight, ChevronDown, Phone, CheckCircle2,
  ClipboardList, Scan, Settings, BadgeCheck, FileText
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal, { ScrollRevealContainer, ScrollRevealItem } from '../components/ScrollReveal'
import { useState } from 'react'

const processSteps = [
  { icon: Scan, label: 'Survey' },
  { icon: Settings, label: 'Clean' },
  { icon: ClipboardList, label: 'Test' },
  { icon: BadgeCheck, label: 'Certify' },
  { icon: FileText, label: 'Report' },
]

const services = [
  {
    id: 'fan-repair',
    icon: Wrench,
    title: 'Fan Repair & Breakdown',
    tagline: 'Specialist emergency response — not generalists.',
    description: `A failed kitchen extraction fan can shut down your entire operation within minutes. Commercial Canopy Cleaning are fan breakdown specialists — this isn't a side service, it's a core part of what we do. Our engineers carry common spare parts and diagnostic equipment, and we mobilise nationally to get your system back online as fast as possible.

We work on centrifugal, axial, and bifurcated extract fans of all makes. Whether it's a worn belt, seized bearing, failed motor, or a full unit that needs replacing — we diagnose accurately, source correctly, and fix it right first time.`,
    beforeImage: '/work_images/fanbefore.jpeg',
    afterImage: '/work_images/fanafter.jpeg',
    includes: [
      'Same-day emergency callout nationwide',
      'Centrifugal, axial & bifurcated fan specialists',
      'Belt, bearing & motor replacement',
      'Full unit swap and installation',
      'Post-repair performance and airflow check',
      'Service report issued after every job',
    ],
    slug: 'fan-repair',
  },
  {
    id: 'canopy-cleaning',
    icon: Wind,
    title: 'Canopy Cleaning',
    tagline: 'TR19 certified. Documented. Insurance-ready.',
    description: `Your canopy is the first line of defence against grease accumulation and fire risk. Commercial Canopy Cleaning performs full degreasing of canopy hoods, baffles, filter arrays, and plenum chambers to TR19 specification — using professional-grade degreasers and high-temperature steam equipment.

Every canopy clean we carry out is documented with photographic evidence taken before and during the job, grease thickness measurements at key points, and a signed TR19 compliance certificate issued promptly after completion. We schedule around your operation to minimise disruption, and we're available out of hours.`,
    beforeImage: '/work_images/canopybefore.jpeg',
    afterImage: '/work_images/canopyafter.jpeg',
    includes: [
      'Hood, baffle & filter deep clean',
      'Plenum chamber degreasing',
      'Grease trap inspection',
      'Photographic before & after evidence',
      'Grease depth measurement report',
      'TR19 compliance certificate issued',
    ],
    slug: 'canopy-cleaning',
  },
  {
    id: 'duct-cleaning',
    icon: FileCheck,
    title: 'Duct Cleaning',
    tagline: 'Full run cleaned — not just the hood.',
    description: `Cleaning only the canopy without addressing the ductwork is not TR19 compliant — and most insurers know it. Grease accumulates throughout the full extraction run, from the canopy entry all the way to the external discharge point. Commercial Canopy Cleaning cleans the complete duct run.

We use specialist rotary brush systems, high-powered vacuum extraction, and access panel installation where required to ensure every metre of your ductwork is thoroughly cleaned. CCTV inspection footage is available on request for longer or more complex duct runs.`,
    beforeImage: '/work_images/ductbefore.png',
    afterImage: '/work_images/ductafter.png',
    includes: [
      'Full ductwork run — canopy to discharge',
      'Rotary brush & vacuum extraction',
      'Access panel installation where required',
      'CCTV inspection footage (on request)',
      'Grease depth measurements throughout',
      'Full TR19 sign-off documentation',
    ],
    slug: 'duct-cleaning',
  },
  {
    id: 'hvac-servicing',
    icon: Shield,
    title: 'HVAC Servicing',
    tagline: 'Maintained systems run cooler, cheaper, longer.',
    description: `A neglected HVAC system doesn't just risk compliance failure — it costs you money every day in reduced efficiency and accelerated wear. Our HVAC servicing programme covers all key components: filter replacement, coil and heat exchanger cleaning, belt and bearing inspections, motor lubrication, and system-wide airflow balancing.

We offer both one-off servicing visits and planned preventative maintenance contracts for businesses that want consistent performance and compliance year-round. All work is documented with a full service report.`,
    includes: [
      'Filter replacement & coil clean',
      'Belt, bearing & motor inspection',
      'Heat exchanger & evaporator service',
      'System airflow balancing',
      'Planned maintenance contracts available',
      'Full service report after every visit',
    ],
    slug: 'hvac-servicing',
  },
  {
    id: 'compliance',
    icon: BadgeCheck,
    title: 'Compliance Certification',
    tagline: 'The paperwork your insurer and assessor requires.',
    description: `TR19 certification is not just a piece of paper — it's the documented evidence that your kitchen extraction system has been cleaned to the correct standard, by a competent engineer, using the correct methodology. Commercial Canopy Cleaning issues comprehensive compliance packs after every job.

Our documentation is used by some of the UK's largest commercial kitchen operators as the definitive record of their ventilation maintenance. We retain digital copies in our system and can reissue documentation quickly if originals are ever misplaced.`,
    includes: [
      'Signed TR19 engineer certificate',
      'Grease thickness assessment report',
      'Full photographic evidence pack',
      'Recommended next clean date',
      'Digital & hard copy options',
      'Records retained for rapid reissue',
    ],
    slug: 'compliance-certification',
  },
  {
    id: 'emergency',
    icon: Zap,
    title: 'Emergency Callout',
    tagline: 'Nationwide. Fast. No waiting lists.',
    description: `When your kitchen extraction system fails — whether it's a fan breakdown, a blocked duct, or an urgent compliance issue before an inspection — you need a team that can respond quickly, anywhere in the UK. Commercial Canopy Cleaning operates a national emergency callout service with no call-out hour restrictions.

Call us directly on 07517 758507 and speak with an engineer. We'll assess the situation over the phone, dispatch to your location, and prioritise getting your operation back to normal. Emergency cleans can be arranged on the same day for compliance-critical situations.`,
    includes: [
      '24/7 emergency availability',
      'Speak directly with an engineer',
      'Rapid dispatch nationwide',
      'Fan failures & critical breakdowns',
      'Same-day pre-inspection cleans',
      'Full documentation after every emergency job',
    ],
    slug: 'emergency-callout',
  },
]

function ServiceSection({ service, index }) {
  const Icon = service.icon
  const isAlternate = index % 2 === 1
  
  return (
    <section id={service.id} className="py-16 sm:py-20 border-b border-white/[0.06] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 ${isAlternate ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1 lg:basis-3/5">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 flex items-center justify-center border border-brand-blue-bright/30 bg-brand-blue-bright/5">
                  <Icon size={22} className="text-brand-blue-bright" />
                </div>
                <div>
                  <div className="font-body text-brand-blue-bright text-xs uppercase tracking-widest">{service.tagline}</div>
                  <h2 className="font-heading text-3xl sm:text-4xl text-white tracking-wide leading-tight">{service.title}</h2>
                </div>
              </div>
              <div className="space-y-4">
                {service.description.split('\n\n').map((para, i) => (
                  <p key={i} className="font-body text-white/55 text-sm sm:text-base leading-relaxed">{para}</p>
                ))}
              </div>

              {/* Before/After Images */}
              {service.beforeImage && service.afterImage && (
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-sm border border-white/[0.06]"
                  >
                    <img src={service.beforeImage} alt={`Before ${service.title}`} className="w-full h-32 sm:h-40 object-cover" />
                    <div className="bg-black/50 px-3 py-2 text-center">
                      <span className="font-body text-white/50 text-xs uppercase tracking-widest">Before</span>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="overflow-hidden rounded-sm border border-white/[0.06]"
                  >
                    <img src={service.afterImage} alt={`After ${service.title}`} className="w-full h-32 sm:h-40 object-cover" />
                    <div className="bg-black/50 px-3 py-2 text-center">
                      <span className="font-body text-white/50 text-xs uppercase tracking-widest">After</span>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
            <div className="flex-1 lg:basis-2/5">
              <div className="card-surface p-6 sm:p-7 sticky top-28">
                <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-4">What's Included</div>
                <ul className="space-y-3 mb-7">
                  {service.includes.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-brand-blue-bright mt-0.5 flex-shrink-0" />
                      <span className="font-body text-white/60 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="btn-primary text-sm w-full justify-center">
                  Request This Service <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <PageTransition>
      <Helmet>
        <title>Services | TR19 Canopy Cleaning, Fan Repair, HVAC | Commercial Canopy Cleaning</title>
        <meta name="description" content="TR19 canopy cleaning, duct cleaning, emergency fan repair, HVAC servicing, and compliance certification. Nationwide. Certified engineers." />
        <meta property="og:title" content="Services | Commercial Canopy Cleaning" />
        <meta property="og:description" content="Full-spectrum kitchen ventilation services — canopy cleaning, duct cleaning, fan repair, HVAC servicing, TR19 compliance." />
      </Helmet>

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background:'radial-gradient(ellipse 60% 60% at 80% 50%,rgba(26,95,168,0.1) 0%,transparent 60%),#0A0A0A' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 font-body text-white/30 text-sm mb-6">
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Services</span>
            </div>
            <span className="section-label">What We Offer</span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-5">Our Services</h1>
            <p className="font-body text-white/50 text-base sm:text-lg max-w-2xl leading-relaxed">
              All services carried out to TR19 standards with full certification and photographic reporting. Every job. No exceptions.
            </p>
          </ScrollReveal>

          {/* Process strip */}
          <ScrollReveal delay={0.15} className="mt-10">
            <div className="flex items-center gap-0 overflow-x-auto pb-2">
              {processSteps.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={step.label} className="flex items-center flex-shrink-0">
                    <div className="flex flex-col items-center gap-2 px-5 py-3 border border-white/[0.06] bg-[#111] min-w-[90px]">
                      <Icon size={18} className="text-brand-blue-bright" />
                      <span className="font-body text-white/50 text-xs uppercase tracking-widest">{step.label}</span>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-6 h-px bg-brand-blue-bright/30 flex-shrink-0" />
                    )}
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-px bg-white/[0.06]" /></div>

      {/* Service sections */}
      {services.map((service, index) => <ServiceSection key={service.id} service={service} index={index} />)}

      {/* Work Showcase Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12 sm:mb-16">
            <span className="section-label">Real Results</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-3">Our Work in Action</h2>
            <p className="font-body text-white/50 max-w-2xl text-sm sm:text-base">See the transformations we've made for businesses across the UK. Every before and after shows our commitment to complete, professional restoration.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { before: '/work_images/canopybefore2.jpeg', after: '/work_images/canopyafter1.jpeg', title: 'Canopy Restoration' },
              { before: '/work_images/fanbefore2.jpeg', after: '/work_images/fanafter2.jpeg', title: 'Fan Repair Transformation' },
              { before: '/work_images/allbefore.jpeg', after: '/work_images/allafter.jpeg', title: 'Complete System Clean' },
            ].map((item, idx) => (
              <ScrollRevealItem key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-3"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {/* Before */}
                    <div className="overflow-hidden rounded-sm border border-white/[0.06]">
                      <img src={item.before} alt={`Before: ${item.title}`} className="w-full h-40 sm:h-48 object-cover" />
                      <div className="bg-black/50 px-3 py-2 text-center">
                        <span className="font-body text-white/50 text-xs uppercase tracking-widest">Before</span>
                      </div>
                    </div>
                    {/* After */}
                    <div className="overflow-hidden rounded-sm border border-white/[0.06]">
                      <img src={item.after} alt={`After: ${item.title}`} className="w-full h-40 sm:h-48 object-cover" />
                      <div className="bg-black/50 px-3 py-2 text-center">
                        <span className="font-body text-white/50 text-xs uppercase tracking-widest">After</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-2">
                    <h3 className="font-heading text-white text-sm sm:text-base tracking-wide">{item.title}</h3>
                  </div>
                </motion.div>
              </ScrollRevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-20 bg-[#070b11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
                Not Sure What<br /><span className="text-brand-blue-bright">You Need?</span>
              </h2>
              <p className="font-body text-white/50 leading-relaxed">Call us and speak directly with an engineer. We'll assess your requirements and recommend the right service — straight advice, no sales pressure.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:07517758507" className="btn-primary justify-center sm:justify-start">
                  <Phone size={18} /> 07517 758507
                </a>
                <Link to="/contact" className="btn-ghost justify-center sm:justify-start">
                  Send an Enquiry <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
