export const companyInfo = {
  name: 'Core King Ply',
  marketedBy: 'Ruhi Enterprise',
  tagline: 'Wholesale Dealer of Plywood, Board & Veneer',
  shortDescription:
    'Core King Plywood is one of India\'s fastest-growing manufacturers and suppliers of premium calibrated plywood. Known for strength, precision, and durability, our plywood and laminate products are crafted to meet the highest standards for both residential and commercial applications.',
  fullDescription:
    'Core King Plywood is one of India\'s fastest-growing manufacturers and suppliers of premium calibrated plywood. Proudly marketed and distributed by Ruhi Enterprise, we ensure that our products reach every corner with the same promise of quality and reliability.',
  aboutElevateText:
    'Core King Plywood is one of India\'s fastest-growing manufacturers and suppliers of premium calibrated plywood. Known for strength, precision, and durability, our plywood and laminate products are crafted to meet the highest standards for both residential and commercial applications.',
  aboutMarketedText:
    'Proudly marketed and distributed by Ruhi Enterprise, we ensure that our products reach every corner with the same promise of quality and reliability.',
  aboutClosingText:
    'From blockboards to shuttering plywood, each product reflects our commitment to excellence. With modern processes and expert craftsmanship, Core King Plywood - marketed by Ruhi Enterprise - delivers dependable solutions that stand the test of time.',
  address: 'Khajoori road,\nYamunanagar,\nHaryana-135001',
  addressLine1: 'Khajoori road',
  addressLine2: 'Yamunanagar',
  addressLine3: 'Haryana-135001',
  city: 'Yamunanagar, Haryana',
  phone: '+91 7016059329',
  phoneDisplay: '+91 7016059329',
  whatsapp: '+91 7016059329',
  email: 'corekingply@gmail.com',
  supportEmail: 'corekingply@gmail.com',
  whatsappLink: 'https://wa.me/917016059329',
  phoneLink: 'tel:+917016059329',
  emailLink: 'mailto:corekingply@gmail.com',
  instagramLink: 'https://www.instagram.com/core_king_ply?utm_source=qr&igsh=d2lna2N0aGV2bnBk',
  instagramHandle: '@core_king_ply',
  logo: '/images/LOGO.svg',
  favicon: '/images/LOGO.svg',
  
  // Extra template company statistics (Commented out)
  /*
  establishedYear: '1998',
  experienceYears: '25+',
  productionCapacity: '1.2M+ Sheets / Year',
  dealersNetwork: '450+ Dealers Pan India',
  projectsCompleted: '15,000+ Luxury Projects',
  isStandards: ['IS:710 (Marine Grade)', 'IS:303 (BWR / MR Grade)', 'IS:5509 (Fire Retardant)', 'IS:1659 (Blockboards)', 'IS:2202 (Flush Doors)', 'ISO 9001:2015 Certified', 'E0 Formaldehyde Emission'],
  */
};

// Navigation items matching Briterply navigation structure
export const navItems = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Features', href: '/#features' },
  {
    label: 'Products',
    href: '/products',
    dropdown: [
      { label: 'Plywoods', href: '/products' },
      { label: 'Core King BWR', href: '/products#core-king-gold' },
      { label: 'Core King Club710', href: '/products#core-king-club' },
    ],
  },
  { label: 'Contact', href: '/#contact' },
  
  /* Extra Navigation routes commented out to match Briterply.com exact structure
  { label: 'Plywood Guide', href: '/plywoods' },
  */
];

// About Section Key Points (Exact match to Briterply About list)
export const aboutPoints = [
  'Calibrated plywood with perfect thickness and smooth surfaces.',
  'Engineered for long-term durability, strength, and dimensional accuracy.',
  'Versatile solutions for interiors, furniture, construction, and custom applications.',
  'Crafted with advanced manufacturing standards and expert care.',
];

