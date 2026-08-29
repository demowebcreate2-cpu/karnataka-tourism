import { Destination, HeritageSite, Festival, Craft, CulinaryItem, WildlifeSanctuary, WildlifeSpecies, AdventureActivity, Itinerary } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'hampi',
    name: 'Hampi',
    tagline: 'The Forgotten Empire of Vijayanagara',
    region: 'north',
    category: 'heritage',
    district: 'Vijayanagara',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'A UNESCO World Heritage Site, Hampi was the capital of the mighty Vijayanagara Empire. Spread across boulder-strewn hills along the Tungabhadra River, it features over 1,600 surviving monuments, including the iconic Stone Chariot, musical pillars of Vittala Temple, and the towering Virupaksha Temple.',
    highlights: ['Vittala Temple & Stone Chariot', 'Virupaksha Temple', 'Lotus Mahal & Elephant Stables', 'Sunset at Matanga Hill', 'Coracle Ride on Tungabhadra River'],
    bestTimeToVisit: 'October to March (Winter Season)',
    howToReach: {
      nearestAirport: 'Jindal Vidyanagar Airport, Toranagallu (40 km) / Hubballi Airport (143 km)',
      nearestRailway: 'Hosapete Junction (13 km)',
      roadways: 'Well connected via NH 50 and state highways from Bengaluru (350 km) and Hyderabad (380 km).'
    },
    entryFee: '₹40 (Indians), ₹600 (Foreigners) for Vittala & Zenana Enclosure; Virupaksha is free.',
    timings: '6:00 AM – 6:00 PM Daily',
    rating: 4.9,
    popularFor: 'Ancient Architecture, Photography, Bouldering, Sunrise Views'
  },
  {
    id: 'mysuru',
    name: 'Mysuru (Mysore)',
    tagline: 'The Cultural & Royal Heritage City',
    region: 'south',
    category: 'heritage',
    district: 'Mysuru',
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'The seat of the erstwhile Wadiyar dynasty, Mysuru is globally renowned for the majestic Mysore Palace, world-famous Dasara celebrations, exquisite Mysore Silk, fragrant Sandalwood, and delicious Mysore Pak sweet.',
    highlights: ['Amba Vilas (Mysore Palace)', 'Chamundeshwari Temple atop Chamundi Hill', 'Brindavan Gardens & Musical Fountains', 'St. Philomena’s Cathedral', 'Devaraja Heritage Spice Market'],
    bestTimeToVisit: 'September to March (Particularly during Dasara in Oct/Nov)',
    howToReach: {
      nearestAirport: 'Mysore Airport (MYQ) / Kempegowda International Airport, Bengaluru (170 km)',
      nearestRailway: 'Mysuru Junction (Connected with Vande Bharat to Bengaluru & Chennai)',
      roadways: '10-lane Bengaluru-Mysuru Expressway (90 minutes drive).'
    },
    entryFee: 'Palace: ₹100 (Adults), ₹50 (Children). Illumination free on Sundays & holidays.',
    timings: '10:00 AM – 5:30 PM (Palace entry)',
    rating: 4.8,
    popularFor: 'Royal Architecture, Dasara Festival, Silk Weaving, Mysore Pak'
  },
  {
    id: 'coorg',
    name: 'Coorg (Kodagu)',
    tagline: 'The Scotland of India & Land of Coffee',
    region: 'malnad',
    category: 'nature',
    district: 'Kodagu',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Nestled on the slopes of the Western Ghats, Coorg is an emerald paradise famous for sprawling coffee & spice plantations, misty mountain peaks, cascading waterfalls, Kodava warrior hospitality, and rich aromatic culinary traditions like Pandi Curry.',
    highlights: ['Abbey & Iruppu Waterfalls', 'Raja’s Seat Sunset Viewpoint', 'Namdroling Golden Temple (Bylakuppe)', 'Tadiandamol Peak Trek', 'Dubare Elephant Camp & River Rafting'],
    bestTimeToVisit: 'October to May for pleasant weather; July to September for lush monsoons',
    howToReach: {
      nearestAirport: 'Kannur International Airport (90 km) / Mangaluru (140 km) / Bengaluru (260 km)',
      nearestRailway: 'Mysuru Junction (120 km)',
      roadways: 'Scenic ghat roads connected from Mysuru, Mangaluru, and Hassan.'
    },
    entryFee: 'Varies by attraction (₹20 – ₹100)',
    timings: 'Attractions generally open 8:00 AM – 6:00 PM',
    rating: 4.9,
    popularFor: 'Coffee Plantation Stays, Waterfalls, Trekking, Tibetan Culture'
  },
  {
    id: 'gokarna',
    name: 'Gokarna',
    tagline: 'Pristine Coastal Shores & Sacred Temples',
    region: 'coastal',
    category: 'coastal',
    district: 'Uttara Kannada',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'A serene coastal town on the Arabian Sea where spirituality meets untouched beach paradise. Famous for the naturally Om-shaped Om Beach, Kudle Beach, Half Moon Beach, and the revered ancient Mahabaleshwar Temple harboring the Atmalinga.',
    highlights: ['Om Beach & Beach Trekking Trail', 'Mahabaleshwar Temple (Atmalinga)', 'Kudle Beach Sunset & Bohemian Cafes', 'Half Moon & Paradise Beaches (Boat Access)', 'Yana Rock Formations Day Trip'],
    bestTimeToVisit: 'October to March (Clear skies and calm seas)',
    howToReach: {
      nearestAirport: 'Goa International Airport, Dabolim (140 km) / Manohar Airport, Mopa (170 km)',
      nearestRailway: 'Gokarna Road Railway Station (8 km) / Ankola (25 km)',
      roadways: 'NH 66 connects directly to Goa, Karwar, and Mangaluru.'
    },
    entryFee: 'Free entry to beaches; temple darshan free (special poojas available)',
    timings: 'Beaches open all day; Temple 6:00 AM – 12:30 PM & 5:00 PM – 8:00 PM',
    rating: 4.8,
    popularFor: 'Beach Trekking, Water Sports, Temple Pilgrimage, Sunset Views'
  },
  {
    id: 'chikmagalur',
    name: 'Chikmagalur',
    tagline: 'The Coffee Heartland & Highest Peaks',
    region: 'malnad',
    category: 'nature',
    district: 'Chikkamagaluru',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Known as the birthplace of coffee in India where Baba Budan first planted 7 coffee beans in 1670. Chikmagalur boasts Karnataka’s highest peak Mullayanagiri (1,930m), misty valleys, cascading streams, and sprawling Arabica and Robusta estates.',
    highlights: ['Mullayanagiri Peak Trek', 'Baba Budangiri & Manikyadhara Falls', 'Hebbe & Kalhatti Waterfalls', 'Kudremukh National Park & Peak', 'Coffee Estate Tours & Coffee Tasting'],
    bestTimeToVisit: 'September to March (Post-monsoon freshness & harvest season)',
    howToReach: {
      nearestAirport: 'Mangaluru International Airport (150 km) / Bengaluru (240 km)',
      nearestRailway: 'Kadur (40 km) / Chikkamagaluru Station',
      roadways: 'Direct luxury buses and smooth highways from Bengaluru (4.5 hours).'
    },
    entryFee: 'State parks require Forest Department permits (₹250 - ₹500)',
    timings: 'Peak viewpoints open sunrise to sunset (6:00 AM – 6:00 PM)',
    rating: 4.9,
    popularFor: 'High Peak Trekking, Coffee Trails, Monsoon Drives, Waterfall Rappelling'
  },
  {
    id: 'badami',
    name: 'Badami, Aihole & Pattadakal',
    tagline: 'Cradle of Indian Temple Architecture',
    region: 'north',
    category: 'heritage',
    district: 'Bagalkot',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'The royal capital of the Early Chalukyas (6th to 8th century), renowned for rock-cut cave temples carved into dramatic red sandstone cliffs overlooking the sacred Agastya Lake, alongside the UNESCO World Heritage ensemble at Pattadakal.',
    highlights: ['Badami Rock-Cut Cave Temples (Caves 1-4)', 'Agastya Lake & Bhootnath Temples', 'Pattadakal UNESCO Temple Complex', 'Aihole Durga Temple & Archaeological Museum', 'Sandstone Rock Climbing'],
    bestTimeToVisit: 'October to February (Pleasant winter sunshine)',
    howToReach: {
      nearestAirport: 'Hubballi Airport (105 km) / Belagavi (150 km)',
      nearestRailway: 'Badami Railway Station (5 km)',
      roadways: 'Connected via state highways from Hubballi, Belagavi, and Hampi.'
    },
    entryFee: 'Cave Temples: ₹25 (Indians), ₹300 (Foreigners)',
    timings: '6:00 AM – 6:00 PM',
    rating: 4.8,
    popularFor: 'Chalukyan Art, Rock-Cut Architecture, Lake Views, History Tours'
  },
  {
    id: 'dandeli',
    name: 'Dandeli',
    tagline: 'The Ultimate Adventure & Wildlife Sanctuary',
    region: 'malnad',
    category: 'adventure',
    district: 'Uttara Kannada',
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Set on the banks of the roaring Kali River amidst the dense deciduous forests of the Western Ghats. Dandeli is South India’s capital for white water rafting, black panther sightings, natural jacuzzi baths, and deep river canyon expeditions.',
    highlights: ['Kali River White Water Rafting (Grade 2–3+ rapids)', 'Anshi / Kali Tiger Reserve Safaris', 'Syntheri Rocks Granite Monolith', 'Hornbill Birdwatching River Camp', 'Kayaking, Zip-lining & River Crossing'],
    bestTimeToVisit: 'October to May for rafting and outdoor adventure',
    howToReach: {
      nearestAirport: 'Hubballi Airport (75 km) / Goa Dabolim (130 km)',
      nearestRailway: 'Alnavar Junction (32 km) / Londa (48 km)',
      roadways: 'Convenient road links from Hubballi, Belagavi, and Goa.'
    },
    entryFee: 'Rafting packages from ₹1,200 – ₹2,000 per person',
    timings: 'Rafting sessions 8:30 AM & 2:00 PM',
    rating: 4.9,
    popularFor: 'White Water Rafting, Jungle Safaris, Black Panther Sighting, Kayaking'
  },
  {
    id: 'belur-halebidu',
    name: 'Belur & Halebidu',
    tagline: 'Masterpieces of Hoysala Sacred Architecture',
    region: 'south',
    category: 'heritage',
    district: 'Hassan',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Inscribed as UNESCO World Heritage "Sacred Ensembles of the Hoysalas" in 2023. These 12th-century soapstone temples feature unmatched microscopic relief carvings of celestial dancers (Madanikas), epics, and mythical beasts.',
    highlights: ['Chennakeshava Temple (Belur)', 'Hoysaleswara & Shantaleswara Temples (Halebidu)', 'Darpana Sundari (Lady with mirror) Carving', 'Star-shaped temple foundation platforms', 'Shravanabelagola Gommateshwara Monolith (Nearby)'],
    bestTimeToVisit: 'October to March',
    howToReach: {
      nearestAirport: 'Bengaluru Kempegowda Airport (220 km) / Mangaluru (170 km)',
      nearestRailway: 'Hassan Junction (38 km from Belur)',
      roadways: 'Smooth NH 75 highway from Bengaluru (3.5 hours drive).'
    },
    entryFee: 'Free entry; ASI museum at Halebidu ₹5',
    timings: '7:30 AM – 6:30 PM Daily',
    rating: 4.9,
    popularFor: 'Micro-carvings, Soapstone Sculptures, UNESCO World Heritage'
  }
];

