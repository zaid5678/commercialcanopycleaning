import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ScrollReveal from './ScrollReveal'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return isMobile
}

const logos = [
  { name: 'Dominos', src: '/logos/Dominos.png' },
  { name: 'KFC', src: '/logos/KFC.png' },
  { name: 'Pizza Hut', src: '/logos/PizzaHut.png' },
  { name: 'Taco Bell', src: '/logos/TacoBell.png' },
  { name: 'PizzaGoGo', src: '/logos/PizzaGoGo.png' },
  { name: 'Peri Peri Original', src: '/logos/PeriPeriOriginal.png' },
  { name: 'Pepes', src: '/logos/Pepes.png' },
  { name: 'PFC', src: '/logos/PFC.png' },
  { name: 'Dixy Chicken', src: '/logos/Dixy_Chicken_logo.png' },
  { name: 'Tortilla', src: '/logos/Tortilla.png' },
  { name: 'Tamarind Kitchen', src: '/logos/TamarindKitchen.png' },
  { name: 'Wembley', src: '/logos/Wembley.png' },
  { name: 'GDK', src: '/logos/GDK.png' },
  { name: 'IRO', src: '/logos/IRO.jpg' },
]

const smallLogos = ['Pepes', 'PFC']

function LogoItem({ logo, index }) {
  const isSmall = smallLogos.includes(logo.name)
  return (
    <div
      key={`${logo.name}-${index}`}
      className="flex-shrink-0 w-24 sm:w-36 h-16 sm:h-24 flex items-center justify-center px-2 sm:px-3"
    >
      <img
        src={logo.src}
        alt={logo.name}
        className={`max-h-full max-w-full object-contain filter drop-shadow-sm ${isSmall ? 'scale-125' : ''}`}
        loading="lazy"
      />
    </div>
  )
}

function Belt({ items, direction = 'left', duration = 18, mobileDuration }) {
  const isMobile = useIsMobile()
  const activeDuration = isMobile && mobileDuration ? mobileDuration : duration
  const display = [...items, ...items, ...items, ...items]
  const startX = direction === 'left' ? 0 : '-50%'
  const endX = direction === 'left' ? '-50%' : 0

  return (
    <div className="overflow-hidden bg-white py-6 sm:py-8 relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex"
        initial={{ x: startX }}
        animate={{ x: endX }}
        transition={{
          duration: activeDuration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
      >
        {display.map((logo, index) => (
          <LogoItem key={`${logo.name}-${index}`} logo={logo} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

export default function LogoConveyorBelt() {
  const topRow = logos.slice(0, 7)
  const bottomRow = logos.slice(7)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-brand-black to-[#070b11] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-3" style={{ color: '#F5A623' }}>
              Trusted By
            </h2>
            <p className="font-body text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
              Leading brands across the UK rely on Commercial Canopy Cleaning for TR19 compliance and emergency fan repairs
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="flex flex-col gap-3">
        <Belt items={topRow} direction="left" duration={16} mobileDuration={8} />
        <Belt items={bottomRow} direction="right" duration={20} mobileDuration={10} />
      </div>
    </section>
  )
}
