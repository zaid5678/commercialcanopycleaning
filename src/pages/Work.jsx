import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal, { ScrollRevealContainer, ScrollRevealItem } from '../components/ScrollReveal'

const caseStudies = [
  {
    id: 1,
    title: 'Commercial Kitchen Canopy Restoration',
    location: 'London Restaurant Group',
    category: 'Canopy Cleaning',
    before: '/work_images/canopybefore.jpeg',
    after: '/work_images/canopyafter.jpeg',
    description: 'Full hood and baffle degreasing to TR19 specification. Complete plenum chamber cleaning with photographic evidence.',
  },
  {
    id: 2,
    title: 'Fan Motor Repair',
    location: 'Commercial Kitchen, London',
    category: 'Fan Repair',
    before: '/work_images/fanrepair.jpeg',
    after: '/work_images/fanrepair.jpeg',
    description: 'Extraction fan motor stripped, inspected, and rebuilt on-site. Bearing and seal replacement with full post-repair performance test.',
  },
  {
    id: 7,
    title: 'Full Fan Unit Replacement',
    location: 'Central London Restaurant',
    category: 'Fan Replacement',
    before: '/work_images/fanreplacement.jpeg',
    after: '/work_images/fanreplacement.jpeg',
    description: 'Failed rooftop extraction unit swapped for a new axial fan. Old unit removed, new unit installed and commissioned same day.',
  },
  {
    id: 3,
    title: 'Complete Ductwork System Clean',
    location: 'Central London Takeaway',
    category: 'Duct Cleaning',
    before: '/work_images/ductbefore1.jpeg',
    after: '/work_images/ductafter1.jpeg',
    description: 'Full extraction run cleaned from canopy entry to discharge point. Rotary brush system with high-powered vacuum extraction.',
  },
  {
    id: 4,
    title: 'Secondary Canopy System Deep Clean',
    location: 'Hotel Chain (Multi-site)',
    category: 'Canopy Cleaning',
    before: '/work_images/canopybefore2.jpeg',
    after: '/work_images/canopyafter1.jpeg',
    description: 'Secondary extraction system serving prep area. TR19 certified clean with grease depth measurements and compliance certificate.',
  },
  {
    id: 5,
    title: 'Large Volume Fan Motor Restoration',
    location: 'Industrial Kitchen Facility',
    category: 'Fan Repair',
    before: '/work_images/fanbefore2.jpeg',
    after: '/work_images/fanafter2.jpeg',
    description: 'High-capacity extraction fan mechanical overhaul. Belt and bearing replacement with full performance testing.',
  },
  {
    id: 6,
    title: 'Complete System Overhaul',
    location: 'Restaurant Chain Head Office',
    category: 'Full System Service',
    before: '/work_images/allbefore.jpeg',
    after: '/work_images/allafter.jpeg',
    description: 'Comprehensive cleaning and maintenance of canopy, ducts, and extraction equipment. Full TR19 documentation issued.',
  },
]

