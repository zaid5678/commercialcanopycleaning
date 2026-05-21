// Config for each service keyword landing page.
// Each entry drives ServiceCityLanding.jsx content without needing a separate file per keyword.

export const serviceConfigs = {
  'kitchen-extract-cleaning': {
    keyword: 'Kitchen Extract Cleaning',
    h1Line1: 'Kitchen Extract',
    h1Line2: (city) => `Cleaning ${city}`,
    title:    (city) => `Kitchen Extract Cleaning ${city} | TR19 Certified | Full System`,
    metaDesc: (city, region) => `Professional kitchen extract cleaning in ${city}${region ? `, ${region}` : ''}. Full extraction system cleaned to TR19 standards — canopy, duct run, and fans. Compliance certificate included. Call 07517 758507.`,
    sectionLabel: (city) => `Kitchen Extract Cleaning — ${city}`,
    intro:    (city, region) => `Complete kitchen extract cleaning in ${city}${region ? ` and across ${region}` : ''} — the full extraction system from canopy hood to discharge point, cleaned and certified to TR19 standards.`,
    highlights: [
      { title: 'Canopy Cleaning',          desc: 'The hood interior behind the filters, plenum chamber, and all internal surfaces are manually cleaned using scrapers, specialist chemicals, and hand degreasing methods to restore the system back to bare metal standard. Filters are not included in this clean.' },
      { title: 'Plenum Chamber',           desc: 'Internal plenum chamber cleaned and inspected for grease accumulation.' },
      { title: 'Full Duct Run',            desc: 'Extraction ductwork cleaned from canopy to external discharge point.' },
      { title: 'Extraction Fan',           desc: 'Fan impeller and housing cleaned to improve airflow and reduce fire risk.' },
      { title: 'External Discharge',       desc: 'Discharge cowl and outlet cleaned and checked for obstruction.' },
    ],
    includes: [
      'TR19 compliance certificate issued after every job',
      'Photographic before & after evidence pack',
      'Same-day emergency response available',
    ],
    faqs: (city) => [
      {
        q: `What does kitchen extract cleaning involve in ${city}?`,
        a: `Kitchen extract cleaning in ${city} covers the entire extraction system — canopy hood, plenum chamber, full duct run, extraction fan, and external discharge point. Our engineers clean every component to TR19 standards and issue a compliance certificate with photographic evidence on completion.`,
      },
      {
        q: `How often does a kitchen extraction system need cleaning in ${city}?`,
        a: `TR19 cleaning frequency for kitchen extraction systems in ${city} depends on cooking type: heavy use kitchens (wok, charcoal) every 3 months; moderate use (gas, electric) every 6 months; light use annually. Your insurer may specify more frequent cleaning — always check your policy.`,
      },
      {
        q: `Is kitchen extract cleaning a legal requirement?`,
        a: `Kitchen extract cleaning is required by most commercial property insurance policies and is expected under fire safety regulations. The TR19 standard defines the cleaning specification. Without a valid TR19 certificate, insurers may reject fire-related claims.`,
      },
      {
        q: `How quickly can you carry out kitchen extract cleaning in ${city}?`,
        a: `We offer same-day emergency kitchen extract cleaning in ${city} for urgent compliance needs. Scheduled cleans are typically bookable within 1–2 weeks. Call 07517 758507 to check current availability.`,
      },
    ],
    relatedLinks: (slug, city) => [
      { to: `/commercial-canopy-cleaning/${slug}`, label: `Commercial canopy cleaning in ${city}` },
      { to: `/tr19-cleaning/${slug}`,              label: `TR19 cleaning in ${city}` },
      { to: `/extraction-cleaning/${slug}`,        label: `Extraction cleaning in ${city}` },
    ],
  },

  'tr19-cleaning': {
    keyword: 'TR19 Cleaning',
    h1Line1: 'TR19 Cleaning',
    h1Line2: (city) => city,
    title:    (city) => `TR19 Cleaning ${city} | TR19 Certified Canopy & Duct Cleaning`,
    metaDesc: (city, region) => `TR19 cleaning in ${city}${region ? `, ${region}` : ''}. Certified engineers carry out TR19-compliant canopy and duct cleaning with compliance certificate, grease depth report, and photographic evidence. Call 07517 758507.`,
    sectionLabel: (city) => `TR19 Cleaning — ${city}`,
    
    intro:    (city, region) => `TR19-certified kitchen ventilation cleaning in ${city}${region ? ` and across ${region}` : ''} — canopy, ductwork, and fans cleaned to the BESA TR19 standard with full compliance documentation issued on completion.`,
    highlights: [
      { title: 'TR19 Grease Assessment',   desc: 'Grease depth measured at all key points before and after cleaning to TR19 methodology.' },
      { title: 'Canopy Cleaning',          desc: 'The hood interior behind the filters, plenum chamber, and all internal surfaces are manually cleaned using scrapers, specialist chemicals, and hand degreasing methods to restore the system back to bare metal standard. Filters are not included in this clean.' },
      { title: 'Full Duct Run Cleaning',   desc: 'Complete extraction duct cleaned from canopy to discharge — access panels used throughout.' },
      { title: 'Fan Cleaning',             desc: 'Extraction fan cleaned and inspected as part of the TR19 service.' },
      { title: 'Photographic Evidence',    desc: 'Before and after photos of every section compiled into your compliance evidence pack.' },
      { title: 'TR19 Certificate',         desc: 'Signed TR19 compliance certificate issued on completion — accepted by all major insurers.' },
    ],
    includes: [
      'TR19 compliance certificate issued after every job',
      'Photographic before & after evidence pack',
      'Same-day emergency response available',
    ],
    faqs: (city) => [
      {
        q: `What is TR19 cleaning in ${city}?`,
        a: `TR19 cleaning in ${city} refers to the cleaning of commercial kitchen ventilation systems to the TR19 standard published by BESA (Building Engineering Services Association). It covers canopy hoods, ductwork, and fans, with cleaning frequency based on cooking type. A TR19 certificate and photographic evidence pack are issued on completion.`,
      },
      {
        q: `Why do I need a TR19 cleaning certificate?`,
        a: `A TR19 certificate proves your kitchen extraction system has been cleaned to the required standard. Most commercial property insurers require it to validate fire-related claims. Local fire safety officers may also request it during inspections. Without it, you risk insurance invalidation and potential enforcement action.`,
      },
      {
        q: `How often is TR19 cleaning required in ${city}?`,
        a: `TR19 cleaning frequency in ${city} depends on cooking type: high-grease kitchens (wok, charcoal, solid fuel) every 3 months; moderate use (gas or electric fryers) every 6 months; light use kitchens annually. Your insurer may require more frequent cleaning — always check your policy wording.`,
      },
      {
        q: `What does your TR19 cleaning service include in ${city}?`,
        a: `Every job we complete in ${city} includes before-and-after photographs and a full TR19 hygiene certification — everything required for your insurance records.`,
      },
      {
        q: `How quickly can you carry out TR19 cleaning in ${city}?`,
        a: `We offer same-day emergency TR19 cleaning in ${city} for urgent compliance deadlines. Scheduled cleans are typically available within 1–2 weeks. Call 07517 758507 to speak with an engineer and book.`,
      },
    ],
    relatedLinks: (slug, city) => [
      { to: `/commercial-canopy-cleaning/${slug}`, label: `Commercial canopy cleaning in ${city}` },
      { to: `/kitchen-extract-cleaning/${slug}`,   label: `Kitchen extract cleaning in ${city}` },
      { to: `/extraction-cleaning/${slug}`,        label: `Extraction cleaning in ${city}` },
    ],
  },

  'extraction-cleaning': {
    keyword: 'Extraction Cleaning',
    h1Line1: 'Extraction Cleaning',
    h1Line2: (city) => city,
    title:    (city) => `Extraction Cleaning ${city} | Kitchen Extraction System Cleaning | TR19`,
    metaDesc: (city, region) => `Professional extraction cleaning in ${city}${region ? `, ${region}` : ''}. Full kitchen extraction system cleaned — canopy, ductwork, fans. TR19 certified with compliance certificate. Call 07517 758507.`,
    sectionLabel: (city) => `Extraction Cleaning — ${city}`,
    
    intro:    (city, region) => `Kitchen extraction cleaning in ${city}${region ? ` and across ${region}` : ''} — the complete extraction system degreased, cleaned, and certified to TR19 standard. Canopy, duct run, fans, and discharge point all covered.`,
    highlights: [
      { title: 'Canopy Cleaning',          desc: 'The hood interior behind the filters, plenum chamber, and all internal surfaces are manually cleaned using scrapers, specialist chemicals, and hand degreasing methods to restore the system back to bare metal standard. Filters are not included in this clean.' },
      { title: 'Plenum Chamber',           desc: 'Internal plenum chamber cleaned and inspected for grease accumulation.' },
      { title: 'Extraction Ductwork',      desc: 'Full duct run cleaned from canopy to external discharge point using TR19-compliant access.' },
      { title: 'Extraction Fan Unit',      desc: 'Fan impeller and housing cleaned to remove grease and improve airflow.' },
      { title: 'External Discharge',       desc: 'Outlet cowl and grille cleaned to prevent blockage and reduce fire risk.' },
    ],
    includes: [
      'TR19 compliance certificate issued after every job',
      'Photographic before & after evidence pack',
      'Out-of-hours service available',
    ],
    faqs: (city) => [
      {
        q: `What is extraction cleaning in ${city}?`,
        a: `Extraction cleaning in ${city} is the professional cleaning of the kitchen extraction system — the canopy hood, ductwork, and extraction fans that remove cooking vapours. Our engineers clean every component to TR19 standards and issue a compliance certificate and photographic evidence pack on completion.`,
      },
      {
        q: `How often does extraction cleaning need to be done in ${city}?`,
        a: `Extraction cleaning frequency in ${city} follows TR19 guidelines based on cooking type: heavy use (wok, charcoal, solid fuel) every 3 months; moderate use (gas, electric) every 6 months; light use annually. Check your insurance policy as it may specify more frequent cleaning.`,
      },
      {
        q: `What certification do you provide after extraction cleaning in ${city}?`,
        a: `Every job we complete in ${city} includes before-and-after photographs and a full TR19 hygiene certification — everything required for your insurance records.`,
      },
      {
        q: `Can you carry out extraction cleaning outside business hours in ${city}?`,
        a: `Yes. We regularly carry out extraction cleaning in ${city} outside business hours — evenings, nights, and weekends — to minimise disruption. Discuss your preferred time when booking by calling 07517 758507.`,
      },
    ],
    relatedLinks: (slug, city) => [
      { to: `/commercial-canopy-cleaning/${slug}`, label: `Commercial canopy cleaning in ${city}` },
      { to: `/kitchen-extract-cleaning/${slug}`,   label: `Kitchen extract cleaning in ${city}` },
      { to: `/tr19-cleaning/${slug}`,              label: `TR19 cleaning in ${city}` },
    ],
  },

  'fan-repairs': {
    keyword: 'Fan Repairs',
    h1Line1: 'Fan Repairs',
    h1Line2: (city) => city,
    title:    (city) => `Fan Repairs ${city} | Commercial Extraction Fan Repair | Emergency`,
    metaDesc: (city, region) => `Commercial extraction fan repairs in ${city}${region ? `, ${region}` : ''}. Emergency same-day response for failed kitchen fans. Diagnosis, parts sourced, repaired on site. Call 07517 758507.`,
    sectionLabel: (city) => `Fan Repairs — ${city}`,
    
    intro:    (city, region) => `Commercial extraction fan repairs in ${city}${region ? ` and across ${region}` : ''} — same-day emergency response for failed kitchen extraction fans. We diagnose the fault, source parts, and restore your system fast.`,
    highlights: [
      { title: 'Emergency Fan Diagnosis',  desc: 'Engineer attends site and diagnoses the fault — motor, capacitor, belt, bearing, or electrical.' },
      { title: 'Motor Repairs',            desc: 'Fan motor inspected and repaired or replaced on site where parts are available.' },
      { title: 'Belt & Bearing Replacement', desc: 'Fan belts, bearings, and pulleys replaced as required to restore full extraction capacity.' },
      { title: 'Capacitor Replacement',    desc: 'Faulty start and run capacitors diagnosed and replaced — a common cause of fan failure.' },
      { title: 'Electrical Fault Repair',  desc: 'Wiring, isolators, and controls inspected and repaired by our engineers.' },
      { title: 'Post-Repair Test',         desc: 'Fan performance tested after repair to confirm full extraction capacity is restored.' },
    ],
    includes: [
      'Same-day emergency response available',
      'On-site diagnosis by experienced engineer',
      'Common parts carried on our vehicles',
      'Full performance test after every repair',
      'Honest advice on repair vs replacement',
      'Installation certificate issued on completion',
    ],
    faqs: (city) => [
      {
        q: `Do you offer emergency fan repairs in ${city}?`,
        a: `Yes. We offer same-day emergency fan repair in ${city} for failed commercial kitchen extraction fans. Call 07517 758507 and speak directly with an engineer who can advise immediately and dispatch to your site.`,
      },
      {
        q: `What types of fan faults do you repair in ${city}?`,
        a: `We repair all common commercial extraction fan faults in ${city} including motor failure, capacitor failure, worn bearings, broken belts, wiring faults, and control issues. Our engineers carry common parts and can often complete repairs on the first visit.`,
      },
      {
        q: `How much do fan repairs cost in ${city}?`,
        a: `The cost of fan repairs varies depending on the fault type and parts required. Every kitchen extraction system is different, so pricing is based on the specific diagnosis and work needed. Our engineer will provide a full quote before any work begins — in some cases replacement may be more cost-effective and we'll advise honestly.`,
      },
      {
        q: `How long do fan repairs take in ${city}?`,
        a: `Most fan repairs in ${city} are completed in 1–3 hours on the first visit. Where specialist parts are required that we don't carry, we source and return as quickly as possible — usually same day or next day for most commercial fan types.`,
      },
      {
        q: `What if my extraction fan can't be repaired in ${city}?`,
        a: `If your extraction fan cannot be repaired cost-effectively in ${city}, we can supply and install a replacement unit. We work with all major commercial fan manufacturers and can source replacements quickly to minimise kitchen downtime.`,
      },
    ],
    relatedLinks: (slug, city) => [
      { to: `/fan-replacements/${slug}`,           label: `Fan replacements in ${city}` },
      { to: `/commercial-canopy-cleaning/${slug}`, label: `Commercial canopy cleaning in ${city}` },
      { to: `/kitchen-extract-cleaning/${slug}`,   label: `Kitchen extract cleaning in ${city}` },
    ],
  },

  'fan-replacements': {
    keyword: 'Fan Replacements',
    h1Line1: 'Fan Replacements',
    h1Line2: (city) => city,
    title:    (city) => `Fan Replacements ${city} | Commercial Extraction Fan Supply & Install`,
    metaDesc: (city, region) => `Commercial extraction fan replacements in ${city}${region ? `, ${region}` : ''}. Supply and installation of replacement kitchen extraction fans. Same-day emergency available. Call 07517 758507.`,
    sectionLabel: (city) => `Fan Replacements — ${city}`,
    
    intro:    (city, region) => `Commercial extraction fan replacement in ${city}${region ? ` and across ${region}` : ''} — supply and installation of replacement kitchen extraction fans. Emergency same-day service available when your kitchen can't wait.`,
    highlights: [
      { title: 'Fan Assessment',           desc: 'Engineer assesses the existing fan, identifies the specification, and advises on the best replacement.' },
      { title: 'Fan Sourcing',             desc: 'Replacement fan sourced to match or exceed the original specification from leading manufacturers.' },
      { title: 'Old Fan Removal',          desc: 'Existing fan safely disconnected, removed, and disposed of responsibly.' },
      { title: 'New Fan Installation',     desc: 'Replacement fan installed, wired, and commissioned to manufacturer specification.' },
      { title: 'Performance Testing',      desc: 'Airflow and extraction performance tested after installation to confirm full capacity.' },
      { title: 'Documentation',            desc: 'Installation certificate and performance report issued for your maintenance records.' },
    ],
    includes: [
      'Same-day emergency replacement available',
      'Full supply and installation service',
      'All major fan brands stocked or sourced',
      'Commissioning and performance test included',
      'Old fan safely removed and disposed',
      'Installation certificate issued on completion',
    ],
    faqs: (city) => [
      {
        q: `Do you supply and install replacement fans in ${city}?`,
        a: `Yes. We supply and install commercial extraction fan replacements in ${city}. Our engineers assess the existing unit, source a suitable replacement, and carry out the full installation including electrical connection and commissioning. Emergency same-day replacements are available.`,
      },
      {
        q: `How do I know if my fan needs replacing rather than repairing in ${city}?`,
        a: `Our engineer will assess your fan in ${city} and advise honestly on whether repair or replacement is the better option. Replacement is generally recommended when repair costs exceed 50% of replacement value, the fan is over 10 years old, or the motor has failed and specialist parts are no longer readily available.`,
      },
      {
        q: `What types of extraction fans do you replace in ${city}?`,
        a: `We replace all common commercial kitchen extraction fan types in ${city} including axial fans, centrifugal fans, inline duct fans, roof-mounted fans, and cased fan units from all major manufacturers including Vent-Axia, Nuaire, Flakt Woods, Systemair, and Colt.`,
      },
      {
        q: `How quickly can you replace a fan in ${city}?`,
        a: `For common commercial fan types in ${city} we can often complete a replacement on the same or next day. For specialist or large industrial fans, lead times depend on parts availability. Call 07517 758507 and we'll confirm the fastest available option for your specific unit.`,
      },
      {
        q: `How much does a fan replacement cost in ${city}?`,
        a: `The cost of fan replacements varies depending on the fan type, size, and installation complexity. Every kitchen extraction system is different, so pricing is based on the specific fan and installation requirements. Our engineer will assess the existing unit and provide a full quote before any work begins.`,
      },
    ],
    relatedLinks: (slug, city) => [
      { to: `/fan-repairs/${slug}`,                label: `Fan repairs in ${city}` },
      { to: `/commercial-canopy-cleaning/${slug}`, label: `Commercial canopy cleaning in ${city}` },
      { to: `/kitchen-extract-cleaning/${slug}`,   label: `Kitchen extract cleaning in ${city}` },
    ],
  },
}
