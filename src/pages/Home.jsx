import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight, Phone, CheckCircle2, Wind, Wrench,
  FileCheck, Zap, ChevronRight, Star, AlertTriangle,
  Utensils, Fish, Beer, Hotel, Coffee, PackageOpen, Globe, GraduationCap, HeartPulse, Factory
} from 'lucide-react'
import ScrollReveal, { ScrollRevealContainer, ScrollRevealItem } from '../components/ScrollReveal'
import PageTransition from '../components/PageTransition'
import LogoConveyorBelt from '../components/LogoConveyorBelt'

/* ─── Rotating fan SVG ─────────────────────────────────────────────────── */
function FanBg() {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="absolute bottom-[-8%] right-[-5%] w-[60vw] max-w-[750px] opacity-[0.05] pointer-events-none select-none"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <path d="M100 100 C100 55,135 15,100 8 C65-1,55 55,100 100Z" fill="#2E8DE8" />
      <path d="M100 100 C145 100,185 65,192 100 C199 135,145 145,100 100Z" fill="#2E8DE8" />
      <path d="M100 100 C100 145,65 185,100 192 C135 199,145 145,100 100Z" fill="#1A5FA8" />
      <path d="M100 100 C55 100,15 135,8 100 C1 65,55 55,100 100Z" fill="#1A5FA8" />
      <circle cx="100" cy="100" r="13" fill="#2E8DE8" opacity="0.9" />
      <circle cx="100" cy="100" r="6" fill="#0A0A0A" />
    </motion.svg>
  )
}

/* ─── Count-up hook ─────────────────────────────────────────────────────── */
function useCountUp(target, duration = 1800, startOnView = true) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!startOnView) { setStarted(true); return }
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [startOnView])

  useEffect(() => {
    if (!started || target === 0) return
    const step = Math.ceil(duration / target)
    let current = 0
    const timer = setInterval(() => {
      current += 1
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return [count, ref]
}

/* ─── Data ──────────────────────────────────────────────────────────────── */
const services = [
  { id: 'fan-repair', icon: Wrench, title: 'Fan Repair & Breakdown', tag: 'SPECIALIST', desc: 'Emergency specialist response for failed kitchen extract fans. We diagnose, source parts, and restore your system fast.', proof: 'Average same-day response nationwide' },
  { id: 'canopy-cleaning', icon: Wind, title: 'Canopy Cleaning', tag: 'MOST POPULAR', desc: 'Full degreasing of canopy systems, baffles, and filters to TR19 specification. Certificate issued after every clean.', proof: 'Compliant with TR19 grease accumulation standards' },
  { id: 'duct-cleaning', icon: FileCheck, title: 'Duct Cleaning', tag: null, desc: 'Complete ductwork inspection and clean from canopy to discharge. Every metre documented with photographic evidence.', proof: 'Full duct run covered — not just the canopy hood' },
  { id: 'fan-cleaning', icon: Wind, title: 'Fan Cleaning', tag: null, desc: 'Cleaning and degreasing of extraction fan motors. Improves airflow, reduces fire risk, and extends equipment lifespan.', proof: 'Extends fan motor lifespan and improves performance' },
  { id: 'compliance', icon: FileCheck, title: 'Compliance Certification', tag: null, desc: 'TR19 documentation, sign-off certificates, and photographic reports — everything your insurer needs.', proof: 'Insurance-ready certificate issued within 24 hours' },
  { id: 'emergency', icon: Zap, title: 'Emergency Callout', tag: 'NATIONWIDE', desc: 'Rapid response for critical breakdowns and urgent pre-inspection cleans. We mobilise fast, wherever you are.', proof: '24/7 availability — call 07517 758507 directly' },
]

const testimonials = [
  { name: 'Marco R.', business: 'Head Chef, London Restaurant Group', text: 'Called them at 10pm on a Friday — fan was back running by midnight. Absolute lifesavers. TR19 cert in my inbox by morning.', stars: 5 },
  { name: 'Sarah T.', business: 'Operations Manager, Hotel Chain', text: 'We use Commercial Canopy Cleaning across 6 sites. Consistent, thorough, and the compliance paperwork is always spotless.', stars: 5 },
  { name: 'Dev P.', business: 'Owner, Indian Takeaway, Manchester', text: 'Had two other companies quote me. These were cheaper, faster, and actually explained what TR19 means for my insurance. Brilliant.', stars: 5 },
]

const clientTypes = [
  { icon: Utensils, label: 'Restaurants & Takeaways' },
  { icon: Fish, label: 'Fish & Chips Shops' },
  { icon: Beer, label: 'Pubs & Bars' },
  { icon: Hotel, label: 'Hotels & Hospitality Venues' },
  { icon: Coffee, label: 'Cafés & Coffee Shops' },
  { icon: PackageOpen, label: 'Dark Kitchens / Ghost Kitchens' },
  { icon: Globe, label: 'Franchise Groups (Nationwide)' },
  { icon: GraduationCap, label: 'Schools & Colleges' },
  { icon: HeartPulse, label: 'Care Homes & Nursing Homes' },
  { icon: Factory, label: 'Food Factories & Production Kitchens' },
]

const cities = [
  'London','Manchester','Birmingham','Leeds','Sheffield','Liverpool',
  'Bristol','Edinburgh','Glasgow','Cardiff','Newcastle','Nottingham',
  'Leicester','Coventry','Brighton','Southampton','Reading','Oxford',
  'Cambridge','York','Exeter','Plymouth','Derby','Stoke-on-Trent',
  'Hull','Bradford','Wolverhampton','Sunderland','Milton Keynes','Portsmouth','Norwich',
]

const whyUs = [
  'TR19 compliant certification issued after every job',
  'Fan breakdown specialists — not generalists',
  'Same-day emergency response, nationwide',
  'Full before & after photographic report',
  'Insurance-ready documentation for your records',
]

/* ─── Sub-components ─────────────────────────────────────────────────────── */
function StarRow({ n = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={14} className="text-brand-blue-bright fill-brand-blue-bright" />
      ))}
    </div>
  )
}

