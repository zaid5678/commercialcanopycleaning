import { useState, useEffect, useCallback } from 'react'
import { Phone, Quote, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

const reviews = [
  {
    text: 'Our kitchen extractor fan failed on a very busy Friday evening and we were in serious trouble. Commercial Canopy Cleaning arrived quickly, supplied and fitted a new fan, and had everything running again within 2 hours. Exceptional emergency service.',
    name: 'Ahmed Khan',
    role: 'Restaurant Owner',
    images: [{ src: '/review_images/review_1.png', label: null }],
  },
  {
    text: 'Full canopy, duct, and extraction system clean carried out to a very high standard. Everything was left spotless and fully compliant with TR19 requirements. Excellent communication throughout.',
    name: 'James Carter',
    role: 'Head Chef',
    images: [
      { src: '/review_images/review_2_before.png', label: 'Before' },
      { src: '/review_images/review_2_after.png', label: 'After' },
    ],
  },
  {
    text: 'We had serious grease build-up affecting airflow. The team completed a full canopy and duct cleaning service and the difference was immediate. Professional, efficient, and reliable.',
    name: 'Ayesha Malik',
    role: 'Café Manager',
    images: [
      { src: '/review_images/review_3_before.png', label: 'Before' },
      { src: '/review_images/review_3_after.png', label: 'After' },
    ],
  },
  {
    text: 'They installed access panels on our ductwork and carried out a full clean of the extraction system. Everything is now much easier to maintain and fully compliant.',
    name: 'Oliver Bennett',
    role: 'Facilities Manager',
    images: [{ src: '/review_images/review_4.png', label: null }],
  },
  {
    text: 'Very professional service from start to finish. They worked around our opening hours and completed a full kitchen extraction clean with minimal disruption to our business.',
    name: 'Daniel Wright',
    role: 'Operations Manager',
    images: [
      { src: '/review_images/review_5_before.png', label: 'Before' },
      { src: '/review_images/review_5_after.png', label: 'After' },
    ],
  },
  {
    text: 'Excellent service and great attention to detail. Full canopy, fan, and duct cleaning completed with certification and photographic evidence provided straight after.',
    name: 'Bilal Hussain',
    role: 'Takeaway Owner',
    images: [
      { src: '/review_images/review_6_before.png', label: 'Before' },
      { src: '/review_images/review_6_after.png', label: 'After' },
    ],
  },
]

// Flat list of all images for lightbox navigation
const allImages = reviews.flatMap(r => r.images)

function Lightbox({ img, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && hasPrev) onPrev()
      if (e.key === 'ArrowRight' && hasNext) onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white/60 hover:text-white p-2 z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          className="absolute left-2 sm:left-6 text-white/50 hover:text-white p-3 z-10"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Previous image"
        >
          <ChevronLeft size={36} />
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-[95vw] max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.label || 'Review image'}
          className="max-w-[95vw] max-h-[90vh] object-contain select-none"
        />
        {img.label && (
          <span className="absolute bottom-3 left-3 font-body text-xs text-white/80 bg-black/60 px-2 py-0.5 uppercase tracking-widest">
            {img.label}
          </span>
        )}
      </div>

      {/* Next */}
      {hasNext && (
        <button
          className="absolute right-2 sm:right-6 text-white/50 hover:text-white p-3 z-10"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Next image"
        >
          <ChevronRight size={36} />
        </button>
      )}
    </div>
  )
}

function ReviewImages({ images, onOpen }) {
  const isSingle = images.length === 1

  if (isSingle) {
    return (
      <button
        className="w-full bg-black flex-shrink-0 relative group cursor-zoom-in"
        onClick={() => onOpen(images[0])}
        aria-label="Expand image"
      >
        <img
          src={images[0].src}
          alt="Review"
          className="w-full object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity bg-black/30">
          <ZoomIn size={28} className="text-white drop-shadow" />
        </div>
      </button>
    )
  }

  return (
    <div className="flex gap-0.5 w-full bg-black flex-shrink-0">
      {images.map((img) => (
        <button
          key={img.src}
          className="relative flex-1 group cursor-zoom-in"
          onClick={() => onOpen(img)}
          aria-label={`Expand ${img.label} image`}
        >
          <img
            src={img.src}
            alt={img.label}
            className="w-full object-contain"
          />
          {img.label && (
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-body text-xs text-white/80 bg-black/60 px-2 py-0.5 uppercase tracking-widest pointer-events-none">
              {img.label}
            </span>
          )}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity bg-black/30">
            <ZoomIn size={22} className="text-white drop-shadow" />
          </div>
        </button>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [lightbox, setLightbox] = useState(null) // { src, label }

  const openLightbox = useCallback((img) => setLightbox(img), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  const currentIndex = lightbox ? allImages.findIndex(i => i.src === lightbox.src) : -1
  const goPrev = useCallback(() => setLightbox(allImages[currentIndex - 1]), [currentIndex])
  const goNext = useCallback(() => setLightbox(allImages[currentIndex + 1]), [currentIndex])

  return (
    <PageTransition>
      {lightbox && (
        <Lightbox
          img={lightbox}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < allImages.length - 1}
        />
      )}

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 70% 30%, rgba(26,95,168,0.1) 0%, transparent 60%), #0A0A0A',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="section-label">What Our Clients Say</span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-4">
              Client Reviews
            </h1>
            <p className="font-body text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
              Genuine feedback from restaurant owners, chefs, and facilities managers across the UK.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Reviews grid */}
      <section className="py-16 sm:py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="card-surface flex flex-col h-full overflow-hidden">
                  <ReviewImages images={review.images} onOpen={openLightbox} />
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <Quote size={20} className="text-brand-blue-bright/30 mb-3 flex-shrink-0" />
                    <p className="font-body text-white/65 text-sm leading-relaxed flex-1 mb-6">
                      {review.text}
                    </p>
                    <div className="border-t border-white/[0.06] pt-4 mt-auto">
                      <p className="font-heading text-white text-sm tracking-wide">{review.name}</p>
                      <p className="font-body text-white/35 text-xs mt-0.5">{review.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#070b11] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="section-label">Get in Touch</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-4">
              Book Your Clean Today
            </h2>
            <p className="font-body text-white/50 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
              Join our clients across the UK. Call us or send a WhatsApp message to get a no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:07517758507" className="btn-primary justify-center">
                <Phone size={17} />
                Call 07517 758507
              </a>
              <a
                href="https://wa.me/447517758507"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost justify-center"
              >
                <WhatsAppIcon size={16} />
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  )
}
