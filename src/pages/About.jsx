import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, ShieldCheck, Target, Award, Wrench, Globe, CheckCircle2, Phone
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal, { ScrollRevealContainer, ScrollRevealItem } from '../components/ScrollReveal'

const values = [
  {
    icon: ShieldCheck,
    title: 'Compliance First',
    desc: 'Every job we do meets TR19 standards. We never cut corners — documentation and certification are core to our offering, not an afterthought.',
  },
  {
    icon: Target,
    title: 'Technical Precision',
    desc: 'Canopy and duct cleaning requires knowledge, not just labour. Our engineers understand extraction systems inside and out.',
  },
  {
    icon: Globe,
    title: 'Nationwide Reach',
    desc: 'We operate across the whole of the United Kingdom. One number, one team — wherever your sites are, we can get there.',
  },
  {
    icon: Wrench,
    title: 'Fan Specialists',
    desc: 'Most cleaners don\'t do fan repairs. We do. Emergency breakdown response is part of our DNA — not a side service.',
  },
]

const accreditations = [
  { label: 'TR19 Standard', sub: 'BESA & HVCA Guideline' },
  { label: 'Public Liability', sub: 'Fully Insured' },
  { label: 'Fire Risk', sub: 'Mitigation Certified' },
  { label: 'COSHH Compliant', sub: 'Safe Chemical Use' },
]

const commitments = [
  'Full TR19 compliance documentation on every job',
  'Photographic evidence provided as standard',
  'Engineers who understand systems, not just surfaces',
  'Transparent pricing — no hidden fees',
  'On-time scheduling and minimal kitchen disruption',
  'Ongoing support between service visits',
]

export default function About() {
  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 70% at 15% 80%, rgba(26,95,168,0.09) 0%, transparent 60%), #0A0A0A',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 font-body text-white/30 text-sm mb-6">
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">About</span>
            </div>
            <span className="section-label">Who We Are</span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-6">
              About Us
            </h1>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-10 sm:mt-12">
            <ScrollReveal>
              <p className="font-body text-white/60 text-lg leading-relaxed mb-6">
                Commercial Canopy Cleaning is a specialist trade services company focused on one thing: keeping commercial kitchen ventilation systems clean, compliant, and operational.
              </p>
              <p className="font-body text-white/50 leading-relaxed mb-6">
                We work exclusively with commercial clients — restaurants, hotels, hospitals, schools, and food production facilities across the United Kingdom. Our work isn't optional for these businesses. TR19 compliance is a legal and insurance requirement, and we're the team they trust to deliver it.
              </p>
              <p className="font-body text-white/50 leading-relaxed">
                Unlike general cleaning contractors, we're ventilation specialists. We understand the engineering behind extraction systems, which is why we can offer fan breakdown repairs and HVAC servicing that most cleaning companies simply cannot.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="card-surface p-8 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue-deep to-brand-blue-bright" />
                <div className="font-heading text-6xl text-white/[0.04] absolute -bottom-4 -right-4 leading-none select-none">
                  CCC
                </div>
                <div className="relative">
                  <span className="section-label">Our Mission</span>
                  <blockquote className="font-heading text-3xl text-white leading-tight mb-8">
                    "Clean canopies. Compliant kitchens. Certified engineers. Every time."
                  </blockquote>
                  <div className="divider mb-8" />
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    We believe that compliance shouldn't be complicated. Our role is to make TR19 certification straightforward, documentation complete, and your kitchen extraction system a non-issue for your business.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-16">
            <span className="section-label">How We Work</span>
            <h2 className="font-heading text-5xl lg:text-6xl text-white">
              Our Values
            </h2>
          </ScrollReveal>

          <ScrollRevealContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <ScrollRevealItem key={title}>
                <div className="card-surface p-7 h-full group hover:border-brand-blue-bright/30 transition-colors duration-300">
                  <div className="w-11 h-11 flex items-center justify-center border border-white/10 group-hover:border-brand-blue-bright/50 mb-5 transition-colors duration-300">
                    <Icon size={20} className="text-white/30 group-hover:text-brand-blue-bright transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-xl text-white tracking-wide mb-3">{title}</h3>
                  <p className="font-body text-white/40 text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 lg:py-32 bg-[#070b11]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <span className="section-label">Our Promise</span>
              <h2 className="font-heading text-5xl lg:text-6xl text-white mb-6">
                What You Can<br />
                <span className="text-brand-blue-bright">Always Expect</span>
              </h2>
              <p className="font-body text-white/50 leading-relaxed">
                When you book with Commercial Canopy Cleaning, you're engaging a company that takes professional standards seriously. This isn't just marketing — it's how we operate on every single job.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ul className="space-y-4">
                {commitments.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    className="flex items-start gap-3 pb-4 border-b border-white/[0.06] last:border-0"
                  >
                    <CheckCircle2 size={17} className="text-brand-blue-bright mt-0.5 flex-shrink-0" />
                    <span className="font-body text-white/60 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-10">
            <span className="section-label text-center block mx-auto">Certifications & Standards</span>
          </ScrollReveal>
          <ScrollRevealContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map(({ label, sub }) => (
              <ScrollRevealItem key={label}>
                <div className="card-surface p-6 text-center group hover:border-brand-blue-bright/30 transition-colors duration-300">
                  <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center border border-white/10 group-hover:border-brand-blue-bright/50 transition-colors duration-300">
                    <Award size={18} className="text-white/30 group-hover:text-brand-blue-bright transition-colors duration-300" />
                  </div>
                  <div className="font-heading text-lg text-white tracking-wide mb-1">{label}</div>
                  <div className="font-body text-white/30 text-xs">{sub}</div>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Work With Us
            </h2>
            <p className="font-body text-white/50 max-w-xl mx-auto mb-8 sm:mb-10">
              Get in touch today for a no-obligation quote. We're ready to assess your requirements and put a cleaning programme in place.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <a href="tel:07517758507" className="btn-primary">
                <Phone size={16} />
                Call 07517 758507
              </a>
              <Link to="/compliance" className="btn-ghost">
                TR19 Information
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
