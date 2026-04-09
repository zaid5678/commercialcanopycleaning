import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal, { ScrollRevealContainer, ScrollRevealItem } from '../components/ScrollReveal'

const galleryItems = [
  { id: 1, label: 'Before', tag: 'Canopy Clean', location: 'London Restaurant', aspect: 'tall' },
  { id: 2, label: 'After', tag: 'Canopy Clean', location: 'London Restaurant', aspect: 'wide' },
  { id: 3, label: 'Before', tag: 'Duct Clean', location: 'Manchester Hotel', aspect: 'wide' },
  { id: 4, label: 'After', tag: 'Duct Clean', location: 'Manchester Hotel', aspect: 'tall' },
  { id: 5, label: 'Before', tag: 'Fan Repair', location: 'Birmingham Café', aspect: 'wide' },
  { id: 6, label: 'After', tag: 'Fan Repair', location: 'Birmingham Café', aspect: 'wide' },
  { id: 7, label: 'Before', tag: 'Canopy Clean', location: 'Edinburgh Hotel', aspect: 'tall' },
  { id: 8, label: 'After', tag: 'Canopy Clean', location: 'Edinburgh Hotel', aspect: 'wide' },
  { id: 9, label: 'Before', tag: 'HVAC Service', location: 'Leeds Hospital', aspect: 'wide' },
  { id: 10, label: 'After', tag: 'HVAC Service', location: 'Leeds Hospital', aspect: 'tall' },
  { id: 11, label: 'Before', tag: 'Duct Clean', location: 'Bristol School', aspect: 'wide' },
  { id: 12, label: 'After', tag: 'Duct Clean', location: 'Bristol School', aspect: 'wide' },
]

// Generate distinct shimmer pattern colours per card
const patternColours = [
  'from-[#0d1825] to-[#111111]',
  'from-[#0e1f2e] to-[#0d1520]',
  'from-[#111827] to-[#0c1118]',
  'from-[#101c2e] to-[#0a1322]',
]

function PlaceholderImage({ item, onClick, index }) {
  const gradient = patternColours[index % patternColours.length]
  const isBefore = item.label === 'Before'

  return (
    <motion.div
      onClick={() => onClick(item)}
      className={`group relative overflow-hidden cursor-pointer bg-gradient-to-br ${gradient} border border-white/[0.06] hover:border-brand-blue-bright/30 transition-colors duration-300 ${
        item.aspect === 'tall' ? 'row-span-2' : ''
      }`}
      style={{ minHeight: item.aspect === 'tall' ? '340px' : '170px' }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.25 }}
    >
      {/* Animated shimmer */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, transparent 30%, rgba(46,141,232,0.04) 50%, transparent 70%)',
        }}
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Camera icon placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
        <div className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-sm">
          <div className="w-5 h-5 rounded-full border-2 border-white/60" />
        </div>
        <div className="font-body text-white/60 text-xs uppercase tracking-widest">
          {item.location}
        </div>
      </div>

      {/* Label badges */}
      <div className="absolute top-3 left-3 flex items-center gap-2">
        <span className={`font-body font-semibold text-xs px-3 py-1 uppercase tracking-widest ${
          isBefore
            ? 'bg-[#1A1A1A] text-white/60 border border-white/10'
            : 'bg-brand-blue-deep text-white border border-brand-blue-bright/30'
        }`}>
          {item.label}
        </span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="font-body text-brand-blue-bright text-xs uppercase tracking-widest mb-0.5">
          {item.tag}
        </div>
        <div className="font-body text-white/70 text-sm">{item.location}</div>
      </div>

      {/* Image placeholder indicator */}
      <div className="absolute top-3 right-3">
        <div className="font-body text-white/15 text-[10px] uppercase tracking-widest bg-white/5 px-2 py-1">
          Photo
        </div>
      </div>
    </motion.div>
  )
}

function Lightbox({ items, activeIndex, onClose, onPrev, onNext }) {
  const item = items[activeIndex]

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors z-10"
      >
        <X size={18} />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 font-body text-white/40 text-sm">
        {activeIndex + 1} / {items.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-6 w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors z-10"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Content */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative max-w-3xl w-full mx-14"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative w-full bg-gradient-to-br ${patternColours[activeIndex % patternColours.length]} border border-white/10`}
          style={{ aspectRatio: '4/3' }}
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 border border-white/10 flex items-center justify-center opacity-20">
              <div className="w-7 h-7 rounded-full border-2 border-white/60" />
            </div>
            <div className="font-body text-white/30 text-sm uppercase tracking-widest">
              Client photo — {item.location}
            </div>
          </div>
          <span className={`absolute top-4 left-4 font-body font-semibold text-xs px-3 py-1 uppercase tracking-widest ${
            item.label === 'Before'
              ? 'bg-[#1A1A1A] text-white/60 border border-white/10'
              : 'bg-brand-blue-deep text-white border border-brand-blue-bright/30'
          }`}>
            {item.label}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="font-heading text-xl text-white tracking-wide">{item.tag}</div>
            <div className="font-body text-white/40 text-sm">{item.location}</div>
          </div>
          <div className="font-body text-white/20 text-xs uppercase tracking-widest">Placeholder</div>
        </div>
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-6 w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors z-10"
      >
        <ChevronRight size={20} />
      </button>
    </motion.div>
  )
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (item) => {
    const idx = galleryItems.findIndex((i) => i.id === item.id)
    setLightboxIndex(idx)
  }

  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((i) => (i > 0 ? i - 1 : galleryItems.length - 1))
  const nextImage = () => setLightboxIndex((i) => (i < galleryItems.length - 1 ? i + 1 : 0))

  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 50% 60% at 50% 0%, rgba(26,95,168,0.1) 0%, transparent 60%), #0A0A0A',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 font-body text-white/30 text-sm mb-6">
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Gallery</span>
            </div>
            <span className="section-label">Our Work</span>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none mb-6">
              Before &amp; After
            </h1>
            <p className="font-body text-white/50 text-lg max-w-2xl">
              Results speak louder than claims. Client photography coming soon — these placeholders will be replaced with real before &amp; after shots from commercial kitchen jobs across the UK.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="mt-6">
            <div className="inline-flex items-center gap-3 bg-[#111111] border border-white/[0.06] px-5 py-3">
              <div className="w-2 h-2 rounded-full bg-brand-blue-bright animate-pulse" />
              <span className="font-body text-white/50 text-sm">
                Photos being collected — swap in real images when available
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollRevealContainer
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[170px]"
          >
            {galleryItems.map((item, index) => (
              <ScrollRevealItem key={item.id}>
                <PlaceholderImage
                  item={item}
                  onClick={openLightbox}
                  index={index}
                />
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <h2 className="font-heading text-4xl lg:text-5xl text-white mb-2">
                Want to see results like these?
              </h2>
              <p className="font-body text-white/40 text-sm">Book a clean and we'll provide full photographic documentation.</p>
            </div>
            <Link to="/contact" className="btn-primary flex-shrink-0">
              Get a Quote <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={galleryItems}
            activeIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