export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: 'hampi-unesco',
    name: 'Group of Monuments at Hampi',
    dynasty: 'Vijayanagara Empire (1336–1646 CE)',
    era: '14th – 16th Century CE',
    unesco: true,
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop',
    description: 'The monumental capital of the Vijayanagara Empire represents the zenith of South Indian Dravidian architecture. Spanning over 4,100 hectares across the banks of the sacred Tungabhadra River, it features royal palaces, fortified complexes, aquatic structures, and extraordinary temple complexes.',
    architecturalStyle: 'Vijayanagara Dravidian with Indo-Islamic royal pavilions',
    location: 'Vijayanagara District, Central Karnataka',
    highlights: [
      'Stone Chariot dedicated to Garuda at the Vittala Temple complex',
      '56 Musical Pillars that produce distinct acoustic resonance notes',
      'Active 7th-century Virupaksha Temple with 50-meter gopuram',
      'Lotus Mahal featuring harmonious Islamic arches and Hindu vaulting',
      'Queen’s Bath and the stepped geometric Pushkarani tank'
    ],
    historicalSignificance: 'Described by 15th-century Persian traveler Abdur Razzaq as "a city such that eye has not seen nor ear heard of any place resembling it upon the whole earth".',
    visitorTips: 'Hire a certified ASI guide, carry plenty of drinking water, and rent a bicycle or electric buggy to traverse the expansive monument zones.'
  },
  {
    id: 'pattadakal-unesco',
    name: 'Pattadakal Temple Complex',
    dynasty: 'Badami Chalukyas (543–753 CE)',
    era: '7th – 8th Century CE',
    unesco: true,
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop',
    description: 'A UNESCO World Heritage sanctuary representing the harmonious synthesis of northern Nagara and southern Dravidian temple architecture. Built along the holy Malaprabha River, Pattadakal served as the ceremonial coronation site (Pattada-Kisuvolal) for Chalukyan monarchs.',
    architecturalStyle: 'Vesara Hybrid (Synthesis of Dravida and Nagara styles)',
    location: 'Bagalkot District, North Karnataka',
    highlights: [
      'Virupaksha Temple built by Queen Lokamahadevi in 740 CE',
      'Mallikarjuna Temple with rich Mahabharata & Ramayana narrative reliefs',
      'Papanatha Temple exhibiting dramatic northern Rekha-Nagara shikhara',
      'Kadasiddheshwara and Jambulinga shrine clusters'
    ],
    historicalSignificance: 'The experimental breeding ground that codified classical Hindu temple geometry and structural sandstone masonry in ancient India.',
    visitorTips: 'Visit in the early morning or late afternoon for the warmest light on the golden-red sandstone.'
  },
  {
    id: 'hoysala-unesco',
    name: 'Sacred Ensembles of the Hoysalas',
    dynasty: 'Hoysala Empire (1026–1343 CE)',
    era: '12th – 13th Century CE',
    unesco: true,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop',
    description: 'Inscribed as India’s 42nd UNESCO World Heritage Site in 2023. Comprising the Chennakeshava Temple at Belur, Hoysaleswara Temple at Halebidu, and Keshava Temple at Somanathapura, these temples represent the pinnacle of chloritic schist (soapstone) micro-carving.',
    architecturalStyle: 'Hoysala Karnata Dravida on raised stellate (star-shaped) platforms',
    location: 'Hassan & Mysuru Districts, South Karnataka',
    highlights: [
      'Interlocking horizontal friezes depicting elephants, lions, horses, floral scrolls, and mythological scenes',
      'Perforated stone lattice windows (Jalis) casting artistic shadows',
      'Madanika bracket sculptures demonstrating 38 poses of classical dance and beauty',
      'Lathe-turned polished stone pillars with mirror-like finish'
    ],
    historicalSignificance: 'Built by King Vishnuvardhana after military triumphs, showcasing an unprecedented level of individual artisan signatures (like master sculptor Jakanachari).',
    visitorTips: 'Combine Belur and Halebidu on a single day trip; Hassan is the ideal hub with top rail and road connections.'
  },
  {
    id: 'mysore-palace',
    name: 'Amba Vilas Palace (Mysore Palace)',
    dynasty: 'Wadiyar Dynasty',
    era: 'Commissioned 1897, Completed 1912 CE',
    unesco: false,
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1200&auto=format&fit=crop',
    description: 'One of the most visited monuments on earth, designed by British architect Henry Irwin. The three-storied stone palace with marble domes and a 145-foot five-story tower is illuminated by nearly 100,000 incandescent bulbs on special occasions.',
    architecturalStyle: 'Indo-Saracenic (blending Hindu, Mughal, Rajput, and Gothic styles)',
    location: 'Mysuru City Center',
    highlights: [
      'Gombe Thotti (Dolls Pavilion) with golden howdah (throne carriage)',
      'Kalyana Mantapa (Octagonal Marriage Pavilion) with Scottish stained-glass ceiling',
      'Durbar Hall with ornate gilded columns and ceiling paintings by Raja Ravi Varma',
      'Grand evening illumination on Sundays and during Dasara festivities'
    ],
    historicalSignificance: 'The enduring sovereign emblem of Karnataka’s royal heritage and the epicenter of the 400-year-old state festival Mysore Dasara.',
    visitorTips: 'Shoe deposition is mandatory at the entrance; photography inside the Durbar hall requires respecting designated zones.'
  }
];

