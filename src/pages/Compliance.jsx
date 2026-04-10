import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight, ShieldCheck, FileText, Camera, AlertTriangle,
  ChevronDown, CheckCircle2, Flame, Scale, Building, XCircle,
  BadgeAlert, ClipboardX, DoorClosed
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal, { ScrollRevealContainer, ScrollRevealItem } from '../components/ScrollReveal'

const riskItems = [
  { icon: XCircle, label: 'Voided fire insurance', desc: 'Your insurer can decline any fire-related claim if you cannot produce a valid TR19 certificate at the time of the incident.' },
  { icon: BadgeAlert, label: 'Failed fire risk assessment', desc: 'A Responsible Person\'s fire risk assessment must identify ventilation cleaning as a controlled hazard. Non-compliance is an automatic failure.' },
  { icon: ClipboardX, label: 'HSE enforcement notice', desc: 'The Health & Safety Executive can issue improvement notices or prosecution where fire risk through grease accumulation is not managed.' },
  { icon: DoorClosed, label: 'Business closure', desc: 'Environmental Health Officers have the power to issue closure notices where kitchen conditions present an immediate risk to health or safety.' },
]

const whatYouReceive = [
  { icon: FileText, title: 'Signed TR19 Certificate', desc: 'Engineer-signed certification confirming your system has been cleaned to TR19 standard. Accepted by all major commercial insurers.' },
  { icon: Camera, title: 'Photographic Evidence Pack', desc: 'Before and after photography of every section cleaned. Visual proof of grease levels prior to the clean, and the finished result.' },
  { icon: ShieldCheck, title: 'Grease Depth Assessment', desc: 'Grease thickness measurements taken at multiple points throughout the ductwork, providing a quantified record of system condition.' },
  { icon: FileText, title: 'Engineer\'s Compliance Report', desc: 'A detailed written report covering scope of work, access points used, findings, and any recommendations for follow-up action.' },
  { icon: CheckCircle2, title: 'Recommended Next Clean Date', desc: 'Written guidance on your next cleaning interval based on TR19 usage categories — low, medium, high, or heavy use.' },
]

