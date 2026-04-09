import { Phone } from 'lucide-react'

export default function MobileCallBar() {
  return (
    <a
      href="tel:07517758507"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-brand-blue-bright hover:bg-brand-blue-deep text-white font-heading text-sm py-3 px-4 flex items-center justify-center gap-2 transition-colors duration-200 shadow-lg"
    >
      <Phone size={18} />
      Call Now: 07517 758507
    </a>
  )
}
