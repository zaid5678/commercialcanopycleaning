import { MessageCircle, Mail } from 'lucide-react'

export default function MobileCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-brand-blue-bright text-white font-heading py-3 px-4 flex items-center justify-center gap-3 transition-colors duration-200 shadow-lg">
      <a
        href="https://wa.me/447517758507"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 flex-1 hover:bg-brand-blue-deep px-3 py-2 rounded transition-colors duration-200"
      >
        <MessageCircle size={18} />
        <span className="text-sm">WhatsApp</span>
      </a>
      <a
        href="mailto:info@commercialcanopycleaning.co.uk?subject=Service Inquiry"
        className="flex items-center justify-center gap-2 flex-1 hover:bg-brand-blue-deep px-3 py-2 rounded transition-colors duration-200"
      >
        <Mail size={18} />
        <span className="text-sm">Email</span>
      </a>
    </div>
  )
}
