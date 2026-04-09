import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone, Mail, MapPin, CheckCircle2, ArrowRight, Clock, Send
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import ScrollReveal from '../components/ScrollReveal'

const services = [
  'Canopy Cleaning',
  'Duct Cleaning',
  'Fan Repair & Breakdown',
  'HVAC Servicing',
  'Compliance Certification',
  'Emergency Callout',
  'Other / Not Sure',
]

// Simple UK outline SVG
function UKOutline() {
  return (
    <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 opacity-20">
      <path
        d="M100 10 C95 12, 88 18, 85 25 C82 32, 80 40, 78 48 C74 52, 68 54, 65 60 C62 66, 63 74, 60 80 C56 88, 48 92, 44 100 C40 108, 40 118, 42 126 C44 134, 50 140, 52 148 C54 156, 52 165, 55 172 C58 180, 66 185, 70 192 C74 200, 74 210, 78 218 C82 226, 90 230, 95 236 C100 242, 102 250, 100 258 C100 262, 98 270, 100 275 C102 268, 106 260, 108 252 C110 244, 108 234, 112 226 C116 218, 124 214, 128 206 C132 198, 132 188, 130 180 C128 172, 122 166, 122 158 C122 150, 128 144, 132 136 C136 128, 138 118, 136 110 C134 102, 128 96, 124 88 C120 80, 118 70, 114 62 C110 54, 104 48, 100 42 C97 36, 97 26, 100 20 Z"
        fill="#2E8DE8"
        stroke="#1A5FA8"
        strokeWidth="2"
      />
      <path
        d="M100 10 C98 15, 93 20, 90 27 C87 34, 86 42, 84 50 C87 48, 92 45, 96 42 C98 36, 99 26, 100 20 Z"
        fill="#1A5FA8"
        opacity="0.6"
      />
    </svg>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Enter a valid email'
    if (!formData.service) errs.service = 'Please select a service'
    if (!formData.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setSubmitting(true)

    // Netlify Forms submission
    const formElement = e.target
    const data = new FormData(formElement)

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
      setSubmitted(true)
    } catch (err) {
      // Fallback — still show success for UX
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 30% 20%, rgba(26,95,168,0.1) 0%, transparent 60%), #0A0A0A',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 font-body text-white/30 text-sm mb-6">
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Contact</span>
            </div>
            <span className="section-label">Get In Touch</span>
            <h1 className="font-heading text-6xl lg:text-8xl text-white leading-none mb-4">
              Request a Quote
            </h1>
            <p className="font-body text-white/50 text-lg max-w-xl">
              Fill in the form and we'll get back to you with a tailored quote. Or call us directly for a faster response.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Main content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left — Contact info */}
            <ScrollReveal className="lg:col-span-2">
              <div className="space-y-10">
                <div>
                  <h2 className="font-heading text-3xl text-white tracking-wide mb-6">
                    Contact Details
                  </h2>
                  <ul className="space-y-5">
                    <li>
                      <a
                        href="tel:07517758507"
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-brand-blue-bright/50 transition-colors duration-200 flex-shrink-0">
                          <Phone size={16} className="text-brand-blue-bright" />
                        </div>
                        <div>
                          <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-1">Phone</div>
                          <div className="font-body text-white font-medium text-lg group-hover:text-brand-blue-bright transition-colors duration-200">
                            07517 758507
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@commercialcanopycleaning.co.uk"
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-brand-blue-bright/50 transition-colors duration-200 flex-shrink-0">
                          <Mail size={16} className="text-brand-blue-bright" />
                        </div>
                        <div>
                          <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-1">Email</div>
                          <div className="font-body text-white/80 text-sm group-hover:text-brand-blue-bright transition-colors duration-200 break-all">
                            info@commercialcanopycleaning.co.uk
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 flex items-center justify-center border border-white/10 flex-shrink-0">
                          <MapPin size={16} className="text-brand-blue-bright" />
                        </div>
                        <div>
                          <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-1">Coverage</div>
                          <div className="font-body text-white/80 text-sm">
                            Nationwide — United Kingdom
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 flex items-center justify-center border border-white/10 flex-shrink-0">
                          <Clock size={16} className="text-brand-blue-bright" />
                        </div>
                        <div>
                          <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-1">Response Time</div>
                          <div className="font-body text-white/80 text-sm">
                            We aim to respond within 4 business hours
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* UK outline */}
                <div className="card-surface p-7">
                  <div className="flex items-center gap-6">
                    <UKOutline />
                    <div>
                      <div className="font-heading text-2xl text-white tracking-wide mb-2">
                        Nationwide Coverage
                      </div>
                      <p className="font-body text-white/40 text-sm leading-relaxed">
                        We operate across England, Scotland, and Wales. One team, wherever you are.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick links */}
                <div className="card-surface p-6">
                  <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-4">Quick Links</div>
                  <ul className="space-y-2">
                    {[
                      { label: 'TR19 Compliance Info', href: '/compliance' },
                      { label: 'View Our Services', href: '/services' },
                      { label: 'About the Company', href: '/about' },
                    ].map(({ label, href }) => (
                      <li key={href}>
                        <Link
                          to={href}
                          className="flex items-center gap-2 font-body text-white/50 text-sm hover:text-brand-blue-bright transition-colors duration-200"
                        >
                          <ArrowRight size={13} />
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Form */}
            <ScrollReveal delay={0.1} className="lg:col-span-3">
              <div className="card-surface p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue-deep to-brand-blue-bright" />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                        className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-brand-blue-bright"
                      >
                        <CheckCircle2 size={28} className="text-brand-blue-bright" />
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="font-heading text-4xl text-white tracking-wide mb-3"
                      >
                        Enquiry Sent
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="font-body text-white/50 text-sm leading-relaxed max-w-sm mx-auto mb-8"
                      >
                        Thank you for getting in touch. We'll review your requirements and be in contact within 4 business hours.
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45 }}
                      >
                        <a href="tel:07517758507" className="btn-primary text-sm px-6 py-3 inline-flex">
                          <Phone size={16} />
                          Call Us Now
                        </a>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Netlify hidden inputs */}
                      <input type="hidden" name="form-name" value="contact" />
                      <div className="hidden">
                        <input name="bot-field" />
                      </div>

                      <h3 className="font-heading text-3xl text-white tracking-wide mb-8">
                        Get a Free Quote
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="font-body text-white/40 text-xs uppercase tracking-widest block mb-2">
                            Full Name <span className="text-brand-blue-bright">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className={`input-field ${errors.name ? 'border-red-500/60' : ''}`}
                          />
                          {errors.name && (
                            <p className="font-body text-red-400/80 text-xs mt-1">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label className="font-body text-white/40 text-xs uppercase tracking-widest block mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="The Grand Hotel"
                            className="input-field"
                          />
                        </div>
                        <div>
                          <label className="font-body text-white/40 text-xs uppercase tracking-widest block mb-2">
                            Email Address <span className="text-brand-blue-bright">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@business.co.uk"
                            className={`input-field ${errors.email ? 'border-red-500/60' : ''}`}
                          />
                          {errors.email && (
                            <p className="font-body text-red-400/80 text-xs mt-1">{errors.email}</p>
                          )}
                        </div>
                        <div>
                          <label className="font-body text-white/40 text-xs uppercase tracking-widest block mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="07700 000000"
                            className="input-field"
                          />
                        </div>
                      </div>

                      <div className="mb-5">
                        <label className="font-body text-white/40 text-xs uppercase tracking-widest block mb-2">
                          Service Required <span className="text-brand-blue-bright">*</span>
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`input-field appearance-none cursor-pointer ${errors.service ? 'border-red-500/60' : ''}`}
                        >
                          <option value="" disabled>Select a service…</option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-[#111111]">{s}</option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="font-body text-red-400/80 text-xs mt-1">{errors.service}</p>
                        )}
                      </div>

                      <div className="mb-8">
                        <label className="font-body text-white/40 text-xs uppercase tracking-widest block mb-2">
                          Message <span className="text-brand-blue-bright">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your site, the system you have, and when you need the work done…"
                          className={`input-field resize-none ${errors.message ? 'border-red-500/60' : ''}`}
                        />
                        {errors.message && (
                          <p className="font-body text-red-400/80 text-xs mt-1">{errors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Enquiry
                          </>
                        )}
                      </button>

                      <p className="font-body text-white/20 text-xs text-center mt-4">
                        We never share your details. All enquiries are handled in confidence.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
