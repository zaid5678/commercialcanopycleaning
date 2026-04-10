import { MessageCircle, Phone, ClipboardList } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MobileCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-brand-blue-bright text-white font-heading px-2 flex items-center justify-center gap-1 transition-colors duration-200 shadow-lg" style={{ paddingTop: '0.75rem', paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}>
      <a
        href="tel:07517758507"
        className="flex items-center justify-center gap-1.5 flex-1 hover:bg-brand-blue-deep px-2 py-2 rounded transition-colors duration-200"
      >
        <Phone size={17} />
        <span className="text-xs">Call</span>
      </a>
      <a
        href="https://wa.me/447517758507"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 flex-1 hover:bg-brand-blue-deep px-2 py-2 rounded transition-colors duration-200"
      >
        <MessageCircle size={17} />
        <span className="text-xs">WhatsApp</span>
      </a>
<Link
        to="/contact"
        className="flex items-center justify-center gap-1.5 flex-1 hover:bg-brand-blue-deep px-2 py-2 rounded transition-colors duration-200"
      >
        <ClipboardList size={17} />
        <span className="text-xs">Enquire</span>
      </Link>
    </div>
  )
}
