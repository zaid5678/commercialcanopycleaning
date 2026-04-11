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

export default function Terms() {
  return (
    <PageTransition>
      <Helmet>
        <title>Terms &amp; Conditions | Commercial Canopy Cleaning</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="pt-28 sm:pt-36 pb-20 min-h-screen">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 0%,rgba(26,95,168,0.07) 0%,transparent 60%),#0A0A0A' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 font-body text-white/30 text-sm hover:text-white/60 transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <span className="section-label">Legal</span>
          <h1 className="font-heading text-5xl sm:text-6xl text-white leading-none mb-3">Terms &amp; Conditions</h1>
          <p className="font-body text-white/30 text-sm mb-8">Last updated: April 2026</p>
          <div className="h-px bg-white/[0.06] mb-10" />

          <Section title="1. About These Terms">
            <p>These Terms and Conditions govern the provision of services by Commercial Canopy Cleaning ("we", "us", "our") to clients ("you", "the client"). By engaging our services or accepting a quotation, you agree to be bound by these terms.</p>
            <p>These terms apply to all contracts for the cleaning, maintenance, and repair of commercial kitchen ventilation systems, extraction fans, ductwork, and associated equipment.</p>
          </Section>

          <Section title="2. Quotations and Bookings">
            <p>All quotations are provided in writing and are valid for 30 days from the date of issue unless otherwise stated. A quotation does not constitute a binding contract until confirmed in writing by us.</p>
            <p>Bookings are confirmed once we have accepted your instruction by email, phone, or written confirmation. We reserve the right to decline any booking at our discretion.</p>
            <p>Where access to the premises is required outside normal business hours, this must be agreed in advance. Any additional costs arising from out-of-hours access will be notified to you prior to the work being carried out.</p>
          </Section>

          <Section title="3. Our Services">
            <p>We will carry out the agreed services with reasonable skill and care, in accordance with TR19 guidance (where applicable) and all relevant health and safety regulations.</p>
            <p>The scope of services is as specified in your written quotation. Any additional works identified during a visit will be notified to you prior to being carried out, and a supplementary quote will be provided where required.</p>
            <p>We will endeavour to complete works within agreed timeframes, but we accept no liability for delays caused by circumstances outside our reasonable control, including but not limited to access issues, equipment faults, or adverse conditions at the premises.</p>
          </Section>

          <Section title="4. Your Responsibilities">
            <p>You agree to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide safe and adequate access to all areas of the premises required to carry out the services.</li>
              <li>Ensure the kitchen and relevant areas are clear of food, equipment, and staff during the cleaning visit, unless otherwise agreed.</li>
              <li>Inform us of any known hazards, existing damage, or access restrictions at the premises prior to our visit.</li>
              <li>Ensure that mains power and hot water supplies are available and accessible for use during the visit.</li>
              <li>Ensure a responsible person is present or available to receive our engineer at the start and end of the visit.</li>
            </ul>
            <p>Where delays or abortive visits are caused by your failure to meet the above requirements, we reserve the right to charge a reasonable fee for the lost time.</p>
          </Section>

          <Section title="5. Payment Terms">
            <p>Unless otherwise agreed in writing, payment is due within 14 days of the date of invoice. We accept payment by bank transfer, card, or other methods as agreed.</p>
            <p>For emergency callouts, payment may be required prior to or on the day of the visit.</p>
            <p>We reserve the right to charge statutory interest on overdue invoices in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.</p>
            <p>Where a job is cancelled with less than 24 hours' notice, or we attend and are unable to gain access to carry out the work, we reserve the right to charge a cancellation or abortive visit fee.</p>
          </Section>

          <Section title="6. Compliance Documentation">
            <p>Where TR19 compliance certificates or other documentation are issued, these reflect the condition of the system at the time of our visit and are based on the work carried out as agreed. We accept no responsibility for compliance issues arising from parts of the system not included within the agreed scope of work.</p>
            <p>It is the client's responsibility to ensure that cleaning frequencies are maintained in accordance with TR19 guidance for their level of kitchen usage.</p>
          </Section>

          <Section title="7. Limitations of Liability">
            <p>We shall not be liable for any loss or damage arising from:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pre-existing faults, deterioration, or damage to equipment not caused by our work.</li>
              <li>Inaccurate or incomplete information provided to us about the premises or equipment.</li>
              <li>Failure to follow our written recommendations following a service visit.</li>
              <li>Indirect, consequential, or economic losses including loss of profit, loss of business, or business interruption.</li>
            </ul>
            <p>Our total liability to you for any claim arising from our services shall not exceed the value of the invoice for the relevant services.</p>
            <p>Nothing in these terms limits or excludes our liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be lawfully excluded.</p>
          </Section>

          <Section title="8. Insurance">
            <p>We maintain public liability insurance appropriate to our business activities. Details of our insurance can be provided on request.</p>
          </Section>

          <Section title="9. Complaints">
            <p>If you are not satisfied with our service, please contact us as soon as possible. We will acknowledge your complaint promptly and endeavour to resolve it in a fair and timely manner.</p>
          </Section>

          <Section title="10. Governing Law">
            <p>These Terms and Conditions are governed by the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </Section>

          <div className="h-px bg-white/[0.06] mt-10 mb-8" />
          <div className="flex flex-wrap gap-3">
            <Link to="/privacy" className="font-body text-brand-blue-bright text-sm hover:underline">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link to="/cookies" className="font-body text-brand-blue-bright text-sm hover:underline">Cookie Policy</Link>
            <span className="text-white/20">|</span>
            <Link to="/" className="font-body text-white/40 text-sm hover:text-white/70 transition-colors">← Home</Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
