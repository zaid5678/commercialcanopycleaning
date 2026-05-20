import cityData from './cityData'

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
  // Added May 2026
  'Dewsbury','Halifax','Castleford','Wigan','Barnsley','Gateshead',
  'Basingstoke','Hampshire','Wokingham','Bournemouth','Thurrock','Kent',
  'Harrogate','Canterbury','Maidstone','Knowsley','Poole','Guildford',
  'Horsham','Eastleigh','Havant','Ashford','Fareham','Tunbridge Wells',
  'Chorley','Carlisle','Gillingham','Birkenhead','Worthing','Lichfield',
  'Lewes','Great Yarmouth','Eastbourne','West Dorset','Dartford','Bromsgrove',
  'Bath','Hastings','Market Harborough','Selby','Harlow','Tewkesbury',
  'Gosport','Chester','Loughborough','Boston','Sittingbourne','Bracknell',
  'Keighley','Batley','Cheshunt','Purbeck','Wallsend','Bexhill-on-Sea',
  'Hoddesdon','Worksop','Salisbury','Ilkeston','Southall','Accrington',
  'Harpenden','Ealing','Stalybridge','Workington','Rickmansworth',
  'Potters Bar','Ripley','Brighton and Hove',
]

export const cities = cityNames.map(name => {
  const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  return {
    name,
    slug,
    ...(cityData[slug] || {}),
  }
})

export const cityMap = Object.fromEntries(cities.map(c => [c.slug, c]))
