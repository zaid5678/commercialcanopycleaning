import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'

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

export default function LogoConveyorBelt() {
  const displayLogos = [...logos, ...logos]
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeout = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      setIsScrolling(true)
      
      // Clear existing timeout
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
      
      // Resume animation after 1 second of no scrolling
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false)
      }, 1000)
    }

    container.addEventListener('scroll', handleScroll)
    
    return () => {
      container.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    }
  }, [])

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-brand-black to-[#070b11] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-3">
              Trusted By
            </h2>
            <p className="font-body text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
              Leading brands across the UK rely on Commercial Canopy Cleaning for TR19 compliance and emergency fan repairs
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Conveyor Belt Container */}
      <div className="relative overflow-x-auto" ref={containerRef} style={{ scrollBehavior: 'smooth' }}>
        {/* Belt */}
        <div className="bg-white py-8 sm:py-10 inline-flex min-w-full">
          {/* Logos */}
          <motion.div
            className="flex px-6"
            animate={isScrolling ? {} : { x: '-50%' }}
            transition={isScrolling ? {} : {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {displayLogos.map((logo, index) => {
              // Scale up Pepes and PFC logos to match other logos
              const isSmallLogo = ['Pepes', 'PFC'].includes(logo.name)
              const scaleClass = isSmallLogo ? 'scale-150' : ''
              const extraGap = isSmallLogo ? 'mx-6 sm:mx-8' : 'mx-4 sm:mx-6'
              
              return (
                <div
                  key={`${logo.name}-${index}`}
                  className={`flex-shrink-0 h-24 sm:h-32 w-auto flex items-center justify-center ${extraGap}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`h-full w-auto object-contain filter drop-shadow-sm hover:drop-shadow-md transition-all duration-300 ${scaleClass}`}
                    loading="lazy"
                  />
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