export const FESTIVALS: Festival[] = [
  {
    id: 'mysore-dasara',
    name: 'Mysore Dasara (Nadahabba)',
    kannadaName: 'ಮೈಸೂರು ದಸರಾ',
    month: 'October / November',
    seasonPeriod: 'Ashwin Month (Navaratri to Vijayadashami)',
    location: 'Mysuru, Karnataka',
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1200&auto=format&fit=crop',
    description: 'The official State Festival (Nadahabba) of Karnataka. Spanning 10 glorious days, the entire city is adorned with fairy lights. The celebration culminates in the world-famous "Jumbo Savari" grand procession where the lead tusker carries the 750-kg solid gold idol of Goddess Chamundeshwari through cheering millions.',
    keyRituals: ['Wadiyar Royal Private Durbar', 'Jumbo Savari (Elephant Procession)', 'Torchlight Parade at Bannimantap', 'Yuva Dasara & Music Concerts', 'Palace Illumination with 100,000 lamps'],
    duration: '10 Days',
    culturalSignificance: 'Celebrates the victory of Goddess Chamundeshwari over the demon Mahishasura, symbolizing good triumphing over evil.'
  },
  {
    id: 'kambala',
    name: 'Kambala Buffalo Races',
    kannadaName: 'ಕಂಬಳ',
    month: 'November to March',
    seasonPeriod: 'Winter Agricultural Season',
    location: 'Dakshina Kannada & Udupi Coastal Region',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    description: 'An adrenaline-surging traditional festival where pairs of muscular water buffaloes are sprinted across slushy, water-flooded paddy tracks by daring bare-chested jockeys. Held across over 45 coastal rural tracks, it draws thousands of enthusiastic spectators.',
    keyRituals: ['Traditional Pookkare ritual', 'Hagga (Rope) & Negilu (Plough) race categories', 'Kare (dual muddy track) time tracking', 'Folk drum beats (chende)'],
    duration: '24 to 36-hour weekend tournaments',
    culturalSignificance: 'An ancient tribute of coastal farming families to Lord Shiva’s avatar and forest spirits for bountiful agricultural harvests and livestock health.'
  },
  {
    id: 'ugadi',
    name: 'Ugadi (Kannada New Year)',
    kannadaName: 'ಯುಗಾದಿ',
    month: 'March / April',
    seasonPeriod: 'Chaitra Shuddha Padyami (Spring Equinox)',
    location: 'Statewide celebration',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    description: 'The dawn of the new astronomical year. Homes are cleaned, decorated with fresh mango leaves and colorful floral rangoli. Families gather to partake in the symbolic "Bevu-Bella" (mixture of bitter neem leaves and sweet jaggery), reminding us that life is a balanced tapestry of joy and sorrow.',
    keyRituals: ['Oil bath (Abhyanga Snana) at sunrise', 'Preparation of Bevu-Bella and Holige sweet flatbreads', 'Panchanga Shravana (astrological forecast reading)', 'Wearing new traditional clothes'],
    duration: '1 Full Day',
    culturalSignificance: 'Symbolizes renewal, agricultural beginnings, and welcoming the vibrant spring season (Vasantha Ritu).'
  },
  {
    id: 'hampi-utsav',
    name: 'Hampi Utsav (Vijaya Utsava)',
    kannadaName: 'ಹಂಪಿ ಉತ್ಸವ',
    month: 'November or January',
    seasonPeriod: 'Winter Festival',
    location: 'Hampi, Vijayanagara',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop',
    description: 'A grand 3-day cultural extravaganza organized by the Karnataka Tourism Department amidst the ruins of Hampi. Modern laser lighting illuminates the ancient temples while India’s foremost classical vocalists, dancers, puppet artists, and folk troupes perform under the open sky.',
    keyRituals: ['Sound & Light laser mapping on Virupaksha & Stone Chariot', 'Classical Carnatic and Hindustani music concerts', 'Janapada (Folk) processions & doll dance', 'Helicopter rides & traditional sports'],
    duration: '3 Days',
    culturalSignificance: 'Revives the imperial cultural vibrancy, poetic traditions, and architectural pageantry of the Vijayanagara Empire.'
  }
];

