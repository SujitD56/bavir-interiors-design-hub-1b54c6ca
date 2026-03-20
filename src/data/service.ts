import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectDining from "@/assets/project-dining.jpg";
import heroImage from "@/assets/hero-living-room.jpg";
import projectBathroom from "@/assets/project-bathroom.png";
import luxuryLiving from "@/assets/luxury-living.png";
import luxuryOffice from "@/assets/luxury-office.png";
import luxuryWardrobe from "@/assets/luxury-wardrobe.png";
import kitchenDetail from "@/assets/kitchen-detail.png";
import officeLounge from "@/assets/office-lounge.png";
import luxuryDining from "@/assets/luxury-dining.png";

/* =========================
   PROJECTS (Images Grid)
========================= */
export const serviceProjects = {
  "modular": [
    {
      id: 6,
      title: "Premium Modular Kitchen",
      image: projectKitchen,
      gallery: [projectKitchen, kitchenDetail, projectDining, heroImage],
    },
    {
      id: 61,
      title: "Minimalist Kitchen Detail",
      image: kitchenDetail,
      gallery: [kitchenDetail, projectKitchen, projectDining],
    },
  ],

  "bathroom": [
    {
      id: 9,
      title: "Spa-inspired Master Bath",
      image: projectBathroom,
      gallery: [projectBathroom, projectDining, heroImage],
    },
  ],

  "wardrobe": [
    {
      id: 10,
      title: "Bespoke Walk-in Closet",
      image: luxuryWardrobe,
      gallery: [luxuryWardrobe, projectBedroom, heroImage],
    },
  ],

  "living-room": [
    {
      id: 1,
      title: "Luxury Living Suite",
      image: luxuryLiving,
      gallery: [luxuryLiving, luxuryDining, heroImage, projectBedroom, projectKitchen],
    },
    {
      id: 5,
      title: "Executive Lounge Area",
      image: officeLounge,
      gallery: [officeLounge, luxuryOffice, projectOffice],
    },
  ],

  "dining-room": [
    {
      id: 2,
      title: "Modern Dining Experience",
      image: luxuryDining,
      gallery: [luxuryDining, luxuryLiving, heroImage, projectDining],
    },
  ],

  "master-bedroom": [
    {
      id: 3,
      title: "Serene Master Retreat",
      image: projectBedroom,
      gallery: [projectBedroom, luxuryWardrobe, heroImage],
    },
  ],

  "study-room": [
    {
      id: 4,
      title: "Corporate Excellence Center",
      image: luxuryOffice,
      gallery: [luxuryOffice, officeLounge, projectOffice, heroImage],
    },
  ],

  "pooja-room": [],
  "tv-unit": [],
  "home-interiors": [],
  "kids-bedroom": [],
  "false-ceiling": [],
  "space-saving": [],
  "guest-bedroom": [],
};

