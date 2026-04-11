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

export default function Cookies() {
  return (
    <PageTransition>
      <Helmet>
        <title>Cookie Policy | Commercial Canopy Cleaning</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="pt-28 sm:pt-36 pb-20 min-h-screen">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 0%,rgba(26,95,168,0.07) 0%,transparent 60%),#0A0A0A' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 font-body text-white/30 text-sm hover:text-white/60 transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <span className="section-label">Legal</span>
          <h1 className="font-heading text-5xl sm:text-6xl text-white leading-none mb-3">Cookie Policy</h1>
          <p className="font-body text-white/30 text-sm mb-8">Last updated: April 2026</p>
          <div className="h-px bg-white/[0.06] mb-10" />

          <Section title="1. What Are Cookies">
            <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to the website owner.</p>
            <p>This policy explains what cookies this website uses and how you can control them.</p>
          </Section>

          <Section title="2. Cookies We Use">
            <p>This website uses only essential cookies necessary for the site to function correctly. We do not use advertising, tracking, or analytics cookies.</p>
            <table className="w-full text-xs border border-white/[0.08] mt-4">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left p-3 text-white/50 font-body font-semibold uppercase tracking-wider">Cookie</th>
                  <th className="text-left p-3 text-white/50 font-body font-semibold uppercase tracking-wider">Purpose</th>
                  <th className="text-left p-3 text-white/50 font-body font-semibold uppercase tracking-wider">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/[0.05]">
                  <td className="p-3 text-white/60">emergency-banner-dismissed</td>
                  <td className="p-3 text-white/60">Remembers whether you have dismissed the emergency banner at the top of the page, so it does not reappear on every page load during your session.</td>
                  <td className="p-3 text-white/60">Session (cleared when you close the browser)</td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Section title="3. Essential Cookies">
            <p>Essential cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take, such as dismissing a notice. You can set your browser to block these cookies, but some parts of the site may not work as intended.</p>
          </Section>

          <Section title="4. Third-Party Cookies">
            <p>This website does not load any third-party scripts, analytics platforms, advertising networks, or social media widgets that would place cookies on your device. No data about your visit is shared with third parties for marketing or tracking purposes.</p>
          </Section>

          <Section title="5. How to Control Cookies">
            <p>You can control and delete cookies through your browser settings. The following links provide guidance for common browsers:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Google Chrome — Settings &gt; Privacy and security &gt; Cookies and other site data</li>
              <li>Mozilla Firefox — Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
              <li>Safari — Preferences &gt; Privacy &gt; Manage Website Data</li>
              <li>Microsoft Edge — Settings &gt; Cookies and site permissions</li>
            </ul>
            <p>Please note that deleting or blocking cookies may affect the functionality of this website.</p>
          </Section>

          <Section title="6. Changes to This Policy">
            <p>We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with a revised date.</p>
          </Section>

          <div className="h-px bg-white/[0.06] mt-10 mb-8" />
          <div className="flex flex-wrap gap-3">
            <Link to="/privacy" className="font-body text-brand-blue-bright text-sm hover:underline">Privacy Policy</Link>
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