export const CRAFTS: Craft[] = [
  {
    id: 'sandalwood-carving',
    name: 'Mysore Sandalwood Carving',
    origin: 'Mysuru & Shivamogga',
    giTag: true,
    category: 'Woodwork & Aromatics',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
    description: 'The ancient craft of sculpting fragrant Santalum album heartwood into intricate deity figures, ornamental jewelry boxes, and decorative screens. Master Gudigar artisans practice this centuries-old tradition using ultra-fine hand chisels.',
    artisanStory: 'Generations of master sculptors in Mysuru have dedicated their lives to preserving the aromatic legacy celebrated worldwide.'
  },
  {
    id: 'mysore-silk',
    name: 'Mysore Pure Silk Sarees',
    origin: 'Mysuru & Ramanagara',
    giTag: true,
    category: 'Handloom & Textiles',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop',
    description: 'Woven with 100% pure natural mulberry silk and authentic gold zari threads containing 0.65% real gold and 65% silver. Established under the patronage of Maharaja Nalwadi Krishnaraja Wadiyar in 1912.',
    artisanStory: 'Crafted on heritage power looms and handlooms by the Karnataka Silk Industries Corporation (KSIC), each saree carries an embossed serial number and authenticity certificate.'
  },
  {
    id: 'channapatna-toys',
    name: 'Channapatna Lacquerware Wooden Toys',
    origin: 'Channapatna (Gombegala Ooru)',
    giTag: true,
    category: 'Eco-Friendly Crafts',
    image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=1200&auto=format&fit=crop',
    description: 'Turned on precision wood lathes using soft Wrightia tinctoria (Ivory Wood / Aale Mara) and finished with 100% natural, non-toxic vegetable dyes (turmeric, indigo, kumkum). Protected by GI status.',
    artisanStory: 'Introduced in the 18th century by Tipu Sultan who invited Persian artisans, Channapatna today supports thousands of rural artisan families crafting eco-friendly toys.'
  },
  {
    id: 'bidriware',
    name: 'Bidriware Silver Inlay Metalcraft',
    origin: 'Bidar, North Karnataka',
    giTag: true,
    category: 'Metal Inlay Art',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    description: 'A 500-year-old metal art where pure silver wires and sheets are hand-hammered into engraved zinc-copper alloys, then treated with unique soil from the historic Bidar Fort to yield a jet-black background.',
    artisanStory: 'Originated during the Bahmani Sultanate, Bidriware is renowned for geometric Persian arabesques and floral vines on vases, trays, and artifact boxes.'
  }
];