const faqs = [
  {
    q: 'How often should canopies be cleaned to TR19 standard?',
    a: 'TR19 cleaning frequencies are based on your kitchen\'s usage intensity:\n• Heavy use (12+ hours/day): every 3 months\n• Medium use (6–12 hours/day): every 6 months\n• Light use (2–6 hours/day): every 12 months\n• Low use (under 2 hours/day): every 2 years\n\nWe assess your usage level at the time of survey and document the recommended interval in your compliance certificate.',
  },
  {
    q: 'What happens if my canopy fails a TR19 inspection?',
    a: 'If grease levels exceed acceptable thresholds during an inspection, the engineer will document the condition and issue a non-compliance record. We then carry out the required cleaning to bring the system back to standard and issue a full certificate. We can usually carry out the remedial clean on the same visit or the following day.',
  },
  {
    q: 'Will my insurance be invalid without TR19 certification?',
    a: 'In most cases, yes. The majority of commercial kitchen insurance policies — particularly fire insurance — contain a condition requiring evidence of regular ventilation system cleaning to TR19 standard. If you suffer a fire and cannot produce a valid certificate, your insurer is likely to void the claim. We strongly recommend checking your specific policy wording.',
  },
  {
    q: 'How long does a canopy and duct clean take?',
    a: 'A single-canopy system with a straightforward duct run typically takes 3–5 hours. Larger systems with multiple canopies, longer duct runs, or complex access requirements may take longer. We provide a duration estimate when booking and can schedule overnight or early-morning cleans to avoid disrupting your kitchen service.',
  },
  {
    q: 'Do you clean ductwork as well as the canopy?',
    a: 'Yes — always. Cleaning only the canopy hood does not satisfy TR19 standards and will not produce a valid compliance certificate. We clean the full ductwork run from canopy to external discharge. Partial cleans are not compliant, and any company offering only canopy cleaning while claiming TR19 compliance is misrepresenting the standard.',
  },
  {
    q: 'Can you carry out emergency same-day cleans?',
    a: 'Yes. We operate a national emergency callout service for businesses facing imminent inspections, insurance audits, or compliance deadlines. Call us directly on 07517 758507 to speak with an engineer and arrange a same-day or next-morning response.',
  },
  {
    q: 'What is grease accumulation and why is it dangerous?',
    a: 'Grease accumulation is the build-up of fat, oil, and cooking residue on the internal surfaces of kitchen extraction systems — including canopy hoods, baffles, filters, and ductwork. This residue is highly flammable. As it builds up over months of commercial cooking, it can reach levels where a single spark — from a gas burner, electrical fault, or flare-up — can trigger a fast-spreading fire. TR19 cleaning intervals are specifically calibrated to prevent accumulation reaching ignition levels.',
  },
  {
    q: 'Do you provide documentation suitable for fire risk assessments?',
    a: 'Yes. Our compliance packs are specifically designed to satisfy the requirements of fire risk assessments carried out under the Regulatory Reform (Fire Safety) Order 2005. The documentation includes engineer details, scope of work, photographic evidence, grease measurement data, and the signed TR19 certificate — everything a fire risk assessor needs to mark ventilation cleaning as a controlled and evidenced hazard.',
  },
]

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-6 py-5 text-left group">
        <span className="font-body font-medium text-white/75 group-hover:text-white transition-colors duration-200 text-sm sm:text-base leading-relaxed">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration:0.25 }} className="flex-shrink-0 mt-0.5">
          <ChevronDown size={17} className="text-white/30" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div key="ans" initial={{ height:0,opacity:0 }} animate={{ height:'auto',opacity:1 }} exit={{ height:0,opacity:0 }} transition={{ duration:0.3, ease:[0.25,0.1,0.25,1] }} className="overflow-hidden">
            <div className="pb-5">
              {a.split('\n').map((line, i) => (
                <p key={i} className={`font-body text-white/50 text-sm leading-relaxed ${i > 0 ? 'mt-2' : ''}`}>{line}</p>
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
      <Helmet>
        <title>TR19 Compliance Guide | What is TR19? | Commercial Canopy Cleaning</title>
        <meta name="description" content="Complete guide to TR19 kitchen ventilation compliance. What it is, why it matters, fire safety, insurance requirements, and what you receive after every clean." />
        <meta property="og:title" content="TR19 Compliance | Commercial Canopy Cleaning" />
        <meta property="og:description" content="TR19 is the UK standard for commercial kitchen ventilation cleaning. Non-compliance risks voided insurance and HSE enforcement. Learn more." />
      </Helmet>

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background:'radial-gradient(ellipse 80% 60% at 90% 10%,rgba(46,141,232,0.08) 0%,transparent 50%),#0A0A0A' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-end">
            <ScrollReveal className="lg:col-span-3">
              <span className="section-label">TR19 Explained</span>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-5">
                Why Compliance<br /><span className="text-brand-blue-bright">Matters</span>
              </h1>
              <p className="font-body text-white/50 text-base sm:text-lg leading-relaxed">
                TR19 is not optional. It is the legal and insurance standard for commercial kitchen ventilation cleaning in the United Kingdom — and the consequences of non-compliance are serious.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="lg:col-span-2">
              <div className="card-surface p-6 sm:p-7 border-l-2 border-brand-blue-bright">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle size={18} className="text-brand-blue-bright flex-shrink-0" />
                  <span className="font-body font-semibold text-white text-sm">Key Facts</span>
                </div>
                <ul className="space-y-2.5">
                  {['TR19 defines UK kitchen ventilation cleaning standards','Required for valid commercial fire insurance','Non-compliance can result in HSE prosecution','Cleaning frequency depends on kitchen usage level','Full documentation must be provided after each clean'].map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-blue-bright rounded-full flex-shrink-0 mt-1.5" />
                      <span className="font-body text-white/50 text-xs leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-px bg-white/[0.06]" /></div>

      {/* What is TR19 */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <span className="section-label">The Standard</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white">What is TR19?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <ScrollReveal className="lg:col-span-2 space-y-5">
              <p className="font-body text-white/60 text-sm sm:text-base leading-relaxed">
                TR19 — formally titled <em>Grease Management in Kitchen Extraction Systems</em> — is the definitive UK guidance document for the hygienic maintenance of commercial kitchen ventilation systems. Published by BESA (the Building Engineering Services Association), TR19 Rev 2 is the current edition and is referenced by insurers, fire risk assessors, and the Health & Safety Executive as the benchmark standard.
              </p>
              <p className="font-body text-white/60 text-sm sm:text-base leading-relaxed">
                The standard covers everything from the frequency at which different types of kitchen operations must have their canopies and ductwork cleaned, to the methodology engineers must follow, the documentation that must be produced, and the grease deposit levels that constitute a fire risk. It is not a voluntary guideline — it is the standard against which your compliance will be measured by your insurer, your fire risk assessor, and in the worst case, by the authorities investigating a fire.
              </p>
              <p className="font-body text-white/60 text-sm sm:text-base leading-relaxed">
                TR19 applies to any commercial or institutional kitchen that uses a mechanical extraction system — which means virtually every restaurant, hotel kitchen, hospital, school, care home, and workplace canteen in the UK.
              </p>
              <div className="card-surface p-5 sm:p-6 border-l-2 border-brand-blue-bright mt-6">
                <p className="font-body text-white/70 text-sm leading-relaxed italic">
                  "TR19 is the industry standard for grease management in commercial kitchen extraction systems. Compliance is required by most commercial property insurers and is assessed as part of every Regulatory Reform (Fire Safety) Order fire risk assessment."
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="card-surface p-6 sm:p-7 h-full">
                <div className="font-heading text-5xl text-white mb-2">TR19</div>
                <div className="font-body text-brand-blue-bright text-xs font-semibold uppercase tracking-widest mb-5">BESA Grease Management Standard</div>
                <div className="space-y-3">
                  {[['Applies to','All commercial kitchens with mechanical extraction'],['Published by','BESA — Building Engineering Services Association'],['Current edition','TR19 Rev 2'],['Enforced via','RRO Fire Safety Order, insurance policy conditions'],['Cleaning intervals','3 months to 2 years based on usage']].map(([k,v]) => (
                    <div key={k} className="pb-3 border-b border-white/[0.06] last:border-0">
                      <div className="font-body text-white/30 text-[11px] uppercase tracking-widest">{k}</div>
                      <div className="font-body text-white/65 text-sm mt-0.5">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why it matters — 3 cards */}
      <section className="py-16 sm:py-24 bg-[#070b11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <span className="section-label">The Risks</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white">Why TR19 Cannot Be Ignored</h2>
          </ScrollReveal>
          <ScrollRevealContainer className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              { icon: Flame, title: 'Fire Safety', desc: 'Grease accumulation in canopies and ductwork is one of the leading causes of commercial kitchen fires. TR19 cleaning intervals are specifically calibrated to prevent grease reaching ignition levels. A greasy duct can turn a routine flare-up into a building fire within seconds.' },
              { icon: Scale, title: 'Insurance Validity', desc: 'Commercial kitchen fire insurance policies widely require evidence of TR19-compliant cleaning. Without a valid certificate, your insurer can legitimately refuse any fire-related claim — leaving you personally liable for rebuilding costs, stock loss, and business interruption.' },
              { icon: Building, title: 'Legal Obligation', desc: 'Under the Regulatory Reform (Fire Safety) Order 2005 and the Health and Safety at Work Act, building managers and operators have a statutory duty to manage fire risks. A failure to maintain TR19 compliance is a failure of that duty — and can result in enforcement action, fines, or prosecution.' },
            ].map(({ icon: Icon, title, desc }) => (
              <ScrollRevealItem key={title}>
                <div className="card-surface p-7 sm:p-8 h-full relative overflow-hidden group hover:border-brand-blue-bright/25 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-blue-deep to-transparent" />
                  <div className="w-11 h-11 flex items-center justify-center border border-white/10 group-hover:border-brand-blue-bright/50 mb-5 transition-colors duration-300">
                    <Icon size={20} className="text-white/30 group-hover:text-brand-blue-bright transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-2xl text-white tracking-wide mb-3">{title}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* Non-compliance risks */}
      <section className="py-16 sm:py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <span className="section-label">Impact of Non-Compliance</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white">What Does Non-Compliance Risk?</h2>
          </ScrollReveal>
          <ScrollRevealContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {riskItems.map(({ icon: Icon, label, desc }) => (
              <ScrollRevealItem key={label}>
                <div className="flex gap-5 p-6 card-surface group hover:border-brand-blue-bright/25 transition-colors duration-300">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-red-500/30 flex-shrink-0 transition-colors duration-300">
                    <Icon size={18} className="text-white/25 group-hover:text-red-400/70 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-white tracking-wide mb-1">{label}</h3>
                    <p className="font-body text-white/45 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* What you receive — receipt-style card */}
      <section className="py-16 sm:py-24 bg-[#070b11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <span className="section-label">After Every Clean</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white">What You Receive</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto card-surface overflow-hidden">
              <div className="bg-gradient-to-r from-brand-blue-deep to-brand-blue-bright px-7 py-4 flex items-center justify-between">
                <span className="font-heading text-xl text-white tracking-wider">Compliance Documentation Pack</span>
                <span className="font-body text-white/70 text-xs uppercase tracking-widest">Issued After Every Job</span>
              </div>
              <div className="p-6 sm:p-8 divide-y divide-white/[0.06]">
                {whatYouReceive.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-5 py-5 first:pt-0 last:pb-0">
                    <div className="w-9 h-9 flex items-center justify-center border border-brand-blue-bright/25 flex-shrink-0">
                      <Icon size={16} className="text-brand-blue-bright" />
                    </div>
                    <div>
                      <div className="font-body font-semibold text-white text-sm mb-1">{title}</div>
                      <div className="font-body text-white/45 text-xs leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <ScrollReveal>
              <span className="section-label">FAQ</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-white mb-5">Common Questions</h2>
              <p className="font-body text-white/40 text-sm leading-relaxed mb-7">Everything you need to know about TR19, cleaning schedules, and what we provide.</p>
              <Link to="/contact" className="btn-primary text-sm px-6 py-3 inline-flex">
                Still Have Questions? <ArrowRight size={15} />
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="lg:col-span-2">
              {faqs.map(faq => <FAQ key={faq.q} q={faq.q} a={faq.a} />)}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" style={{ background:'linear-gradient(135deg,#0d1e35 0%,#1A5FA8 60%,#2E8DE8 100%)' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-white mb-4">Get Your TR19 Certificate Today</h2>
            <p className="font-body text-white/70 text-base sm:text-lg mb-10 max-w-lg mx-auto">Book a compliant clean and receive your full documentation pack within 24 hours of the job.</p>
            <Link to="/contact" className="bg-white text-brand-blue-deep font-body font-bold px-10 py-4 rounded-sm hover:bg-white/90 transition-all duration-200 inline-flex items-center gap-2 text-base">
              Request Compliance Clean <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
