import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, ShieldCheck, FileText, Camera, AlertTriangle,
  ChevronDown, CheckCircle2, Flame, Scale, Building
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal, { ScrollRevealContainer, ScrollRevealItem } from '../components/ScrollReveal'

const whyMatters = [
  {
    icon: Flame,
    title: 'Fire Safety',
    desc: 'Grease accumulation in canopies and ductwork is one of the leading causes of commercial kitchen fires. TR19 cleaning intervals are calculated specifically to prevent grease build-up from reaching ignition levels.',
  },
  {
    icon: Scale,
    title: 'Legal Obligation',
    desc: 'Under the Regulatory Reform (Fire Safety) Order 2005 and Health & Safety at Work Act, employers have a legal duty to manage fire risks. Neglecting duct cleaning compliance can result in prosecution and significant fines.',
  },
  {
    icon: Building,
    title: 'Insurance Validity',
    desc: 'Most commercial kitchen insurance policies require evidence of regular TR19-compliant cleaning. Without certified documentation, a fire claim may be rejected — leaving you exposed to catastrophic losses.',
  },
]

const whatYouReceive = [
  {
    icon: FileText,
    title: 'TR19 Certificate',
    desc: 'A signed compliance certificate confirming the system has been cleaned to TR19 standard, ready for your insurer, fire risk assessor, or environmental health officer.',
  },
  {
    icon: Camera,
    title: 'Photographic Evidence',
    desc: 'Before and after photography of every area cleaned. Visual evidence of grease levels prior to the clean, and confirmation of the completed work.',
  },
  {
    icon: ShieldCheck,
    title: 'Grease Depth Report',
    desc: 'Grease thickness measurements taken at key points throughout the ductwork, providing a quantified record of system condition and the work carried out.',
  },
  {
    icon: CheckCircle2,
    title: 'Recommended Schedule',
    desc: 'A written recommendation for your next cleaning date based on your kitchen\'s usage levels — low, medium, high, or heavy use — as defined in TR19.',
  },
]

