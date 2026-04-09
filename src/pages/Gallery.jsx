import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { X, ChevronLeft, ChevronRight, ArrowRight, Info } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

const filters = ['All', 'Canopy', 'Ductwork', 'Fan Repair', 'Compliance Docs']

const allItems = [
  { id:1, label:'Before', tag:'Canopy', location:'London Restaurant', category:'Canopy' },
  { id:2, label:'After', tag:'Canopy', location:'London Restaurant', category:'Canopy' },
  { id:3, label:'Before', tag:'Ductwork', location:'Manchester Hotel', category:'Ductwork' },
  { id:4, label:'After', tag:'Ductwork', location:'Manchester Hotel', category:'Ductwork' },
  { id:5, label:'Before', tag:'Fan Repair', location:'Birmingham Café', category:'Fan Repair' },
  { id:6, label:'After', tag:'Fan Repair', location:'Birmingham Café', category:'Fan Repair' },
  { id:7, label:'Before', tag:'Canopy', location:'Edinburgh Hotel', category:'Canopy' },
  { id:8, label:'After', tag:'Canopy', location:'Edinburgh Hotel', category:'Canopy' },
  { id:9, label:'Before', tag:'Ductwork', location:'Leeds Hospital', category:'Ductwork' },
  { id:10, label:'After', tag:'Ductwork', location:'Leeds Hospital', category:'Ductwork' },
  { id:11, label:'Certificate', tag:'Compliance Docs', location:'Bristol School', category:'Compliance Docs' },
  { id:12, label:'Report', tag:'Compliance Docs', location:'Bristol School', category:'Compliance Docs' },
  { id:13, label:'Before', tag:'Fan Repair', location:'Nottingham Pub', category:'Fan Repair' },
  { id:14, label:'After', tag:'Fan Repair', location:'Nottingham Pub', category:'Fan Repair' },
  { id:15, label:'Before', tag:'Canopy', location:'Cardiff Restaurant', category:'Canopy' },
  { id:16, label:'After', tag:'Canopy', location:'Cardiff Restaurant', category:'Canopy' },
]

const gradients = [
  'from-[#0d1825] to-[#111111]',
  'from-[#0e1f2e] to-[#0d1520]',
  'from-[#111827] to-[#0c1118]',
  'from-[#101c2e] to-[#0a1322]',
]

function PlaceholderCard({ item, onClick }) {
  const isBefore = item.label === 'Before'
  const isAfter = item.label === 'After'
  const grad = gradients[item.id % gradients.length]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(item)}
      className={`group relative overflow-hidden cursor-pointer bg-gradient-to-br ${grad} border border-white/[0.06] hover:border-brand-blue-bright/30 transition-colors duration-300 break-inside-avoid mb-4`}
      style={{ height: item.id % 3 === 0 ? '260px' : '200px' }}
    >
      {/* Shimmer on hover */}
      <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background:'linear-gradient(135deg,transparent 30%,rgba(46,141,232,0.05) 50%,transparent 70%)' }}
        animate={{ x:['-100%','200%'] }} transition={{ duration:2,repeat:Infinity,repeatDelay:1 }} />

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize:'30px 30px' }} />

      {/* Camera icon */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-15 group-hover:opacity-30 transition-opacity duration-300">
        <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-sm">
          <div className="w-4 h-4 rounded-full border-2 border-white/60" />
        </div>
        <div className="font-body text-white/60 text-[10px] uppercase tracking-widest text-center px-4">{item.location}</div>
      </div>

      {/* Label badges */}
      <div className="absolute top-3 left-3">
        <span className={`font-body font-bold text-[10px] px-2.5 py-1 uppercase tracking-widest ${
          isBefore ? 'bg-[#1A1A1A] text-white/50 border border-white/10' :
          isAfter ? 'bg-brand-blue-deep text-white border border-brand-blue-bright/30' :
          'bg-[#111] text-brand-blue-bright border border-brand-blue-bright/30'
        }`}>
          {item.label}
        </span>
      </div>

      {/* Category tag */}
      <div className="absolute top-3 right-3">
        <span className="font-body text-white/20 text-[9px] uppercase tracking-widest bg-white/5 px-2 py-0.5">
          {item.tag}
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="font-body text-brand-blue-bright text-[10px] uppercase tracking-widest mb-0.5">{item.tag}</div>
        <div className="font-body text-white/70 text-xs">{item.location}</div>
      </div>
    </motion.div>
  )
}

