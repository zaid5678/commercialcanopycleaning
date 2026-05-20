const KEY  = 'b5d2f8a4c7e1b9d3f6a2c8e4b7d1f5a3'
const HOST = 'commercialcanopycleaning.co.uk'

const cityNames = [
  'London','Manchester','Birmingham','Leeds','Sheffield','Liverpool',
  'Bristol','Edinburgh','Glasgow','Cardiff','Newcastle','Nottingham',
  'Leicester','Coventry','Brighton','Southampton','Reading','Oxford',
  'Cambridge','York','Exeter','Plymouth','Derby','Stoke-on-Trent',
  'Hull','Bradford','Wolverhampton','Sunderland','Milton Keynes','Portsmouth','Norwich',
  'Luton','Watford','Slough','High Wycombe','Hemel Hempstead','Stevenage',
  'St Albans','Welwyn Garden City','Hatfield','Basildon','Southend-on-Sea',
  'Chelmsford','Colchester','Ipswich','Peterborough','Northampton','Kettering',
  'Bedford','Swindon','Gloucester','Cheltenham','Worcester','Hereford',
  'Telford','Shrewsbury','Wrexham','Blackpool','Preston','Blackburn',
  'Bolton','Warrington','Stockport','Oldham','Rochdale','Huddersfield',
  'Wakefield','Doncaster','Rotherham','Middlesbrough','Darlington','Hartlepool',
  'Dundee','Aberdeen','Inverness','Swansea','Newport','Bangor',
]

const services = [
  'commercial-canopy-cleaning',
  'canopy-cleaning',
  'kitchen-extract-cleaning',
  'tr19-cleaning',
  'extraction-cleaning',
  'fan-repairs',
  'fan-replacements',
]

function toSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

const urls = [
  `https://${HOST}/`,
  `https://${HOST}/services`,
  `https://${HOST}/about`,
  `https://${HOST}/compliance`,
  `https://${HOST}/contact`,
  ...services.flatMap(svc =>
    cityNames.map(n => `https://${HOST}/${svc}/${toSlug(n)}`)
  ),
]

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: urls,
})

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  })
  console.log(`IndexNow: ${res.status} — submitted ${urls.length} URLs`)
} catch (err) {
  // Non-fatal — don't fail the build if IndexNow is unreachable
  console.warn('IndexNow submission skipped:', err.message)
}
