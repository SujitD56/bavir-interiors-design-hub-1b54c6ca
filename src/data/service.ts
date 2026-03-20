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
  residential: [
    {
      id: 1,
      title: "Luxury Residential Suite",
      location: "Indiranagar, Bengaluru",
      image: luxuryLiving,
      gallery: [
        luxuryLiving,
        luxuryDining,
        heroImage,
        projectBedroom,
        projectKitchen,
      ],
    },
    {
      id: 2,
      title: "Modern Dining Experience",
      location: "Jayanagar, Bengaluru",
      image: luxuryDining,
      gallery: [
        luxuryDining,
        luxuryLiving,
        heroImage,
        projectDining,
      ],
    },
  ],

  commercial: [
    {
      id: 4,
      title: "Corporate Excellence Center",
      location: "MG Road, Bengaluru",
      image: luxuryOffice,
      gallery: [
        luxuryOffice,
        officeLounge,
        projectOffice,
        heroImage,
      ],
    },
    {
      id: 5,
      title: "Executive Lounge Area",
      location: "Electronic City, Bengaluru",
      image: officeLounge,
      gallery: [
        officeLounge,
        luxuryOffice,
        projectOffice,
      ],
    },
  ],

  modular: [
    {
      id: 6,
      title: "Premium Modular Kitchen",
      location: "Sarjapur Road, Bengaluru",
      image: projectKitchen,
      gallery: [
        projectKitchen,
        kitchenDetail,
        projectDining,
        heroImage,
      ],
    },
    {
      id: 61,
      title: "Minimalist Kitchen Detail",
      location: "Whitefield, Bengaluru",
      image: kitchenDetail,
      gallery: [
        kitchenDetail,
        projectKitchen,
        projectDining,
      ],
    },
  ],

  turnkey: [
    {
      id: 7,
      title: "Luxury Turnkey Villa",
      location: "Hebbal, Bengaluru",
      image: heroImage,
      gallery: [
        heroImage,
        luxuryLiving,
        luxuryOffice,
        projectKitchen,
      ],
    },
  ],

  bathroom: [
    {
      id: 9,
      title: "Spa-inspired Master Bath",
      location: "Koramangala, Bengaluru",
      image: projectBathroom,
      gallery: [
        projectBathroom,
        projectDining,
        heroImage,
      ],
    },
  ],

  wardrobe: [
    {
      id: 10,
      title: "Bespoke Walk-in Closet",
      location: "HSR Layout, Bengaluru",
      image: luxuryWardrobe,
      gallery: [
        luxuryWardrobe,
        projectBedroom,
        heroImage,
      ],
    },
  ],
};

