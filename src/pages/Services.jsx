import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Wind, FileCheck, Wrench, Shield, Zap, Clock,
  ArrowRight, ChevronDown, Phone
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal, { ScrollRevealContainer, ScrollRevealItem } from '../components/ScrollReveal'

const services = [
  {
    id: 'canopy',
    icon: Wind,
    title: 'Canopy Cleaning',
    tagline: 'Grease-free. Fire-safe. Compliant.',
    description:
      'Our canopy cleaning service covers everything above your cooking line — hood surfaces, baffles, filter arrays, and plenum chambers. We remove built-up grease deposits using professional-grade degreasers and high-temperature steam, restoring your canopy to a safe, compliant state.',
    detail:
      'Every clean is documented with photographic evidence (before and after), grease measurement readings, and a TR19-compliant certificate ready for your records. We work out of hours to minimise disruption to your kitchen operations.',
    features: [
      'Baffle and filter deep clean',
      'Plenum and duct entry cleaning',
      'Grease trap inspection',
      'TR19 compliance certificate',
      'Photographic documentation',
      'Out-of-hours scheduling available',
    ],
  },
  {
    id: 'duct',
    icon: FileCheck,
    title: 'Duct Cleaning',
    tagline: 'Full ductwork. Full documentation.',
    description:
      'Grease accumulation inside ductwork represents a serious fire risk and a breach of TR19 guidelines. Our duct cleaning service covers the full run from canopy to discharge — every metre cleaned, inspected, and signed off.',
    detail:
      'We use specialist duct access equipment and high-powered rotary brushing systems to thoroughly clean all internal surfaces. All work is captured with CCTV inspection footage and photographic evidence where applicable.',
    features: [
      'Full ductwork run inspection',
      'Rotary brush & vacuum clean',
      'Access panel installation if required',
      'CCTV footage on request',
      'Grease depth measurements',
      'Full TR19 sign-off report',
    ],
  },
  {
    id: 'fan',
    icon: Wrench,
    title: 'Fan Repair & Breakdown',
    tagline: 'Down time costs money. We move fast.',
    description:
      'A failed extraction fan can shut down your kitchen. Our fan breakdown service provides rapid nationwide response — we diagnose the fault, source parts where needed, and get your system back online quickly.',
    detail:
      'We specialise in commercial kitchen extract fans including centrifugal, axial, and bifurcated units. From belt replacements and motor rewinds to full unit swaps, our engineers carry common parts to minimise return visits.',
    features: [
      'Rapid nationwide response',
      'Centrifugal, axial & bifurcated fans',
      'Belt, bearing & motor replacement',
      'Full unit swap & installation',
      'Emergency same-day callout',
      'Post-repair performance check',
    ],
  },
  {
    id: 'hvac',
    icon: Shield,
    title: 'HVAC Servicing',
    tagline: 'Maintained systems. Lower energy costs.',
    description:
      'Our HVAC servicing keeps your full ventilation system running efficiently and reliably. We cover filter replacements, coil cleaning, belt and bearing checks, motor lubrication, and system performance testing.',
    detail:
      'Planned preventative maintenance contracts are available — we schedule regular visits to keep your system in peak condition and catch issues before they become costly breakdowns.',
    features: [
      'Filter replacement & coil clean',
      'Belt, bearing & motor service',
      'System performance testing',
      'Air flow balancing',
      'Planned maintenance contracts',
      'Full service report provided',
    ],
  },
  {
    id: 'compliance',
    icon: FileCheck,
    title: 'Compliance Certification',
    tagline: 'The paperwork your insurer demands.',
    description:
      'We produce full TR19-standard compliance packs for every job — the documentation your insurer, fire risk assessor, and environmental health officer needs. No cutting corners, no shortcuts.',
    detail:
      'Each compliance pack includes a grease thickness assessment, photographic before and after evidence, engineer sign-off certificate, and recommended next cleaning date. We retain copies in our system for easy reissue if required.',
    features: [
      'Grease thickness assessment',
      'Before & after photography',
      'TR19 engineer sign-off',
      'Insurance-ready certificate',
      'Digital and hard copy options',
      'Records retained for reissue',
    ],
  },
  {
    id: 'emergency',
    icon: Zap,
    title: 'Emergency Callout',
    tagline: 'National reach. Fast response.',
    description:
      'When your kitchen extraction system fails or a critical compliance issue arises, you need a team that can respond — fast. We operate a nationwide emergency callout service, mobilising engineers quickly wherever you are.',
    detail:
      'Whether it is a fan failure, a fire risk identified during an inspection, or an urgent pre-inspection clean required, we have the resource and reach to help. Call us directly on 07517 758507 to speak with an engineer.',
    features: [
      'Nationwide coverage',
      'Rapid response prioritisation',
      'Fan failures & breakdowns',
      'Pre-inspection emergency cleans',
      'Out-of-hours availability',
      'Direct line to qualified engineers',
    ],
  },
]

function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = service.icon

  return (
    <ScrollRevealItem>
      <motion.div
        className={`card-surface overflow-hidden transition-all duration-300 ${
          expanded ? 'border-brand-blue-bright/40' : 'hover:border-white/12'
        }`}
        layout
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-8 group"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-5">
              <div className={`w-12 h-12 flex items-center justify-center border transition-colors duration-300 flex-shrink-0 ${
                expanded
                  ? 'border-brand-blue-bright bg-brand-blue-bright/10'
                  : 'border-white/10 group-hover:border-brand-blue-bright/50'
              }`}>
                <Icon size={20} className={`transition-colors duration-300 ${
                  expanded ? 'text-brand-blue-bright' : 'text-white/40 group-hover:text-brand-blue-bright'
                }`} />
              </div>
              <div>
                <div className="font-body text-brand-blue-bright text-xs uppercase tracking-widest mb-1">
                  {service.tagline}
                </div>
                <h3 className="font-heading text-2xl text-white tracking-wide">
                  {service.title}
                </h3>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex-shrink-0 mt-1"
            >
              <ChevronDown size={20} className="text-white/30" />
            </motion.div>
          </div>

          <p className="font-body text-white/50 text-sm leading-relaxed mt-5">
            {service.description}
          </p>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-8 border-t border-white/[0.06]">
                <p className="font-body text-white/40 text-sm leading-relaxed mt-6 mb-6">
                  {service.detail}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-blue-bright rounded-full flex-shrink-0" />
                      <span className="font-body text-white/60 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary text-sm px-6 py-3 inline-flex">
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </ScrollRevealItem>
  )
}

export default function Services() {
  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(26,95,168,0.1) 0%, transparent 60%), #0A0A0A',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 font-body text-white/30 text-sm mb-6">
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Services</span>
            </div>
            <span className="section-label">What We Offer</span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-6">
              Our Services
            </h1>
            <p className="font-body text-white/50 text-lg max-w-2xl leading-relaxed">
              Full-spectrum canopy and duct cleaning, fan repair, HVAC servicing, and compliance certification — all to TR19 standards. Every job. No exceptions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Services Grid */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealContainer className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-20 bg-[#070b11] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
                Not Sure What<br />
                <span className="text-brand-blue-bright">You Need?</span>
              </h2>
              <p className="font-body text-white/50 leading-relaxed">
                Call us and speak directly with an engineer. We'll assess your requirements and recommend the right service — no pushy sales, just straight advice.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="tel:07517758507" className="btn-primary justify-center sm:justify-start">
                  <Phone size={18} />
                  07517 758507
                </a>
                <a
                  href="https://wa.me/447517758507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost justify-center sm:justify-start"
                >
                  WhatsApp Us <ArrowRight size={16} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