// Exact 6 Key Features from Briterply.com
export const featureList = [
  {
    id: 'calibrated-precision',
    title: 'Calibrated Precision',
    description:
      'Each plywood sheet is machine-calibrated for uniform thickness, ensuring a smooth surface and perfect bonding.',
    icon: 'CheckCheck',
    /* Extra metadata commented out
    stat: '±0.1 mm',
    highlight: 'Zero thickness variation',
    */
  },
  {
    id: 'high-water-resistance',
    title: 'High Water Resistance',
    description:
      'Manufactured with BWP-grade resins, our plywood withstands high-moisture environments — ideal for kitchens, bathrooms, and more.',
    icon: 'Droplet',
    /* Extra metadata commented out
    stat: '72+ Hours',
    highlight: 'Tested under IS:710 norms',
    */
  },
  {
    id: 'superior-strength',
    title: 'Superior Strength & Durability',
    description:
      'Built for load-bearing applications, our plywood maintains structural integrity under pressure, wear, and time.',
    icon: 'Wrench',
    /* Extra metadata commented out
    stat: 'High Load',
    highlight: 'Maximum structural density',
    */
  },
  {
    id: 'minimal-warping',
    title: 'Minimal Warping & Shrinking',
    description:
      'Engineered to resist climate-based expansion and contraction — perfect for long-term performance in diverse conditions.',
    icon: 'Layers',
    /* Extra metadata commented out
    stat: 'Zero Warping',
    highlight: 'Climate-stable core',
    */
  },
  {
    id: 'eco-friendly',
    title: 'Eco-Friendly Manufacturing',
    description:
      'We use sustainable wood sources and low-emission adhesives to create environment-conscious products.',
    icon: 'CircleDot',
    /* Extra metadata commented out
    stat: 'E0 Grade',
    highlight: 'Safe for children & homes',
    */
  },
  {
    id: 'termite-borer-resistant',
    title: 'Termite & Borer Resistant',
    description:
      'Our products are chemically treated to resist termite and borer attacks, ensuring long-lasting beauty and strength.',
    icon: 'Flame',
    /* Extra metadata commented out
    stat: '100% Immune',
    highlight: 'Deep chemical bath',
    */
  },
];

// Quality Policy Information from Briterply.com
export const qualityPolicy = {
  heading: 'Quality Policy',
  subtitle: 'OUR COMMITMENT TO DELIVERING TRUSTED MATERIALS',
  cardTitle: 'Trusted Quality, Every Time',
  image: '/images/IMG_20260902_004940.png',
  paragraphs: [
    'As a leading supplier, Core King plywood ensures that every product we offer comes from certified and reliable manufacturers who meet stringent quality benchmarks. Our partners follow industry best practices, enabling us to deliver consistent performance, superior finishes, and long-term durability.',
    'We conduct careful sourcing, maintain transparency, and strive for continual improvement to meet our clients\' evolving expectations across residential and commercial projects.',
  ],
};

// Hero Sliders in exact requested sequence
export const heroSlides = [
  {
    id: 1,
    image: '/images/hero/IMG-20260803-WA0000(1).jpg',
    alt: 'Core King Premium Calibrated Plywood Banner 1',
  },
  {
    id: 2,
    image: '/images/hero/file_000000005bcc8211bf8fd3ade923888a.png',
    alt: 'Core King Premium Calibrated Plywood Banner 2',
  },
  {
    id: 3,
    image: '/images/hero/IMG-20260826-WA0018(1).jpg',
    alt: 'Core King Premium Calibrated Plywood Banner 3',
  },
  {
    id: 4,
    image: '/images/hero/file_000000009d688208a7b556e236f2c8b1.png',
    alt: 'Core King Premium Calibrated Plywood Banner 4',
  },
  {
    id: 5,
    image: '/images/hero/file_00000000c5e4821192b0b168d353ceca.png',
    alt: 'Core King Premium Calibrated Plywood Banner 5',
  },
  {
    id: 6,
    image: '/images/hero/IMG_20260824_181350.png',
    alt: 'Core King Premium Calibrated Plywood Banner 6',
  },
  {
    id: 7,
    image: '/images/hero/IMG-20260809-WA0000.jpg',
    alt: 'Core King Premium Calibrated Plywood Banner 7',
  },
];

