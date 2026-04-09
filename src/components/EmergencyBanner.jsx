import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function EmergencyBanner() {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="overflow-hidden bg-[#0c1a2e] border-b border-brand-blue-deep/40 relative z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-2 h-2 rounded-full bg-brand-blue-bright flex-shrink-0" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
          <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
          <p className="font-body text-white/70 text-xs sm:text-sm">
            <span className="text-white font-semibold">24/7 Emergency Callout</span>
            <span className="hidden sm:inline"> — Fan breakdown or urgent clean?</span>
            {' '}
            <a href="tel:07517758507" className="text-brand-blue-bright hover:underline font-semibold">07517 758507</a>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a href="tel:07517758507" className="hidden sm:flex items-center gap-1.5 font-body text-brand-blue-bright text-xs font-semibold hover:underline">
            <Phone size={12} /> Call Now
          </a>
        </div>
      </div>
    </motion.div>
  )
}