function StatBox({ value, suffix = '', label, isNumeric = false }) {
  const [count, ref] = useCountUp(isNumeric ? parseInt(value) : 0, 1600)
  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4 py-2">
      <span className="font-heading text-4xl sm:text-5xl text-brand-blue-bright tracking-wider leading-none">
        {isNumeric ? count : value}{suffix}
      </span>
      <span className="font-body text-white/40 text-xs uppercase tracking-widest mt-2">{label}</span>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <PageTransition>
      <Helmet>
        <title>Commercial Canopy Cleaning | TR19 Certified | Fan Repair | Nationwide</title>
        <meta name="description" content="Emergency fan repair, TR19 canopy & duct cleaning — certified engineers, nationwide, 24/7. Get a free quote today: 07517758507." />
        <meta property="og:title" content="Commercial Canopy Cleaning | TR19 Certified | Nationwide" />
        <meta property="og:description" content="Emergency fan repair, TR19 canopy & duct cleaning. Certified engineers, nationwide coverage, 24/7 callout." />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative sm:min-h-screen flex flex-col overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(26,95,168,0.12) 0%, transparent 60%), #0A0A0A' }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <FanBg />

        {/* Top badge strip */}
        <div className="relative pt-28 sm:pt-36 lg:pt-44 pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <span className="font-body text-xs font-semibold uppercase tracking-widest px-3 py-1 border border-[#F5A623]/40 text-[#F5A623] bg-[#F5A623]/5">TR19 Certified</span>
              <span className="font-body text-xs font-semibold uppercase tracking-widest px-3 py-1 border border-brand-blue-bright/30 text-brand-blue-bright bg-brand-blue-bright/5">Fan Specialists</span>
              <span className="font-body text-xs font-semibold uppercase tracking-widest px-3 py-1 border border-white/10 text-white/50 bg-white/5">24/7 Nationwide</span>
              <span className="font-body text-xs font-semibold uppercase tracking-widest px-3 py-1 border border-[#F5A623]/40 text-[#F5A623] bg-[#F5A623]/5">AEME Qualified</span>
            </motion.div>
          </div>
        </div>

        {/* Main hero content */}
        <div className="relative pb-16 sm:pb-20 sm:pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-heading text-[3rem] sm:text-6xl lg:text-8xl text-white leading-none mb-6"
                >
                  WHEN YOUR<br />
                  KITCHEN STOPS,<br />
                  <span style={{ color: '#F5A623' }}>WE DON'T.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="font-body text-white/55 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
                >
                  Emergency fan repair, TR19 canopy &amp; duct cleaning — certified engineers, nationwide, 24/7.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="flex flex-wrap gap-3"
                >
                  <a href="tel:07517758507" className="btn-primary text-base hidden sm:inline-flex">
                    <Phone size={18} /> Call Now — 07517 758507
                  </a>
                  <Link to="/contact" className="btn-ghost">
                    Get a Free Quote <ArrowRight size={16} />
                  </Link>
                </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom divider line */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-brand-blue-bright/30 to-transparent" />
      </section>

      {/* ── REAL WORK PHOTO STRIP ─────────────────────────────────────────── */}
      <section className="bg-[#080808] py-8 sm:py-10 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-5">
            <p className="font-body text-white/30 text-xs uppercase tracking-widest">Real jobs. Real results.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {[
              { src: '/work_images/newfaninstall.jpeg', label: 'New Fan Installation' },
              { src: '/work_images/WhatsApp Image 2026-04-10 at 01.15.13 (2).jpeg', label: 'Canopy Clean' },
              { src: '/work_images/WhatsApp Image 2026-04-10 at 01.15.13 (3).jpeg', label: 'Canopy Clean' },
              { src: '/work_images/newkitchenextractioninstall.jpeg', label: 'Kitchen Canopy Installation' },
            ].map(({ src, label }) => (
              <ScrollRevealItem key={src}>
                <div className="relative overflow-hidden group" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 font-body text-white/60 text-[10px] uppercase tracking-widest">{label}</span>
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY STRIP ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-brand-blue-deep/30" style={{ background: '#0d0808' }}>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-blue-bright" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
        <style>{`@keyframes pulse-glow{0%,100%{box-shadow:0 0 8px #2E8DE8,0 0 20px #2E8DE8}50%{box-shadow:0 0 20px #2E8DE8,0 0 45px #2E8DE8}}`}</style>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <AlertTriangle size={26} className="text-brand-blue-bright flex-shrink-0" />
            <div>
              <div className="font-heading text-xl sm:text-2xl text-white tracking-wide leading-none">Fan Breakdown? We Cover Nationwide — Engineers Available Now</div>
              <div className="font-body text-white/40 text-xs mt-0.5">Don't let a failed extraction fan close your kitchen</div>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a href="tel:07517758507" className="font-heading text-2xl text-white tracking-wider hover:text-brand-blue-bright transition-colors">07517 758507</a>
            <a href="tel:07517758507" className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap">
              Emergency Callout <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] border-b border-white/[0.06] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealContainer className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
            <ScrollRevealItem><StatBox value={500} suffix="+" label="Jobs Completed" isNumeric /></ScrollRevealItem>
            <ScrollRevealItem><StatBox value="24/7" label="Emergency Response" /></ScrollRevealItem>
            <ScrollRevealItem><StatBox value="TR19" label="Certified Standard" /></ScrollRevealItem>
            <ScrollRevealItem><StatBox value="100%" label="Nationwide Coverage" /></ScrollRevealItem>
          </ScrollRevealContainer>
        </div>
      </section>

      {/* ── LOGO CONVEYOR BELT ───────────────────────────────────────────── */}
      <LogoConveyorBelt />

      {/* ── SERVICES GRID ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12 sm:mb-16">
            <span className="section-label" style={{ color: '#F5A623' }}>What We Do</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-3">Our Services</h2>
            <p className="font-body text-white/50 max-w-xl text-sm sm:text-base">All services carried out to TR19 standards with full certification and photographic reporting.</p>
          </ScrollReveal>

          <ScrollRevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {services.map(({ id, icon: Icon, title, tag, desc, proof }) => (
              <ScrollRevealItem key={id}>
                <div className="group bg-brand-black p-7 h-full transition-all duration-300 hover:bg-[#0d1a27] cursor-pointer relative" style={{ borderLeft:'3px solid transparent', transition:'border-color 0.3s, background 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.borderLeftColor='#2E8DE8'}
                  onMouseLeave={e => e.currentTarget.style.borderLeftColor='transparent'}>
                  {tag && (
                    <span className="absolute top-4 right-4 font-body text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-brand-blue-deep/20 text-brand-blue-bright border border-brand-blue-bright/20">
                      {tag}
                    </span>
                  )}
                  <motion.div whileHover={{ y:-4 }} transition={{ duration:0.25 }} className="mb-4 w-11 h-11 flex items-center justify-center border border-white/10 group-hover:border-brand-blue-bright transition-colors duration-300">
                    <Icon size={20} className="text-white/40 group-hover:text-brand-blue-bright transition-colors duration-300" />
                  </motion.div>
                  <h3 className="font-heading text-xl sm:text-2xl tracking-wide mb-2" style={{ color: '#F5A623' }}>{title}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed mb-3">{desc}</p>
                  <p className="font-body text-white/25 text-xs italic mb-4">{proof}</p>
                  <Link to={`/services#${id}`} className="font-body text-brand-blue-bright text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ChevronRight size={13} />
                  </Link>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>

          <ScrollReveal className="mt-8 text-center">
            <Link to="/services" className="btn-ghost text-sm">View All Services <ArrowRight size={15} /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────────
      <section className="py-16 sm:py-24 bg-[#070b11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10 sm:mb-14">
            <span className="section-label">Client Feedback</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white">What Our Clients Say</h2>
          </ScrollReveal>

          <ScrollRevealContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <ScrollRevealItem key={i}>
                <div className="card-surface p-6 sm:p-7 h-full flex flex-col relative overflow-hidden group hover:border-brand-blue-bright/20 transition-colors duration-300">
                  <div className="absolute top-4 right-4 text-white/[0.04] group-hover:text-white/[0.07] transition-colors">
                    <svg viewBox="0 0 40 30" width="40" fill="currentColor"><path d="M0 30V18C0 8 6 2 18 0l2 4C12 6 9 10 9 14h6v16H0zm22 0V18c0-10 6-16 18-18l2 4c-8 2-11 6-11 10h6v16H22z"/></svg>
                  </div>
                  <StarRow n={t.stars} />
                  <p className="font-body text-white/60 text-sm leading-relaxed my-4 flex-1">"{t.text}"</p>
                  <div className="pt-4 border-t border-white/[0.06]">
                    <div className="font-body font-semibold text-white text-sm">{t.name}</div>
                    <div className="font-body text-white/35 text-xs mt-0.5">{t.business}</div>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>

          <ScrollReveal className="mt-8 text-center">
            <Link to="/reviews" className="font-body text-brand-blue-bright text-sm flex items-center gap-1 justify-center hover:underline">
              See all reviews <ChevronRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
      ────────────────────────────────────────────────────────────────────────── */}

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <span className="section-label">Why Us</span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-8">
                The Commercial Canopy<br />
                <span className="text-brand-blue-bright">Cleaning Standard</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {whyUs.map((point, i) => (
                  <motion.li key={i} initial={{ opacity:0,x:-20 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ delay:i*0.08,duration:0.4 }} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-blue-bright mt-0.5 flex-shrink-0" />
                    <span className="font-body text-white/70 text-sm sm:text-base">{point}</span>
                  </motion.li>
                ))}
              </ul>
              <img
                src="/logos/qualifications.jpeg"
                alt="AEME Qualified, TR19 Industry Standards, NAADUK Member"
                className="w-full max-w-[220px] rounded-sm border border-white/[0.06] opacity-90 mx-auto block"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="card-surface p-8 sm:p-10 relative overflow-hidden border-l-2 border-brand-blue-deep">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue-deep opacity-10 blur-3xl rounded-full" />
                <div className="relative">
                  <h3 className="font-heading text-2xl sm:text-3xl text-white mb-4">Don't Risk Your<br />Fire Safety Certificate</h3>
                  <p className="font-body text-white/55 text-sm leading-relaxed mb-4">
                    Grease accumulation in commercial kitchen canopies and ductwork is one of the leading causes of commercial kitchen fires in the UK. The fat and oil residue left by daily cooking builds up over time — and without regular TR19 cleaning, it can reach ignition levels within months.
                  </p>
                  <p className="font-body text-white/55 text-sm leading-relaxed mb-7">
                    Most commercial property insurers explicitly require evidence of TR19-compliant cleaning to validate fire-related claims. If you suffer a kitchen fire and your canopies haven't been cleaned to standard, your insurer may refuse to pay out — leaving you fully exposed.
                  </p>
                  <Link to="/compliance" className="btn-primary text-sm px-6 py-3 inline-flex">
                    Understand TR19 <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#070b11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10 sm:mb-14">
            <span className="section-label">Our Clients</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white">Industries We Serve</h2>
          </ScrollReveal>
          <ScrollRevealContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-stretch">
            {clientTypes.map(({ icon: Icon, label }) => (
              <ScrollRevealItem key={label} className="h-full">
                <div className="card-surface p-5 h-full flex flex-col items-center text-center group hover:border-brand-blue-bright/30 transition-colors duration-300 cursor-default">
                  <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-brand-blue-bright/50 mb-3 transition-colors duration-300">
                    <Icon size={18} className="text-white/35 group-hover:text-brand-blue-bright transition-colors duration-300" />
                  </div>
                  <span className="font-body text-white/55 text-xs leading-snug group-hover:text-white/80 transition-colors duration-300">{label}</span>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* ── LOCATION COVERAGE ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <span className="section-label">We Serve Customers Nationwide</span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
                We Cover the<br />
                <span className="text-brand-blue-bright">Entire UK</span>
              </h2>
              <p className="font-body text-white/50 text-sm sm:text-base leading-relaxed mb-6">
                One team, one standard, everywhere. We dispatch engineers nationwide for both scheduled cleans and emergency callouts.
              </p>
              <p className="font-body text-white/30 text-sm italic mb-8">
                Don't see your area? We cover everywhere — call us: <a href="tel:07517758507" className="text-brand-blue-bright not-italic hover:underline">07517 758507</a>
              </p>
              <a href="tel:07517758507" className="btn-primary text-sm">
                <Phone size={16} /> Check Availability
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="card-surface p-6 sm:p-7">
                <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-4">Areas Covered</div>
                <div className="flex flex-wrap gap-2">
                  {cities.map(city => (
                    <a key={city} href="#contact-form" onClick={e => { e.preventDefault(); document.querySelector('#contact-form')?.scrollIntoView({ behavior:'smooth' }) }}
                      className="font-body text-white/50 text-xs px-3 py-1.5 border border-white/[0.07] hover:border-brand-blue-bright/40 hover:text-brand-blue-bright transition-colors duration-200 cursor-pointer">
                      {city}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" style={{ background:'linear-gradient(135deg,#0A0A0A 0%,#0d2a4a 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage:'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize:'20px 20px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="section-label text-center block mx-auto">Compliance Deadline</span>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-white mb-4 max-w-4xl mx-auto">
              Your Kitchen Is a Fire Risk<br />Without a TR19 Clean.
            </h2>
            <p className="font-body text-white/60 text-base sm:text-lg mb-10 max-w-xl mx-auto">
              Most insurance policies require annual certification. Don't let it lapse.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">
                Book a Clean <ArrowRight size={16} />
              </Link>
              <a href="tel:07517758507" className="bg-white text-brand-blue-deep font-body font-bold px-8 py-4 rounded-sm flex items-center gap-3 hover:bg-white/90 transition-all duration-200 w-full sm:w-auto justify-center">
                <Phone size={18} /> 07517 758507
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