// Products Collection (Exact match to Briterply.com/products)
export const products = [
  {
    slug: 'core-king-gold',
    sectionId: 'core-king-gold',
    altSectionId: 'briter-gold',
    name: 'Core King BWR',
    category: 'Plywoods',
    tagline: '100% Calibrated BWR Grade Plywood',
    grade: 'BWR Grade',
    gradeShort: 'BWR',
    standard: 'IS:303 BWR Benchmark',
    warranty: '15 Years Warranty',
    warrantyShort: '15 Years',
    technology: '4-Stage Press',
    resin: 'Fortified Melamine BWR Synthetic Resin',
    coreTimber: '100% Selected High-Density Hardwood Timber',
    calibration: '100% Calibrated (±0.1 mm precision)',
    boilingTest: 'Passes 72-Hour Boiling Water Test (IS:303)',
    treatment: 'Deep Chemical Immersion against Borer & Termites',
    density: '750+ kg/m³',
    thicknesses: ['6 mm', '9 mm', '12 mm', '16 mm', '19 mm', '25 mm'],
    sizes: ['8 x 4 ft', '7 x 4 ft', '8 x 3 ft', '7 x 3 ft'],
    applications: 'Furniture, partitions, paneling, modular wardrobes',
    applicationTags: [
      { name: 'Modular Wardrobes', icon: 'Layers' },
      { name: 'Living Room Furniture', icon: 'Sparkles' },
      { name: 'Wall Paneling & CNC', icon: 'Wrench' },
      { name: 'Office Partitions', icon: 'Building2' },
      { name: 'False Ceilings', icon: 'CheckCheck' },
    ],
    description:
      'Core King BWR is a reliable plywood solution for homes and commercial use, offering long-lasting durability and superior nail-holding strength at an affordable price.',
    features: [
      'High water resistance for interior applications',
      'Excellent nail and screw holding capacity with zero core gaps',
      'Uniform thickness and ultra-smooth calibrated surface finish',
      'Termite and borer resistant chemical immersion treatment',
      'Perfect for furniture, partitions, modular wardrobes, and paneling',
      'Low formaldehyde emission conforming to eco standards',
    ],
    technicalSpecs: [
      { label: 'Grade Benchmark', value: 'IS:303 (BWR Grade)' },
      { label: 'Bonding Resin', value: 'Fortified Melamine BWR Resin' },
      { label: 'Pressing Cycle', value: '4-Time Hydraulic Hot Press' },
      { label: 'Calibration Tolerance', value: '±0.1 mm Mirror Flat' },
      { label: 'Screw Holding Force', value: '> 420 kgf (IS:1734 Part 11)' },
      { label: 'Boiling Water Test', value: '72+ Hours Continuous Boil' },
      { label: 'Core Veneer', value: '100% Seasoned Hardwood' },
      { label: 'Warranty Protection', value: '15 Years Guarantee' },
    ],
    image: '/images/IMG_20260901_101819.png',
  },
  {
    slug: 'core-king-club',
    sectionId: 'core-king-club',
    altSectionId: 'briter-club',
    name: 'Core King Club710',
    category: 'Plywoods',
    tagline: 'Flagship 100% Calibrated BWP Marine Grade Plywood',
    grade: 'BWP (Boiling Water Proof)',
    gradeShort: 'IS:710 BWP',
    standard: 'IS:710 Marine Grade Benchmark',
    warranty: '21 Years Warranty',
    warrantyShort: '21 Years',
    technology: '4-Stage Press',
    resin: '100% Pure Unextended Phenolic (PF) Resin',
    coreTimber: 'Selected High-Density Hardwood & Gurjan Species',
    calibration: 'Dual-Sided Machine Calibrated (±0.05 mm precision)',
    boilingTest: '100% Boiling Water Proof (72+ Hours Boil Immersion)',
    treatment: 'Vacuum-Pressure Chemical Impregnation (100% Borer & Termite Proof)',
    density: '800+ kg/m³',
    thicknesses: ['6 mm', '9 mm', '12 mm', '16 mm', '19 mm', '25 mm'],
    sizes: ['8 x 4 ft', '7 x 4 ft', '8 x 3 ft', '7 x 3 ft'],
    applications: 'Kitchens, bathrooms, premium furniture, coastal projects',
    applicationTags: [
      { name: 'Modular Kitchens', icon: 'Droplet' },
      { name: 'Bathrooms & Wet Areas', icon: 'Droplets' },
      { name: 'Luxury Furniture', icon: 'Sparkles' },
      { name: 'Coastal & Exterior Works', icon: 'ShieldCheck' },
      { name: 'Heavy Load Partitions', icon: 'Wrench' },
    ],
    description:
      'Core King Club710 is our flagship premium plywood, offering unmatched water resistance, strength, and termite protection. Perfect for luxury projects where quality cannot be compromised.',
    features: [
      'Superior water resistance for wet areas and coastal environments',
      '100% pure Phenolic synthetic resin for unbreakable bonding',
      '4-Stage Hot Press process ensuring absolute core cohesion and zero gaps',
      'Dual-side machine calibrated with mirror-like smooth flatness',
      'Enhanced vacuum-pressure termite and borer chemical protection',
      'Long-term structural integrity with 21-year warranty',
    ],
    technicalSpecs: [
      { label: 'Grade Benchmark', value: 'IS:710 (Marine BWP Grade)' },
      { label: 'Bonding Resin', value: '100% Pure Phenolic Formaldehyde (PF)' },
      { label: 'Pressing Cycle', value: '4-Time High-Pressure Hot Press' },
      { label: 'Calibration Tolerance', value: '±0.05 mm Ultra-Flat Precision' },
      { label: 'Screw Holding Force', value: '> 480 kgf (IS:1734 Part 11)' },
      { label: 'Boiling Water Test', value: '100% Waterproof (72+ hrs boil)' },
      { label: 'Core Veneer', value: 'Selected Dense Hardwood Timber' },
      { label: 'Warranty Protection', value: '21 Years Warranty' },
    ],
    image: '/images/IMG_20260901_101531.png',
  },

  /* =========================================================================
     EXTRA PRODUCTS COMMENTED OUT TO MATCH BRITERPLY.COM EXACT 2 PRODUCTS
     =========================================================================
  {
    slug: 'core-king-platinum-fire',
    name: 'Core King Platinum Fire-Shield',
    grade: 'IS:5509 & IS:710',
    warranty: '25 Years Warranty',
    technology: 'Vacuum Pressure Fire Impregnation, Quad Press',
    applications: 'Commercial Towers, Hotels & Multiplexes, Hospitals',
    description: 'Engineered for maximum architectural safety, combining extreme water resistance with fire retardant chemistry.',
    features: ['IS:5509 Fire Retardant', 'Flame resistance > 30 mins', 'Low smoke density'],
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'core-king-blockboard',
    name: 'Core King Pine Blockboard',
    grade: 'IS:1659 Grade I (BWP)',
    warranty: '25 Years Warranty',
    technology: 'Kiln-Seasoned Pine Battens, Hydraulic Press',
    applications: 'Full-Height Wardrobe Doors, Bookshelves & Long Spans',
    description: 'Solid kiln-dried pine battens framed for absolute dimensional stability and zero warping.',
    features: ['Zero-Warping Guarantee', 'Kiln-seasoned pine core', 'High rigidity'],
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'core-king-shuttering',
    name: 'Core King Pro Film-Faced Shuttering',
    grade: 'IS:4990 Construction Grade',
    warranty: 'Heavy-Duty Industrial Grade',
    technology: 'Mirror Phenolic Film, 5-Time Hot Press',
    applications: 'Bridge Columns, Flyover Slabs, High-Rise Concrete Shuttering',
    description: 'High-density mirror film coating delivering up to 30+ repetitions per sheet.',
    features: ['Mirror concrete finish', 'Up to 30+ repetitive pourings', '100% Boiling water immersion proof'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  },
  ========================================================================= */
];