export const CULINARY_ITEMS: CulinaryItem[] = [
  {
    id: 'bisi-bele-bath',
    name: 'Bisi Bele Bath',
    region: 'Mysuru & Bengaluru',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&auto=format&fit=crop',
    description: 'A comforting, hearty blend of short-grain rice, toor dal, assorted vegetables, and a signature roasted 14-spice blend simmered with tamarind, jaggery, and garnished with pure ghee and crispy boondi.',
    flavorProfile: 'Spicy, tangy, aromatic, and rich in ghee',
    mustTryPlaces: 'Mavalli Tiffin Room (MTR) Bengaluru, Maiyas, and heritage darshinis.'
  },
  {
    id: 'neer-dosa',
    name: 'Neer Dosa & Mangalorean Fish Curry',
    region: 'Coastal Karavali (Mangaluru, Udupi)',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1200&auto=format&fit=crop',
    description: 'Delicate, paper-thin, lace-like crepes made from unfermented watery rice batter. Served alongside fiery, coconut-enriched Mangalorean Anjal (Kingfish) curry or sweet jaggery-coconut stuffing.',
    flavorProfile: 'Soft, light, mildly sweet crepe paired with tangy-spicy coconut seafood gravy',
    mustTryPlaces: 'Giri Manja’s Mangalore, Machali, and coastal family restaurants.'
  },
  {
    id: 'mysore-pak',
    name: 'Royal Mysore Pak',
    region: 'Mysuru',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop',
    description: 'Invented in 1935 by royal chef Kakasura Madappa in the kitchens of Amba Vilas Palace. Made from roasted gram flour (besan), pure desi ghee, and sugar syrup that melts luxuriously on the tongue.',
    flavorProfile: 'Rich, caramelized, buttery-sweet, melt-in-mouth texture',
    mustTryPlaces: 'Guru Sweets (founded by Madappa’s descendants in Mysuru), Sri Krishna Sweets.'
  },
  {
    id: 'coorg-pandi-curry',
    name: 'Coorg Pandi Curry with Kadambuttu',
    region: 'Kodagu (Coorg)',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop',
    description: 'The iconic traditional dish of the Kodava community. Tender meat cooked in a dark, aromatic roasted spice paste infused with Kachampuli (tart Garcinia gummi-gutta fruit vinegar), served with steamed rice dumplings (Kadambuttu).',
    flavorProfile: 'Deeply aromatic, peppery, sour-tart, and rich',
    mustTryPlaces: 'Raintree Restaurant Madikeri, Coorg Cuisine, authentic plantation homestays.'
  }
];