/* =========================
   SERVICE CONTENT (Text)
========================= */
export const serviceContent = {
  // ... (residential, commercial, modular kept as is)
  // I'll just append wardrobe and bathroom here
  wardrobe: {
    title: "Custom Wardrobes & Storage Solutions",
    mainImage: luxuryWardrobe,
    subtitle: "Elegantly designed for maximum space & style",
    description: "At Bavir Interiors, we design wardrobes that are more than just storage—they are a seamless part of your bedroom's aesthetic. Our solutions focus on intelligent space management, premium finishes, and hardware that lasts a lifetime.",
    whatIsTitle: "Why Choose a Custom Wardrobe?",
    whatIsDescription: "A custom wardrobe is tailored to your specific storage needs and room dimensions. From walk-in closets to wall-to-wall sliding units, we ensure every inch is utilised effectively with specialized compartments for all your essentials.",
    layouts: [
      { name: "Sliding Door Wardrobes", description: "Space-saving and modern" },
      { name: "Hinged Door Wardrobes", description: "Classic and versatile" },
      { name: "Walk-in Closets", description: "The ultimate luxury storage" },
      { name: "L-Shaped Wardrobes", description: "Perfect for corner spaces" },
      { name: "Floor-to-Ceiling Units", description: "Maximum vertical storage" },
    ],
    trends: [
      "Integrated LED profile lighting",
      "Tinted glass and lacquered glass doors",
      "Minimalist handle-less designs",
      "Customised internal organisers",
      "Premium leather and fabric finishes",
    ],
    services: [
      "Walk-in Closet Design",
      "Sliding & Hinged Wardrobes",
      "Loft Storage Solutions",
      "TV & Entertainment Units",
      "Study & Home Office Desks",
      "Shoe Racks & Foyer Storage",
    ],
    highlights: [
      "Personalised internal layouts",
      "Premium soft-close hardware",
      "Durable moisture-resistant materials",
      "Expert installation",
    ],
    costInfo: "Our wardrobes are priced based on linear footage, material choice, and internal accessories.",
    footerText: "Organize your life with style. Let us design the perfect storage solution for your home today."
  },

  bathroom: {
    title: "Bathroom Interior Design Ideas",
    mainImage: projectBathroom,
    subtitle: "Turn Your Bathroom into a Stylish Private Retreat",
    description: "Your bathroom is more than just a functional space—it’s where your day starts fresh and ends in calm. At Bavir Interiors, we design bathrooms that combine comfort, aesthetics, and intelligent planning, no matter the size of your home.",
    whatIsTitle: "How to Design the Perfect Modern Bathroom?",
    whatIsDescription: "A well-designed bathroom balances beauty with usability. We focus on clean lines, smart storage, and moisture-resistant finishes that feel luxurious yet survive the test of time and humidity.",
    layouts: [
      { name: "Compact Bathrooms", description: "Maximising every inch in urban apartments" },
      { name: "Master Bath Suites", description: "Spacious layouts with premium zoning" },
      { name: "Minimal & Scandinavian", description: "Clean, light, and airy designs" },
      { name: "Contemporary & Classic", description: "Timeless elegance with modern fixtures" },
      { name: "Wet & Dry Zoning", description: "Practical separation for better hygiene" },
    ],
    trends: [
      "Earthy and neutral colour palettes",
      "Textured and stone-finish tiles",
      "Walk-in showers with glass partitions",
      "Matte black and brushed metal fittings",
      "Backlit and smart mirrors",
      "Natural wood accents for a spa-like feel",
    ],
    services: [
      "Space planning & plumbing layout",
      "Tile and material selection",
      "Custom vanities and storage",
      "Lighting and mirror design",
      "Glass partition installation",
      "Fixtures & fittings consultation",
    ],
    highlights: [
      "Tailor-made bathroom designs",
      "High-quality moisture-resistant finishes",
      "Expert design & plumbing guidance",
      "Hassle-free execution",
      "Quality assurance & warranty",
    ],
    costInfo: "Bathroom renovation costs vary based on tile selection, sanitary ware, and custom cabinetry.",
    footerText: "Your dream bathroom starts here. Get a free design consultation and bathroom cost estimate today."
  },
  residential: {
    title: "Residential & Home Interiors",
    mainImage: luxuryLiving,
    description:
      "We design homes that reflect comfort, style, and practicality. From concept to execution, our residential interior solutions combine aesthetics with functionality.",
    services: [
      "Living Room Interior Design",
      "Bedroom Interior Design",
      "Modular Kitchen Design",
      "Wardrobes & Storage Units",
      "False Ceiling & Lighting Design",
      "Wall Finishes (Paint, Wallpaper, Panels)",
      "Flooring (Tiles, Wooden, Vinyl)",
      "Custom Furniture & Carpentry",
    ],
    highlights: [
      "Space-efficient planning",
      "Personalized designs",
      "Premium materials",
      "Modern & traditional styles",
    ],
  },

  commercial: {
    title: "Commercial Interior Solutions",
    mainImage: luxuryOffice,
    description:
      "We create functional, brand-focused commercial interiors that enhance productivity and customer experience.",
    services: [
      "Corporate Offices & IT Spaces",
      "Retail Stores & Showrooms",
      "Restaurants & Cafés",
      "Clinics & Healthcare Spaces",
      "Reception & Waiting Areas",
      "Workstations & Office Furniture",
      "Branding-integrated interiors",
    ],
    highlights: [
      "Efficient space planning",
      "Professional execution",
      "Durable materials",
      "On-time project delivery",
    ],
  },

  modular: {
    title: "Transform Your Kitchen with Bavir Interiors",
    mainImage: projectKitchen,
    subtitle: "Smart, Stylish & Fully Customised Kitchens for Modern Homes",
    description:
      "At Bavir Interiors, we design modular kitchens that perfectly blend functionality, aesthetics, and durability. Whether you live in a compact apartment or a spacious villa, our modular kitchen solutions are crafted to suit your lifestyle, space, and budget. From sleek minimal designs to elegant contemporary finishes, our kitchens are thoughtfully planned to make cooking efficient, organised, and enjoyable.",
    whatIsTitle: "What Is a Modular Kitchen?",
    whatIsDescription: "A modular kitchen is a modern kitchen setup made of pre-designed cabinet modules that are customised to fit your space. These kitchens offer better space optimisation, easy maintenance, faster installation, and a stylish modern appeal. At Bavir Interiors, every modular kitchen is tailor-made, ensuring maximum utility and long-lasting quality.",
    layouts: [
      { name: "L-Shaped", description: "Ideal for small to medium spaces" },
      { name: "U-Shaped", description: "Perfect for maximum storage and workflow" },
      { name: "Parallel (Galley)", description: "Efficient and space-saving" },
      { name: "Island Kitchen", description: "Best for open and spacious homes" },
      { name: "Open Kitchen", description: "Seamless integration with living or dining areas" },
    ],
    trends: [
      "Matte and soft-touch finishes",
      "Handle-less cabinets",
      "Tall pantry and integrated storage units",
      "Open shelving and glass display cabinets",
      "Quartz and granite countertops",
      "Smart corner solutions and accessories",
    ],
    services: [
      "Space planning & layout design",
      "Modular kitchens and wardrobes",
      "Living room, bedroom & dining interiors",
      "Custom storage solutions",
      "Lighting, materials & finishes selection",
      "3D visualisation",
      "Project management & execution",
      "Post-installation support",
    ],
    highlights: [
      "Fully customised kitchen designs",
      "Premium quality materials and fittings",
      "Expert designers and skilled execution",
      "Smart storage solutions for Indian kitchens",
      "Transparent pricing and budget-friendly",
      "On-time project delivery",
    ],
    costInfo: "Our modular kitchens are designed for all budgets, with flexible options based on size, materials, and finishes.",
    footerText: "Your kitchen deserves more than just good looks—it deserves smart design and flawless execution. Explore our modular kitchen designs and turn your cooking space into a beautiful, efficient hub for everyday living."
  },

  turnkey: {
    title: "Turnkey Interior Solutions",
    mainImage: projectKitchen,
    description:
      "End-to-end interior execution managed entirely by our expert team — from design to final handover.",
    services: [
      "Design & 3D Visualization",
      "Material Selection",
      "Civil & Carpentry Works",
      "Electrical & Plumbing",
      "Painting & Finishing",
      "Project Supervision",
      "Final Handover",
    ],
    highlights: [
      "Single-point responsibility",
      "Transparent pricing",
      "Quality-controlled execution",
      "Stress-free experience",
    ],
  },
};
export const serviceProcess = {
  title: "Our Interior Design Process",
  subtitle:
    "A structured approach that ensures clarity, quality, and on-time delivery for every project.",
  steps: [
    {
      step: "01",
      title: "Consultation & Requirement Study",
      description:
        "Understanding your needs, budget, lifestyle, and site conditions through detailed discussions and measurements.",
    },
    {
      step: "02",
      title: "Space Planning & Concept Design",
      description:
        "Optimized layouts and design concepts that balance functionality with aesthetics.",
    },
    {
      step: "03",
      title: "3D Design & Material Finalization",
      description:
        "Detailed 3D visuals and curated material selections to clearly visualize the final space.",
    },
    {
      step: "04",
      title: "Quotation & Design Approval",
      description:
        "Transparent pricing with detailed cost breakdowns followed by final approvals.",
    },
    {
      step: "05",
      title: "Execution & Site Supervision",
      description:
        "End-to-end execution managed by experts with regular supervision and quality checks.",
    },
    {
      step: "06",
      title: "Quality Check & Final Handover",
      description:
        "Final inspections and seamless handover of a beautifully finished, ready-to-use space.",
    },
  ],
};
