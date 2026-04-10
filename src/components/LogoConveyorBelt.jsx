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

function Belt({ items, direction = 'left', desktopDuration = 16, mobileDuration = 8 }) {
  // 4x duplication — belt translates -50% (2 copies), seamless loop
  const display = [...items, ...items, ...items, ...items]
  const animName = direction === 'left' ? 'marquee-left' : 'marquee-right'
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const duration = isMobile ? mobileDuration : desktopDuration

  return (
    <div className="overflow-hidden bg-white py-5 sm:py-7 relative">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div
        className="flex"
        style={{ animation: `${animName} ${duration}s linear infinite` }}
      >
        {display.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex-shrink-0 w-24 sm:w-36 h-14 sm:h-20 flex items-center justify-center px-2 sm:px-3"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-full max-w-full object-contain"
              loading="eager"
            />
          </div>
        ))}
      </div>
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
        <Belt items={topRow} direction="left" desktopDuration={16} mobileDuration={8} />
        <Belt items={bottomRow} direction="right" desktopDuration={20} mobileDuration={10} />
      </div>
    </section>
  )
}
