export const PRODUCTS = [
  {
    id: 1,
    slug: 'vanguard-ultra-series-700w',
    name: 'Vanguard Ultra Series 700W+',
    category: 'Solar Panels',
    subCategory: 'Bifacial N-Type TOPCon',
    description: 'Our flagship ultra-high power module designed for utility-scale and large commercial projects.',
    longDescription: 'The Vanguard Ultra Series represents the pinnacle of solar engineering. Utilizing N-type TOPCon cell technology and bifacial power generation, these modules reach efficiencies of up to 23.5%. Designed to withstand extreme wind and snow loads while maintaining peak performance in high-temperature environments.',
    features: ['Bifaciality up to 85%', 'Low temperature coefficient', 'Enhanced PID resistance', 'Anti-reflective glass coating'],
    specs: [
      { label: 'Max Power (Pmax)', value: '710W' },
      { label: 'Module Efficiency', value: '22.9%' },
      { label: 'Dimensions', value: '2384 x 1303 x 33 mm' },
      { label: 'Weight', value: '38.5 kg' },
      { label: 'Operating Temp', value: '-40°C to +85°C' }
    ],
    image: 'solar-panel-ultra.jpg'
  },
  {
    id: 2,
    slug: 'terra-mount-v3',
    name: 'TerraMount V3 Ground Structure',
    category: 'Mounting Structures',
    subCategory: 'Fixed Tilt / Single Axis Tracker',
    description: 'Heavy-duty galvanized steel mounting systems with modular design for rapid deployment.',
    longDescription: 'Engineered for durability and precision, the TerraMount V3 is the backbone of utility solar farms. Each component is hot-dip galvanized for 25-year corrosion resistance and pre-engineered for specific wind zones and soil types.',
    features: ['Pre-assembled components', 'High wind load rating (up to 250km/h)', 'Adjustable tilt 0-45°', 'Terrain following capability'],
    specs: [
      { label: 'Material', value: 'Q355B Galvanized Steel' },
      { label: 'Coating', value: 'Hot-dip Galvanizing (80um)' },
      { label: 'Foundation Type', value: 'Rammed Post / Concrete' },
      { label: 'Rail Length', value: 'Customizable' }
    ],
    image: 'mounting-structure.jpg'
  },
  {
    id: 3,
    slug: 'junction-box-pro-ip68',
    name: 'ProConnect IP68 Junction Box',
    category: 'Components',
    subCategory: 'Electrical BOS',
    description: 'High-performance junction boxes with integrated bypass diodes for maximum reliability.',
    longDescription: 'The ProConnect series ensures safe and efficient power collection from the cells to the string inverter. Featuring IP68 weatherproofing and high-thermal dissipation materials.',
    features: ['IP68 Protection Rank', 'Integrated heat sink', 'TUV/UL certified', 'Push-lock connectors'],
    specs: [
      { label: 'Rated Current', value: '30A' },
      { label: 'Rated Voltage', value: '1500V DC' },
      { label: 'Contact Resistance', value: '<0.5mΩ' },
      { label: 'Protection Class', value: 'Class II' }
    ],
    image: 'junction-box.jpg'
  },
  {
    id: 4,
    slug: 'rooftop-kit-premium-5kw',
    name: 'Premium Home 5kW Kit',
    category: 'Rooftop Kits',
    subCategory: 'Residential Complete System',
    description: 'All-in-one residential solar solution including panels, inverter, and mounting hardware.',
    longDescription: 'Everything you need for a premium residential installation. This kit includes 12x Vanguard Alpha 420W panels, a 5kW Dual-MPPT inverter, and our AeroRail mounting system.',
    features: ['Plug-and-play installation', 'Real-time monitoring app', '10-year system warranty', 'Aesthetic black-on-black design'],
    specs: [
      { label: 'System Capacity', value: '5.04 kWp' },
      { label: 'Est. Annual Generation', value: '7,500 kWh' },
      { label: 'Roof Area Required', value: '26 m²' },
      { label: 'Monitoring', value: 'WiFi / 4G' }
    ],
    image: 'residential-kit.jpg'
  }
];

export const PROJECTS = [
  {
    id: 1,
    slug: 'saudi-desert-mega-plant',
    title: 'Neom Desert Mega Plant',
    location: 'Tabuk Province, Saudi Arabia',
    capacity: '1.2 GW',
    description: 'A massive utility-scale project powering the futuristic NEOM city development.',
    impact: 'Offset 800,000 tons of CO2 annually',
    metrics: [
      { label: 'Panels Installed', value: '1,800,000+' },
      { label: 'Land Area', value: '1,200 Hectares' },
      { label: 'Peak Efficiency', value: '23.1%' },
      { label: 'Commissioned', value: '2025' }
    ],
    image: 'neom-project.jpg'
  },
  {
    id: 2,
    slug: 'industrial-roof-berlin',
    title: 'Continental Logistics Hub',
    location: 'Berlin, Germany',
    capacity: '8.5 MW',
    description: 'Large-scale industrial rooftop installation facilitating zero-emission logistics.',
    impact: 'Powering 2,500 local households',
    metrics: [
      { label: 'System Type', value: 'Grid-Tied Rooftop' },
      { label: 'Construction Time', value: '4 Months' },
      { label: 'Modules', value: 'Vanguard Alpha' },
      { label: 'CO2 Offset', value: '5,200 tons/yr' }
    ],
    image: 'industrial-berlin.jpg'
  }
];

export const INSIGHTS = [
  {
    id: 1,
    slug: 'future-of-n-type-cells',
    title: 'N-Type TOPCon vs. PERC: The Efficiency Race',
    category: 'Technology',
    date: 'April 15, 2026',
    excerpt: 'Deep dive into why N-type technology is becoming the new industry standard for high-performance modules.',
    content: 'Long article content about cell technologies...'
  },
  {
    id: 2,
    slug: 'supply-chain-resilience',
    title: 'Building a Vertical Solar Supply Chain',
    category: 'Industry',
    date: 'March 22, 2026',
    excerpt: 'How Vanguard Solar is mitigating global logistics risks through local manufacturing hubs.',
    content: 'Article about manufacturing logistics...'
  }
];

export const CERTIFICATIONS = [
  { name: 'IEC 61215', description: 'Design qualification and type approval' },
  { name: 'IEC 61730', description: 'Photovoltaic (PV) module safety qualification' },
  { name: 'UL 1703', description: 'Safety standard for flat-plate PV modules' },
  { name: 'ISO 9001:2015', description: 'Quality management systems' },
  { name: 'ISO 14001:2015', description: 'Environmental management systems' },
  { name: 'CE Marking', description: 'European conformity certification' }
];

export const MANUFACTURING_PROCESS = [
  { step: '01', title: 'Silicon Ingot Growth', description: 'Ultra-pure silicon is melted and grown into single-crystal ingots.' },
  { step: '02', title: 'Wafer Dicing', description: 'Ingots are sliced into ultra-thin wafers using precision diamond-wire saws.' },
  { step: '03', title: 'Cell Fabrication', description: 'TOPCon layer deposition and silver grid printing for electron collection.' },
  { step: '04', title: 'Stringing & Lay-up', description: 'Cells are interconnected with high-conductivity ribbons and placed on glass.' },
  { step: '05', title: 'Lamination', description: 'Vacuum heat sealing under high pressure to ensure 30-year encapsulation.' },
  { step: '06', title: 'Testing & EL', description: 'Final flash test and Electroluminescence (EL) imaging to detect micro-cracks.' }
];
