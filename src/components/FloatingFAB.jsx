import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function FloatingFAB() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()
  const isContact = location.pathname === '/contact'

  useEffect(() => {
    let timer
    const handleScroll = () => {
      if (window.scrollY > 300) setVisible(true)
    }
    // Also show after 3s regardless of scroll
    timer = setTimeout(() => setVisible(true), 3000)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Reset on page change
  useEffect(() => {
    setVisible(false)
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [location.pathname])

  if (isContact) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="fab"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-6 right-4 sm:right-6 z-40"
        >
          <a
            href="tel:07517758507"
            className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-brand-blue-deep to-brand-blue-bright text-white font-body font-semibold rounded-sm shadow-lg shadow-brand-blue-deep/30 px-4 py-3 sm:px-5 hover:brightness-110 transition-all duration-200"
          >
            <Phone size={17} className="flex-shrink-0" />
            {/* Number visible on desktop, icon-only on very small screens */}
            <span className="hidden sm:inline text-sm">07517 758507</span>
            <span className="sm:hidden text-sm">Call Now</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
