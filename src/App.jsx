import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingFAB from './components/FloatingFAB'
import MobileCallBar from './components/MobileCallBar'
import EmergencyBanner from './components/EmergencyBanner'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import About from './pages/About'
import Compliance from './pages/Compliance'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import CityLanding from './pages/CityLanding'

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'Commercial Canopy Cleaning',
  telephone: '07517758507',
  url: 'https://commercialcanopycleaning.co.uk',
  logo: 'https://commercialcanopycleaning.co.uk/logo-updated.jpeg',
  image: 'https://commercialcanopycleaning.co.uk/logo-updated.jpeg',
  description: 'TR19 certified commercial canopy cleaning, duct cleaning, and emergency fan repair specialists. Nationwide coverage, 24/7 availability.',
  priceRange: '££',
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'AdministrativeArea', name: 'England' },
    { '@type': 'AdministrativeArea', name: 'Scotland' },
    { '@type': 'AdministrativeArea', name: 'Wales' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Ventilation Cleaning Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Canopy Cleaning', description: 'TR19 certified canopy hood and baffle degreasing with compliance certificate.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Duct Cleaning', description: 'Full extraction run cleaning from canopy to discharge point.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fan Repair & Breakdown', description: 'Emergency fan repair and replacement, same-day nationwide.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Callout', description: '24/7 emergency callout service from £150.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Access Panel Installation', description: 'TR19-compliant access panel installation and maintenance.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance Certification', description: 'TR19 documentation and compliance certification.' } },
    ],
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [],
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/commercial-canopy-cleaning/:city" element={<CityLanding />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col overflow-hidden">
          <EmergencyBanner />
          <Navbar />
        </div>
        <ScrollToTop />
        <div className="min-h-screen bg-brand-black flex flex-col">
          <div aria-hidden="true" />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <div className="lg:hidden h-[60px]" aria-hidden="true" />
          <Footer />
          <FloatingFAB />
          <MobileCallBar />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}
