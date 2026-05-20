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
}

export default cityData
