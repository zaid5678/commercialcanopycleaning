import ScrollReveal, { ScrollRevealContainer, ScrollRevealItem } from './ScrollReveal'

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
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-brand-black to-[#070b11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-10 sm:mb-14 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-3" style={{ color: '#F5A623' }}>
            Trusted By
          </h2>
          <p className="font-body text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
            Leading brands across the UK rely on Commercial Canopy Cleaning for TR19 compliance and emergency fan repairs
          </p>
        </ScrollReveal>

        <div className="bg-white rounded-sm p-6 sm:p-10">
          <ScrollRevealContainer className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
            {logos.map(logo => (
              <ScrollRevealItem key={logo.name}>
                <div className="flex items-center justify-center h-16 sm:h-20">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-full h-full object-contain"
                    loading="eager"
                  />
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>
        </div>
      </div>
    </section>
  )
}