function CaseStudyCard({ study, index }) {
  return (
    <ScrollRevealItem>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        className="group cursor-pointer h-full"
      >
        <div className="flex flex-col h-full bg-brand-black hover:bg-[#0d1a27] transition-colors duration-300 overflow-hidden rounded-sm border border-white/[0.06]">
          {/* Image comparison section */}
          <div className="flex flex-col sm:flex-row flex-1 overflow-hidden gap-3 sm:gap-6 p-4 sm:p-6">
            {study.before === study.after ? (
              /* Single image */
              <div className="flex-1 overflow-hidden bg-black rounded-sm border border-white/[0.06]">
                <div className="relative h-full min-h-64 sm:min-h-96">
                  <img
                    src={study.before}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" style={{ objectPosition: '50% 30%' }}
                  />
                  <div className="absolute top-3 left-3 bg-brand-black/90 px-4 py-2 rounded-sm border border-brand-blue-bright/50">
                    <span className="font-heading text-brand-blue-bright text-xs uppercase tracking-widest font-bold">{study.category}</span>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Before */}
                <div className="flex-1 overflow-hidden bg-black rounded-sm border border-white/[0.06]">
                  <div className="relative h-full min-h-64 sm:min-h-96">
                    <img
                      src={study.before}
                      alt={`Before: ${study.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="font-heading text-3xl sm:text-4xl text-white tracking-widest drop-shadow-lg">BEFORE</span>
                    </div>
                    <div className="absolute top-3 left-3 bg-brand-black/90 px-4 py-2 rounded-sm border border-brand-blue-bright/50">
                      <span className="font-heading text-brand-blue-bright text-xs uppercase tracking-widest font-bold">Before</span>
                    </div>
                  </div>
                </div>
                {/* After */}
                <div className="flex-1 overflow-hidden bg-black rounded-sm border border-white/[0.06]">
                  <div className="relative h-full min-h-64 sm:min-h-96">
                    <img
                      src={study.after}
                      alt={`After: ${study.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="font-heading text-3xl sm:text-4xl text-brand-blue-bright tracking-widest drop-shadow-lg">AFTER</span>
                    </div>
                    <div className="absolute top-3 left-3 bg-brand-black/90 px-4 py-2 rounded-sm border border-brand-blue-bright/50">
                      <span className="font-heading text-brand-blue-bright text-xs uppercase tracking-widest font-bold">After</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Info section */}
          <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-body text-brand-blue-bright text-xs uppercase tracking-widest">{study.category}</span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl text-white mb-2 leading-tight">{study.title}</h3>
              <p className="font-body text-white/50 text-sm mb-3">{study.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollRevealItem>
  )
}

export default function Work() {
  return (
    <PageTransition>
      <Helmet>
        <title>Our Work | Before & After Case Studies | Commercial Canopy Cleaning</title>
        <meta name="description" content="See our proven track record with real before and after images from kitchen extraction cleaning and repair projects across the UK." />
        <meta property="og:title" content="Our Work | Commercial Canopy Cleaning" />
        <meta property="og:description" content="Real before and after case studies showing our expertise in canopy cleaning, duct cleaning, and emergency fan repair." />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 50%,rgba(26,95,168,0.1) 0%,transparent 60%),#0A0A0A' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 font-body text-white/30 text-sm mb-6">
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Our Work</span>
            </div>
            <span className="section-label">Case Studies</span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-5">Our Work</h1>
            <p className="font-body text-white/50 text-base sm:text-lg max-w-2xl leading-relaxed">
              Real before and after transformations from across the UK. Every project documented, certified, and delivered to TR19 standard.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── PORTFOLIO GRID ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollRevealContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* ── STATS SECTION ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#070b11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <ScrollReveal>
              <div>
                <div className="font-heading text-4xl sm:text-5xl text-brand-blue-bright mb-2">500+</div>
                <div className="font-body text-white/50 text-sm uppercase tracking-widest">Projects Completed</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <div className="font-heading text-4xl sm:text-5xl text-brand-blue-bright mb-2">100%</div>
                <div className="font-body text-white/50 text-sm uppercase tracking-widest">UK Coverage</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <div className="font-heading text-4xl sm:text-5xl text-brand-blue-bright mb-2">24/7</div>
                <div className="font-body text-white/50 text-sm uppercase tracking-widest">Emergency Response</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div>
                <div className="font-heading text-4xl sm:text-5xl text-brand-blue-bright mb-2">TR19</div>
                <div className="font-body text-white/50 text-sm uppercase tracking-widest">Certified Standard</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-brand-black border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4">Ready to See What We Can Do?</h2>
            <p className="font-body text-white/50 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote. Speak directly with a specialist engineer about your kitchen extraction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:07517758507" className="btn-primary justify-center">
                Call Now — 07517 758507
              </a>
              <Link to="/contact" className="btn-ghost justify-center">
                Send an Enquiry <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