function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const item = items[activeIndex]

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.2 }}
      className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <button onClick={onClose} className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors z-10">
        <X size={18} />
      </button>
      <div className="absolute top-5 left-5 font-body text-white/35 text-sm z-10">{activeIndex + 1} / {items.length}</div>

      <button onClick={e => { e.stopPropagation(); onPrev() }} className="absolute left-3 sm:left-5 w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors z-10">
        <ChevronLeft size={20} />
      </button>

      <motion.div key={activeIndex} initial={{ opacity:0,scale:0.95 }} animate={{ opacity:1,scale:1 }} transition={{ duration:0.25 }}
        className="relative max-w-3xl w-full mx-14" onClick={e => e.stopPropagation()}>
        <div className={`relative w-full bg-gradient-to-br ${gradients[activeIndex % gradients.length]} border border-white/10`} style={{ aspectRatio:'4/3' }}>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize:'40px 40px' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 border border-white/10 flex items-center justify-center opacity-15">
              <div className="w-6 h-6 rounded-full border-2 border-white/60" />
            </div>
            <div className="font-body text-white/25 text-sm">Client photo — {item.location}</div>
          </div>
          <span className={`absolute top-4 left-4 font-body font-bold text-[11px] px-3 py-1 uppercase tracking-widest ${
            item.label === 'Before' ? 'bg-[#1A1A1A] text-white/60 border border-white/10' : 'bg-brand-blue-deep text-white border border-brand-blue-bright/30'
          }`}>{item.label}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="font-heading text-xl text-white tracking-wide">{item.tag}</div>
            <div className="font-body text-white/40 text-sm">{item.location}</div>
          </div>
          <div className="font-body text-white/15 text-xs uppercase tracking-widest">Placeholder</div>
        </div>
      </motion.div>

      <button onClick={e => { e.stopPropagation(); onNext() }} className="absolute right-3 sm:right-5 w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors z-10">
        <ChevronRight size={20} />
      </button>
    </motion.div>
  )
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeFilter === 'All' ? allItems : allItems.filter(i => i.category === activeFilter)

  const openLightbox = (item) => {
    const idx = filtered.findIndex(i => i.id === item.id)
    setLightboxIndex(idx)
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Gallery | Before & After Photos | Commercial Canopy Cleaning</title>
        <meta name="description" content="Before and after photos of commercial canopy cleans, duct cleaning, fan repair, and compliance documentation. Nationwide jobs." />
        <meta property="og:title" content="Gallery | Commercial Canopy Cleaning" />
        <meta property="og:description" content="See the results of our commercial kitchen ventilation cleaning work across the UK." />
      </Helmet>

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background:'radial-gradient(ellipse 50% 60% at 50% 0%,rgba(26,95,168,0.1) 0%,transparent 60%),#0A0A0A' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 font-body text-white/30 text-sm mb-6">
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span><span className="text-white/60">Gallery</span>
            </div>
            <span className="section-label">Our Work</span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-5">Before &amp; After</h1>
            <p className="font-body text-white/50 text-base sm:text-lg max-w-2xl">
              Real results from commercial kitchen jobs across the UK. Photos are added as new jobs are completed.
            </p>
          </ScrollReveal>

          {/* Dev note */}
          <ScrollReveal delay={0.15} className="mt-5">
            <div className="inline-flex items-center gap-2.5 bg-[#111] border border-white/[0.06] px-4 py-2.5 rounded-sm">
              <Info size={14} className="text-brand-blue-bright flex-shrink-0" />
              <span className="font-body text-white/40 text-xs">Photos updated as new jobs are completed. Add real images to <code className="text-brand-blue-bright/70">/src/assets/gallery/</code></span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-px bg-white/[0.06]" /></div>

      {/* Filter bar */}
      <section className="py-6 sm:py-8 bg-[#0d0d0d] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`font-body text-xs sm:text-sm font-medium px-4 py-2 border transition-colors duration-200 ${
                  activeFilter === f
                    ? 'border-brand-blue-bright text-brand-blue-bright bg-brand-blue-bright/5'
                    : 'border-white/10 text-white/50 hover:border-white/25 hover:text-white/75'
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry grid using CSS columns */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ columns: '1', columnGap: '1rem' }}
              className="sm:[columns:2] lg:[columns:3]"
            >
              {filtered.map(item => (
                <PlaceholderCard key={item.id} item={item} onClick={openLightbox} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mb-1">Want results like these?</h2>
            <p className="font-body text-white/40 text-sm">Book a clean and we'll provide full photographic documentation.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link to="/contact" className="btn-primary flex-shrink-0">Get a Quote <ArrowRight size={16} /></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            activeIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex(i => i > 0 ? i - 1 : filtered.length - 1)}
            onNext={() => setLightboxIndex(i => i < filtered.length - 1 ? i + 1 : 0)}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
