import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  Wind, FileCheck, Wrench, DoorOpen, Shield, Zap, Clock,
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

Whether it's a seized bearing, failed motor, or a full unit that needs replacing — we diagnose accurately, source correctly, and fix it right first time.`,
    beforeImage: '/work_images/fanbefore.jpeg',
    afterImage: '/work_images/fanafter.jpeg',
    includes: [
      'Same-day emergency callout nationwide',
      'Bearing & motor replacements',
      'Full unit swap and installation',
      'Post-repair performance and airflow check',
    ],
    slug: 'fan-repair',
  },
  {
    id: 'canopy-cleaning',
    icon: Wind,
    title: 'Canopy Cleaning',
    tagline: 'TR19 certified. Documented. Insurance-ready.',
    description: `Your canopy is the first line of defence against grease accumulation and fire risk. Commercial Canopy Cleaning performs full degreasing of canopy hoods and plenum chambers to TR19 specification — using professional-grade degreasers.

Every canopy clean we carry out is documented with photographic evidence taken before and during the job, grease thickness measurements at key points, and a signed TR19 compliance certificate issued promptly after completion. We schedule around your operation to minimise disruption, and we're available out of hours.`,
    beforeImage: '/work_images/canopybefore.jpeg',
    afterImage: '/work_images/canopyafter.jpeg',
    includes: [
      'Internal Canopy Hood (filters not included)',
      'Photographic before & after evidence',
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

Access panel installation where required to ensure every metre of your ductwork is thoroughly cleaned.`,
    beforeImage: '/work_images/ductbefore.png',
    afterImage: '/work_images/ductafter.png',
    includes: [
      'Remove extraction fan motor, de-grease internally and service',
      'Bearing check on fan motor included',
      'De-grease internal ductwork where accessible',
      'Remove and de-grease baffle filters and internal canopy hood',
      'Excludes filter cleaning (customer responsibility weekly)',
      'Please note: Grills not included',
    ],
    slug: 'duct-cleaning',
  },
  {
    id: 'fan-cleaning',
    icon: Wind,
    title: 'Fan Cleaning',
    tagline: 'Degreased, serviced, and back to full performance.',
    description: `Your extraction fan motor is one of the hardest-working components in your kitchen ventilation system — and one of the most overlooked. Grease and debris accumulate inside the motor housing, on fan blades, and throughout the unit over time, reducing airflow, increasing fire risk, and accelerating wear on bearings and belts.

Commercial Canopy Cleaning removes the fan motor, degrease internally, services the unit including a full bearing check, and reinstalls it — leaving your system running cleaner, quieter, and more efficiently. All work is documented with a service report.`,
    beforeImage: '/work_images/fancleanbefore.jpeg',
    afterImage: '/work_images/fancleanafter.jpeg',
    beforeLabel: 'Before',
    afterLabel: 'After',
    includes: [
      'Fan motor removed and degreased internally',
      'Full bearing check included',
      'Fan blades cleaned and inspected',
      'Motor reinstalled and tested',
      'Improves airflow and reduces fire risk',
      'Service report issued on completion',
    ],
    slug: 'fan-cleaning',
  },
  {
    id: 'access-panels',
    icon: DoorOpen,
    title: 'Access Panel Installation & Maintenance',
    tagline: 'TR19-compliant access. Every metre accounted for.',
    description: `Without proper access points, ductwork cannot be fully cleaned — and an incomplete clean is not TR19 compliant. We supply and install access doors directly into your ductwork to allow safe inspection and thorough cleaning of the entire extraction run.

In line with TR19 Grease guidance, access points should be positioned at regular intervals — typically every two metres — to ensure the complete system can be properly maintained. Whether you're installing access panels ahead of a first clean or retrofitting them into an existing system, our engineers will position and fit them correctly to bring your setup into full compliance.`,
    beforeImage: '/work_images/panel1.jpeg',
    afterImage: '/work_images/panel2.jpeg',
    beforeLabel: 'Access Door',
    afterLabel: 'Installed System',
    includes: [
      'Supply and installation of access doors',
      'TR19-compliant positioning every ~2 metres',
      'Suitable for all duct types and sizes',
      'Retrofitting into existing ductwork',
      'Installed to allow full inspection and cleaning access',
      'Documentation confirming panel locations provided',
    ],
    slug: 'access-panels',
  },
  {
    id: 'compliance',
    icon: BadgeCheck,
    title: 'Compliance Certification',
    tagline: 'The paperwork your insurer and assessor requires.',
    description: `TR19 certification is not just a piece of paper — it's the documented evidence that your kitchen extraction system has been cleaned to the correct standard, by a competent engineer, using the correct methodology. Commercial Canopy Cleaning issues comprehensive compliance certification after every job.

Our documentation is used by some of the UK's largest commercial kitchen operators as the definitive record of their ventilation maintenance.`,
    includes: [
      'Signed TR19 engineer certificate',
      'Full photographic evidence pack',
      'Recommended next clean date',
    ],
    slug: 'compliance-certification',
  },
  {
    id: 'emergency',
    icon: Zap,
    title: 'Emergency Callout',
    tagline: 'Nationwide. Fast. £150.',
    description: `When your kitchen extraction system fails — whether it's a fan breakdown, a blocked duct, or an urgent compliance issue before an inspection — you need a team that can respond quickly, anywhere in the UK. Commercial Canopy Cleaning operates a national emergency callout service with no call-out hour restrictions.

Call us directly on 07517 758507 and speak with an engineer. We'll assess the situation over the phone, dispatch to your location, and prioritise getting your operation back to normal. Emergency cleans can be arranged on the same day for compliance-critical situations.`,
    includes: [
      'Callouts — £150',
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
                  <div className="font-body text-xs uppercase tracking-widest" style={{ color: '#F5A623' }}>{service.tagline}</div>
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
                    <img src={service.beforeImage} alt={`Before ${service.title}`} className="w-full h-56 sm:h-80 object-cover" />
                    <div className="bg-black/50 px-3 py-2 text-center">
                      <span className="font-body text-white/50 text-xs uppercase tracking-widest">{service.beforeLabel || 'Before'}</span>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="overflow-hidden rounded-sm border border-white/[0.06]"
                  >
                    <img src={service.afterImage} alt={`After ${service.title}`} className="w-full h-56 sm:h-80 object-cover" />
                    <div className="bg-black/50 px-3 py-2 text-center">
                      <span className="font-body text-white/50 text-xs uppercase tracking-widest">{service.afterLabel || 'After'}</span>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
            <div className="flex-1 lg:basis-2/5">
              <div className="card-surface p-6 sm:p-7 lg:sticky lg:top-28">
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
                    <div className="flex flex-col items-center gap-2 px-3 sm:px-5 py-3 border border-white/[0.06] bg-[#111] min-w-[70px] sm:min-w-[90px]">
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

      {/* Summary of Work Carried Out */}
      <section className="py-14 sm:py-20 bg-[#070b11]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="card-surface p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue-deep to-brand-blue-bright" />

              {/* SAY LEGAL - STAY SAFE top badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#F5A623]/40 bg-[#F5A623]/5">
                <Shield size={13} className="text-[#F5A623]" />
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A623]">Say Legal — Stay Safe</span>
              </div>

              <span className="section-label">Transparency</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-white mb-2 leading-none">Summary of Work Carried Out</h2>
              <p className="font-body text-white/40 text-sm mb-8">Ventilation Cleaning Services</p>

              <div className="h-px bg-white/[0.06] mb-8" />

              <ul className="space-y-4">
                {[
                  'We remove the extraction fan motor, degrease internally and service — includes a full bearing check.',
                  'We take out the baffle filters and degrease the internal canopy hood only. Please note: Baffle grills are not included.',
                  'Whilst the extraction fan is out, we degrease the internal ductwork where accessible.',
                  'If you have access panels installed, we will clean up to 3 panels as part of the service.',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.35 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="text-brand-blue-bright mt-0.5 flex-shrink-0" />
                    <span className="font-body text-white/65 text-sm sm:text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="h-px bg-white/[0.06] mt-8 mb-6" />

              {/* SAY LEGAL - STAY SAFE bottom */}
              <div className="flex items-center gap-2">
                <Shield size={13} className="text-[#F5A623]" />
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#F5A623]">Say Legal — Stay Safe</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-px bg-white/[0.06]" /></div>

      {/* Service sections */}
      {services.map((service, index) => <ServiceSection key={service.id} service={service} index={index} />)}

      {/* Brands We Specialise In */}
      <section className="py-14 sm:py-20 bg-[#070b11] border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-8 sm:mb-10 text-center">
            <span className="section-label block mx-auto">Expertise</span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white">Brands We Specialise In</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <img
              src="/logos/brands_specialise.jpeg"
              alt="Brands we specialise in — Ziehl-Abegg, Ruck, Vent-Axia, S&S Northern, Helios, BANiCO, FläktWoods, Roof Units, S&P, Elta Fans, Phantom"
              className="w-full max-w-sm mx-auto block rounded-sm border border-white/[0.06]"
            />
          </ScrollReveal>
        </div>
      </section>

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
              { before: '/work_images/canopybefore3.jpeg', after: '/work_images/canopyafter3.jpeg', title: 'Canopy Restoration' },
              { before: '/work_images/boxfanbefore.jpeg', after: '/work_images/boxfanafter.jpeg', title: 'Box Fan Clean' },
              { before: '/work_images/fanbefore3.jpeg', after: '/work_images/fanafter3.jpeg', title: 'Fan Repair Transformation' },
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
                      <img src={item.before} alt={`Before: ${item.title}`} className={`w-full h-56 sm:h-72 ${item.fit === 'contain' ? 'object-contain' : 'object-cover'}`} />
                      <div className="bg-black/50 px-3 py-2 text-center">
                        <span className="font-body text-white/50 text-xs uppercase tracking-widest">Before</span>
                      </div>
                    </div>
                    {/* After */}
                    <div className="overflow-hidden rounded-sm border border-white/[0.06]">
                      <img src={item.after} alt={`After: ${item.title}`} className={`w-full h-56 sm:h-72 ${item.fit === 'contain' ? 'object-contain' : 'object-cover'}`} />
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