export const WILDLIFE_SANCTUARIES: WildlifeSanctuary[] = [
  {
    id: 'bandipur',
    name: 'Bandipur National Park & Tiger Reserve',
    type: 'Tiger Reserve',
    district: 'Chamarajanagar District',
    area: '874 sq km (Core Nilgiri Biosphere)',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop',
    keyAnimals: ['Bengal Tiger', 'Indian Elephant', 'Indian Leopard', 'Gaur (Indian Bison)', 'Dhole (Wild Dog)', 'Chital Deer'],
    safariTypes: ['Open Top 4x4 Jeep Safari', 'Forest Department Bus Safari', 'Elephant Spotting Trails'],
    bestSeason: 'October to May (Optimal wildlife sightings at waterholes)',
    description: 'Established in 1974 under Project Tiger, Bandipur forms part of India’s largest protected forest block along with Nagarhole, Mudumalai, and Wayanad. It harbors the second highest tiger density in India and the world’s largest population of wild Asian elephants.',
    floraFauna: 'Dry deciduous and moist deciduous teak, rosewood, bamboo, and sandalwood forests with over 200 bird species including the Crested Serpent Eagle and Malabar Pied Hornbill.',
    conservationStory: 'A pioneering success story in anti-poaching and voluntary village relocation, turning the reserve into an apex sanctuary for large carnivores.',
    safariTimings: 'Morning: 6:00 AM – 9:00 AM | Evening: 3:30 PM – 6:30 PM'
  },
  {
    id: 'nagarhole',
    name: 'Nagarhole (Rajiv Gandhi) National Park',
    type: 'National Park',
    district: 'Kodagu & Mysuru Districts',
    area: '643 sq km',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1200&auto=format&fit=crop',
    keyAnimals: ['Bengal Tiger', 'Black Panther (Melanistic Leopard)', 'Asian Elephant', 'Sloth Bear', 'Striped Hyena', 'Mugger Crocodile'],
    safariTypes: ['Kabini Backwater Boat Safari', '4x4 Forest Jeep Safari', 'Van Safaris'],
    bestSeason: 'November to June (Spectacular summer river bank congregations)',
    description: 'Named after the serpentine streams ("Naga" snake, "Hole" stream) winding through dense rosewood and teak canopies. World-renowned for the legendary Kabini backwaters where hundreds of elephants gather during summer months.',
    floraFauna: 'Lush tropical moist deciduous forests transitioning into montane shola forests, home to the elusive Black Panther "Saya".',
    conservationStory: 'Protected habitat with high prey density (spotted deer, sambar, wild boar) supporting healthy predator populations.',
    safariTimings: 'Morning: 6:00 AM – 9:30 AM | Evening: 3:00 PM – 6:30 PM'
  },
  {
    id: 'dandeli-kali',
    name: 'Kali Tiger Reserve & Dandeli Wildlife Sanctuary',
    type: 'Tiger Reserve',
    district: 'Uttara Kannada District',
    area: '1,300 sq km',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop',
    keyAnimals: ['Black Panther', 'Bengal Tiger', 'Great Indian Hornbill', 'King Cobra', 'Flying Squirrel', 'Barking Deer'],
    safariTypes: ['Kali River Coracle Safari', 'Canopy Jeep Safari', 'Birding Treks'],
    bestSeason: 'October to May',
    description: 'A global biodiversity hotspot in the Western Ghats. The raging Kali River cuts deep gorges through evergreen and moist deciduous wilderness, offering a rare sanctuary for all four species of South Indian Hornbills.',
    floraFauna: 'Evergreen tropical rainforests, dense bamboo brakes, orchids, and hundreds of rare medicinal plants.',
    conservationStory: 'A crucial ecological corridor connecting the forests of Goa, Karnataka, and Maharashtra.',
    safariTimings: 'Morning: 6:00 AM – 8:30 AM | Evening: 4:00 PM – 6:30 PM'
  },
  {
    id: 'ranganathittu',
    name: 'Ranganathittu Bird Sanctuary',
    type: 'Bird Sanctuary',
    district: 'Mandya (Near Srirangapatna / Mysuru)',
    area: '40 Acres across 6 Kaveri River islets',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=1200&auto=format&fit=crop',
    keyAnimals: ['Painted Stork', 'Spot-billed Pelican', 'Black-headed Ibis', 'Eurasian Spoonbill', 'Marsh Crocodile (Mugger)'],
    safariTypes: ['Guided Rowing Boat Safari with Naturalist'],
    bestSeason: 'December to June (Peak nesting and breeding season for migratory birds)',
    description: 'Karnataka’s largest bird sanctuary, established in 1940 following the advocacy of legendary ornithologist Dr. Salim Ali. A designated Ramsar Wetland Site where visitors glide alongside nesting colonies on tranquil riverboats.',
    floraFauna: 'Riverine bamboo stands, Barringtonia racemosa, and endemic aquatic plants harboring over 170 bird species.',
    conservationStory: 'International Ramsar site recognized for exceptional wetland preservation and eco-tourism ethics.',
    safariTimings: '9:00 AM – 6:00 PM Daily'
  }
];

export const WILDLIFE_SPECIES: WildlifeSpecies[] = [
  {
    id: 'bengal-tiger',
    name: 'Royal Bengal Tiger',
    scientificName: 'Panthera tigris tigris',
    status: 'Endangered',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1200&auto=format&fit=crop',
    bestSanctuaries: ['Bandipur National Park', 'Nagarhole National Park', 'Bhadra Tiger Reserve', 'BRT Wildlife Sanctuary'],
    funFact: 'Karnataka is home to over 563 wild tigers — the second highest tiger population in any Indian state.',
    description: 'The apex predator of Karnataka’s forests, thriving in the expansive protected reserves of the Nilgiri and Western Ghats biosphere.'
  },
  {
    id: 'asian-elephant',
    name: 'Asian Elephant',
    scientificName: 'Elephas maximus',
    status: 'Endangered',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1200&auto=format&fit=crop',
    bestSanctuaries: ['Kabini (Nagarhole)', 'Bandipur', 'Bannerghatta', 'Dubare Elephant Camp'],
    funFact: 'Karnataka hosts over 6,049 wild elephants — representing over 25% of India’s entire wild elephant population!',
    description: 'The gentle giants of the jungle, roaming freely along age-old elephant corridors between Karnataka, Tamil Nadu, and Kerala.'
  },
  {
    id: 'black-panther',
    name: 'Black Panther (Melanistic Leopard)',
    scientificName: 'Panthera pardus',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1200&auto=format&fit=crop',
    bestSanctuaries: ['Kabini (Nagarhole Reserve)', 'Kali Tiger Reserve (Dandeli)', 'Anshi National Park'],
    funFact: 'Kabini’s famous black panther "Saya" gained global fame through National Geographic’s documentary "The Real Black Panther".',
    description: 'A striking genetic melanistic variant of the Indian leopard that moves like a ghost through the dense rain canopies.'
  },
  {
    id: 'great-hornbill',
    name: 'Great Indian Hornbill',
    scientificName: 'Buceros bicornis',
    status: 'Vulnerable',
    image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=1200&auto=format&fit=crop',
    bestSanctuaries: ['Dandeli Wildlife Sanctuary', 'Kudremukh National Park', 'Sharavathi Valley'],
    funFact: 'Great Hornbills mate for life and are vital seed dispersers, earning them the title of "Farmers of the Rainforest".',
    description: 'A magnificent canopy bird with a massive golden-yellow casque, soaring across the Western Ghats rainforest.'
  }
];

