import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'
import PageTransition from '../components/PageTransition'

export default function Terms() {
  return (
    <PageTransition>
      <Helmet>
        <title>Terms & Conditions | Commercial Canopy Cleaning</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="pt-28 sm:pt-36 pb-20 min-h-screen">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 0%,rgba(26,95,168,0.07) 0%,transparent 60%),#0A0A0A' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 font-body text-white/30 text-sm hover:text-white/60 transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <span className="section-label">Legal</span>
          <h1 className="font-heading text-5xl sm:text-6xl text-white leading-none mb-6">Terms &amp; Conditions</h1>
          <div className="h-px bg-white/[0.06] mb-10" />
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 border border-white/10 flex items-center justify-center mb-6 mx-auto">
              <div className="w-6 h-6 border-2 border-brand-blue-bright/40 rounded-sm" />
            </div>
            <h2 className="font-heading text-3xl text-white mb-3">Coming Soon</h2>
            <p className="font-body text-white/40 text-sm max-w-sm">Our full terms and conditions are being drafted. Please contact us if you have any queries before engaging our services.</p>
            <div className="mt-8 flex items-center gap-4">
              <Link to="/contact" className="btn-primary text-sm">Contact Us</Link>
              <Link to="/" className="font-body text-white/40 text-sm hover:text-white/70 transition-colors">← Home</Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
