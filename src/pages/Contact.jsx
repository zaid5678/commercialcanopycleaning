import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import {
  Phone, MapPin, CheckCircle2, Clock, Send, MessageCircle, RotateCcw, Upload
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

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

function UKOutline() {
  return (
    <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 sm:w-28 opacity-20">
      <path d="M100 10 C95 12,88 18,85 25 C82 32,80 40,78 48 C74 52,68 54,65 60 C62 66,63 74,60 80 C56 88,48 92,44 100 C40 108,40 118,42 126 C44 134,50 140,52 148 C54 156,52 165,55 172 C58 180,66 185,70 192 C74 200,74 210,78 218 C82 226,90 230,95 236 C100 242,102 250,100 258 C102 268,106 260,108 252 C110 244,108 234,112 226 C116 218,124 214,128 206 C132 198,132 188,130 180 C128 172,122 166,122 158 C122 150,128 144,132 136 C136 128,138 118,136 110 C134 102,128 96,124 88 C120 80,118 70,114 62 C110 54,104 48,100 42 C97 36,97 26,100 20 Z" fill="#2E8DE8" stroke="#1A5FA8" strokeWidth="2"/>
    </svg>
  )
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const serviceParam = searchParams.get('service') || ''

  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '',
    service: services.includes(serviceParam) ? serviceParam : '',
    message: '', files: [],
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  // Update service dropdown if URL param changes
  useEffect(() => {
    if (serviceParam && services.includes(serviceParam)) {
      setFormData(prev => ({ ...prev, service: serviceParam }))
    }
  }, [serviceParam])

  const resetForm = () => {
    setSubmitted(false)
    setFormData({ name:'',company:'',email:'',phone:'',service:'',message:'',files:[] })
    setErrors({})
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, files: Array.from(e.target.files) }))
  }

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
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitting(true)
    const data = new FormData(e.target)
    
    // Add files to FormData
    formData.files.forEach((file) => {
      data.append('files', file)
    })
    
    try {
      await fetch('/', { method:'POST', body: data })
      setSubmitted(true)
    } catch { setSubmitted(true) }
    finally { setSubmitting(false) }
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us | Get a Free Quote | Commercial Canopy Cleaning</title>
        <meta name="description" content="Request a free quote for TR19 canopy cleaning, duct cleaning, fan repair, or HVAC servicing. Call 07517758507 or message on WhatsApp — nationwide coverage." />
        <meta property="og:title" content="Contact | Commercial Canopy Cleaning" />
        <meta property="og:description" content="Get a free quote for canopy cleaning, fan repair, and TR19 compliance. Call, text, or WhatsApp us — nationwide." />
      </Helmet>

      {/* Hero */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background:'radial-gradient(ellipse 70% 60% at 30% 20%,rgba(26,95,168,0.1) 0%,transparent 60%),#0A0A0A' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="section-label">Get In Touch</span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-4">Request a Quote</h1>
            <p className="font-body text-white/50 text-base sm:text-lg max-w-xl">Fill in the form and we'll get back to you with a tailored quote. Or reach us directly by phone, text, or WhatsApp.</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-px bg-white/[0.06]" /></div>

      <section id="contact-form" className="py-14 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left — contact info */}
            <ScrollReveal className="lg:col-span-2">
              <div className="space-y-7">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl text-white tracking-wide mb-5">Contact Details</h2>
                  <ul className="space-y-4">
                    {[
                      { href:'tel:07517758507', icon:Phone, label:'Call', value:'07517 758507' },
                      { href:'sms:07517758507', icon:MessageCircle, label:'Text', value:'07517 758507' },
                    ].map(({ href, icon:Icon, label, value }) => (
                      <li key={label}>
                        <a href={href} className="flex items-start gap-4 group">
                          <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-brand-blue-bright/50 transition-colors flex-shrink-0">
                            <Icon size={16} className="text-brand-blue-bright" />
                          </div>
                          <div>
                            <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-0.5">{label}</div>
                            <div className="font-body text-white font-medium text-lg group-hover:text-brand-blue-bright transition-colors">{value}</div>
                          </div>
                        </a>
                      </li>
                    ))}
                    {/* WhatsApp */}
                    <li>
                      <a href="https://wa.me/447517758507" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                        <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-brand-blue-bright/50 transition-colors flex-shrink-0 text-brand-blue-bright">
                          <WhatsAppIcon size={16} />
                        </div>
                        <div>
                          <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-0.5">WhatsApp</div>
                          <div className="font-body text-white font-medium text-lg group-hover:text-brand-blue-bright transition-colors">Message Us</div>
                          <div className="font-body text-white/30 text-xs">Tap to open WhatsApp chat</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 flex items-center justify-center border border-white/10 flex-shrink-0">
                          <Clock size={16} className="text-brand-blue-bright" />
                        </div>
                        <div>
                          <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-0.5">Response Time</div>
                          <div className="font-body text-white/70 text-sm">Within 2 hours during business hours</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 flex items-center justify-center border border-white/10 flex-shrink-0">
                          <MapPin size={16} className="text-brand-blue-bright" />
                        </div>
                        <div>
                          <div className="font-body text-white/30 text-xs uppercase tracking-widest mb-0.5">Coverage</div>
                          <div className="font-body text-white/70 text-sm">Nationwide — United Kingdom</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* UK card */}
                <div className="card-surface p-6">
                  <div className="flex items-center gap-5">
                    <UKOutline />
                    <div>
                      <div className="font-heading text-xl sm:text-2xl text-white tracking-wide mb-1">Nationwide Coverage</div>
                      <p className="font-body text-white/40 text-sm leading-relaxed">England, Scotland &amp; Wales. One team, wherever you are.</p>
                    </div>
                  </div>
                </div>

                {/* Response promise */}
                <div className="card-surface p-5 border-l-2 border-brand-blue-bright">
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    We aim to respond to all enquiries <strong className="text-white/70">within 2 hours</strong> during business hours. For emergencies, call directly: <a href="tel:07517758507" className="text-brand-blue-bright hover:underline">07517 758507</a>
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — form */}
            <ScrollReveal delay={0.1} className="lg:col-span-3">
              <div className="card-surface p-6 sm:p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue-deep to-brand-blue-bright" />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success" initial={{ opacity:0,scale:0.95 }} animate={{ opacity:1,scale:1 }} exit={{ opacity:0 }} transition={{ duration:0.4 }} className="py-12 sm:py-16 text-center">
                      <motion.div initial={{ scale:0 }} animate={{ scale:1 }} transition={{ delay:0.1,type:'spring',stiffness:200 }} className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-brand-blue-bright">
                        <CheckCircle2 size={28} className="text-brand-blue-bright" />
                      </motion.div>
                      <motion.h3 initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.25 }} className="font-heading text-4xl text-white tracking-wide mb-3">Enquiry Sent</motion.h3>
                      <motion.p initial={{ opacity:0,y:10 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.35 }} className="font-body text-white/50 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                        Thank you. We'll be in contact within 2 business hours. For urgent requirements, call us directly.
                      </motion.p>
                      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.45 }} className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href="tel:07517758507" className="btn-primary text-sm px-6 py-3 justify-center"><Phone size={16} /> Call Us Now</a>
                        <button onClick={resetForm} className="btn-ghost text-sm px-6 py-3 justify-center"><RotateCcw size={15} /> Submit Another</button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.form key="form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
                      <input type="hidden" name="form-name" value="contact" />
                      <div className="hidden"><input name="bot-field" /></div>

                      <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-wide mb-6 sm:mb-8">Get a Free Quote</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
                        {[
                          { name:'name', label:'Full Name', placeholder:'John Smith', required:true, type:'text' },
                          { name:'company', label:'Company Name', placeholder:'The Grand Hotel', required:false, type:'text' },
                          { name:'email', label:'Email Address', placeholder:'john@business.co.uk', required:true, type:'email' },
                          { name:'phone', label:'Phone Number', placeholder:'07700 000000', required:false, type:'tel' },
                        ].map(field => (
                          <div key={field.name}>
                            <label className="font-body text-white/40 text-xs uppercase tracking-widest block mb-2">
                              {field.label} {field.required && <span className="text-brand-blue-bright">*</span>}
                            </label>
                            <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange} placeholder={field.placeholder}
                              className={`input-field ${errors[field.name] ? 'border-red-500/60' : ''}`} />
                            {errors[field.name] && <p className="font-body text-red-400/80 text-xs mt-1">{errors[field.name]}</p>}
                          </div>
                        ))}
                      </div>

                      <div className="mb-5">
                        <label className="font-body text-white/40 text-xs uppercase tracking-widest block mb-2">Service Required <span className="text-brand-blue-bright">*</span></label>
                        <select name="service" value={formData.service} onChange={handleChange} className={`input-field appearance-none cursor-pointer ${errors.service ? 'border-red-500/60':''}`}>
                          <option value="" disabled>Select a service…</option>
                          {services.map(s => <option key={s} value={s} className="bg-[#111111]">{s}</option>)}
                        </select>
                        {errors.service && <p className="font-body text-red-400/80 text-xs mt-1">{errors.service}</p>}
                      </div>

                      <div className="mb-8">
                        <label className="font-body text-white/40 text-xs uppercase tracking-widest block mb-2">Message <span className="text-brand-blue-bright">*</span></label>
                        <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us about your site, the system you have, and when you need the work done…"
                          className={`input-field resize-none ${errors.message ? 'border-red-500/60':''}`} />
                        {errors.message && <p className="font-body text-red-400/80 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <div className="mb-8">
                        <label className="font-body text-white/40 text-xs uppercase tracking-widest block mb-2">Upload Media (Optional)</label>
                        <div className="relative">
                          <input 
                            type="file" 
                            name="files" 
                            multiple 
                            onChange={handleFileChange} 
                            accept="image/*,video/*,.pdf,.doc,.docx,.xlsx,.xls"
                            className="hidden" 
                            id="file-upload"
                          />
                          <label htmlFor="file-upload" className="flex items-center justify-center gap-2 border-2 border-dashed border-white/20 hover:border-brand-blue-bright/40 transition-colors rounded-sm p-6 cursor-pointer">
                            <Upload size={18} className="text-brand-blue-bright" />
                            <div className="text-center">
                              <div className="font-body text-white/60 text-sm">Click to upload photos, videos, or files</div>
                              <div className="font-body text-white/30 text-xs mt-0.5">PNG, JPG, MP4, PDF, DOC, XLS up to 10MB each</div>
                            </div>
                          </label>
                          {formData.files.length > 0 && (
                            <div className="mt-3">
                              <p className="font-body text-white/50 text-xs uppercase tracking-widest mb-2">Selected files:</p>
                              <div className="space-y-1">
                                {formData.files.map((file, idx) => (
                                  <div key={idx} className="font-body text-white/40 text-xs flex items-center gap-2">
                                    <span className="w-2 h-2 bg-brand-blue-bright rounded-full" />
                                    {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                        {submitting ? (
                          <><motion.div animate={{ rotate:360 }} transition={{ duration:0.8,repeat:Infinity,ease:'linear' }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />Sending…</>
                        ) : (
                          <><Send size={16} />Send Enquiry</>
                        )}
                      </button>
                      <p className="font-body text-white/20 text-xs text-center mt-4">We never share your details. All enquiries handled in confidence.</p>
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