export const ADVENTURE_ACTIVITIES: AdventureActivity[] = [
  {
    id: 'kudremukh-trek',
    title: 'Kudremukh Peak Trek',
    category: 'trekking',
    location: 'Kudremukh National Park, Chikkamagaluru',
    district: 'Chikkamagaluru',
    difficulty: 'Moderate',
    altitudeOrDistance: '1,894 m Altitude | 22 km Round Trip',
    bestSeason: 'June to February (Lush green post-monsoon paradise)',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    description: 'Named after the distinctive "horse-face" profile of the mountain peak. Trek through rolling emerald grasslands, pristine montane shola forests, crystal-clear streams, and misty mountain ridges in a strictly conserved national park.',
    highlights: ['Lush Shola forest crossings with endemic orchids', 'Breathtaking 360-degree clouds-under-feet summit view', 'Restricted permits ensuring pristine, crowd-free trails'],
    requiredPermits: 'Online Karnataka Forest Department permit mandatory (capped at 50 trekkers per day)',
    safetyTips: ['Wear high-ankle grip hiking shoes', 'Carry leech repellent socks during monsoons', 'Zero-plastic strictly enforced']
  },
  {
    id: 'dandeli-rafting',
    title: 'White Water Rafting on River Kali',
    category: 'water-sports',
    location: 'Dandeli, Kali River Basin',
    district: 'Uttara Kannada',
    difficulty: 'Moderate',
    altitudeOrDistance: '9 km / 12 km River Stretch | Grade 2–3+ Rapids',
    bestSeason: 'October to May (Water released from Supa Dam)',
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1200&auto=format&fit=crop',
    description: 'South India’s premier white water rafting experience. Battle exhilarating Class II and III+ rapids named "Adi’s Delirium", "The Snag", and "The Stitch" while surrounded by dense tropical forest gorges.',
    highlights: ['Professional IRF-certified river guides', 'Exciting natural body surfing in calm river pools', 'Stunning rainforest canopy views along the river'],
    requiredPermits: 'Included in authorized adventure operator packages',
    safetyTips: ['Mandatory life jackets and helmets', 'Minimum age 12 years', 'Listen closely to safety briefing commands']
  },
  {
    id: 'gokarna-scuba-surfing',
    title: 'Surfing & Scuba Diving at Murudeshwar & Netrani',
    category: 'water-sports',
    location: 'Netrani Island & Gokarna Coast',
    district: 'Uttara Kannada',
    difficulty: 'Easy',
    altitudeOrDistance: 'Depths 10–30 meters | Coral Reef Diving',
    bestSeason: 'October to May (Clear water visibility up to 20m)',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
    description: 'Netrani (Pigeon Island), located off the coast of Murudeshwar, is considered the premier scuba diving destination in Mainland India. Dive with sea turtles, stingrays, butterflyfish, and vibrant coral formations.',
    highlights: ['PADI certified discovery scuba and open water courses', 'Surfing lessons at Gokarna and Mulki river-sea mouths', 'Clear turquoise waters and boat expeditions'],
    requiredPermits: 'Arranged by registered dive schools with coast guard clearance',
    safetyTips: ['Certified instructors provide 1-on-1 underwater assistance', 'Non-swimmers can do tandem discovery dives']
  },
  {
    id: 'badami-rock-climbing',
    title: 'Badami Sandstone Rock Climbing & Bouldering',
    category: 'rock-climbing',
    location: 'Badami & Hampi Sandstone Cliffs',
    district: 'Bagalkot / Vijayanagara',
    difficulty: 'Challenging',
    altitudeOrDistance: 'Over 200 bolted single & multi-pitch sport routes',
    bestSeason: 'November to February (Cooler rock face temperatures)',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200&auto=format&fit=crop',
    description: 'Badami is internationally hailed as the "Mecca of Rock Climbing in India". The steep red sandstone cliffs offer world-class sport climbing, cragging, and bouldering routes ranging from 5a to 8b+ grades.',
    highlights: ['Ganesha Wall, Delux Wall, and Saraswati Crag routes', 'Surreal views of Agastya Lake and ancient rock-cut caves while climbing', 'Hampi bouldering scene popular among global climbers'],
    requiredPermits: 'Check with local climbing clubs and local heritage guidelines',
    safetyTips: ['Always climb with certified belayers and inspect gear', 'Wear chalk bags and specialized rock shoes']
  },
  {
    id: 'mullayanagiri-baba-trek',
    title: 'Mullayanagiri & Baba Budangiri Ridge Trek',
    category: 'trekking',
    location: 'Chikmagalur Hills',
    district: 'Chikkamagaluru',
    difficulty: 'Moderate',
    altitudeOrDistance: '1,930 m (Highest Peak in Karnataka) | 12 km Ridge',
    bestSeason: 'September to March',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop',
    description: 'Trek to the highest point in Karnataka, standing tall at 6,330 feet. The trail traverses a dramatic razor-edge knife ridge from Mullayanagiri to Baba Budangiri through sea of clouds and lush coffee estates.',
    highlights: ['Panoramic view of entire Western Ghats ranges', 'Temple shrine at the summit with serene bells ringing in the mist', 'Scenic Manikyadhara and Jhari waterfalls en route'],
    requiredPermits: 'Entry register at base checkpoint',
    safetyTips: ['Start early to beat noon sun and dense afternoon fog', 'Carry a light windcheater jacket']
  },
  {
    id: 'yana-caving',
    title: 'Yana Solid Rock Monoliths & Cave Exploration',
    category: 'caving',
    location: 'Yana, Sahyadri Mountain Range',
    district: 'Uttara Kannada',
    difficulty: 'Easy',
    altitudeOrDistance: '120 m Tall Black Karst Limestone Towers',
    bestSeason: 'October to April',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop',
    description: 'Two massive solid black crystalline karst rock formations—Bhairaveshwara Shikhara (120m) and Mohini Shikhara (90m)—rising dramatically out of the dense evergreen jungle, containing natural caves and passages.',
    highlights: ['Walking through naturally cool subterranean cave passages', 'Ancient Swayambhu Linga with dripping subterranean water', 'Scenic 1.5 km canopy walk through rainforest'],
    requiredPermits: 'Standard eco-tourism gate ticket',
    safetyTips: ['Wear shoes with good grip for damp cave steps', 'Carry a small flashlight']
  }
];

