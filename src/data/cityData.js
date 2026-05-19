// Region and nearby areas for each city — used to generate unique page content
const cityData = {
  london: {
    region: 'Greater London',
    nearby: ['Westminster', 'Croydon', 'Barnet', 'Hackney', 'Southwark', 'Ealing', 'Bromley', 'Lewisham'],
  },
  manchester: {
    region: 'Greater Manchester',
    nearby: ['Salford', 'Trafford', 'Stockport', 'Bury', 'Altrincham', 'Wigan', 'Didsbury'],
  },
  birmingham: {
    region: 'West Midlands',
    nearby: ['Solihull', 'Sutton Coldfield', 'Dudley', 'West Bromwich', 'Walsall', 'Smethwick'],
  },
  leeds: {
    region: 'West Yorkshire',
    nearby: ['Bradford', 'Wakefield', 'Harrogate', 'Dewsbury', 'Halifax', 'Pudsey'],
  },
  sheffield: {
    region: 'South Yorkshire',
    nearby: ['Rotherham', 'Barnsley', 'Doncaster', 'Chesterfield', 'Stocksbridge'],
  },
  liverpool: {
    region: 'Merseyside',
    nearby: ['Birkenhead', 'Wallasey', 'St Helens', 'Widnes', 'Southport', 'Bootle'],
  },
  bristol: {
    region: 'Bristol',
    nearby: ['Bath', 'Weston-super-Mare', 'Clevedon', 'Nailsea', 'Portishead', 'Yate'],
  },
  edinburgh: {
    region: 'City of Edinburgh',
    nearby: ['Livingston', 'Falkirk', 'Dunfermline', 'Kirkcaldy', 'Musselburgh', 'Dalkeith'],
  },
  glasgow: {
    region: 'Greater Glasgow',
    nearby: ['Paisley', 'Motherwell', 'Hamilton', 'East Kilbride', 'Clydebank', 'Rutherglen'],
  },
  cardiff: {
    region: 'Cardiff',
    nearby: ['Newport', 'Barry', 'Penarth', 'Pontypridd', 'Caerphilly', 'Bridgend'],
  },
  newcastle: {
    region: 'Tyne and Wear',
    nearby: ['Gateshead', 'Sunderland', 'Durham', 'Blyth', 'Whitley Bay', 'Cramlington'],
  },
  nottingham: {
    region: 'Nottinghamshire',
    nearby: ['Derby', 'Leicester', 'Mansfield', 'Loughborough', 'Arnold', 'Long Eaton'],
  },
  leicester: {
    region: 'Leicestershire',
    nearby: ['Coventry', 'Nottingham', 'Derby', 'Hinckley', 'Loughborough', 'Coalville'],
  },
  coventry: {
    region: 'West Midlands',
    nearby: ['Birmingham', 'Warwick', 'Leamington Spa', 'Rugby', 'Kenilworth', 'Nuneaton'],
  },
  brighton: {
    region: 'East Sussex',
    nearby: ['Hove', 'Worthing', 'Eastbourne', 'Lewes', 'Burgess Hill', 'Shoreham-by-Sea'],
  },
  southampton: {
    region: 'Hampshire',
    nearby: ['Portsmouth', 'Eastleigh', 'Winchester', 'Totton', "Chandler's Ford", 'Romsey'],
  },
  reading: {
    region: 'Berkshire',
    nearby: ['Slough', 'Windsor', 'Maidenhead', 'Wokingham', 'Basingstoke', 'Bracknell'],
  },
  oxford: {
    region: 'Oxfordshire',
    nearby: ['Abingdon', 'Witney', 'Bicester', 'Banbury', 'Kidlington', 'Didcot'],
  },
  cambridge: {
    region: 'Cambridgeshire',
    nearby: ['Ely', 'Huntingdon', 'Peterborough', 'Newmarket', 'Saffron Walden', 'St Ives'],
  },
  york: {
    region: 'North Yorkshire',
    nearby: ['Leeds', 'Harrogate', 'Selby', 'Malton', 'Thirsk', 'Tadcaster'],
  },
  exeter: {
    region: 'Devon',
    nearby: ['Taunton', 'Torquay', 'Plymouth', 'Crediton', 'Newton Abbot', 'Tiverton'],
  },
  plymouth: {
    region: 'Devon',
    nearby: ['Exeter', 'Torquay', 'Saltash', 'Liskeard', 'Ivybridge', 'Totnes'],
  },
  derby: {
    region: 'Derbyshire',
    nearby: ['Nottingham', 'Burton upon Trent', 'Chesterfield', 'Matlock', 'Ilkeston', 'Belper'],
  },
  'stoke-on-trent': {
    region: 'Staffordshire',
    nearby: ['Stafford', 'Crewe', 'Macclesfield', 'Newcastle-under-Lyme', 'Leek', 'Stone'],
  },
  hull: {
    region: 'East Yorkshire',
    nearby: ['Beverley', 'Grimsby', 'Scunthorpe', 'Bridlington', 'Driffield', 'Goole'],
  },
  bradford: {
    region: 'West Yorkshire',
    nearby: ['Leeds', 'Halifax', 'Keighley', 'Shipley', 'Bingley', 'Ilkley'],
  },
  wolverhampton: {
    region: 'West Midlands',
    nearby: ['Birmingham', 'Dudley', 'Walsall', 'Cannock', 'Telford', 'Bridgnorth'],
  },
  sunderland: {
    region: 'Tyne and Wear',
    nearby: ['Newcastle', 'Durham', 'Gateshead', 'Hartlepool', 'Washington', 'Peterlee'],
  },
  'milton-keynes': {
    region: 'Buckinghamshire',
    nearby: ['Northampton', 'Bedford', 'Luton', 'Oxford', 'Bletchley', 'Newport Pagnell'],
  },
  portsmouth: {
    region: 'Hampshire',
    nearby: ['Southampton', 'Fareham', 'Gosport', 'Chichester', 'Waterlooville', 'Havant'],
  },
  norwich: {
    region: 'Norfolk',
    nearby: ['Ipswich', 'Peterborough', 'Great Yarmouth', 'Lowestoft', "King's Lynn", 'Dereham'],
  },
  luton: {
    region: 'Bedfordshire',
    nearby: ['Dunstable', 'St Albans', 'Hemel Hempstead', 'Bedford', 'Hitchin', 'Harpenden'],
  },
  watford: {
    region: 'Hertfordshire',
    nearby: ['St Albans', 'Hemel Hempstead', 'Harrow', 'Rickmansworth', 'Borehamwood', 'Bushey'],
  },
  slough: {
    region: 'Berkshire',
    nearby: ['Windsor', 'Maidenhead', 'Reading', 'Staines', 'Uxbridge', 'Burnham'],
  },
  'high-wycombe': {
    region: 'Buckinghamshire',
    nearby: ['Amersham', 'Marlow', 'Maidenhead', 'Aylesbury', 'Beaconsfield', 'Chesham'],
  },
  'hemel-hempstead': {
    region: 'Hertfordshire',
    nearby: ['St Albans', 'Watford', 'Luton', 'Berkhamsted', 'Tring', 'Dunstable'],
  },
  stevenage: {
    region: 'Hertfordshire',
    nearby: ['Welwyn Garden City', 'Hitchin', 'Letchworth', 'Hertford', 'Baldock', 'Knebworth'],
  },
  'st-albans': {
    region: 'Hertfordshire',
    nearby: ['Watford', 'Hemel Hempstead', 'Hatfield', 'Welwyn Garden City', 'Potters Bar', 'Harpenden'],
  },
  'welwyn-garden-city': {
    region: 'Hertfordshire',
    nearby: ['Hatfield', 'St Albans', 'Stevenage', 'Hertford', 'Potters Bar', 'Welwyn'],
  },
  hatfield: {
    region: 'Hertfordshire',
    nearby: ['Welwyn Garden City', 'St Albans', 'Hertford', 'Luton', 'Potters Bar', 'Stevenage'],
  },
  basildon: {
    region: 'Essex',
    nearby: ['Southend-on-Sea', 'Chelmsford', 'Brentwood', 'Thurrock', 'Billericay', 'Rayleigh'],
  },
  'southend-on-sea': {
    region: 'Essex',
    nearby: ['Basildon', 'Chelmsford', 'Colchester', 'Rayleigh', 'Rochford', 'Canvey Island'],
  },
  chelmsford: {
    region: 'Essex',
    nearby: ['Basildon', 'Brentwood', 'Colchester', 'Harlow', 'Witham', 'Braintree'],
  },
  colchester: {
    region: 'Essex',
    nearby: ['Chelmsford', 'Ipswich', 'Braintree', 'Clacton-on-Sea', 'Manningtree', 'Halstead'],
  },
  ipswich: {
    region: 'Suffolk',
    nearby: ['Colchester', 'Bury St Edmunds', 'Felixstowe', 'Stowmarket', 'Woodbridge', 'Sudbury'],
  },
  peterborough: {
    region: 'Cambridgeshire',
    nearby: ['Cambridge', 'Northampton', 'Leicester', 'Spalding', 'March', 'Wisbech'],
  },
  northampton: {
    region: 'Northamptonshire',
    nearby: ['Corby', 'Kettering', 'Milton Keynes', 'Coventry', 'Wellingborough', 'Daventry'],
  },
  kettering: {
    region: 'Northamptonshire',
    nearby: ['Corby', 'Northampton', 'Market Harborough', 'Wellingborough', 'Rushden', 'Burton Latimer'],
  },
  bedford: {
    region: 'Bedfordshire',
    nearby: ['Luton', 'Northampton', 'Milton Keynes', 'St Neots', 'Sandy', 'Biggleswade'],
  },
  swindon: {
    region: 'Wiltshire',
    nearby: ['Chippenham', 'Bath', 'Bristol', 'Oxford', 'Cirencester', 'Devizes'],
  },
  gloucester: {
    region: 'Gloucestershire',
    nearby: ['Cheltenham', 'Bristol', 'Stroud', 'Cirencester', 'Tewkesbury', 'Lydney'],
  },
  cheltenham: {
    region: 'Gloucestershire',
    nearby: ['Gloucester', 'Tewkesbury', 'Cirencester', 'Stroud', 'Evesham', 'Winchcombe'],
  },
  worcester: {
    region: 'Worcestershire',
    nearby: ['Hereford', 'Kidderminster', 'Droitwich', 'Malvern', 'Bromsgrove', 'Redditch'],
  },
  hereford: {
    region: 'Herefordshire',
    nearby: ['Worcester', 'Abergavenny', 'Leominster', 'Ross-on-Wye', 'Brecon', 'Ledbury'],
  },
  telford: {
    region: 'Shropshire',
    nearby: ['Shrewsbury', 'Wolverhampton', 'Stafford', 'Bridgnorth', 'Market Drayton', 'Newport'],
  },
  shrewsbury: {
    region: 'Shropshire',
    nearby: ['Telford', 'Chester', 'Wolverhampton', 'Oswestry', 'Market Drayton', 'Whitchurch'],
  },
  wrexham: {
    region: 'North Wales',
    nearby: ['Chester', 'Shrewsbury', 'Llangollen', 'Rhyl', 'Mold', 'Buckley'],
  },
  blackpool: {
    region: 'Lancashire',
    nearby: ['Preston', 'Lancaster', 'Lytham St Annes', 'Fleetwood', 'Cleveleys', 'Poulton-le-Fylde'],
  },
  preston: {
    region: 'Lancashire',
    nearby: ['Blackburn', 'Wigan', 'Lancaster', 'Leyland', 'Chorley', 'Longridge'],
  },
  blackburn: {
    region: 'Lancashire',
    nearby: ['Burnley', 'Preston', 'Accrington', 'Darwen', 'Nelson', 'Clitheroe'],
  },
  bolton: {
    region: 'Greater Manchester',
    nearby: ['Wigan', 'Manchester', 'Bury', 'Leigh', 'Horwich', 'Farnworth'],
  },
  warrington: {
    region: 'Cheshire',
    nearby: ['Liverpool', 'Manchester', 'Chester', 'Widnes', 'Runcorn', 'Northwich'],
  },
  stockport: {
    region: 'Greater Manchester',
    nearby: ['Manchester', 'Macclesfield', 'Altrincham', 'Marple', 'Bramhall', 'Cheadle'],
  },
  oldham: {
    region: 'Greater Manchester',
    nearby: ['Manchester', 'Rochdale', 'Ashton-under-Lyne', 'Hyde', 'Saddleworth', 'Middleton'],
  },
  rochdale: {
    region: 'Greater Manchester',
    nearby: ['Oldham', 'Bury', 'Halifax', 'Burnley', 'Heywood', 'Littleborough'],
  },
  huddersfield: {
    region: 'West Yorkshire',
    nearby: ['Leeds', 'Halifax', 'Barnsley', 'Wakefield', 'Dewsbury', 'Holmfirth'],
  },
  wakefield: {
    region: 'West Yorkshire',
    nearby: ['Leeds', 'Huddersfield', 'Doncaster', 'Pontefract', 'Castleford', 'Ossett'],
  },
  doncaster: {
    region: 'South Yorkshire',
    nearby: ['Sheffield', 'Rotherham', 'Barnsley', 'Scunthorpe', 'Thorne', 'Mexborough'],
  },
  rotherham: {
    region: 'South Yorkshire',
    nearby: ['Sheffield', 'Barnsley', 'Doncaster', 'Maltby', 'Wath-upon-Dearne', 'Rawmarsh'],
  },
  middlesbrough: {
    region: 'North Yorkshire',
    nearby: ['Stockton-on-Tees', 'Darlington', 'Durham', 'Hartlepool', 'Redcar', 'Thornaby'],
  },
  darlington: {
    region: 'County Durham',
    nearby: ['Middlesbrough', 'Durham', 'Stockton-on-Tees', 'Newton Aycliffe', 'Bishop Auckland', 'Barnard Castle'],
  },
  hartlepool: {
    region: 'County Durham',
    nearby: ['Sunderland', 'Middlesbrough', 'Stockton-on-Tees', 'Durham', 'Peterlee', 'Billingham'],
  },
  dundee: {
    region: 'Angus',
    nearby: ['Perth', 'St Andrews', 'Arbroath', 'Forfar', 'Montrose', 'Carnoustie'],
  },
  aberdeen: {
    region: 'Aberdeenshire',
    nearby: ['Inverness', 'Perth', 'Elgin', 'Peterhead', 'Fraserburgh', 'Stonehaven'],
  },
  inverness: {
    region: 'Highland',
    nearby: ['Aberdeen', 'Fort William', 'Nairn', 'Dingwall', 'Aviemore', 'Elgin'],
  },
  swansea: {
    region: 'West Glamorgan',
    nearby: ['Neath', 'Port Talbot', 'Cardiff', 'Llanelli', 'Carmarthen', 'Bridgend'],
  },
  newport: {
    region: 'Monmouthshire',
    nearby: ['Cardiff', 'Cwmbran', 'Bristol', 'Caldicot', 'Chepstow', 'Pontypool'],
  },
  bangor: {
    region: 'Gwynedd',
    nearby: ['Caernarfon', 'Conwy', 'Llandudno', 'Beaumaris', 'Holyhead', 'Porthmadog'],
  },
}

export default cityData
