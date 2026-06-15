// Region and nearby areas for each city — used to generate unique page content
const cityData = {
  london: {
    region: 'Greater London',
    nearby: ["Westminster","Camden","Islington","Hammersmith","Wandsworth","Lambeth","Southwark","Tower Hamlets","Hackney","Newham","Greenwich","Lewisham","Croydon","Bromley","Ealing","Hounslow","Haringey","Enfield","Barnet","Brent","Harrow","Hillingdon","Redbridge","Havering","Bexley","Kingston upon Thames","Richmond upon Thames","Merton","Sutton","City of London","Mayfair","Knightsbridge","Chelsea","Kensington","Soho","Marylebone","Holborn","Covent Garden","Paddington","Notting Hill","Victoria","Waterloo","London Bridge","Canary Wharf","Stratford","Whitechapel","Shoreditch","Ilford","Romford","Dagenham","Woolwich","Eltham","Brixton","Peckham","Clapham","Dulwich","Wimbledon","Uxbridge","Wembley","Acton","Chiswick","Finchley","Hampstead","Muswell Hill","Tottenham","Wood Green"],
  },
  manchester: {
    region: 'Greater Manchester',
    nearby: ["Manchester City Centre","Salford","Trafford","Stockport","Tameside","Oldham","Rochdale","Bury","Bolton","Wigan","Altrincham","Sale","Stretford","Urmston","Didsbury","Chorlton","Withington","Fallowfield","Hulme","Ancoats","Northern Quarter","Deansgate","Castlefield","Moss Side","Cheetham Hill","Harpurhey","Gorton","Levenshulme","Longsight","Rusholme","Wythenshawe","Eccles","Swinton","Prestwich","Whitefield","Radcliffe","Ashton-under-Lyne","Hyde","Denton","Stalybridge","Droylsden","Leigh","Walkden","Middleton","Heywood","Horwich","Westhoughton","Atherton"],
  },
  birmingham: {
    region: 'West Midlands',
    nearby: ["Birmingham City Centre","Edgbaston","Selly Oak","Harborne","Kings Heath","Moseley","Handsworth","Erdington","Sutton Coldfield","Perry Barr","Yardley","Sheldon","Hall Green","Acocks Green","Northfield","Longbridge","Hodge Hill","Small Heath","Sparkhill","Sparkbrook","Aston","Ladywood","Quinton","Great Barr","Castle Vale","Oldbury","Halesowen","Stourbridge","Tipton","Bilston"],
  },
  leeds: {
    region: 'West Yorkshire',
    nearby: ["Leeds City Centre","Headingley","Hyde Park","Burley","Kirkstall","Horsforth","Pudsey","Armley","Bramley","Beeston","Hunslet","Holbeck","Middleton","Morley","Rothwell","Garforth","Seacroft","Cross Gates","Halton","Roundhay","Chapel Allerton","Moortown","Alwoodley","Guiseley","Yeadon","Otley","Rawdon","Farsley","Calverley","East Ardsley","West Ardsley","Tingley","Lofthouse"],
  },
  sheffield: {
    region: 'South Yorkshire',
    nearby: ["Sheffield City Centre","Attercliffe","Darnall","Handsworth","Manor","Gleadless","Heeley","Sharrow","Nether Edge","Meersbrook","Hillsborough","Walkley","Crookes","Broomhill","Ecclesall","Endcliffe","Ranmoor","Fulwood","Lodge Moor","Stannington","Loxley","Stocksbridge","Chapeltown","Ecclesfield","Parson Cross","Firth Park","Shiregreen","Brightside","Tinsley","Woodhouse","Beighton","Mosborough","Intake","Norton","Woodseats","Greenhill"],
  },
  liverpool: {
    region: 'Merseyside',
    nearby: ["Liverpool City Centre","Anfield","Everton","Toxteth","Kirkdale","Walton","Bootle","Aintree","Fazakerley","Norris Green","Croxteth","West Derby","Wavertree","Childwall","Woolton","Allerton","Mossley Hill","Garston","Speke","Edge Hill","Dingle","Vauxhall","Old Swan","Tuebrook","Broadgreen","Fairfield","Huyton","Prescot","Kirkby","Maghull","Litherland","Seaforth","Crosby","Waterloo","Formby","Southport","Halewood","Knowsley"],
  },
  bristol: {
    region: 'Bristol',
    nearby: ["Bristol City Centre","Clifton","Redland","Cotham","Bishopston","St Andrews","Montpelier","St Pauls","Easton","Lawrence Hill","St George","Fishponds","Kingswood","Hanham","Brislington","Knowle","Filwood","Hartcliffe","Bedminster","Southville","Hotwells","Avonmouth","Shirehampton","Lawrence Weston","Henbury","Westbury-on-Trym","Stoke Bishop","Sea Mills","Patchway","Filton","Bradley Stoke","Emersons Green","Longwell Green","Yate","Nailsea","Portishead","Clevedon"],
  },
  edinburgh: {
    region: 'City of Edinburgh',
    nearby: ["Livingston","Falkirk","Dunfermline","Kirkcaldy","Musselburgh","Dalkeith","Leith","Morningside","Portobello","Corstorphine","Stockbridge","Bruntsfield","Craigmillar","Sighthill","Wester Hailes","Pilton","Granton","Newhaven","Inverleith","Newington"],
  },
  glasgow: {
    region: 'Greater Glasgow',
    nearby: ["Paisley","Motherwell","Hamilton","East Kilbride","Clydebank","Rutherglen","Govanhill","Partick","Shawlands","Dennistoun","Pollokshields","Maryhill","Springburn","Easterhouse","Castlemilk","Govan","Ibrox","Finnieston","Merchant City","Hillhead","Anniesland"],
  },
  cardiff: {
    region: 'Cardiff',
    nearby: ["Cardiff City Centre","Cardiff Bay","Canton","Cathays","Roath","Adamsdown","Splott","Grangetown","Riverside","Butetown","Llanishen","Lisvane","Cyncoed","Whitchurch","Heath","Llandaff","Pontcanna","Ely","Caerau","Fairwater","St Mellons","Rumney","Llanrumney","Pentwyn","Trowbridge","Roath Park","Gabalfa","Birchgrove","Rhiwbina","Penylan","Radyr","Tongwynlais"],
  },
  newcastle: {
    region: 'Tyne and Wear',
    nearby: ["Newcastle City Centre","Quayside","Ouseburn","Jesmond","Heaton","Sandyford","Fenham","Elswick","Benwell","Scotswood","Walker","Byker","Gosforth","South Gosforth","High Heaton","Forest Hall","Killingworth","Wallsend","North Shields","Tynemouth","Whitley Bay","Longbenton","Benton","West Denton","Westerhope","Blakelaw","Kenton","Fawdon","Kingston Park","Lemington","Chapel House","Dinnington"],
  },
  nottingham: {
    region: 'Nottinghamshire',
    nearby: ["Nottingham City Centre","The Lace Market","Hockley","Arboretum","St Anns","Hyson Green","Radford","Lenton","Dunkirk","The Meadows","Sneinton","Mapperley","Sherwood","Bestwood","Basford","Bulwell","Aspley","Bilborough","Wollaton","Beeston","Chilwell","Clifton","West Bridgford","Ruddington","Arnold","Carlton","Gedling","Netherfield","Colwick","Hucknall"],
  },
  leicester: {
    region: 'Leicestershire',
    nearby: ["Leicester City Centre","Highfields","Belgrave","Spinney Hills","St Matthews","Westcotes","Clarendon Park","Knighton","Oadby","Wigston","Evington","Hamilton","Thurmaston","Birstall","Beaumont Leys","Glenfield","Braunstone Town","Aylestone","New Parks","Rushey Mead","Stoneygate","Eyres Monsell","Syston"],
  },
  coventry: {
    region: 'West Midlands',
    nearby: ["Coventry City Centre","Earlsdon","Chapelfields","Coundon","Radford","Hillfields","Stoke","Binley","Wyken","Stoke Heath","Tile Hill","Canley","Whitley","Cheylesmore","Allesley","Keresley","Holbrooks","Longford","Foleshill","Bell Green","Walsgrave","Finham","Styvechale","Mount Nod","Wood End","Willenhall","Exhall"],
  },
  brighton: {
    region: 'East Sussex',
    nearby: ["Brighton City Centre","Hove","Kemptown","Hanover","Elm Grove","Queens Park","Round Hill","Preston Park","Fiveways","Patcham","Hollingbury","Moulsecoomb","Bevendean","Whitehawk","Woodingdean","Rottingdean","Saltdean","Withdean","Aldrington","Portslade","Mile Oak","Shoreham-by-Sea","Peacehaven","Newhaven","Lewes"],
  },
  southampton: {
    region: 'Hampshire',
    nearby: ["Southampton City Centre","Portswood","Highfield","Bassett","Swaythling","Shirley","Freemantle","Millbrook","Redbridge","Totton","Nursling","Lordshill","Coxford","Maybush","Woolston","Sholing","Bitterne","Bitterne Park","Thornhill","Itchen","Weston","Peartree Green","Hedge End","Eastleigh","Chandlers Ford","Hythe","Netley","Hamble-le-Rice","Marchwood"],
  },
  reading: {
    region: 'Berkshire',
    nearby: ["Reading Town Centre","Caversham","Caversham Heights","Tilehurst","West Reading","East Reading","Whitley","Whitley Wood","Earley","Lower Earley","Woodley","Shinfield","Southcote","Coley","Katesgrove","Newtown","Emmer Green","Pangbourne","Theale","Burghfield","Calcot","Norcot"],
  },
  oxford: {
    region: 'Oxfordshire',
    nearby: ["Oxford City Centre","Jericho","Summertown","Headington","Cowley","East Oxford","North Oxford","West Oxford","St Clements","Iffley","Littlemore","Blackbird Leys","Rose Hill","Barton","Marston","Wolvercote","Cutteslowe","Botley","North Hinksey","Osney","Kennington","Abingdon","Kidlington","Wheatley","Eynsham","Didcot","Bicester"],
  },
  cambridge: {
    region: 'Cambridgeshire',
    nearby: ["Cambridge City Centre","Chesterton","Newnham","Castle Hill","Arbury","Kings Hedges","Abbey","Romsey Town","Petersfield","Coleridge","Trumpington","Cherry Hinton","Mill Road area","Hills Road area","Grantchester","Girton","Histon","Impington","Milton","Waterbeach","Sawston","Stapleford","Great Shelford","Fulbourn","Ely","St Ives","Huntingdon"],
  },
  york: {
    region: 'North Yorkshire',
    nearby: ["York City Centre","Clifton","Rawcliffe","Skelton","Bootham","Heworth","Layerthorpe","Fulford","Heslington","Acomb","Foxwood","Dringhouses","Woodthorpe","Holgate","Tang Hall","South Bank","Fishergate","Micklegate","Clifton Moor","Osbaldwick","Haxby","Wigginton","Strensall","Huntington","Upper Poppleton","Nether Poppleton","Bishopthorpe","Copmanthorpe","Elvington","Wheldrake","Stamford Bridge"],
  },
  exeter: {
    region: 'Devon',
    nearby: ["Exeter City Centre","St Thomas","St Davids","Heavitree","Mount Pleasant","Pennsylvania","Polsloe","Pinhoe","Wonford","Alphington","Exwick","Beacon Heath","Whipton","Topsham","Countess Wear","St Leonards","Matford","Marsh Barton","Ide","Clyst St Mary","Clyst Heath","Broadfields","Crediton","Exminster","Ottery St Mary","Dawlish","Teignmouth"],
  },
  plymouth: {
    region: 'Devon',
    nearby: ["Plymouth City Centre","Barbican","Hoe","Mutley","Lipson","St Judes","Stoke","Peverell","Milehouse","Greenbank","Hartley","Mannamead","Crownhill","Eggbuckland","Efford","Honicknowle","Whitleigh","Devonport","Stonehouse","Keyham","Mount Gould","Compton","Plympton","Plymstock","Estover","Roborough","Derriford","Woolwell","Southway","Torpoint","Saltash","Ivybridge"],
  },
  derby: {
    region: 'Derbyshire',
    nearby: ["Derby City Centre","Allestree","Darley Abbey","Mickleover","Littleover","Normanton","Arboretum","Litchurch","Peartree","Rose Hill","Spondon","Chaddesden","Oakwood","Alvaston","Chellaston","Sinfin","Sunny Hill","Mackworth","Blagreaves","Wilmorton","Pride Park","Boulton Moor","Borrowash","Ockbrook","Elvaston","Sandiacre","Long Eaton","Ilkeston","Belper","Ripley","Swadlincote"],
  },
  'stoke-on-trent': {
    region: 'Staffordshire',
    nearby: ['Stafford', 'Crewe', 'Macclesfield', 'Newcastle-under-Lyme', 'Leek', 'Stone'],
  },
  hull: {
    region: 'East Yorkshire',
    nearby: ["Hull City Centre","Old Town","Avenues","Newland","Hessle Road","Anlaby Road","Beverley Road","Spring Bank","Holderness Road","Bransholme","Orchard Park","Derringham","Sutton-on-Hull","Bilton","Kingswood","Marfleet","Drypool","Anlaby Common","Willerby","Hessle","Beverley","Hedon","Cottingham"],
  },
  bradford: {
    region: 'West Yorkshire',
    nearby: ["Bradford City Centre","Manningham","Little Horton","Great Horton","Heaton","Frizinghall","Girlington","Lidget Green","Barkerend","Bradford Moor","Holme Wood","Odsal","Buttershaw","Wibsey","Wyke","Low Moor","Queensbury","Clayton","Thornton","Eccleshill","Idle","Thackley","Greengates","Fagley","Allerton","Sandy Lane","Shipley","Bingley","Baildon","Keighley","Saltaire","Pudsey"],
  },
  wolverhampton: {
    region: 'West Midlands',
    nearby: ["Wolverhampton City Centre","Blakenhall","All Saints","Whitmore Reans","Park Village","Ettingshall","Bilston","Willenhall","Wednesfield","Bushbury","Low Hill","Heath Town","Oxley","Tettenhall","Tettenhall Wood","Compton","Penn","Finchfield","Merry Hill","Fallings Park","Parkfields","Woodcross","Coseley","Sedgley","Tipton","Dudley","Walsall","Stourbridge","Kingswinford","Wednesbury"],
  },
  sunderland: {
    region: 'Tyne and Wear',
    nearby: ["Sunderland City Centre","Ashbrooke","Millfield","Hendon","Pallion","Pennywell","Southwick","Monkwearmouth","Roker","Seaburn","Fulwell","Castletown","Hylton Red House","Springwell","Ryhope","Silksworth","Doxford Park","Grangetown","Thorney Close","Ford Estate","Plains Farm","Barnes","Washington","Concord","Birtley","Chester-le-Street","Seaham","East Boldon","West Boldon"],
  },
  'milton-keynes': {
    region: 'Buckinghamshire',
    nearby: ['Northampton', 'Bedford', 'Luton', 'Oxford', 'Bletchley', 'Newport Pagnell'],
  },
  portsmouth: {
    region: 'Hampshire',
    nearby: ["Portsmouth City Centre","Southsea","Old Portsmouth","Portsea","Fratton","Milton","Copnor","Baffins","Hilsea","Drayton","Farlington","Cosham","Wymering","North End","Stamshaw","Buckland","Landport","Eastney","Tipner","Paulsgrove","Anchorage Park","Havant","Waterlooville","Gosport","Fareham","Lee-on-the-Solent"],
  },
  norwich: {
    region: 'Norfolk',
    nearby: ["Norwich City Centre","Eaton","Earlham","Bowthorpe","Mile Cross","Thorpe St Andrew","Sprowston","Hellesdon","Old Catton","New Catton","Heartsease","Catton Grove","Lakenham","Tuckswood","Brundall","Thorpe Hamlet","Riverside","Golden Triangle","Heigham Grove","Costessey","Long Stratton","Wymondham","Aylsham","Dereham","Watton","North Walsham","Great Yarmouth"],
  },
  luton: {
    region: 'Bedfordshire',
    nearby: ["Luton Town Centre","Bury Park","High Town","Farley Hill","Stopsley","Wigmore","Marsh Farm","Lewsey Farm","Leagrave","Round Green","Bramingham","Sundon Park","Biscot","Park Town","New Town","Dallow","Putteridge","Butterfield Green","Houghton Regis","Dunstable","Harpenden","Wheathampstead","Stevenage"],
  },
  watford: {
    region: 'Hertfordshire',
    nearby: ["Watford Town Centre","North Watford","West Watford","South Watford","Oxhey","Oxhey Village","Bushey","Bushey Heath","Leavesden","Abbots Langley","Garston","Woodside","Nascot Wood","Cassiobury","Holywell","Croxley Green","Rickmansworth","Stanmore","Radlett","Hemel Hempstead","Kings Langley","Borehamwood","Elstree"],
  },
  slough: {
    region: 'Berkshire',
    nearby: ["Slough Town Centre","Chalvey","Cippenham","Britwell","Langley","Farnham Royal","Burnham","Colnbrook","Wexham","Upton","Manor Park","Haymill","Lynch Hill","Windsor","Eton","Datchet","Maidenhead","Iver","West Drayton"],
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
    nearby: ["Hatfield Town Centre","Old Hatfield","Birchwood","Roe Green","South Hatfield","North Hatfield","Ellenbrook","Stanborough","The Ryde","Oxlease","Roehyde","Welham Green","Brookmans Park","St Albans","Potters Bar","Welwyn Garden City","Sandridge","Colney Heath"],
  },
  basildon: {
    region: 'Essex',
    nearby: ["Basildon Town Centre","Pitsea","Laindon","Vange","Fryerns","Lee Chapel North","Lee Chapel South","Netteswell","Ghyllgrove","Felmores","Craylands","Chalvedon","Kingswood","Noak Bridge","Great Berry","Langdon Hills","Dunton","Wickford","Billericay","Rayleigh","Bowers Gifford","South Benfleet","Canvey Island","Stanford-le-Hope","Corringham","Nevendon"],
  },
  'southend-on-sea': {
    region: 'Essex',
    nearby: ['Basildon', 'Chelmsford', 'Colchester', 'Rayleigh', 'Rochford', 'Canvey Island'],
  },
  chelmsford: {
    region: 'Essex',
    nearby: ["Chelmsford City Centre","Springfield","Moulsham","Moulsham Lodge","Great Baddow","Little Baddow","Galleywood","Chelmer Village","Writtle","Widford","Old Moulsham","Broomfield","Boreham","Roxwell","Danbury","Sandon","South Woodham Ferrers","Billericay","Witham","Maldon","Ingatestone","Hatfield Peverel","Stock"],
  },
  colchester: {
    region: 'Essex',
    nearby: ["Colchester City Centre","Lexden","Mile End","Highwoods","Greenstead","New Town","Old Heath","Shrub End","St Annes","St Johns","Berechurch","Parsons Heath","Prettygate","Stanway","Copford","Wivenhoe","Rowhedge","Tiptree","Marks Tey","West Bergholt","Ardleigh","Dedham","Layer-de-la-Haye","Elmstead Market","Boxted","Coggeshall","Manningtree","Clacton-on-Sea"],
  },
  ipswich: {
    region: 'Suffolk',
    nearby: ["Ipswich Town Centre","Waterfront","Stoke","Chantry","Gainsborough","Maidenhall","Whitehouse","Whitton","Castle Hill","Sproughton","Pinewood","Ravenswood","Purdis Farm","Rushmere St Andrew","Kesgrave","Martlesham","Martlesham Heath","Woodbridge","East Bergholt","Hadleigh","Felixstowe","Bramford","Claydon","Great Blakenham","Copdock","Washbrook","Capel St Mary","Nacton","Belstead"],
  },
  peterborough: {
    region: 'Cambridgeshire',
    nearby: ["Peterborough City Centre","Dogsthorpe","Eastfield","Millfield","Walton","Werrington","Bretton","Westwood","Ravensthorpe","Stanground","Orton Goldhay","Orton Malborne","Orton Longueville","Orton Wistow","Fengate","New England","Woodston","Longthorpe","Paston","Gunthorpe","Eye","Eye Green","Yaxley","Hampton","Hampton Hargate","Hampton Vale","Castor","Wansford","Alwalton","Helpston","Deeping St James","Stamford","Whittlesey","Market Deeping"],
  },
  northampton: {
    region: 'Northamptonshire',
    nearby: ["Northampton Town Centre","Abington","Abington Vale","Kingsthorpe","Kingsthorpe Hollow","Kingsthorpe Grove","Duston","New Duston","Old Duston","Semilong","St James","Far Cotton","East Hunsbury","West Hunsbury","Upton","Sixfields","St Crispin","Briar Hill","Boothville","Lings","Lumbertubs","Spinney Hill","Thorplands","Rectory Farm","Blackthorn","Southfields","Weston Favell","Billing","Hardingstone","Wootton","Collingtree","Grange Park","Moulton","Overstone","Earls Barton","Wellingborough","Towcester","Daventry"],
  },
  kettering: {
    region: 'Northamptonshire',
    nearby: ["Kettering Town Centre","Barton Seagrave","Wicksteed","Weekley","Pytchley","Brambleside","Ise Lodge","Avondale","Northfield","Headlands","Kingsley","Desborough","Corby","Burton Latimer","Rothwell","Wellingborough","Broughton","Cranford","Geddington","Rushton"],
  },
  bedford: {
    region: 'Bedfordshire',
    nearby: ["Bedford Town Centre","Castle","De Parys","Goldington","Queens Park","Brickhill","Putnoe","Kempston","Kempston West End","Elstow","Wixams","Shortstown","Clapham","Bromham","Biddenham","Great Denham","Oakley","Renhold","Wilstead","Cople","Cotton End","Sharnbrook","Wootton","Stewartby","Marston Moretaine","Sandy","Biggleswade","Ampthill","Flitwick","St Neots"],
  },
  swindon: {
    region: 'Wiltshire',
    nearby: ["Swindon Town Centre","Old Town","Eastcott","Rodbourne","Rodbourne Cheney","Pinehurst","Walcot","Park North","Park South","Liden","Eldene","Covingham","Nythe","Greenmeadow","Moredon","Penhill","Haydon Wick","Abbey Meads","St Andrews Ridge","Taw Hill","Westlea","Freshbrook","Grange Park","Toothill","Lydiard Millicent","Wroughton","Stratton","Stratton St Margaret","South Marston","Blunsdon","Highworth","Royal Wootton Bassett","Marlborough","Cricklade","Calne"],
  },
  gloucester: {
    region: 'Gloucestershire',
    nearby: ["Gloucester City Centre","Longlevens","Abbeydale","Hucclecote","Matson","Kingsholm","Podsmead","Barton","Barnwood","Hempsted","Churchdown","Brockworth","Quedgeley","Hardwicke","Cheltenham","Stroud","Cirencester","Tewkesbury","Dursley","Lydney","Cinderford","Coleford","Newent","Stonehouse","Nailsworth"],
  },
  cheltenham: {
    region: 'Gloucestershire',
    nearby: ["Cheltenham Town Centre","Montpellier","Lansdown","Pittville","St Pauls","St Marks","Leckhampton","Charlton Kings","Prestbury","Up Hatherley","Hatherley","Warden Hill","Rowanfield","Hesters Way","Springbank","Arle","Swindon Village","Benhall","Battledown","Prestbury Hills","Alstone","Oakley","Fairview","Charlton Park","Naunton Park","Churchdown","Bishops Cleeve","Tewkesbury","Gloucester","Winchcombe","Staverton"],
  },
  worcester: {
    region: 'Worcestershire',
    nearby: ["Worcester City Centre","St Johns","St Clements","Arboretum","Barbourne","Diglis","Ronkswood","Warndon","Warndon Villages","St Peters","Battenhall","Red Hill","Rainbow Hill","Lowesmoor","Claines","Northwick","Henwick","Dines Green","Tolladine","Merrimans Hill","Whittington","Powick","Kempsey","Norton","Stoulton","Fernhill Heath","Malvern","Droitwich Spa","Pershore","Evesham","Upton-upon-Severn"],
  },
  hereford: {
    region: 'Herefordshire',
    nearby: ["Hereford City Centre","Whitecross","Aylestone Hill","College Estate","Belmont","Newton Farm","Hunderton","Tupsley","Bobblestock","Holmer","Portfields","Widemarsh","Kings Acre","Redhill","Saxon Gate","Grafton","Breinton","Lugwardine","Hampton Bishop","Bartestree","Withington","Clehonger","Madley","Kingstone","Bodenham","Holme Lacy","Rotherwas Industrial Estate","Ross-on-Wye","Leominster","Ledbury","Bromyard"],
  },
  telford: {
    region: 'Shropshire',
    nearby: ["Telford Town Centre","Wellington","Oakengates","Dawley","Madeley","Ironbridge","Coalbrookdale","Jackfield","Ketley","St Georges","Donnington","Trench","Hadley","Leegomery","Priorslee","Randlay","Hollinswood","Lawley","Lawley Village","Muxton","Lilleshall","Shifnal","Albrighton","Broseley","Newport","Bridgnorth","Aqueduct","Woodside"],
  },
  shrewsbury: {
    region: 'Shropshire',
    nearby: ["Shrewsbury Town Centre","Abbey Foregate","Belle Vue","Castlefields","Coleham","Coton Hill","Harlescott","Sundorne","Monkmoor","Greenfields","Radbrook","Meole Brace","Sutton Farm","Frankwell","Copthorne","Kingsland","Bicton Heath","Bowbrook","Uffington","Bayston Hill","Condover","Dorrington","Pontesbury","Baschurch","Wem","Atcham","Hanwood","Minsterley"],
  },
  wrexham: {
    region: 'North Wales',
    nearby: ["Wrexham Town Centre","Acton","Caia Park","Rhosddu","Maesydre","Rhosnesni","Garden Village","Hightown","Bersham","Coedpoeth","Rhosllanerchrugog","Ruabon","Gwersyllt","Llay","Broughton","Gresford","Rossett","Marchwiel","New Broughton","Brymbo","Minera","Bradley","Cefn Mawr","Chirk","Bangor-on-Dee","Holt","Oswestry","Ellesmere"],
  },
  blackpool: {
    region: 'Lancashire',
    nearby: ["Blackpool Town Centre","North Shore","South Shore","Bispham","Layton","Marton","Marton Moss","Squires Gate","South Beach","Anchorsholme","Cleveleys","Norbreck","Thornton-Cleveleys","Fleetwood","Poulton-le-Fylde","St Annes","Lytham St Annes","Great Marton","Little Marton","Grange Park","Hawes Side"],
  },
  preston: {
    region: 'Lancashire',
    nearby: ["Preston City Centre","Ashton-on-Ribble","Fulwood","Fishwick","Ribbleton","Deepdale","Plungington","Ingol","Broadgate","Frenchwood","Avenham","Moor Park","Cadley","Lea","Cottam","Broughton","Ashton","Penwortham","Walton-le-Dale","Higher Walton","Lower Penwortham","Grimsargh","Longton","Lostock Hall","Bamber Bridge","Leyland","Kirkham","Lytham","Chorley","Garstang"],
  },
  blackburn: {
    region: 'Lancashire',
    nearby: ["Blackburn Town Centre","Ewood","Mill Hill","Audley","Bastwell","Shadsworth","Intack","Little Harwood","Roe Lee","Wensley Fold","Beardwood","Pleasington","Feniscowles","Livesey","Higher Audley","Bank Top","Griffin","Whitebirk","Cherry Tree","Rishton","Darwen","Accrington","Great Harwood","Oswaldtwistle","Clayton-le-Moors"],
  },
  bolton: {
    region: 'Greater Manchester',
    nearby: ["Bolton Town Centre","Great Lever","Little Lever","Farnworth","Kearsley","Halliwell","Heaton","Tonge Moor","Breightmet","Astley Bridge","Sharples","Smithills","Harwood","Bradshaw","Egerton","Bromley Cross","Blackrod","Horwich","Lostock","Westhoughton","Walkden","Little Hulton","Daisy Hill","Wingates","Kearsley Moor","Tonge Fold","Middle Hulton","Burnden","Rumworth"],
  },
  warrington: {
    region: 'Cheshire',
    nearby: ["Warrington Town Centre","Orford","Padgate","Birchwood","Latchford","Stockton Heath","Great Sankey","Penketh","Westbrook","Callands","Bewsey","Fairfield","Howley","Lymm","Appleton","Grappenhall","Thelwall","Woolston","Bruche","Croft","Culcheth","Glazebury","Winwick","Burtonwood","Rixton","Fearnhead","Dallam","Orford Green","Sankey Bridges","Moore","Stretton","Hatton"],
  },
  stockport: {
    region: 'Greater Manchester',
    nearby: ["Stockport Town Centre","Heaton Moor","Heaton Chapel","Heaton Mersey","Cheadle","Cheadle Hulme","Gatley","Bramhall","Hazel Grove","Marple","Marple Bridge","Reddish","Edgeley","Davenport","Adswood","Shaw Heath","Offerton","Woodley","Bredbury","Romiley","Compstall","Great Moor","Tiviot Dale","Portwood","Brinnington","High Lane","Norbury","Poynton","Disley"],
  },
  oldham: {
    region: 'Greater Manchester',
    nearby: ["Oldham Town Centre","Chadderton","Failsworth","Royton","Shaw","Crompton","Saddleworth","Lees","Greenfield","Uppermill","Delph","Fitton Hill","Werneth","Hollinwood","Coldhurst","Waterhead","Derker","Alt","Moorside"],
  },
  rochdale: {
    region: 'Greater Manchester',
    nearby: ["Rochdale Town Centre","Milnrow","Newhey","Littleborough","Heywood","Castleton","Norden","Bamford","Balderstone","Spotland","Deeplish","Wardle","Whitworth","Kingsway","Firgrove"],
  },
  huddersfield: {
    region: 'West Yorkshire',
    nearby: ["Huddersfield Town Centre","Lindley","Marsh","Almondbury","Dalton","Moldgreen","Birkby","Fartown","Newsome","Fixby","Bradley","Lockwood","Waterloo","Paddock","Deighton","Oakes","Lepton","Kirkheaton","Honley","Holmfirth"],
  },
  wakefield: {
    region: 'West Yorkshire',
    nearby: ["Wakefield City Centre","Ossett","Horbury","Alverthorpe","Lupset","Agbrigg","Flanshaw","Sandal","Outwood","Stanley","Wrenthorpe","Crofton","Normanton","Featherstone","Pontefract","Castleford","Knottingley"],
  },
  doncaster: {
    region: 'South Yorkshire',
    nearby: ["Doncaster City Centre","Balby","Hexthorpe","Intake","Bentley","Edlington","Armthorpe","Bessacarr","Cantley","Wheatley","Rossington","Sprotbrough","Thorne","Moorends","Adwick-le-Street","Stainforth","Finningley","Askern"],
  },
  rotherham: {
    region: 'South Yorkshire',
    nearby: ["Rotherham Town Centre","Eastwood","Masbrough","Kimberworth","Wath-upon-Dearne","Swinton","Dinnington","Maltby","Brinsworth","Treeton","Thurcroft","Rawmarsh","Greasbrough","Wickersley","Aston","Canklow","Dalton"],
  },
  middlesbrough: {
    region: 'North Yorkshire',
    nearby: ["Middlesbrough Town Centre","Linthorpe","Acklam","North Ormesby","Berwick Hills","Easterside","Marton","Coulby Newham","Hemlington","Grove Hill","Park End","Ormesby","Thornaby","Stockton-on-Tees","Eston","South Bank"],
  },
  darlington: {
    region: 'County Durham',
    nearby: ["Darlington Town Centre","Cockerton","Harrowgate Hill","Haughton-le-Skerne","North Road","Eastbourne","Faverdale","Red Hall","Mowden","Middleton St George","Hurworth","Heighington"],
  },
  hartlepool: {
    region: 'County Durham',
    nearby: ["Hartlepool Town Centre","Headland","Seaton Carew","Owton Manor","Fens","Rossmere","Rift House","Throston","Clavering","Brierton","Greatham"],
  },
  dundee: {
    region: 'Angus',
    nearby: ["Dundee City Centre","Broughty Ferry","West End","Lochee","Stobswell","Coldside","Maryfield","Fintry","Douglas","Hilltown","Whitfield","Charleston","Downfield"],
  },
  aberdeen: {
    region: 'Aberdeenshire',
    nearby: ["Aberdeen City Centre","Dyce","Bridge of Don","Torry","Old Aberdeen","Rosemount","Woodside","Mastrick","Tillydrone","Bucksburn","Cults","Cove Bay","Kingswells","Mannofield"],
  },
  inverness: {
    region: 'Highland',
    nearby: ["Inverness City Centre","Culloden","Smithton","Balloch","Westhill","Crown","Dalneigh","Hilton","Merkinch","Lochardil","Raigmore","Drakies"],
  },
  swansea: {
    region: 'West Glamorgan',
    nearby: ["Swansea City Centre","Uplands","Brynmill","Sketty","Morriston","Gorseinon","Llansamlet","Fforestfach","Cockett","Mayhill","St Thomas","Port Tennant","Killay","Mumbles"],
  },
  newport: {
    region: 'Monmouthshire',
    nearby: ["Newport City Centre","Pill","St Julians","Maindee","Alway","Bettws","Ringland","Rogerstone","Caerleon","Llanwern","Spytty","Stow Hill"],
  },
  bangor: {
    region: 'Gwynedd',
    nearby: ["Bangor City Centre","Upper Bangor","Hirael","Garth","Glanadda","Llandegai","Penrhosgarnedd","Treborth","Caernarfon","Conwy","Llandudno","Beaumaris","Holyhead","Porthmadog"],
  },
  // ── New cities added May 2026 ──────────────────────────────────────────
  dewsbury: {
    region: 'West Yorkshire',
    nearby: ["Dewsbury Town Centre","Savile Town","Ravensthorpe","Batley Carr","Thornhill","Earlsheaton","Chickenley","Hanging Heaton","Westtown","Leeds","Huddersfield","Wakefield","Bradford","Batley","Ossett"],
  },
  halifax: {
    region: 'West Yorkshire',
    nearby: ["Halifax Town Centre","Boothtown","Ovenden","Illingworth","King Cross","Sowerby Bridge","Siddal","Hipperholme","Brighouse","Elland","Bradford","Huddersfield","Leeds"],
  },
  castleford: {
    region: 'West Yorkshire',
    nearby: ["Castleford Town Centre","Airedale","Ferrybridge","Whitwood","Glasshoughton","Pontefract","Cutsyke","Townville","Wakefield","Leeds"],
  },
  wigan: {
    region: 'Greater Manchester',
    nearby: ["Wigan Town Centre","Worsley Mesnes","Pemberton","Ince-in-Makerfield","Leigh","Ashton-in-Makerfield","Hindley","Orrell","Standish","Tyldesley","Atherton","Bolton","Manchester"],
  },
  barnsley: {
    region: 'South Yorkshire',
    nearby: ["Barnsley Town Centre","Kendray","Athersley","Monk Bretton","Dodworth","Worsbrough","Goldthorpe","Thurnscoe","Hoyland","Royston","Cudworth","Darfield","Sheffield","Rotherham","Wakefield"],
  },
  gateshead: {
    region: 'Tyne and Wear',
    nearby: ["Gateshead Town Centre","Bensham","Deckham","Felling","Dunston","Low Fell","Team Valley","Pelaw","Ryton","Blaydon","Whickham","Newcastle","Sunderland","Durham"],
  },
  basingstoke: {
    region: 'Hampshire',
    nearby: ["Basingstoke Town Centre","Brighton Hill","Winklebury","Kempshott","Chineham","Popley","South Ham","Oakridge","Lychpit","Reading","Winchester","Andover","Farnborough","Fleet","Hook"],
  },
  hampshire: {
    region: 'Hampshire',
    nearby: ["Winchester","Southampton","Portsmouth","Basingstoke","Andover","Farnborough","Aldershot","Gosport","Fareham","Havant","Eastleigh","Lymington","New Milton"],
  },
  wokingham: {
    region: 'Berkshire',
    nearby: ["Wokingham Town Centre","Woosehill","Emmbrook","Finchampstead","Arborfield","Winnersh","Earley","Bracknell","Woodley","Reading"],
  },
  bournemouth: {
    region: 'Dorset',
    nearby: ["Bournemouth Town Centre","Boscombe","Westbourne","Southbourne","Winton","Charminster","Springbourne","Kinson","Wallisdown","Poole","Christchurch"],
  },
  thurrock: {
    region: 'Essex',
    nearby: ["Grays","Tilbury","Stanford-le-Hope","Corringham","Chafford Hundred","Purfleet","South Ockendon","Aveley","West Thurrock","Basildon","Brentwood","Dartford"],
  },
  kent: {
    region: 'Kent',
    nearby: ["Maidstone","Canterbury","Ashford","Dartford","Gravesend","Sevenoaks","Tonbridge","Tunbridge Wells","Sittingbourne","Gillingham","Chatham","Rochester","Faversham","Herne Bay","Margate","Ramsgate"],
  },
  harrogate: {
    region: 'North Yorkshire',
    nearby: ["Harrogate Town Centre","Knaresborough","Starbeck","Bilton","Pannal","Ripon","Boroughbridge","Leeds","York"],
  },
  canterbury: {
    region: 'Kent',
    nearby: ["Canterbury City Centre","St Dunstans","Wincheap","Hales Place","Harbledown","Thanington","Sturry","Whitstable","Herne Bay","Ashford","Maidstone","Dover","Folkestone"],
  },
  maidstone: {
    region: 'Kent',
    nearby: ["Maidstone Town Centre","Allington","Bearsted","Barming","Grove Green","Downswood","Penenden Heath","Aylesford","West Malling","Canterbury","Ashford","Tunbridge Wells","Sittingbourne","Medway","Tonbridge"],
  },
  knowsley: {
    region: 'Merseyside',
    nearby: ["Kirkby","Huyton","Prescot","Halewood","Whiston","Roby","Stockbridge Village","Cronton","Liverpool","St Helens"],
  },
  poole: {
    region: 'Dorset',
    nearby: ["Poole Town Centre","Parkstone","Ashley Cross","Canford Cliffs","Sandbanks","Branksome","Hamworthy","Broadstone","Upton","Bournemouth","Christchurch","Wareham","Swanage"],
  },
  guildford: {
    region: 'Surrey',
    nearby: ["Guildford Town Centre","Burpham","Merrow","Stoughton","Onslow Village","Shalford","Godalming","Woking","Farnham","Leatherhead","Farnborough"],
  },
  horsham: {
    region: 'West Sussex',
    nearby: ["Horsham Town Centre","Broadbridge Heath","Southwater","Roffey","Warnham","Partridge Green","Crawley","Billingshurst","Guildford","Brighton","Worthing"],
  },
  eastleigh: {
    region: 'Hampshire',
    nearby: ["Eastleigh Town Centre","Boyatt Wood","Chandlers Ford","Bishopstoke","Fair Oak","Hedge End","Southampton","Winchester","Fareham"],
  },
  havant: {
    region: 'Hampshire',
    nearby: ["Havant Town Centre","Leigh Park","Bedhampton","Emsworth","Waterlooville","Hayling Island","Rowlands Castle","Portsmouth","Fareham","Chichester"],
  },
  ashford: {
    region: 'Kent',
    nearby: ["Ashford Town Centre","Kennington","Willesborough","Kingsnorth","South Willesborough","Park Farm","Tenterden","New Romney","Canterbury","Maidstone","Folkestone"],
  },
  fareham: {
    region: 'Hampshire',
    nearby: ["Fareham Town Centre","Portchester","Stubbington","Hill Head","Lee-on-the-Solent","Gosport","Whiteley","Locks Heath","Portsmouth","Southampton"],
  },
  'tunbridge-wells': {
    region: 'Kent',
    nearby: ['Maidstone', 'Tonbridge', 'Crowborough', 'Sevenoaks', 'Paddock Wood', 'Cranbrook'],
  },
  chorley: {
    region: 'Lancashire',
    nearby: ["Chorley Town Centre","Adlington","Coppull","Euxton","Clayton-le-Woods","Whittle-le-Woods","Buckshaw Village","Leyland","Preston","Wigan","Bolton"],
  },
  carlisle: {
    region: 'Cumbria',
    nearby: ["Carlisle City Centre","Denton Holme","Morton","Harraby","Stanwix","Botcherby","Currock","Brampton","Penrith","Workington","Whitehaven","Dumfries","Hexham"],
  },
  gillingham: {
    region: 'Kent',
    nearby: ["Gillingham Town Centre","Rainham","Twydall","Hempstead","Parkwood","Wigmore","Chatham","Rochester","Maidstone","Sittingbourne","Medway","Faversham"],
  },
  birkenhead: {
    region: 'Merseyside',
    nearby: ["Birkenhead Town Centre","Tranmere","Oxton","Claughton","Rock Ferry","Prenton","New Ferry","Wallasey","Liscard","Bebington","Liverpool","Ellesmere Port","Chester","Heswall"],
  },
  worthing: {
    region: 'West Sussex',
    nearby: ["Worthing Town Centre","Goring-by-Sea","Durrington","Broadwater","West Worthing","East Worthing","Lancing","Shoreham-by-Sea","Brighton","Horsham","Chichester"],
  },
  lichfield: {
    region: 'Staffordshire',
    nearby: ["Lichfield City Centre","Boley Park","Darwin Park","Burntwood","Streethay","Fradley","Whittington","Birmingham","Tamworth","Burton upon Trent","Stafford","Sutton Coldfield","Rugeley"],
  },
  lewes: {
    region: 'East Sussex',
    nearby: ["Lewes Town Centre","Malling","Southover","Cliffe","Ringmer","Kingston","Newhaven","Seaford","Brighton","Eastbourne","Haywards Heath"],
  },
  'great-yarmouth': {
    region: 'Norfolk',
    nearby: ['Norwich', 'Lowestoft', 'Beccles', 'Bungay', 'Acle', 'Caister-on-Sea'],
  },
  eastbourne: {
    region: 'East Sussex',
    nearby: ["Eastbourne Town Centre","Meads","Old Town","Hampden Park","Roselands","Langney","Sovereign Harbour","Polegate","Pevensey","Brighton","Hastings","Lewes","Hailsham","Bexhill-on-Sea","Seaford"],
  },
  'west-dorset': {
    region: 'Dorset',
    nearby: ['Dorchester', 'Bridport', 'Weymouth', 'Sherborne', 'Yeovil', 'Beaminster'],
  },
  dartford: {
    region: 'Kent',
    nearby: ["Dartford Town Centre","Gravesend","Bexleyheath","Swanley","Sevenoaks","Thurrock","Erith","Bluewater","Bean","Crayford","Wilmington","Hawley"],
  },
  bromsgrove: {
    region: 'Worcestershire',
    nearby: ["Bromsgrove Town Centre","Catshill","Rubery","Sidemoor","Charford","Aston Fields","Alvechurch","Redditch","Birmingham","Worcester","Droitwich","Kidderminster","Solihull"],
  },
  bath: {
    region: 'Somerset',
    nearby: ["Bath City Centre","Oldfield Park","Bear Flat","Bathwick","Combe Down","Weston","Twerton","Larkhall","Keynsham","Midsomer Norton","Bristol","Frome","Chippenham","Trowbridge","Radstock"],
  },
  hastings: {
    region: 'East Sussex',
    nearby: ["Hastings Town Centre","St Leonards-on-Sea","Silverhill","Ore","Hollington","Old Town","Bexhill","Battle","Eastbourne","Rye","Tunbridge Wells","Tenterden"],
  },
  'market-harborough': {
    region: 'Leicestershire',
    nearby: ['Leicester', 'Kettering', 'Northampton', 'Rugby', 'Lutterworth', 'Corby'],
  },
  selby: {
    region: 'North Yorkshire',
    nearby: ["Selby Town Centre","Brayton","Thorpe Willoughby","Barlby","Sherburn-in-Elmet","Riccall","Tadcaster","York","Leeds","Wakefield","Pontefract","Goole"],
  },
  harlow: {
    region: 'Essex',
    nearby: ["Harlow Town Centre","Great Parndon","Bush Fair","Netteswell","Old Harlow","Church Langley","Sawbridgeworth","Epping","Bishops Stortford","Chelmsford","Hertford"],
  },
  tewkesbury: {
    region: 'Gloucestershire',
    nearby: ["Tewkesbury Town Centre","Ashchurch","Northway","Mitton","Twyning","Bishops Cleeve","Cheltenham","Gloucester","Worcester","Pershore","Evesham","Winchcombe"],
  },
  gosport: {
    region: 'Hampshire',
    nearby: ["Gosport Town Centre","Alverstoke","Lee-on-the-Solent","Elson","Forton","Hardway","Bridgemary","Fareham","Portsmouth","Stubbington"],
  },
  chester: {
    region: 'Cheshire',
    nearby: ["Chester City Centre","Hoole","Handbridge","Upton","Blacon","Saltney","Boughton","Christleton","Waverton","Ellesmere Port","Wrexham","Warrington","Macclesfield","Northwich"],
  },
  loughborough: {
    region: 'Leicestershire',
    nearby: ["Loughborough Town Centre","Shelthorpe","Thorpe Acre","Quorn","Mountsorrel","Barrow upon Soar","Shepshed","Leicester","Nottingham","Derby","Coalville","Melton Mowbray"],
  },
  boston: {
    region: 'Lincolnshire',
    nearby: ["Boston Town Centre","Fishtoft","Wyberton","Kirton","Skirbeck","Old Leake","Frampton","Sutterton","Spalding","Peterborough","Lincoln","Skegness","Sleaford"],
  },
  sittingbourne: {
    region: 'Kent',
    nearby: ["Sittingbourne Town Centre","Milton Regis","Kemsley","Murston","Borden","Iwade","Rainham","Faversham","Maidstone","Canterbury","Gillingham"],
  },
  bracknell: {
    region: 'Berkshire',
    nearby: ["Bracknell Town Centre","Easthampstead","Warfield","Binfield","Harmans Water","Great Hollands","Crown Wood","Crowthorne","Wokingham","Reading","Windsor","Farnborough","Camberley"],
  },
  keighley: {
    region: 'West Yorkshire',
    nearby: ["Keighley Town Centre","Ingrow","Silsden","Steeton","East Morton","West Morton","Utley","Haworth","Bingley","Bradford","Halifax","Skipton","Ilkley","Shipley"],
  },
  batley: {
    region: 'West Yorkshire',
    nearby: ["Batley Town Centre","Birstall","Hanging Heaton","Soothill","Staincliffe","Dewsbury","Morley","Heckmondwike","Leeds","Bradford","Wakefield"],
  },
  cheshunt: {
    region: 'Hertfordshire',
    nearby: ["Cheshunt Town Centre","Waltham Cross","Goffs Oak","Turnford","Flamstead End","Broxbourne","Hoddesdon","Enfield","Hertford","Ware"],
  },
  purbeck: {
    region: 'Dorset',
    nearby: ["Wareham","Swanage","Corfe Castle","Studland","Wool","Bere Regis","Sandford","Lytchett Matravers","Lytchett Minster","Upton","Langton Matravers","Kimmeridge","Bournemouth","Poole"],
  },
  wallsend: {
    region: 'Tyne and Wear',
    nearby: ["Wallsend Town Centre","Howdon","Willington Quay","Rosehill","Battle Hill","Hadrian Park","Walkergate","North Shields","Whitley Bay","Newcastle","Gateshead","Sunderland","Jarrow"],
  },
  'bexhill-on-sea': {
    region: 'East Sussex',
    nearby: ['Hastings', 'Eastbourne', 'Lewes', 'Battle', 'Rye', 'Hailsham'],
  },
  hoddesdon: {
    region: 'Hertfordshire',
    nearby: ["Hoddesdon Town Centre","Rye Park","Broxbourne","Wormley","Turnford","Cheshunt","Dobbs Weir","Nazeing","Roydon","Hertford","Ware","Harlow"],
  },
  worksop: {
    region: 'Nottinghamshire',
    nearby: ["Worksop Town Centre","Gateford","Kilton","Manton","Shireoaks","Carlton-in-Lindrick","Langold","Whitwell","Retford","Sheffield","Rotherham","Mansfield","Chesterfield"],
  },
  salisbury: {
    region: 'Wiltshire',
    nearby: ["Salisbury City Centre","Bemerton","Harnham","Laverstock","Milford","Bishopdown","Amesbury","Wilton","Downton","Southampton","Bournemouth","Winchester","Andover"],
  },
  ilkeston: {
    region: 'Derbyshire',
    nearby: ["Ilkeston Town Centre","Cotmanhay","Kirk Hallam","Hallam Fields","Little Hallam","West Hallam","Heanor","Long Eaton","Derby","Nottingham","Eastwood"],
  },
  southall: {
    region: 'West London',
    nearby: ["Southall Broadway","Norwood Green","Dormers Wells","Hanwell","Hayes","Ealing","Northolt","Greenford","Uxbridge","Slough","Perivale"],
  },
  accrington: {
    region: 'Lancashire',
    nearby: ["Accrington Town Centre","Church","Clayton-le-Moors","Oswaldtwistle","Baxenden","Huncoat","Altham","Rishton","Blackburn","Burnley","Nelson","Rossendale","Darwen"],
  },
  harpenden: {
    region: 'Hertfordshire',
    nearby: ["Harpenden Town Centre","Southdown","Batford","Roundwood","Kinsbourne Green","Wheathampstead","St Albans","Luton","Watford","Hemel Hempstead","Welwyn Garden City","Redbourn"],
  },
  ealing: {
    region: 'West London',
    nearby: ["Ealing Broadway","South Ealing","North Ealing","West Ealing","Acton","Hanwell","Greenford","Perivale","Brentford","Southall","Hayes","Northolt","Chiswick"],
  },
  stalybridge: {
    region: 'Greater Manchester',
    nearby: ["Stalybridge Town Centre","Millbrook","Carrbrook","Copley","Dukinfield","Ashton-under-Lyne","Mossley","Hyde","Oldham","Manchester","Stockport"],
  },
  workington: {
    region: 'Cumbria',
    nearby: ["Workington Town Centre","Northside","Southfield","Harrington","Seaton","Distington","Great Clifton","Maryport","Whitehaven","Carlisle","Cockermouth","Keswick","Wigton"],
  },
  rickmansworth: {
    region: 'Hertfordshire',
    nearby: ["Rickmansworth Town Centre","Croxley Green","Chorleywood","Mill End","Maple Cross","Watford","Northwood","Amersham","Harrow","Uxbridge"],
  },
  'potters-bar': {
    region: 'Hertfordshire',
    nearby: ['Enfield', 'Barnet', 'Hatfield', 'St Albans', 'Welwyn Garden City', 'Cheshunt'],
  },
  ripley: {
    region: 'Derbyshire',
    nearby: ["Ripley Town Centre","Codnor","Heage","Marehay","Butterley","Denby","Heanor","Alfreton","Belper","Derby","Nottingham","Ilkeston"],
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