export const ITINERARIES: Itinerary[] = [
  {
    id: 'golden-triangle-karnataka',
    title: 'Royal Heritage & Coffee Country',
    duration: '6 Days / 5 Nights',
    theme: 'Heritage, Nature & Royalty',
    route: 'Bengaluru → Mysuru → Belur/Halebidu → Coorg → Bengaluru',
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Mysore Palace & Chamundi Hill', 'UNESCO Hoysala Temples', 'Coorg Coffee Plantation Stay', 'Abbey & Iruppu Waterfalls'],
    days: [
      { day: 1, title: 'Arrival in Bengaluru & Journey to Mysuru', description: 'Drive via Bengaluru-Mysuru Expressway, visit Srirangapatna fort, check in at Mysuru, and witness the golden illuminated Mysore Palace.', places: ['Srirangapatna', 'Mysore Palace', 'Devaraja Market'] },
      { day: 2, title: 'Mysuru Heritage & Royal Sights', description: 'Early morning Chamundi Hill darshan, visit St. Philomena’s Cathedral, Jaganmohan Palace art gallery, and Brindavan Gardens.', places: ['Chamundi Hill', 'St. Philomena Cathedral', 'Brindavan Gardens'] },
      { day: 3, title: 'Hoysala Architectural Wonders & Hassan', description: 'Drive to Belur and Halebidu to marvel at the soapstone carvings of the 12th-century Hoysala dynasties.', places: ['Chennakeshava Temple Belur', 'Hoysaleswara Temple Halebidu'] },
      { day: 4, title: 'Journey to Coorg (The Scotland of India)', description: 'Arrive in Madikeri, visit Namdroling Golden Temple at Bylakuppe Tibetan settlement, followed by Raja’s Seat sunset.', places: ['Bylakuppe Golden Temple', 'Raja’s Seat', 'Madikeri Fort'] },
      { day: 5, title: 'Coorg Coffee Trails & Waterfalls', description: 'Morning guided coffee and spice walk, visit Abbey Falls, Dubare Elephant Camp, and savor authentic Kodava Pandi Curry.', places: ['Abbey Falls', 'Dubare Elephant Camp', 'Coffee Plantation'] },
      { day: 6, title: 'Return Journey to Bengaluru', description: 'Breakfast homestay feast, shopping for Coorg spices, homemade chocolates and Mysore Silk, transfer back to Bengaluru airport.', places: ['Local Spice Bazaars', 'Bengaluru Departure'] }
    ]
  },
  {
    id: 'unesco-ruins-coastal',
    title: 'Ancient Empires to Sun-Kissed Coast',
    duration: '7 Days / 6 Nights',
    theme: 'UNESCO World Heritage & Pristine Beaches',
    route: 'Hubballi → Hampi → Badami → Pattadakal → Gokarna → Murudeshwar',
    image: 'https://images.unsplash.com/photo-1600100397608-f010f4469f88?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Hampi Stone Chariot & Ruins', 'Badami Rock-cut Caves', 'UNESCO Pattadakal Complex', 'Gokarna Om Beach & Cliff Hikes'],
    days: [
      { day: 1, title: 'Arrival at Hubballi & Transfer to Hampi', description: 'Drive to Hampi, check-in, sunset coracle ride across Tungabhadra river to Sanapur Lake.', places: ['Sanapur Lake', 'Tungabhadra River'] },
      { day: 2, title: 'Full Day Vijayanagara Exploration', description: 'Explore Vittala Temple, Stone Chariot, musical pillars, Virupaksha temple, and climb Matanga Hill for golden hour.', places: ['Vittala Temple', 'Stone Chariot', 'Virupaksha', 'Matanga Hill'] },
      { day: 3, title: 'Royal Enclosures & Badami Transfer', description: 'Visit Lotus Mahal, Elephant Stables, Queen’s Bath, and drive to the red sandstone realm of Badami.', places: ['Lotus Mahal', 'Elephant Stables', 'Badami Town'] },
      { day: 4, title: 'Badami Caves, Aihole & Pattadakal', description: 'Marvel at 6th-century rock-cut cave temples, Agastya Lake, Pattadakal UNESCO complex, and Aihole Durga temple.', places: ['Badami Caves', 'Agastya Lake', 'Pattadakal', 'Aihole'] },
      { day: 5, title: 'Drive to Coastal Gokarna', description: 'Descend through the Western Ghats to the Arabian Sea coastline. Sunset leisure at Kudle Beach.', places: ['Kudle Beach', 'Gokarna Town'] },
      { day: 6, title: 'Gokarna 5-Beach Trek & Mahabaleshwar Temple', description: 'Trek from Belekan to Om Beach, Half Moon Beach and Paradise Beach; evening darshan at Mahabaleshwar Temple.', places: ['Om Beach', 'Half Moon Beach', 'Mahabaleshwar Temple'] },
      { day: 7, title: 'Murudeshwar Giant Shiva & Departure', description: 'Visit the towering 123-ft Shiva statue and Rajagopuram at Murudeshwar before departure from Goa or Mangaluru airport.', places: ['Murudeshwar Temple', 'Departure'] }
    ]
  }
];