/* =========================================================================
   EXTRA TEMPLATE DATA COMMENTED OUT TO MATCH BRITERPLY.COM EXACT CONTENT
   =========================================================================

export const quickStats = [
  { label: 'Years of Excellence', value: '25+', suffix: 'Years', desc: 'Crafting premium timber solutions' },
  { label: 'Hot Press Cycles', value: '4X', suffix: 'Press', desc: 'Quad-stage thermal bonding' },
  { label: 'Warranty Protection', value: '30', suffix: 'Years', desc: 'Unconditional replacement warranty' },
  { label: 'Calibrated Precision', value: '±0.1', suffix: 'mm', desc: 'Ultra-flat CNC joinery finish' },
];

export const testingStandards = [
  {
    name: 'Boiling Water Proof Test',
    standard: 'IS:710 Marine Benchmark',
    duration: '72 Hours Continuous Boil',
    result: 'Zero Delamination / 100% Bond Strength',
    description: 'Samples boiled continuously at 100°C for 72 hours to test phenolic resin cross-linking.',
  },
  {
    name: 'Screw & Nail Holding Test',
    standard: 'IS:1734 Part 11',
    duration: 'Axial Load Pull Test',
    result: 'Exceeds 450 kgf pull force',
    description: 'Tested along edges and faces to verify firm grip on modular hinges and fasteners.',
  },
];

export const comparisonData = [
  {
    parameter: 'Base Raw Material',
    coreKingClub: '100% Gurjan / Selected Hardwood',
    coreKingGold: 'High-Density Seasoned Hardwood',
    regularMarket: 'Mixed Poplar / Softwood scrap',
  },
  {
    parameter: 'Resin Type',
    coreKingClub: 'Pure Unextended Phenolic Resin',
    coreKingGold: 'Fortified Melamine BWR Resin',
    regularMarket: 'Extended urea glue with fillers',
  },
];

export const testimonials = [
  {
    name: 'Ar. Rajesh Malhotra',
    role: 'Principal Architect, Studio Forma',
    location: 'New Delhi & Gurugram',
    text: 'We have specified Core King Club710 in over 40 luxury residential villas. Zero waviness, absolute peace of mind.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'What is the main difference between BWP Marine and BWR Plywood?',
    answer: 'BWP stands for Boiling Water Proof (IS:710 standard) while BWR stands for Boiling Water Resistant (IS:303).',
  },
];

========================================================================= */





