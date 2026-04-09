import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, Phone, CheckCircle2, Shield, Wind, Wrench,
  FileCheck, Zap, Clock, ChevronRight
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal, { ScrollRevealContainer, ScrollRevealItem } from '../components/ScrollReveal'

// Animated fan SVG — decorative background element
function FanSVG() {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[55vw] max-w-[700px] opacity-[0.04] pointer-events-none select-none"
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
    >
      {/* Fan blade 1 */}
      <path
        d="M100 100 C100 60, 130 20, 100 10 C70 0, 60 50, 100 100Z"
        fill="#2E8DE8"
      />
      {/* Fan blade 2 */}
      <path
        d="M100 100 C140 100, 180 70, 190 100 C200 130, 150 140, 100 100Z"
        fill="#2E8DE8"
      />
      {/* Fan blade 3 */}
      <path
        d="M100 100 C100 140, 70 180, 100 190 C130 200, 140 150, 100 100Z"
        fill="#1A5FA8"
      />
      {/* Fan blade 4 */}
      <path
        d="M100 100 C60 100, 20 130, 10 100 C0 70, 50 60, 100 100Z"
        fill="#1A5FA8"
      />
      {/* Centre circle */}
      <circle cx="100" cy="100" r="12" fill="#2E8DE8" opacity="0.8" />
      <circle cx="100" cy="100" r="6" fill="#0A0A0A" />
    </motion.svg>
  )
}

const services = [
  {
    icon: Wind,
    title: 'Canopy Cleaning',
    desc: 'Full degreasing of canopy systems, filters, and baffles to TR19 specification. Photographic evidence and compliance documentation provided.',
  },
  {
    icon: FileCheck,
    title: 'Duct Cleaning',
    desc: 'Complete ductwork inspection and deep clean using professional-grade equipment. Risk assessment and full compliance reporting included.',
  },
  {
    icon: Wrench,
    title: 'Fan Repair & Breakdown',
    desc: 'Specialist emergency fan breakdown response. We diagnose, repair, and restore kitchen extract fans with minimal downtime.',
  },
  {
    icon: Shield,
    title: 'HVAC Servicing',
    desc: 'Full HVAC system maintenance from filter replacement to motor servicing. Keeping your ventilation running at peak efficiency.',
  },
  {
    icon: FileCheck,
    title: 'Compliance Certification',
    desc: 'TR19 documentation, sign-off certificates, and photographic before/after reports — everything your insurer and fire risk assessor needs.',
  },
  {
    icon: Zap,
    title: 'Emergency Callout',
    desc: 'Nationwide rapid response for critical breakdowns. We mobilise quickly to keep your kitchen operational and compliant.',
  },
]

const stats = [
  { value: 'TR19', label: 'Compliant Cleaning' },
  { value: '24/7', label: 'Emergency Response' },
  { value: 'UK', label: 'Nationwide Coverage' },
  { value: '100%', label: 'Certified Engineers' },
]

const whyUs = [
  'Full TR19 compliance documentation provided on every job',
  'Photographic before & after evidence for insurance purposes',
  'Emergency fan repair — rapid nationwide response',
  'Certified engineers with extensive commercial experience',
  'No hidden charges — transparent fixed pricing',
  'Fully insured with public liability coverage',
]

