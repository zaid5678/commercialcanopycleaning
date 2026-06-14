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
  // ── New cities added May 2026 ──────────────────────────────────────────
  dewsbury: {
    region: 'West Yorkshire',
    nearby: ['Leeds', 'Huddersfield', 'Wakefield', 'Bradford', 'Batley', 'Ossett'],
  },
  halifax: {
    region: 'West Yorkshire',
    nearby: ['Bradford', 'Huddersfield', 'Leeds', 'Brighouse', 'Hebden Bridge', 'Todmorden'],
  },
  castleford: {
    region: 'West Yorkshire',
    nearby: ['Wakefield', 'Leeds', 'Pontefract', 'Normanton', 'Featherstone', 'Knottingley'],
  },
  wigan: {
    region: 'Greater Manchester',
    nearby: ['Bolton', 'Manchester', 'St Helens', 'Leigh', 'Skelmersdale', 'Warrington'],
  },
  barnsley: {
    region: 'South Yorkshire',
    nearby: ['Sheffield', 'Rotherham', 'Doncaster', 'Wakefield', 'Penistone', 'Hoyland'],
  },
  gateshead: {
    region: 'Tyne and Wear',
    nearby: ['Newcastle', 'Sunderland', 'Durham', 'Consett', 'Chester-le-Street', 'Blaydon'],
  },
  basingstoke: {
    region: 'Hampshire',
    nearby: ['Reading', 'Winchester', 'Andover', 'Farnborough', 'Fleet', 'Hook'],
  },
  hampshire: {
    region: 'Hampshire',
    nearby: ['Southampton', 'Portsmouth', 'Winchester', 'Basingstoke', 'Andover', 'Fareham'],
  },
  wokingham: {
    region: 'Berkshire',
    nearby: ['Reading', 'Bracknell', 'Camberley', 'Farnborough', 'Sandhurst', 'Crowthorne'],
  },
  bournemouth: {
    region: 'Dorset',
    nearby: ['Poole', 'Christchurch', 'Weymouth', 'Wareham', 'Ferndown', 'Ringwood'],
  },
  thurrock: {
    region: 'Essex',
    nearby: ['Basildon', 'Brentwood', 'Dartford', 'Gravesend', 'Grays', 'Tilbury'],
  },
  kent: {
    region: 'Kent',
    nearby: ['Maidstone', 'Canterbury', 'Ashford', 'Tunbridge Wells', 'Dartford', 'Medway'],
  },
  harrogate: {
    region: 'North Yorkshire',
    nearby: ['Leeds', 'York', 'Knaresborough', 'Ripon', 'Skipton', 'Wetherby'],
  },
  canterbury: {
    region: 'Kent',
    nearby: ['Maidstone', 'Ashford', 'Dover', 'Folkestone', 'Whitstable', 'Faversham'],
  },
  maidstone: {
    region: 'Kent',
    nearby: ['Canterbury', 'Ashford', 'Tunbridge Wells', 'Sittingbourne', 'Medway', 'Tonbridge'],
  },
  knowsley: {
    region: 'Merseyside',
    nearby: ['Liverpool', 'St Helens', 'Prescot', 'Huyton', 'Kirkby', 'Halewood'],
  },
  poole: {
    region: 'Dorset',
    nearby: ['Bournemouth', 'Christchurch', 'Wareham', 'Swanage', 'Ferndown', 'Wimborne'],
  },
  guildford: {
    region: 'Surrey',
    nearby: ['Woking', 'Farnham', 'Godalming', 'Cranleigh', 'Leatherhead', 'Farnborough'],
  },
  horsham: {
    region: 'West Sussex',
    nearby: ['Crawley', 'Guildford', 'Brighton', 'Worthing', 'East Grinstead', 'Billingshurst'],
  },
  eastleigh: {
    region: 'Hampshire',
    nearby: ['Southampton', 'Winchester', 'Fareham', "Chandler's Ford", 'Hedge End', 'Bishopstoke'],
  },
  havant: {
    region: 'Hampshire',
    nearby: ['Portsmouth', 'Fareham', 'Chichester', 'Waterlooville', 'Hayling Island', 'Emsworth'],
  },
  ashford: {
    region: 'Kent',
    nearby: ['Canterbury', 'Maidstone', 'Folkestone', 'Tenterden', 'Hythe', 'New Romney'],
  },
  fareham: {
    region: 'Hampshire',
    nearby: ['Portsmouth', 'Southampton', 'Gosport', 'Eastleigh', 'Waterlooville', 'Wickham'],
  },
  'tunbridge-wells': {
    region: 'Kent',
    nearby: ['Maidstone', 'Tonbridge', 'Crowborough', 'Sevenoaks', 'Paddock Wood', 'Cranbrook'],
  },
  chorley: {
    region: 'Lancashire',
    nearby: ['Preston', 'Wigan', 'Bolton', 'Burnley', 'Leyland', 'Skelmersdale'],
  },
  carlisle: {
    region: 'Cumbria',
    nearby: ['Penrith', 'Workington', 'Whitehaven', 'Dumfries', 'Hexham', 'Brampton'],
  },
  gillingham: {
    region: 'Kent',
    nearby: ['Maidstone', 'Rochester', 'Chatham', 'Sittingbourne', 'Medway', 'Faversham'],
  },
  birkenhead: {
    region: 'Merseyside',
    nearby: ['Liverpool', 'Wallasey', 'Ellesmere Port', 'Chester', 'Heswall', 'Bebington'],
  },
  worthing: {
    region: 'West Sussex',
    nearby: ['Brighton', 'Horsham', 'Shoreham-by-Sea', 'Chichester', 'Littlehampton', 'Lancing'],
  },
  lichfield: {
    region: 'Staffordshire',
    nearby: ['Birmingham', 'Tamworth', 'Burton upon Trent', 'Stafford', 'Sutton Coldfield', 'Rugeley'],
  },
  lewes: {
    region: 'East Sussex',
    nearby: ['Brighton', 'Eastbourne', 'Haywards Heath', 'Uckfield', 'Newhaven', 'Seaford'],
  },
  'great-yarmouth': {
    region: 'Norfolk',
    nearby: ['Norwich', 'Lowestoft', 'Beccles', 'Bungay', 'Acle', 'Caister-on-Sea'],
  },
  eastbourne: {
    region: 'East Sussex',
    nearby: ['Brighton', 'Hastings', 'Lewes', 'Hailsham', 'Bexhill-on-Sea', 'Seaford'],
  },
  'west-dorset': {
    region: 'Dorset',
    nearby: ['Dorchester', 'Bridport', 'Weymouth', 'Sherborne', 'Yeovil', 'Beaminster'],
  },
  dartford: {
    region: 'Kent',
    nearby: ['Gravesend', 'Bexleyheath', 'Swanley', 'Sevenoaks', 'Thurrock', 'Erith'],
  },
  bromsgrove: {
    region: 'Worcestershire',
    nearby: ['Birmingham', 'Redditch', 'Worcester', 'Droitwich', 'Kidderminster', 'Solihull'],
  },
  bath: {
    region: 'Somerset',
    nearby: ['Bristol', 'Frome', 'Chippenham', 'Trowbridge', 'Radstock', 'Midsomer Norton'],
  },
  hastings: {
    region: 'East Sussex',
    nearby: ['Eastbourne', 'Bexhill-on-Sea', 'Rye', 'Battle', 'Tunbridge Wells', 'Tenterden'],
  },
  'market-harborough': {
    region: 'Leicestershire',
    nearby: ['Leicester', 'Kettering', 'Northampton', 'Rugby', 'Lutterworth', 'Corby'],
  },
  selby: {
    region: 'North Yorkshire',
    nearby: ['York', 'Leeds', 'Wakefield', 'Pontefract', 'Goole', 'Tadcaster'],
  },
  harlow: {
    region: 'Essex',
    nearby: ["Bishop's Stortford", 'Chelmsford', 'Hertford', 'Epping', 'Stevenage', 'Ware'],
  },
  tewkesbury: {
    region: 'Gloucestershire',
    nearby: ['Gloucester', 'Cheltenham', 'Worcester', 'Pershore', 'Evesham', 'Winchcombe'],
  },
  gosport: {
    region: 'Hampshire',
    nearby: ['Portsmouth', 'Fareham', 'Southampton', 'Stubbington', 'Lee-on-the-Solent', 'Alverstoke'],
  },
  chester: {
    region: 'Cheshire',
    nearby: ['Wrexham', 'Warrington', 'Ellesmere Port', 'Crewe', 'Macclesfield', 'Northwich'],
  },
  loughborough: {
    region: 'Leicestershire',
    nearby: ['Leicester', 'Nottingham', 'Derby', 'Coalville', 'Shepshed', 'Melton Mowbray'],
  },
  boston: {
    region: 'Lincolnshire',
    nearby: ['Peterborough', 'Lincoln', 'Spalding', 'Skegness', 'Sleaford', 'Holbeach'],
  },
  sittingbourne: {
    region: 'Kent',
    nearby: ['Maidstone', 'Canterbury', 'Gillingham', 'Faversham', 'Sheerness', 'Medway'],
  },
  bracknell: {
    region: 'Berkshire',
    nearby: ['Reading', 'Wokingham', 'Camberley', 'Windsor', 'Farnborough', 'Sandhurst'],
  },
  keighley: {
    region: 'West Yorkshire',
    nearby: ['Bradford', 'Halifax', 'Skipton', 'Bingley', 'Ilkley', 'Shipley'],
  },
  batley: {
    region: 'West Yorkshire',
    nearby: ['Leeds', 'Dewsbury', 'Bradford', 'Wakefield', 'Morley', 'Cleckheaton'],
  },
  cheshunt: {
    region: 'Hertfordshire',
    nearby: ['Waltham Abbey', 'Broxbourne', 'Hertford', 'Enfield', 'Hoddesdon', 'Ware'],
  },
  purbeck: {
    region: 'Dorset',
    nearby: ['Swanage', 'Wareham', 'Bournemouth', 'Poole', 'Weymouth', 'Corfe Castle'],
  },
  wallsend: {
    region: 'Tyne and Wear',
    nearby: ['Newcastle', 'Gateshead', 'North Shields', 'Whitley Bay', 'Sunderland', 'Jarrow'],
  },
  'bexhill-on-sea': {
    region: 'East Sussex',
    nearby: ['Hastings', 'Eastbourne', 'Lewes', 'Battle', 'Rye', 'Hailsham'],
  },
  hoddesdon: {
    region: 'Hertfordshire',
    nearby: ['Cheshunt', 'Hertford', 'Ware', 'Waltham Cross', 'Broxbourne', 'Harlow'],
  },
  worksop: {
    region: 'Nottinghamshire',
    nearby: ['Sheffield', 'Rotherham', 'Mansfield', 'Retford', 'Doncaster', 'Chesterfield'],
  },
  salisbury: {
    region: 'Wiltshire',
    nearby: ['Southampton', 'Bournemouth', 'Winchester', 'Amesbury', 'Andover', 'Shaftesbury'],
  },
  ilkeston: {
    region: 'Derbyshire',
    nearby: ['Nottingham', 'Derby', 'Long Eaton', 'Heanor', 'Ripley', 'Eastwood'],
  },
  southall: {
    region: 'West London',
    nearby: ['Ealing', 'Hayes', 'Slough', 'Uxbridge', 'Greenford', 'Hanwell'],
  },
  accrington: {
    region: 'Lancashire',
    nearby: ['Burnley', 'Blackburn', 'Nelson', 'Rossendale', 'Clitheroe', 'Darwen'],
  },
  harpenden: {
    region: 'Hertfordshire',
    nearby: ['St Albans', 'Luton', 'Watford', 'Hemel Hempstead', 'Welwyn Garden City', 'Redbourn'],
  },
  ealing: {
    region: 'West London',
    nearby: ['Acton', 'Southall', 'Hanwell', 'Northolt', 'Greenford', 'Perivale'],
  },
  stalybridge: {
    region: 'Greater Manchester',
    nearby: ['Ashton-under-Lyne', 'Oldham', 'Manchester', 'Hyde', 'Mossley', 'Dukinfield'],
  },
  workington: {
    region: 'Cumbria',
    nearby: ['Carlisle', 'Whitehaven', 'Cockermouth', 'Keswick', 'Maryport', 'Wigton'],
  },
  rickmansworth: {
    region: 'Hertfordshire',
    nearby: ['Watford', 'Harrow', 'Chorleywood', 'Amersham', 'Northwood', 'Croxley Green'],
  },
  'potters-bar': {
    region: 'Hertfordshire',
    nearby: ['Enfield', 'Barnet', 'Hatfield', 'St Albans', 'Welwyn Garden City', 'Cheshunt'],
  },
  ripley: {
    region: 'Derbyshire',
    nearby: ['Derby', 'Nottingham', 'Heanor', 'Ilkeston', 'Belper', 'Alfreton'],
  },
  'brighton-and-hove': {
    region: 'East Sussex',
    nearby: ['Worthing', 'Lewes', 'Eastbourne', 'Horsham', 'Haywards Heath', 'Shoreham-by-Sea'],
  },
  // ── London sub-areas added June 2026 ──────────────────────────────────────
  greenwich: {
    region: 'Greater London',
    nearby: ['Lewisham', 'Woolwich', 'Deptford', 'Eltham', 'Blackheath', 'Charlton'],
  },
  lambeth: {
    region: 'Greater London',
    nearby: ['Brixton', 'Clapham', 'Kennington', 'Stockwell', 'Streatham', 'Waterloo'],
  },
  wandsworth: {
    region: 'Greater London',
    nearby: ['Clapham', 'Battersea', 'Tooting', 'Balham', 'Putney', 'Earlsfield'],
  },
  kensington: {
    region: 'Greater London',
    nearby: ['Chelsea', 'Hammersmith', 'Fulham', 'Westminster', 'Notting Hill', 'Earls Court'],
  },
  chelsea: {
    region: 'Greater London',
    nearby: ['Kensington', 'Fulham', 'Battersea', 'Westminster', 'Belgravia', 'Earls Court'],
  },
  hammersmith: {
    region: 'Greater London',
    nearby: ['Fulham', 'Chiswick', 'Shepherd\'s Bush', 'Kensington', 'Acton', 'Barnes'],
  },
  fulham: {
    region: 'Greater London',
    nearby: ['Hammersmith', 'Chelsea', 'Putney', 'Wandsworth', 'Kensington', 'Earls Court'],
  },
  hounslow: {
    region: 'Greater London',
    nearby: ['Isleworth', 'Brentford', 'Chiswick', 'Feltham', 'Richmond', 'Twickenham'],
  },
  brent: {
    region: 'Greater London',
    nearby: ['Wembley', 'Harrow', 'Kilburn', 'Willesden', 'Neasden', 'Stonebridge'],
  },
  wembley: {
    region: 'Greater London',
    nearby: ['Harrow', 'Brent', 'Willesden', 'Greenford', 'Northolt', 'Sudbury'],
  },
  harrow: {
    region: 'Greater London',
    nearby: ['Wembley', 'Pinner', 'Ruislip', 'Edgware', 'Stanmore', 'Northwood'],
  },
  enfield: {
    region: 'Greater London',
    nearby: ['Barnet', 'Haringey', 'Cheshunt', 'Waltham Cross', 'Potters Bar', 'Edmonton'],
  },
  haringey: {
    region: 'Greater London',
    nearby: ['Tottenham', 'Wood Green', 'Hornsey', 'Enfield', 'Islington', 'Hackney'],
  },
  islington: {
    region: 'Greater London',
    nearby: ['Camden', 'Hackney', 'Haringey', 'Westminster', 'City of London', 'Finsbury Park'],
  },
  camden: {
    region: 'Greater London',
    nearby: ['Islington', 'Westminster', 'Hampstead', 'Kentish Town', 'Chalk Farm', 'Kilburn'],
  },
  'tower-hamlets': {
    region: 'Greater London',
    nearby: ['Newham', 'Hackney', 'Canary Wharf', 'Stepney', 'Bow', 'Bethnal Green'],
  },
  newham: {
    region: 'Greater London',
    nearby: ['Stratford', 'Tower Hamlets', 'Barking', 'West Ham', 'Plaistow', 'Forest Gate'],
  },
  'barking-and-dagenham': {
    region: 'Greater London',
    nearby: ['Newham', 'Redbridge', 'Havering', 'Ilford', 'Romford', 'East Ham'],
  },
  redbridge: {
    region: 'Greater London',
    nearby: ['Ilford', 'Barking', 'Havering', 'Waltham Forest', 'Newham', 'Woodford'],
  },
  havering: {
    region: 'Greater London',
    nearby: ['Romford', 'Hornchurch', 'Upminster', 'Redbridge', 'Barking', 'Brentwood'],
  },
  sutton: {
    region: 'Greater London',
    nearby: ['Merton', 'Croydon', 'Kingston', 'Carshalton', 'Cheam', 'Epsom'],
  },
  merton: {
    region: 'Greater London',
    nearby: ['Wimbledon', 'Sutton', 'Wandsworth', 'Croydon', 'Mitcham', 'Tooting'],
  },
  'kingston-upon-thames': {
    region: 'Greater London',
    nearby: ['Richmond', 'Wimbledon', 'Surbiton', 'New Malden', 'Twickenham', 'Esher'],
  },
  'richmond-upon-thames': {
    region: 'Greater London',
    nearby: ['Kingston', 'Twickenham', 'Hounslow', 'Barnes', 'Kew', 'Ham'],
  },
  bexley: {
    region: 'Greater London',
    nearby: ['Dartford', 'Bromley', 'Greenwich', 'Bexleyheath', 'Sidcup', 'Erith'],
  },
  ilford: {
    region: 'Greater London',
    nearby: ['Barking', 'Redbridge', 'Newham', 'Romford', 'Wanstead', 'Seven Kings'],
  },
  stratford: {
    region: 'Greater London',
    nearby: ['Newham', 'Tower Hamlets', 'Hackney', 'West Ham', 'Leyton', 'Forest Gate'],
  },
  uxbridge: {
    region: 'Greater London',
    nearby: ['Hillingdon', 'Hayes', 'Slough', 'Harrow', 'Ruislip', 'Staines'],
  },
  hayes: {
    region: 'Greater London',
    nearby: ['Uxbridge', 'Southall', 'Hillingdon', 'Slough', 'Ealing', 'Harlington'],
  },
  hillingdon: {
    region: 'Greater London',
    nearby: ['Uxbridge', 'Hayes', 'Ruislip', 'Harrow', 'Northolt', 'Yiewsley'],
  },
  edgware: {
    region: 'Greater London',
    nearby: ['Harrow', 'Barnet', 'Mill Hill', 'Stanmore', 'Borehamwood', 'Elstree'],
  },
  finchley: {
    region: 'Greater London',
    nearby: ['Barnet', 'Edgware', 'Golders Green', 'Muswell Hill', 'East Finchley', 'Whetstone'],
  },
  'wood-green': {
    region: 'Greater London',
    nearby: ['Tottenham', 'Haringey', 'Muswell Hill', 'Hornsey', 'Palmers Green', 'Bounds Green'],
  },
  tottenham: {
    region: 'Greater London',
    nearby: ['Wood Green', 'Haringey', 'Enfield', 'Edmonton', 'Walthamstow', 'Stoke Newington'],
  },
  acton: {
    region: 'Greater London',
    nearby: ['Ealing', 'Hammersmith', 'Chiswick', 'Shepherd\'s Bush', 'Southall', 'Brentford'],
  },
  kilburn: {
    region: 'Greater London',
    nearby: ['Brent', 'Camden', 'Westminster', 'Willesden', 'Maida Vale', 'Brondesbury'],
  },
  willesden: {
    region: 'Greater London',
    nearby: ['Brent', 'Kilburn', 'Wembley', 'Neasden', 'Cricklewood', 'Harlesden'],
  },
  clapham: {
    region: 'Greater London',
    nearby: ['Brixton', 'Wandsworth', 'Battersea', 'Balham', 'Stockwell', 'Streatham'],
  },
  brixton: {
    region: 'Greater London',
    nearby: ['Clapham', 'Lambeth', 'Streatham', 'Stockwell', 'Herne Hill', 'Tulse Hill'],
  },
  peckham: {
    region: 'Greater London',
    nearby: ['Camberwell', 'Lewisham', 'Deptford', 'Bermondsey', 'New Cross', 'Dulwich'],
  },
  'canary-wharf': {
    region: 'Greater London',
    nearby: ['Tower Hamlets', 'Greenwich', 'Docklands', 'Bermondsey', 'Rotherhithe', 'Limehouse'],
  },
  // ── Birmingham sub-areas added June 2026 ──────────────────────────────────
  'birmingham-city-centre': {
    region: 'West Midlands',
    nearby: ['Digbeth', 'Edgbaston', 'Aston', 'Nechells', 'Ladywood', 'Jewellery Quarter'],
  },
  edgbaston: {
    region: 'West Midlands',
    nearby: ['Birmingham City Centre', 'Harborne', 'Selly Oak', 'Bournville', 'Moseley', 'Ladywood'],
  },
  harborne: {
    region: 'West Midlands',
    nearby: ['Edgbaston', 'Selly Oak', 'Birmingham City Centre', 'Quinton', 'Northfield', 'Bearwood'],
  },
  'selly-oak': {
    region: 'West Midlands',
    nearby: ['Edgbaston', 'Harborne', 'Bournville', 'Stirchley', 'Moseley', 'Northfield'],
  },
  aston: {
    region: 'West Midlands',
    nearby: ['Birmingham City Centre', 'Erdington', 'Handsworth', 'Nechells', 'Newtown', 'Perry Barr'],
  },
  erdington: {
    region: 'West Midlands',
    nearby: ['Aston', 'Great Barr', 'Sutton Coldfield', 'Perry Barr', 'Castle Bromwich', 'Tyburn'],
  },
  yardley: {
    region: 'West Midlands',
    nearby: ['Sheldon', 'Acocks Green', 'Small Heath', 'Stechford', 'Bordesley Green', 'Hall Green'],
  },
  sheldon: {
    region: 'West Midlands',
    nearby: ['Yardley', 'Acocks Green', 'Solihull', 'Birmingham Airport', 'Marston Green', 'Elmdon'],
  },
  'acocks-green': {
    region: 'West Midlands',
    nearby: ['Yardley', 'Moseley', 'Hall Green', 'Sheldon', 'Small Heath', 'Sparkhill'],
  },
  moseley: {
    region: 'West Midlands',
    nearby: ['Kings Heath', 'Edgbaston', 'Sparkhill', 'Balsall Heath', 'Stirchley', 'Selly Oak'],
  },
  'kings-heath': {
    region: 'West Midlands',
    nearby: ['Moseley', 'Stirchley', 'Bournville', 'Hall Green', 'Sparkhill', 'Edgbaston'],
  },
  stirchley: {
    region: 'West Midlands',
    nearby: ['Kings Heath', 'Selly Oak', 'Bournville', 'Cotteridge', 'Northfield', 'Moseley'],
  },
  sparkhill: {
    region: 'West Midlands',
    nearby: ['Sparkbrook', 'Moseley', 'Small Heath', 'Acocks Green', 'Hall Green', 'Kings Heath'],
  },
  'small-heath': {
    region: 'West Midlands',
    nearby: ['Sparkhill', 'Bordesley Green', 'Yardley', 'Sparkbrook', 'Hay Mills', 'Bordesley'],
  },
  'bordesley-green': {
    region: 'West Midlands',
    nearby: ['Small Heath', 'Yardley', 'Stechford', 'Washwood Heath', 'Sparkbrook', 'Hay Mills'],
  },
  handsworth: {
    region: 'West Midlands',
    nearby: ['Aston', 'Perry Barr', 'Great Barr', 'Lozells', 'West Bromwich', 'Smethwick'],
  },
  'perry-barr': {
    region: 'West Midlands',
    nearby: ['Handsworth', 'Great Barr', 'Erdington', 'Aston', 'Walsall', 'Sutton Coldfield'],
  },
  'great-barr': {
    region: 'West Midlands',
    nearby: ['Perry Barr', 'Erdington', 'Walsall', 'Handsworth', 'Sutton Coldfield', 'Brownhills'],
  },
  oldbury: {
    region: 'West Midlands',
    nearby: ['West Bromwich', 'Smethwick', 'Wolverhampton', 'Dudley', 'Tipton', 'Halesowen'],
  },
  halesowen: {
    region: 'West Midlands',
    nearby: ['Oldbury', 'Stourbridge', 'Dudley', 'Bromsgrove', 'West Bromwich', 'Kidderminster'],
  },
  stourbridge: {
    region: 'West Midlands',
    nearby: ['Halesowen', 'Dudley', 'Kidderminster', 'Wolverhampton', 'Bromsgrove', 'Kingswinford'],
  },
  tipton: {
    region: 'West Midlands',
    nearby: ['Dudley', 'West Bromwich', 'Oldbury', 'Bilston', 'Wednesbury', 'Coseley'],
  },
  bilston: {
    region: 'West Midlands',
    nearby: ['Wolverhampton', 'Tipton', 'Wednesbury', 'Coseley', 'Sedgley', 'Bradley'],
  },
  brownhills: {
    region: 'West Midlands',
    nearby: ['Walsall', 'Cannock', 'Lichfield', 'Great Barr', 'Aldridge', 'Burntwood'],
  },
  cannock: {
    region: 'Staffordshire',
    nearby: ['Walsall', 'Lichfield', 'Stafford', 'Brownhills', 'Rugeley', 'Hednesford'],
  },
  tamworth: {
    region: 'Staffordshire',
    nearby: ['Lichfield', 'Birmingham', 'Burton upon Trent', 'Sutton Coldfield', 'Atherstone', 'Fazeley'],
  },
  redditch: {
    region: 'Worcestershire',
    nearby: ['Birmingham', 'Bromsgrove', 'Worcester', 'Stratford-upon-Avon', 'Solihull', 'Droitwich'],
  },
  kidderminster: {
    region: 'Worcestershire',
    nearby: ['Stourbridge', 'Worcester', 'Halesowen', 'Bromsgrove', 'Bewdley', 'Dudley'],
  },
  // ── Manchester sub-areas added June 2026 ──────────────────────────────────
  'manchester-city-centre': {
    region: 'Greater Manchester',
    nearby: ['Salford', 'Ancoats', 'Deansgate', 'Castlefield', 'Northern Quarter', 'Hulme'],
  },
  ancoats: {
    region: 'Greater Manchester',
    nearby: ['Manchester City Centre', 'Northern Quarter', 'Ardwick', 'Openshaw', 'Miles Platting', 'Beswick'],
  },
  'northern-quarter': {
    region: 'Greater Manchester',
    nearby: ['Manchester City Centre', 'Ancoats', 'Piccadilly', 'Stevenson Square', 'Shudehill', 'Oldham Street'],
  },
  deansgate: {
    region: 'Greater Manchester',
    nearby: ['Manchester City Centre', 'Castlefield', 'Spinningfields', 'Hulme', 'Salford', 'Didsbury'],
  },
  castlefield: {
    region: 'Greater Manchester',
    nearby: ['Deansgate', 'Manchester City Centre', 'Salford', 'Hulme', 'Trafford', 'Cornbrook'],
  },
  'salford-quays': {
    region: 'Greater Manchester',
    nearby: ['Salford', 'Trafford', 'Manchester City Centre', 'Eccles', 'Stretford', 'Castlefield'],
  },
  stretford: {
    region: 'Greater Manchester',
    nearby: ['Trafford', 'Sale', 'Salford Quays', 'Old Trafford', 'Urmston', 'Chorlton'],
  },
  sale: {
    region: 'Greater Manchester',
    nearby: ['Stretford', 'Altrincham', 'Wythenshawe', 'Trafford', 'Urmston', 'Partington'],
  },
  wythenshawe: {
    region: 'Greater Manchester',
    nearby: ['Sale', 'Chorlton', 'Didsbury', 'Sharston', 'Northenden', 'Benchill'],
  },
  chorlton: {
    region: 'Greater Manchester',
    nearby: ['Didsbury', 'Hulme', 'Stretford', 'Wythenshawe', 'Fallowfield', 'Withington'],
  },
  hulme: {
    region: 'Greater Manchester',
    nearby: ['Manchester City Centre', 'Chorlton', 'Moss Side', 'Stretford', 'Rusholme', 'Castlefield'],
  },
  rusholme: {
    region: 'Greater Manchester',
    nearby: ['Fallowfield', 'Moss Side', 'Hulme', 'Longsight', 'Didsbury', 'Victoria Park'],
  },
  fallowfield: {
    region: 'Greater Manchester',
    nearby: ['Rusholme', 'Withington', 'Didsbury', 'Chorlton', 'Moss Side', 'Longsight'],
  },
  longsight: {
    region: 'Greater Manchester',
    nearby: ['Rusholme', 'Ardwick', 'Levenshulme', 'Gorton', 'Openshaw', 'Fallowfield'],
  },
  ardwick: {
    region: 'Greater Manchester',
    nearby: ['Manchester City Centre', 'Ancoats', 'Openshaw', 'Longsight', 'Gorton', 'Chorlton'],
  },
  'moss-side': {
    region: 'Greater Manchester',
    nearby: ['Hulme', 'Rusholme', 'Fallowfield', 'Chorlton', 'Longsight', 'Whalley Range'],
  },
  'cheetham-hill': {
    region: 'Greater Manchester',
    nearby: ['Manchester City Centre', 'Salford', 'Moston', 'Blackley', 'Harpurhey', 'Strangeways'],
  },
  moston: {
    region: 'Greater Manchester',
    nearby: ['Harpurhey', 'Blackley', 'Cheetham Hill', 'Failsworth', 'Newton Heath', 'Collyhurst'],
  },
  blackley: {
    region: 'Greater Manchester',
    nearby: ['Moston', 'Harpurhey', 'Cheetham Hill', 'Middleton', 'Newton Heath', 'Crumpsall'],
  },
  harpurhey: {
    region: 'Greater Manchester',
    nearby: ['Moston', 'Blackley', 'Cheetham Hill', 'Collyhurst', 'Newton Heath', 'Miles Platting'],
  },
  gorton: {
    region: 'Greater Manchester',
    nearby: ['Ardwick', 'Longsight', 'Levenshulme', 'Openshaw', 'Denton', 'Reddish'],
  },
  levenshulme: {
    region: 'Greater Manchester',
    nearby: ['Gorton', 'Longsight', 'Didsbury', 'Fallowfield', 'Stockport', 'Heaton Chapel'],
  },
  openshaw: {
    region: 'Greater Manchester',
    nearby: ['Ardwick', 'Gorton', 'Droylsden', 'Ancoats', 'Newton Heath', 'Clayton'],
  },
  denton: {
    region: 'Greater Manchester',
    nearby: ['Stockport', 'Droylsden', 'Openshaw', 'Hyde', 'Audenshaw', 'Reddish'],
  },
  droylsden: {
    region: 'Greater Manchester',
    nearby: ['Openshaw', 'Denton', 'Ashton-under-Lyne', 'Failsworth', 'Stalybridge', 'Audenshaw'],
  },
  'ashton-under-lyne': {
    region: 'Greater Manchester',
    nearby: ['Oldham', 'Droylsden', 'Stalybridge', 'Hyde', 'Tameside', 'Mossley'],
  },
}

export default cityData
