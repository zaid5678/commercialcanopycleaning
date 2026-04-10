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

export const cities = cityNames.map(name => ({
  name,
  slug: name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
}))

export const cityMap = Object.fromEntries(cities.map(c => [c.slug, c]))