export default function Home() {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background radial gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 0% 20%, rgba(26,95,168,0.12) 0%, transparent 60%), #0A0A0A',
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <FanSVG />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="section-label"
            >
              TR19 Certified &bull; Nationwide Coverage
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-heading text-7xl sm:text-8xl lg:text-[9rem] text-white leading-none mb-6"
            >
              CLEAN.
              <br />
              <span className="text-brand-blue-bright">COMPLIANT.</span>
              <br />
              CERTIFIED.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="font-body text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Commercial canopy &amp; duct cleaning to TR19 standards — nationwide coverage. Fan breakdown specialists and HVAC servicing for commercial kitchens.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link to="/contact" className="btn-primary">
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-ghost">
                Our Services
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { icon: Shield, label: 'TR19 Certified' },
                { icon: Clock, label: 'Emergency Callout' },
                { icon: Wrench, label: 'Fan Specialists' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={16} className="text-brand-blue-bright" />
                  <span className="font-body text-white/50 text-sm">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-brand-blue-bright to-transparent"
          />
        </motion.div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#0d0d0d] border-y border-white/[0.06] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <span className="font-heading text-4xl text-brand-blue-bright tracking-wider mb-1">
                    {stat.value}
                  </span>
                  <span className="font-body text-white/40 text-xs uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 lg:py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-16">
            <span className="section-label">What We Do</span>
            <h2 className="font-heading text-5xl lg:text-6xl text-white mb-4">
              Our Services
            </h2>
            <p className="font-body text-white/50 max-w-xl">
              From routine canopy cleans to emergency fan repairs — we handle every aspect of commercial kitchen ventilation compliance.
            </p>
          </ScrollReveal>

          <ScrollRevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {services.map(({ icon: Icon, title, desc }) => (
              <ScrollRevealItem key={title}>
                <div className="group bg-brand-black p-8 h-full transition-all duration-300 hover:bg-[#0e1825] cursor-pointer">
                  <div className="mb-5 w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-brand-blue-bright transition-colors duration-300">
                    <Icon size={22} className="text-white/40 group-hover:text-brand-blue-bright transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-2xl text-white tracking-wide mb-3">
                    {title}
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed mb-5">
                    {desc}
                  </p>
                  <Link
                    to="/services"
                    className="font-body text-brand-blue-bright text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Learn more <ChevronRight size={14} />
                  </Link>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>

          <ScrollReveal className="mt-10 text-center">
            <Link to="/services" className="btn-ghost">
              View All Services <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 lg:py-32 bg-[#070b11]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <ScrollReveal>
              <span className="section-label">Why Us</span>
              <h2 className="font-heading text-5xl lg:text-6xl text-white mb-6">
                The Standard<br />
                <span className="text-brand-blue-bright">Others Aspire To</span>
              </h2>
              <p className="font-body text-white/50 leading-relaxed mb-10">
                We don't just clean — we certify. Every job we complete meets TR19 standards and comes with full documentation, giving you the compliance evidence your business, insurer, and fire risk assessor needs.
              </p>

              <ul className="space-y-4">
                {whyUs.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={18} className="text-brand-blue-bright mt-0.5 flex-shrink-0" />
                    <span className="font-body text-white/70 text-sm">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Right — dark card */}
            <ScrollReveal delay={0.15}>
              <div className="card-surface p-10 relative overflow-hidden">
                {/* Blue accent corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue-deep opacity-10 blur-3xl rounded-full" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue-deep to-brand-blue-bright" />

                <div className="relative">
                  <div className="font-heading text-5xl text-white mb-2">TR19</div>
                  <div className="font-body text-brand-blue-bright text-sm font-semibold uppercase tracking-widest mb-8">
                    Compliance Standard
                  </div>

                  <p className="font-body text-white/50 text-sm leading-relaxed mb-8">
                    TR19 is the definitive UK guide for kitchen extraction system cleaning. Failing to maintain TR19 compliance can invalidate your fire insurance, breach health &amp; safety regulations, and put your staff at risk.
                  </p>

                  <div className="space-y-3 mb-10">
                    {[
                      'Fire risk mitigation',
                      'Insurance compliance',
                      'Health & Safety law',
                      'Documented evidence trail',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 font-body text-white/60 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue-bright flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <Link to="/compliance" className="btn-primary text-sm px-6 py-3">
                    Learn About TR19 <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0d1e35 0%, #1A5FA8 60%, #2E8DE8 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="font-body text-white/60 text-sm uppercase tracking-widest mb-4 block">
              Ready to Get Compliant?
            </span>
            <h2 className="font-heading text-5xl lg:text-7xl text-white mb-6">
              Let's Talk
            </h2>
            <p className="font-body text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Get your free no-obligation quote today. We cover the whole of the UK — call us or submit a request online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:07517758507"
                className="bg-white text-[#1A5FA8] font-body font-bold px-8 py-4 rounded-sm flex items-center gap-3 hover:bg-white/90 transition-all duration-200 text-lg"
              >
                <Phone size={20} />
                07517 758507
              </a>
              <Link to="/contact" className="btn-ghost border-white/50 text-white hover:border-white hover:text-white">
                Request Online <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
