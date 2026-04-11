import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'
import PageTransition from '../components/PageTransition'

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading text-2xl sm:text-3xl text-white mb-4 tracking-wide">{title}</h2>
      <div className="font-body text-white/55 text-sm sm:text-base leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

export default function Privacy() {
  return (
    <PageTransition>
      <Helmet>
        <title>Privacy Policy | Commercial Canopy Cleaning</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="pt-28 sm:pt-36 pb-20 min-h-screen">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 0%,rgba(26,95,168,0.07) 0%,transparent 60%),#0A0A0A' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 font-body text-white/30 text-sm hover:text-white/60 transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <span className="section-label">Legal</span>
          <h1 className="font-heading text-5xl sm:text-6xl text-white leading-none mb-3">Privacy Policy</h1>
          <p className="font-body text-white/30 text-sm mb-8">Last updated: April 2026</p>
          <div className="h-px bg-white/[0.06] mb-10" />

          <Section title="1. Who We Are">
            <p>Commercial Canopy Cleaning is a commercial kitchen ventilation cleaning and fan repair company operating throughout the United Kingdom.</p>
            <p>For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, we are the data controller for personal information collected through this website and in the course of providing our services.</p>
            <p>If you have any questions about how we use your personal data, you can contact us at: <a href="tel:07517758507" className="text-brand-blue-bright hover:underline">07517 758507</a></p>
          </Section>

          <Section title="2. What Information We Collect">
            <p>We may collect the following categories of personal data:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white/70">Contact information</strong> — your name, phone number, email address, and business address when you submit an enquiry or request a quote.</li>
              <li><strong className="text-white/70">Business details</strong> — the type of premises, description of your kitchen extraction system, and any relevant compliance history you provide.</li>
              <li><strong className="text-white/70">Communications</strong> — records of emails, phone calls, or messages exchanged with us in connection with a service booking or enquiry.</li>
              <li><strong className="text-white/70">Technical data</strong> — IP address, browser type, and pages visited, collected automatically when you use this website (see our Cookie Policy).</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the personal data we collect for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to enquiries and provide quotes for our services.</li>
              <li>To schedule, confirm, and carry out cleaning or repair work at your premises.</li>
              <li>To issue TR19 compliance certificates and service documentation.</li>
              <li>To send appointment reminders or follow-up communications related to your service.</li>
              <li>To maintain records of work carried out for compliance and insurance purposes.</li>
              <li>To improve our website and the services we offer.</li>
            </ul>
            <p>Our legal basis for processing is primarily the performance of a contract (or taking steps prior to entering one) and, where applicable, our legitimate interests in running a professional service business.</p>
          </Section>

          <Section title="4. Who We Share Your Data With">
            <p>We do not sell or rent your personal data to any third party. We may share data in limited circumstances:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white/70">Service providers</strong> — companies that assist with our website hosting, email delivery, or business administration, acting as data processors under our instruction.</li>
              <li><strong className="text-white/70">Legal obligations</strong> — where we are required to disclose information by law, regulation, or court order.</li>
            </ul>
          </Section>

          <Section title="5. How Long We Keep Your Data">
            <p>We retain personal data only for as long as necessary for the purposes described above. As a general guide:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Enquiry records — up to 12 months if no service is booked.</li>
              <li>Service and compliance records — up to 7 years, in line with standard business record-keeping requirements.</li>
              <li>Website technical data — up to 12 months.</li>
            </ul>
          </Section>

          <Section title="6. Your Rights">
            <p>Under UK data protection law, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request erasure of your data (subject to legal obligations).</li>
              <li>Object to or restrict how we process your data.</li>
              <li>Request a copy of your data in a portable format.</li>
            </ul>
            <p>To exercise any of these rights, please contact us by phone or email. We will respond within one month.</p>
            <p>If you are not satisfied with how we handle your data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <span className="text-brand-blue-bright">ico.org.uk</span>.</p>
          </Section>

          <Section title="7. Data Security">
            <p>We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. However, no data transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised date. We encourage you to review this policy periodically.</p>
          </Section>

          <div className="h-px bg-white/[0.06] mt-10 mb-8" />
          <div className="flex flex-wrap gap-3">
            <Link to="/cookies" className="font-body text-brand-blue-bright text-sm hover:underline">Cookie Policy</Link>
            <span className="text-white/20">|</span>
            <Link to="/terms" className="font-body text-brand-blue-bright text-sm hover:underline">Terms &amp; Conditions</Link>
            <span className="text-white/20">|</span>
            <Link to="/" className="font-body text-white/40 text-sm hover:text-white/70 transition-colors">← Home</Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