const faqs = [
  {
    q: 'What is TR19?',
    a: 'TR19 (Technical Recommendation 19) is the authoritative UK guidance document for the hygienic cleaning of ventilation systems in commercial kitchens, published by BESA (Building Engineering Services Association). It defines cleaning frequencies, methods, and documentation standards. TR19 Rev 2 is the current edition.',
  },
  {
    q: 'How often does my kitchen need to be cleaned to TR19 standards?',
    a: 'Cleaning frequency depends on the intensity of kitchen use:\n• Heavy use (12+ hours/day): Every 3 months\n• Medium use (6–12 hours/day): Every 6 months\n• Light use (2–6 hours/day): Every 12 months\n• Low use (under 2 hours/day): Every 2 years\n\nWe assess your kitchen\'s usage level and recommend the correct interval.',
  },
  {
    q: 'What happens if I don\'t maintain TR19 compliance?',
    a: 'Non-compliance has several consequences. Your insurer may void a fire-related claim. Your fire risk assessment will flag the ventilation system as a hazard. Environmental health officers can issue improvement notices. In serious cases, businesses have faced prosecution under fire safety legislation.',
  },
  {
    q: 'Does TR19 apply to my type of business?',
    a: 'TR19 applies to any commercial kitchen or catering establishment using a mechanical extraction system — restaurants, cafes, pubs, hotels, hospitals, schools, care homes, office canteens, and food production facilities. If you cook commercially and have an extraction hood, TR19 applies.',
  },
  {
    q: 'Do you clean the full duct run, or just the canopy?',
    a: 'Our standard service covers the full duct run from canopy to discharge — every accessible metre. This is the only way to produce a genuinely TR19-compliant clean. Cleaning only the canopy does not satisfy the standard and will not produce a valid certificate.',
  },
  {
    q: 'Can I get a certificate for a system you didn\'t install?',
    a: 'Yes. We can clean and certify any commercial kitchen extraction system regardless of who installed it or who cleaned it previously. We assess the system, carry out the work to TR19 standard, and issue full documentation.',
  },
  {
    q: 'How long does a typical canopy and duct clean take?',
    a: 'A single-canopy system typically takes 3–5 hours. Larger systems with multiple canopies or long duct runs may take longer. We always provide an estimated duration when booking and can schedule overnight or early morning to minimise operational disruption.',
  },
]

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
      >
        <span className="font-body font-medium text-white/80 group-hover:text-white transition-colors duration-200 text-sm leading-relaxed">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown size={18} className="text-white/30" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6">
              {a.split('\n').map((line, i) => (
                <p key={i} className={`font-body text-white/50 text-sm leading-relaxed ${i > 0 ? 'mt-2' : ''}`}>
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Compliance() {
  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 90% 10%, rgba(46,141,232,0.08) 0%, transparent 50%), #0A0A0A',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-body text-white/30 text-sm mb-6">
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Compliance</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-end">
            <ScrollReveal className="lg:col-span-3">
              <span className="section-label">TR19 Explained</span>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-6">
                Why Compliance<br />
                <span className="text-brand-blue-bright">Matters</span>
              </h1>
              <p className="font-body text-white/50 text-lg leading-relaxed">
                TR19 is not optional. It is the legal and insurance standard for commercial kitchen ventilation cleaning in the United Kingdom — and non-compliance has real consequences.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-2">
              <div className="card-surface p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 flex items-center justify-center border border-brand-blue-bright/40">
                    <AlertTriangle size={18} className="text-brand-blue-bright" />
                  </div>
                  <span className="font-body font-semibold text-white text-sm">Key Compliance Facts</span>
                </div>
                <ul className="space-y-3">
                  {[
                    'TR19 defines UK kitchen ventilation cleaning standards',
                    'Compliance is required for valid fire insurance',
                    'Non-compliance can result in prosecution',
                    'Cleaning frequency depends on kitchen usage',
                    'Full documentation must be provided after each clean',
                  ].map((fact) => (
                    <li key={fact} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-blue-bright rounded-full flex-shrink-0 mt-1.5" />
                      <span className="font-body text-white/50 text-xs leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Why It Matters */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-16">
            <span className="section-label">The Risks</span>
            <h2 className="font-heading text-5xl lg:text-6xl text-white">
              Why TR19 Cannot<br />Be Ignored
            </h2>
          </ScrollReveal>

          <ScrollRevealContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {whyMatters.map(({ icon: Icon, title, desc }) => (
              <ScrollRevealItem key={title}>
                <div className="card-surface p-8 h-full relative overflow-hidden group hover:border-brand-blue-bright/30 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-blue-deep to-transparent" />
                  <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-brand-blue-bright/50 mb-6 transition-colors duration-300">
                    <Icon size={22} className="text-white/30 group-hover:text-brand-blue-bright transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-2xl text-white tracking-wide mb-4">{title}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-24 lg:py-32 bg-[#070b11]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-16">
            <span className="section-label">After Every Clean</span>
            <h2 className="font-heading text-5xl lg:text-6xl text-white">
              What You Receive
            </h2>
          </ScrollReveal>

          <ScrollRevealContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whatYouReceive.map(({ icon: Icon, title, desc }, i) => (
              <ScrollRevealItem key={title}>
                <div className="flex gap-5 p-7 card-surface group hover:border-brand-blue-bright/30 transition-colors duration-300">
                  <div className="w-11 h-11 flex items-center justify-center border border-white/10 group-hover:border-brand-blue-bright/50 flex-shrink-0 transition-colors duration-300">
                    <Icon size={19} className="text-white/30 group-hover:text-brand-blue-bright transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-white tracking-wide mb-2">{title}</h3>
                    <p className="font-body text-white/40 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <ScrollReveal>
              <span className="section-label">FAQ</span>
              <h2 className="font-heading text-5xl text-white mb-6">
                Common Questions
              </h2>
              <p className="font-body text-white/40 text-sm leading-relaxed mb-8">
                Everything you need to know about TR19 compliance, cleaning schedules, and what we provide.
              </p>
              <Link to="/contact" className="btn-primary text-sm px-6 py-3 inline-flex">
                Still Have Questions? <ArrowRight size={16} />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-2">
              <div>
                {faqs.map((faq) => (
                  <FAQ key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0d1e35 0%, #1A5FA8 60%, #2E8DE8 100%)',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-5xl lg:text-7xl text-white mb-4">
              Get Your Certificate
            </h2>
            <p className="font-body text-white/70 text-lg mb-10 max-w-lg mx-auto">
              Book a TR19-compliant clean and receive full documentation within 48 hours of the job.
            </p>
            <Link to="/contact" className="bg-white text-brand-blue-deep font-body font-bold px-10 py-4 rounded-sm hover:bg-white/90 transition-all duration-200 inline-flex items-center gap-2 text-base">
              Request Compliance Clean <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