/* =========================
   SERVICE CONTENT (Text)
========================= */
export const serviceContent = {
  "modular": {
    title: "Modular Kitchen Designs",
    mainImage: projectKitchen,
    subtitle: "Smart, Stylish & Fully Customised Kitchens for Modern Homes",
    description: "At Bavir Interiors, we design modular kitchens that perfectly blend functionality, aesthetics, and durability. Whether you live in a compact apartment or a spacious villa, our modular kitchen solutions are crafted to suit your lifestyle, space, and budget.",
    whatIsTitle: "Transform Your Kitchen",
    whatIsDescription: "A modular kitchen is a modern setup made of pre-designed modules that are customised to fit your space. These kitchens offer better space optimisation, easy maintenance, and faster installation.",
    layouts: [
      { name: "L-Shaped", description: "Ideal for small to medium spaces" },
      { name: "U-Shaped", description: "Perfect for maximum storage" },
      { name: "Parallel (Galley)", description: "Efficient and space-saving for narrow areas" },
      { name: "Island Kitchen", description: "Best for open and spacious homes" },
      { name: "Open Kitchen", description: "Seamless integration with living areas" },
    ],
    trends: [
      "Matte and soft-touch finishes",
      "Handle-less cabinets",
      "Tall pantry and integrated storage",
      "Quartz and granite countertops",
      "Smart corner solutions",
    ],
    services: [
      "Space planning & layout design",
      "Modular cabinets & storage",
      "Countertop installation",
      "Appliance integration",
      "Post-installation support",
    ],
    highlights: [
      "Fully customised designs",
      "Premium quality materials",
      "Expert skilled execution",
      "On-time project delivery",
    ],
    costInfo: "Our modular kitchens are designed for all budgets, with flexible options based on size and finishes.",
    footerText: "Your kitchen deserves the best. Explore our modular kitchen designs today."
  },

  "bathroom": {
    title: "Bathroom Interior Design",
    mainImage: projectBathroom,
    subtitle: "Turn Your Bathroom into a Stylish Private Retreat",
    description: "Your bathroom is where your day starts fresh and ends in calm. We design bathrooms that combine comfort, aesthetics, and intelligent planning, ensuring a spa-like experience at home.",
    whatIsTitle: "Smart Space Planning",
    whatIsDescription: "A well-designed bathroom balances beauty with usability. We focus on clean lines, smart storage, and moisture-resistant finishes that feel luxurious yet practical.",
    layouts: [
      { name: "Compact Bathrooms", description: "Maximising every inch" },
      { name: "Master Bath Suites", description: "Spacious layouts with premium zoning" },
      { name: "Minimal & Scandinavian", description: "Clean, light, and airy designs" },
      { name: "Contemporary & Classic", description: "Timeless elegance with modern fixtures" },
      { name: "Wet & Dry Zoning", description: "Practical separation for hygiene" },
    ],
    trends: [
      "Earthy and neutral colour palettes",
      "Textured and stone-finish tiles",
      "Walk-in showers with glass partitions",
      "Matte black fittings",
      "Backlit and smart mirrors",
    ],
    services: [
      "Space planning & plumbing layout",
      "Tile and material selection",
      "Custom vanities and storage",
      "Lighting and mirror design",
    ],
    highlights: [
      "Tailor-made designs",
      "Moisture-resistant finishes",
      "Expert design guidance",
      "Quality assurance",
    ],
    costInfo: "Costs vary based on tile selection, sanitary ware, and custom cabinetry.",
    footerText: "Your dream bathroom starts here. Get a free consultation today."
  },

  "master-bedroom": {
    title: "Master Bedroom Interior Designs",
    mainImage: projectBedroom,
    subtitle: "Your Peaceful Personal Retreat",
    description: "We offer customised bedroom interiors across a wide range of styles, from modern minimalist to luxury contemporary. Every design is tailored to your room size, budget, and daily needs.",
    whatIsTitle: "Big Design for Small Bedrooms",
    whatIsDescription: "Even compact bedrooms can feel open and stylish with the right planning. Our designs include wall-to-wall wardrobes, floating furniture, and light colour palettes to enhance brightness.",
    layouts: [
      { name: "Modern Minimalist", description: "Focus on relaxation and simplicity" },
      { name: "Luxury Contemporary", description: "High-end finishes and comfort" },
      { name: "Scandinavian Inspired", description: "Calm and bright interiors" },
      { name: "Space-Saving", description: "Designed for compact apartments" },
      { name: "Study Integrated", description: "Bedrooms with work-from-home setups" },
    ],
    trends: [
      "Earthy and muted colour palettes",
      "Curved sofas and soft-edged furniture",
      "Textured wall panels",
      "Statement lighting",
      "Natural materials like wood and stone",
    ],
    services: [
      "Custom bed designs",
      "Wardrobe integration",
      "Lighting & false ceiling",
      "Wall textures & panelling",
    ],
    highlights: [
      "Personalised designs",
      "Premium materials",
      "Expert consultation",
      "Vastu-friendly options",
    ],
    costInfo: "Bedroom design costs depend on the level of customisation and furniture selection.",
    footerText: "Transform your bedroom into a peaceful retreat. Start designing today."
  },

  "living-room": {
    title: "Living Room Interior Design",
    mainImage: heroImage,
    subtitle: "The Heart of Your Home",
    description: "Your living room is the place for conversations, celebrations, and everyday comfort. We design living rooms that reflect your personality while staying practical and timeless.",
    whatIsTitle: "Smart Layout Planning",
    whatIsDescription: "A well-designed living room blends aesthetics with functionality. We use modular sofas, TV units with storage, and nesting tables to maximise space and reduce clutter.",
    layouts: [
      { name: "L-Shaped Seating", description: "Ideal for corners and open homes" },
      { name: "Symmetrical Layouts", description: "Balanced seating for square rooms" },
      { name: "Open Living-Dining", description: "Seamless flow and better light" },
      { name: "Modular Layouts", description: "Flexible furniture that adapts" },
    ],
    trends: [
      "Comfort-led luxury",
      "Curved sofas",
      "Textured feature walls",
      "Layered illumination",
      "Multifunctional furniture",
    ],
    services: [
      "Custom sofa & seating",
      "TV unit design",
      "Wall panelling & decor",
      "Lighting & false ceiling",
    ],
    highlights: [
      "High-quality materials",
      "Modern & Vastu-friendly",
      "End-to-end execution",
      "Space-optimised layouts",
    ],
    costInfo: "Living room interiors range from budget-friendly to luxury depending on finishes.",
    footerText: "Ready to upgrade your living room? Get a free consultation today."
  },

  "wardrobe": {
    title: "Wardrobe Interior Design",
    mainImage: luxuryWardrobe,
    subtitle: "Customised Storage That Fits Your Lifestyle",
    description: "A thoughtfully designed wardrobe does more than store clothes—it enhances the comfort and style of your bedroom. We create wardrobes that blend smart storage with beautiful design.",
    whatIsTitle: "Smart Internal Storage",
    whatIsDescription: "Our wardrobes include intelligent organisers like pull-out drawers, soft-close shutters, and dedicated shoe racks. Everything has its place, so your room stays neat.",
    layouts: [
      { name: "Sliding Wardrobes", description: "Perfect for compact spaces" },
      { name: "Hinged (Swing) Wardrobes", description: "Classic choice with full visibility" },
      { name: "Walk-In Wardrobes", description: "Luxury storage with ample space" },
      { name: "L-Shaped Wardrobes", description: "Utilise corner spaces efficiently" },
      { name: "Floor-to-Ceiling", description: "Maximum vertical storage" },
    ],
    trends: [
      "Handle-less shutters",
      "Mirrored wardrobe doors",
      "Dual-tone and textured finishes",
      "Internal LED lighting",
      "Adjustable shelving",
    ],
    services: [
      "Custom internal layout planning",
      "Material & finish selection",
      "Loft storage solutions",
      "Professional installation",
    ],
    highlights: [
      "Custom-designed for your space",
      "Premium soft-close hardware",
      "Durable moisture-resistant materials",
      "Quality warranty support",
    ],
    costInfo: "Wardrobe pricing is based on linear footage and internal accessories.",
    footerText: "Organize your life with style. Plan your wardrobe today."
  },

  "pooja-room": {
    title: "Pooja Room Design Ideas",
    mainImage: heroImage,
    subtitle: "Peaceful Spaces for Peaceful Homes",
    description: "A pooja room is the spiritual soul of an Indian home. We design pooja rooms that honour tradition while blending seamlessly with modern interiors, focusing on serenity and Vastu alignment.",
    whatIsTitle: "Vastu-Compliant Layouts",
    whatIsDescription: "We follow Vastu principles for direction, placement, and lighting to create a spiritually harmonious environment. From wall-mounted to floor-mounted mandirs, we design for every home.",
    layouts: [
      { name: "Wall-Mounted Mandirs", description: "Ideal for small apartments" },
      { name: "Floor-Mounted Temples", description: "Traditional temple-like feel" },
      { name: "Compact Corner Units", description: "Fits effortlessly into any room" },
      { name: "Dedicated Pooja Rooms", description: "Spacious areas for rituals" },
      { name: "Cabinet Integrated", description: "Closed units for a clutter-free look" },
    ],
    trends: [
      "Laser-cut jaali panels",
      "Marble or stone-finish backdrops",
      "Warm LED backlighting",
      "Wooden finishes with brass accents",
      "Minimal, hidden storage",
    ],
    services: [
      "Mandir design & placement",
      "Vastu-focused planning",
      "Material selection (Marble/Wood)",
      "Lighting design",
    ],
    highlights: [
      "Custom mandir designs",
      "Skilled craftsmanship",
      "Vastu-alignment",
      "Professional execution",
    ],
    costInfo: "Costs depend on material choice and complexity of the mandir design.",
    footerText: "Create your sacred space today. Talk to our designers."
  },

  "tv-unit": {
    title: "Modular TV Unit Designs",
    mainImage: luxuryLiving, // Fallback to hero
    subtitle: "Elevate Your Entertainment Zone",
    description: "A TV unit today is more than just a stand—it’s a focal point that defines your living room’s style. We design modular TV units that combine smart storage and clean aesthetics.",
    whatIsTitle: "Space-Optimised Layouts",
    whatIsDescription: "Whether you prefer a sleek floating unit or a wall-to-wall entertainment setup, our designs are crafted to suit your viewing habits and room layout.",
    layouts: [
      { name: "Wall-Mounted Units", description: "Clean look for small apartments" },
      { name: "Floor-Mounted Units", description: "Ample storage for larger rooms" },
      { name: "Floating TV Units", description: "Airy and contemporary appearance" },
      { name: "Modular Media Units", description: "Complete wall-to-wall setups" },
      { name: "Bedroom TV Units", description: "Designed to match bedroom furniture" },
    ],
    trends: [
      "Concealed wiring systems",
      "Vertical slat backdrops",
      "Matte laminates",
      "Backlit panels",
      "Handle-less shutters",
    ],
    services: [
      "Custom TV unit design",
      "Storage & cabinet planning",
      "Wire management solutions",
      "Accent lighting",
    ],
    highlights: [
      "Space-optimised designs",
      "High-quality materials",
      "Seamless integration",
      "Professional installation",
    ],
    costInfo: "Modular TV units are priced based on linear size and storage complexity.",
    footerText: "Upgrade your viewing experience. Design your TV unit today."
  },

  "dining-room": {
    title: "Dining Room Interior Designs",
    mainImage: luxuryDining,
    subtitle: "Bringing People Together",
    description: "We design dining room interiors that feel welcoming and functional. From compact city apartments to spacious family rooms, we tailor the space to suit your lifestyle.",
    whatIsTitle: "Thoughtful Space Planning",
    whatIsDescription: "A well-designed dining room allow easy movement while maintaining a clear connection to the kitchen. We focus on the right-sized furniture and smart storage solutions.",
    layouts: [
      { name: "4-Seater Dining", description: "Compact and cozy" },
      { name: "6-Seater & 8-Seater", description: "Perfect for larger families" },
      { name: "Mixed Seating", description: "Chairs paired with benches" },
      { name: "Integrated Storage", description: "Dining areas with pooja or storage" },
      { name: "Modern Minimalist", description: "Clean lines and stone tops" },
    ],
    trends: [
      "Marble and glass-top tables",
      "Statement lighting fixtures",
      "Neutral colour palettes",
      "Fluted wall panels",
      "Crockery units and buffets",
    ],
    services: [
      "Furniture selection & layout",
      "Crockery unit design",
      "Lighting & mood setting",
      "Wall finishes & decor",
    ],
    highlights: [
      "Balanced & functional plans",
      "Premium materials",
      "Expert consultation",
      "On-time delivery",
    ],
    costInfo: "Dining room costs depend on furniture selection and storage units.",
    footerText: "Create the perfect space for meals and memories. Start today."
  },

  "home-interiors": {
    title: "1BHK, 2BHK & 3BHK Home Interiors",
    mainImage: heroImage,
    subtitle: "Made for Real Living",
    description: "Your home should reflect how you live. We create thoughtfully planned interiors for 1BHK, 2BHK, and 3BHK homes that balance comfort, style, and everyday functionality.",
    whatIsTitle: "Homes Designed to Fit Every Lifestyle",
    whatIsDescription: "From your first home to your forever home, we design interiors that grow with you. Our team handles everything from layout planning to final execution.",
    layouts: [
      { name: "1BHK - Smart Living", description: "Intelligent design for compact spaces" },
      { name: "2BHK - Functional & Balanced", description: "Perfect for small growing families" },
      { name: "3BHK - Personalised Luxury", description: "Comfort with individual identity for each room" },
    ],
    trends: [
      "Cohesive design themes",
      "Hydraulic storage beds",
      "Zoning for privacy and flow",
      "Space-saving furniture",
      "Neutral bases with bold accents",
    ],
    services: [
      "Complete home interior design",
      "3D Visualisation",
      "Project management",
      "Material finishing & execution",
    ],
    highlights: [
      "End-to-end solutions",
      "Transparent pricing",
      "On-time delivery",
      "Reliable after-service",
    ],
    costInfo: "Home interior packages are available for all BHK configurations and budgets.",
    footerText: "Spaces you'll love living in. Start your home journey today."
  },

  "study-room": {
    title: "Study Room Interior Designs",
    mainImage: luxuryOffice,
    subtitle: "Focused & Stylish Living",
    description: "A well-designed study room creates the right environment for focus, creativity, and productivity. We design interiors that combine smart planning and ergonomic comfort.",
    whatIsTitle: "Improved Focus & Productivity",
    whatIsDescription: "A dedicated study area reduces distractions and helps establish a productive mindset. We position desks and storage to maximise space and natural light.",
    layouts: [
      { name: "Student Study Zone", description: "Focused and organised" },
      { name: "Home Office Setup", description: "Professional environment for adults" },
      { name: "Creative Reading Nook", description: "Compact and inspiring" },
      { name: "Shared Workspace", description: "For siblings or couples" },
      { name: "Minimalist Studio", description: "Clean lines and zero clutter" },
    ],
    trends: [
      "Floating desks",
      "Integrated LED task lighting",
      "Biophilic elements (plants)",
      "Professional video backdrops",
      "Cable management solutions",
    ],
    services: [
      "Desk & chair selection",
      "Storage unit design",
      "Lighting planning",
      "Acoustic solutions",
    ],
    highlights: [
      "Ergonomic layouts",
      "Functional storage",
      "Modern aesthetics",
      "Vastu-aligned options",
    ],
    costInfo: "Study room costs are based on desk size and storage volume.",
    footerText: "Create a space that boosts productivity. Design your study today."
  },

  "kids-bedroom": {
    title: "Kids Bedroom Interior Designs",
    mainImage: projectBedroom,
    subtitle: "Designs That Grow With Your Child",
    description: "A child’s bedroom is where imagination begins and learning happens. We design kids' interiors that are fun, safe, functional, and easily adaptable as they grow.",
    whatIsTitle: "Child-First Design Approach",
    whatIsDescription: "We prioritise safety with rounded edges, non-toxic finishes, and durable materials. Our zones for sleeping, studying, and playing ensure your child stays comfortable.",
    layouts: [
      { name: "Boys' Bedroom", description: "Playful and energetic" },
      { name: "Girls' Bedroom", description: "Creative and calm" },
      { name: "Shared Sibling Room", description: "Balanced layouts for two kids" },
      { name: "Nursery Design", description: "Soft, safe, and welcoming" },
      { name: "Bunk Bed Layouts", description: "Maximising floor space" },
    ],
    trends: [
      "Theme-based rooms (Space, Jungle, etc.)",
      "Loft beds with storage",
      "Study desks built into wardrobes",
      "Wall murals and decals",
      "Playful integrated lighting",
    ],
    services: [
      "Custom child-friendly furniture",
      "Safe storage solutions",
      "Theme-based decor",
      "Study area planning",
    ],
    highlights: [
      "Child-safe materials",
      "Creative & fun themes",
      "Space-smart layouts",
      "Durable non-toxic finishes",
    ],
    costInfo: "Kids' room costs vary based on customisation and theme complexity.",
    footerText: "Give your child the room of their dreams. Start planning today."
  },

  "false-ceiling": {
    title: "Modern False Ceiling Designs",
    mainImage: projectKitchen, // Fallback
    subtitle: "Elevate Every Room",
    description: "False ceilings define the design character of modern homes. We design ceilings that enhance lighting, improve acoustics, and add a refined finish to your interiors.",
    whatIsTitle: "Why Install a False Ceiling?",
    whatIsDescription: "A false ceiling conceals wiring and ducts while providing space for layered lighting (cove/LED). It also adds thermal comfort and insulation to your home.",
    layouts: [
      { name: "Gypsum Ceilings", description: "Seamless and fire-resistant" },
      { name: "POP (Plaster of Paris)", description: "Highly mouldable and decorative" },
      { name: "PVC Ceilings", description: "Waterproof and low-maintenance" },
      { name: "Wooden Ceilings", description: "Adds luxury and warmth" },
      { name: "Low-Height Solutions", description: "Slim designs for modern flats" },
    ],
    trends: [
      "Minimalist single-layer designs",
      "Floating panels with backlighting",
      "Geometric cut-out patterns",
      "Integrated LED profile lighting",
      "Wood-accent combinations",
    ],
    services: [
      "Ceiling layout design",
      "Electrical & light integration",
      "Material selection guidance",
      "Professional installation",
    ],
    highlights: [
      "Enhanced lighting",
      "Improved acoustics",
      "Clean finishing",
      "Durable materials",
    ],
    costInfo: "False ceiling cost is calculated based on square footage and design complexity.",
    footerText: "Complete your home's look with a modern ceiling. Get a quote today."
  },

  "space-saving": {
    title: "Space-Saving Interior Designs",
    mainImage: heroImage,
    subtitle: "Small Home, Big Comfort",
    description: "When space is limited, smart design makes all the difference. Our solutions help you maximise functionality without compromising on style, making every square foot work harder.",
    whatIsTitle: "What Are Space-Saving Designs?",
    whatIsDescription: "These designs focus on available space through multi-functional furniture and intelligent storage. We create rooms that feel open, organised, and effortless to live in.",
    layouts: [
      { name: "Multi-Purpose Furniture", description: "Sofa-cum-beds and foldable desks" },
      { name: "Vertical Storage", description: "Using wall height efficiently" },
      { name: "Hidden Compartments", description: "Storage where you least expect it" },
      { name: "Murphy Bed Solutions", description: "Beds that disappear during the day" },
      { name: "Slim Profile Designs", description: "Minimal furniture footprints" },
    ],
    trends: [
      "Transforming furniture",
      "Under-stair storage",
      "Wall-mounted floating units",
      "Sliding doors for space efficiency",
      "Multifunctional ottomans",
    ],
    services: [
      "Space-efficiency consultation",
      "Custom multi-functional furniture",
      "Vertical storage planning",
      "Compact kitchen & room design",
    ],
    highlights: [
      "Maximised functionality",
      "Reduced clutter",
      "Brighter airy feel",
      "Budget-friendly smarts",
    ],
    costInfo: "Space-saving solutions are cost-effective ways to increase your home's utility.",
    footerText: "Make the most of your space. Book a smart design consultation."
  },

  "guest-bedroom": {
    title: "Guest Bedroom Design",
    mainImage: projectBedroom,
    subtitle: "Make Your Guests Feel at Home",
    description: "A guest bedroom is a reflection of your warmth and hospitality. We design spaces that balance comfort, functionality, and visual appeal so your visitors feel truly welcome.",
    whatIsTitle: "Focus on Quality & Comfort",
    whatIsDescription: "We use soothing colours like beige and cream to make guest rooms feel spacious. Small details like bedside charging points and fresh towels elevate their experience.",
    layouts: [
      { name: "Modern Minimal", description: "Clean and welcoming" },
      { name: "Cozy Contemporary", description: "Warm and inviting" },
      { name: "Dual-Purpose Guest/Study", description: "Ideal for hybrid homes" },
      { name: "Foldable/Compact", description: "Making the most of extra rooms" },
    ],
    trends: [
      "Neutral and pastel tones",
      "Plush bedding and linens",
      "Subtle wallpaper accents",
      "Minimalist nightstands",
      "Built-in dresser units",
    ],
    services: [
      "Guest room layout planning",
      "Storage & furniture planning",
      "Lighting & mood setting",
      "Decor & styling",
    ],
    highlights: [
      "Consistent home theme",
      "Smart storage for luggage",
      "Thoughtful lighting",
      "Comfort-led approach",
    ],
    costInfo: "Guest bedroom designs can be planned to fit any budget.",
    footerText: "Ready to host with style? Let's design your guest room today."
  },
};

export const serviceProcess = {
  title: "Our Interior Design Process",
  subtitle: "A structured approach that ensures clarity, quality, and on-time delivery for every project.",
  steps: [
    {
      step: "01",
      title: "Consultation & Requirement Study",
      description: "Understanding your needs, budget, lifestyle, and site conditions through detailed discussions.",
    },
    {
      step: "02",
      title: "Space Planning & Concept",
      description: "Optimized layouts and design concepts that balance functionality with aesthetics.",
    },
    {
      step: "03",
      title: "3D Design & Material Selection",
      description: "Detailed 3D visuals and curated material selections to clearly visualize the final space.",
    },
    {
      step: "04",
      title: "Quotation & Design Approval",
      description: "Transparent pricing with detailed cost breakdowns followed by final approvals.",
    },
    {
      step: "05",
      title: "Execution & Site Supervision",
      description: "End-to-end execution managed by experts with regular supervision and quality checks.",
    },
    {
      step: "06",
      title: "Quality Check & Handover",
      description: "Final inspections and seamless handover of a beautifully finished, ready-to-use space.",
    },
  ],
};
