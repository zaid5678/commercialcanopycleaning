import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingFAB from './components/FloatingFAB'
import MobileCallBar from './components/MobileCallBar'
import EmergencyBanner from './components/EmergencyBanner'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Compliance from './pages/Compliance'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Commercial Canopy Cleaning',
  telephone: '07517758507',
  url: 'https://commercialcanopycleaning.netlify.app',
  areaServed: 'United Kingdom',
  description: 'TR19 certified canopy and duct cleaning, fan breakdown specialists, nationwide coverage.',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col overflow-hidden">
          <EmergencyBanner />
          <Navbar />
        </div>
        <div className="min-h-screen bg-brand-black flex flex-col">
          <div aria-hidden="true" />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
          <FloatingFAB />
          <MobileCallBar />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}
