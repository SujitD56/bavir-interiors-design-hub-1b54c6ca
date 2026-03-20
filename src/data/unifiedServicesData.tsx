import React from "react";
import { 
  Bed, Sofa, Bath, Columns, Sparkles, LayoutGrid, Gem, CheckCircle2, 
  Lightbulb, ShieldCheck, Ruler, Home, BookOpen, Baby, Flame, Tv,
  Utensils, Box, Shield, Star, Clock, Heart, MoveDiagonal, 
  Droplet, Maximize, PaintBucket, Minimize2
} from "lucide-react";

export interface ServiceFeature {
  text: string;
  icon: React.ReactNode;
}

export interface ServiceCost {
  basic: string;
  premium: string;
  luxury: string;
  note?: string;
}

export interface ServiceDesignType {
  title: string;
  desc: string;
  image: string;
}

export interface ServiceMaterial {
  name: string;
  icon: React.ReactNode;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface MaterialCategory {
  id: string;
  title: string;
  items: string[];
}

export interface UnifiedServiceTemplate {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  features: ServiceFeature[];
  bgVideo?: string;
  introImage?: string;
  designTypes: ServiceDesignType[];
  materials?: ServiceMaterial[];
  materialCats?: MaterialCategory[];
  costRange: ServiceCost;
  faqs: FAQ[];
  calculator: {
    label1: string;
    options1: string[];
    label2: string;
    options2: string[];
  };
}

// Reusable FAQs
const genericFaqs: FAQ[] = [
  { q: "How long does execution take?", a: "Most projects are completed within 45 to 60 days, strictly adhering to our handover schedule." },
  { q: "Can I customize the materials?", a: "Yes, all materials, finishes, and hardware are 100% tailored to your budget and personal style." },
  { q: "Do you offer post-installation maintenance?", a: "Absolutely! We provide comprehensive warranties and ongoing support for ultimate peace of mind." },
];

function LayersIcon() { return <LayoutGrid className="w-8 h-8" />; }
function RefreshIcon() { return <Minimize2 className="w-8 h-8" />; }

export const unifiedServicesData: Record<string, UnifiedServiceTemplate> = {
  "master-bedroom": {
    slug: "master-bedroom",
    title: "Master Bedroom Interiors",
    tagline: "Luxury comfort designed for your personal retreat",
    intro: "Transform your master bedroom into a sophisticated sanctuary. We blend aesthetic brilliance with absolute comfort to create a perfectly balanced private space.",
    features: [
      { text: "Space optimization", icon: <Maximize className="w-8 h-8"/> },
      { text: "Modern design", icon: <Sparkles className="w-8 h-8"/> },
      { text: "Customization", icon: <PaintBucket className="w-8 h-8"/> },
      { text: "Durability", icon: <ShieldCheck className="w-8 h-8"/> },
    ],
    introImage: "/assets/services/mbr_hero_1774036536559.png",
    bgVideo: "https://videos.pexels.com/video-files/4014902/4014902-uhd_2560_1440_30fps.mp4",
    designTypes: [
      { title: "Modern", desc: "Sleek, uncluttered, and highly functional.", image: "/assets/services/mbr_hero_1774036536559.png" },
      { title: "Luxury", desc: "Plush fabrics, premium wood, and grand aesthetics.", image: "/assets/services/mbr_hero_1774036536559.png" },
      { title: "Minimal", desc: "Bright, airy spaces with zero distractions.", image: "/assets/services/mbr_hero_1774036536559.png" },
      { title: "Contemporary", desc: "Trend-forward with bold accents.", image: "/assets/services/mbr_hero_1774036536559.png" },
    ],
    materialCats: [
      { id: "wood", title: "Wood & Ply", items: ["BWR Plywood", "MDF Core", "Solid Teak"] },
      { id: "finishes", title: "Finishes", items: ["High Gloss Laminate", "Matte Polymer", "Textured Veneer"] },
      { id: "hardware", title: "Hardware", items: ["Soft-close Hinges", "Push-to-open", "Sleek Handles"] },
    ],
    costRange: {
      basic: "₹1.5L - ₹2.5L",
      premium: "₹2.5L - ₹4L",
      luxury: "₹4L - ₹6L+",
      note: "Final pricing depends on customization and room dimensions."
    },
    faqs: genericFaqs,
    calculator: {
      label1: "Room Suite Type",
      options1: ["Essential Suite", "Executive Suite", "Luxury Retreat", "Grand Master"],
      label2: "Primary Finish",
      options2: ["Soft Touch Laminate", "Premium Veneer", "Luxury PU Paint", "Plush Fabric Padding"],
    },
  },
  
  "living-room": {
    slug: "living-room",
    title: "Living Room Interiors",
    tagline: "Elegant spaces for living and entertaining",
    intro: "Your living room is the heart of your home. We design elegant, high-impact spaces engineered for entertaining guests and relaxing with family.",
    features: [
      { text: "Space optimization", icon: <Maximize className="w-8 h-8"/> },
      { text: "Modern design", icon: <Sparkles className="w-8 h-8"/> },
      { text: "Customization", icon: <PaintBucket className="w-8 h-8"/> },
      { text: "Premium finishes", icon: <Gem className="w-8 h-8"/> },
    ],
    introImage: "/assets/services/lvr_hero_1774036553116.png",
    bgVideo: "https://videos.pexels.com/video-files/5536555/5536555-uhd_2732_1440_25fps.mp4",
    designTypes: [
      { title: "Modern", desc: "Clean lines and contemporary seating.", image: "/assets/services/lvr_hero_1774036553116.png" },
      { title: "Classic", desc: "Timeless elegance with textured layers.", image: "/assets/services/lvr_hero_1774036553116.png" },
      { title: "Open Layout", desc: "Seamless integration with dining spaces.", image: "/assets/services/lvr_hero_1774036553116.png" },
      { title: "Luxury", desc: "Bronze accents and statement lighting.", image: "/assets/services/lvr_hero_1774036553116.png" },
    ],
    materialCats: [
      { id: "wood", title: "Core", items: ["HDHMR", "BWR Plywood", "Solid Teak"] },
      { id: "finishes", title: "Finishes", items: ["Glossy Laminate", "Matte Polymer", "Textured Veneer"] },
      { id: "accent", title: "Accents", items: ["Bronze Profiles", "Fluted Panels", "LED Strips"] },
    ],
    costRange: {
      basic: "₹1L - ₹2L",
      premium: "₹2L - ₹3.5L",
      luxury: "₹3.5L - ₹5L+",
      note: "Final pricing depends on furniture selection and overall scope."
    },
    faqs: genericFaqs,
    calculator: {
      label1: "Design Layout",
      options1: ["Open Concept", "Formal Traditional", "Entertainment Hub", "Minimal Studio"],
      label2: "Wood Finish",
      options2: ["Textured Laminate", "Natural Veneer", "Glossy PU", "Matt Deco"],
    },
  },

  "bathroom": {
    slug: "bathroom",
    title: "Bathroom Interior Design",
    tagline: "Modern bathrooms designed for comfort and style",
    intro: "Experience spa-like luxury every day. We design highly functional, moisture-resistant, and visually stunning bathrooms.",
    features: [
      { text: "Space optimization", icon: <Maximize className="w-8 h-8"/> },
      { text: "Water-resistant", icon: <Droplet className="w-8 h-8"/> },
      { text: "Customization", icon: <PaintBucket className="w-8 h-8"/> },
      { text: "Easy maintenance", icon: <LayersIcon /> },
    ],
    introImage: "/assets/services/bth_hero_1774036572703.png",
    bgVideo: "https://videos.pexels.com/video-files/8091884/8091884-uhd_2732_1440_25fps.mp4",
    designTypes: [
      { title: "Compact", desc: "Smart layouts for smaller flats.", image: "/assets/services/bth_hero_1774036572703.png" },
      { title: "Luxury", desc: "Spa-inspired with premium stone.", image: "/assets/services/bth_hero_1774036572703.png" },
      { title: "Wet & Dry", desc: "Hygienic separation with glass partitions.", image: "/assets/services/bth_hero_1774036572703.png" },
      { title: "Minimal", desc: "Uncluttered and pristine.", image: "/assets/services/bth_hero_1774036572703.png" },
    ],
    materialCats: [
      { id: "tiles", title: "Tiles", items: ["Large Format Vitrified", "Granite Slabs", "Anti-skid Ceramic"] },
      { id: "fittings", title: "Fittings", items: ["Luxury Faucets", "Concealed Diversions", "Rain Showers"] },
      { id: "hardware", title: "Hardware", items: ["Stainless Steel Rails", "Toughened Glass", "Chrome Trims"] },
    ],
    costRange: {
      basic: "₹80K - ₹1.5L",
      premium: "₹1.5L - ₹2.5L",
      luxury: "₹2.5L - ₹3L+",
      note: "Costs vary based on tile selection and sanitary ware."
    },
    faqs: genericFaqs,
    calculator: {
      label1: "Bathroom Size",
      options1: ["Compact Powder Room", "Standard Family", "Master En-suite", "Elite Spa Space"],
      label2: "Accessory Tier",
      options2: ["Standard Chrome", "Premium Brushed Brass", "Luxury Rose Gold", "Elite Matt Black"],
    },
  },

  "wardrobe": {
    slug: "wardrobe",
    title: "Custom Wardrobes",
    tagline: "Smart storage tailored to your lifestyle",
    intro: "Organize your life with intelligent, bespoke wardrobe solutions designed specifically for your space and apparel needs.",
    features: [
      { text: "Space optimization", icon: <Maximize className="w-8 h-8"/> },
      { text: "Modern design", icon: <Sparkles className="w-8 h-8"/> },
      { text: "Customization", icon: <PaintBucket className="w-8 h-8"/> },
      { text: "Durability", icon: <ShieldCheck className="w-8 h-8"/> },
    ],
    introImage: "/assets/services/war_hero_1774036589190.png",
    designTypes: [
      { title: "Sliding", desc: "Perfect for narrow bedroom spaces.", image: "/assets/services/war_hero_1774036589190.png" },
      { title: "Hinged", desc: "Classic robust accessibility.", image: "/assets/services/war_hero_1774036589190.png" },
      { title: "Walk-in", desc: "Elite dedicated storage rooms.", image: "/assets/services/war_hero_1774036589190.png" },
    ],
    materialCats: [
      { id: "core", title: "Core", items: ["BWR Plywood", "Blockboard", "MDF"] },
      { id: "shutter", title: "Shutter", items: ["Acrylic Base", "Laminate Decor", "Suede Finish"] },
      { id: "acc", title: "Accessories", items: ["Pull-out Racks", "Trouser Hangers", "Shoe Carousels"] },
    ],
    costRange: {
      basic: "₹60K - ₹1.2L",
      premium: "₹1.2L - ₹2L",
      luxury: "₹2L - ₹3L+",
      note: "Wardrobe pricing is purely based on square footage and internal hardware."
    },
    faqs: genericFaqs,
    calculator: {
      label1: "Wardrobe Type",
      options1: ["2-Door Hinged", "3-Door Hinged", "Sliding Shutter", "Walk-in Closet"],
      label2: "Exterior Finish",
      options2: ["Acrylic Mirror", "Suede Laminate", "Tinted Glass", "Solid Glossy"],
    },
  },

  "pooja-room": {
    slug: "pooja-room",
    title: "Pooja Room Designs",
    tagline: "Create a peaceful and divine space at home",
    intro: "We craft deeply spiritual, aesthetically serene pooja rooms tailored to tradition and aligned with modern home constraints.",
    features: [
      { text: "Space optimization", icon: <Maximize className="w-8 h-8"/> },
      { text: "Traditional touch", icon: <Heart className="w-8 h-8"/> },
      { text: "Customization", icon: <PaintBucket className="w-8 h-8"/> },
      { text: "Easy maintenance", icon: <ShieldCheck className="w-8 h-8"/> },
    ],
    introImage: "/assets/services/poo_hero_1774036619473.png",
    designTypes: [
      { title: "Traditional", desc: "Rich carvings and brass bells.", image: "/assets/services/poo_hero_1774036619473.png" },
      { title: "Modern", desc: "Sleek backlights and subtle borders.", image: "/assets/services/poo_hero_1774036619473.png" },
      { title: "Compact", desc: "Wall-mounted elegance for apartments.", image: "/assets/services/poo_hero_1774036619473.png" },
    ],
    materialCats: [
      { id: "wood", title: "Wood", items: ["Solid Teak", "Sheesham", "Veneer Finish"] },
      { id: "backdrop", title: "Backdrop", items: ["Corian Backlit", "Marble Cladding", "CNC Jali"] },
      { id: "lights", title: "Lighting", items: ["Focus LEDs", "Warm Coves", "Brass Lamps"] },
    ],
    costRange: {
      basic: "₹30K - ₹60K",
      premium: "₹60K - ₹1L",
      luxury: "₹1L - ₹1.5L+",
      note: "Intricacy of wood carving highly influences pricing."
    },
    faqs: genericFaqs,
    calculator: {
      label1: "Pooja Style",
      options1: ["Traditional Teak", "Modern Backlit", "Wall-mounted Compact", "Intricate CNC Jali"],
      label2: "Primary Material",
      options2: ["Solid Teak Wood", "Premium Sheesham", "Veneer Over Ply", "High-grade MDF"],
    },
  },

  "tv-unit": {
    slug: "tv-unit",
    title: "Modular TV Units",
    tagline: "Modern TV units that enhance your living space",
    intro: "Transform your living room wall into a high-end focal point utilizing sleek laminates, smart wire concealment, and backlighting.",
    features: [
      { text: "Space optimization", icon: <Maximize className="w-8 h-8"/> },
      { text: "Modern design", icon: <Sparkles className="w-8 h-8"/> },
      { text: "Hidden Wiring", icon: <Columns className="w-8 h-8"/> },
      { text: "Durability", icon: <ShieldCheck className="w-8 h-8"/> },
    ],
    introImage: "/assets/services/tvu_hero_1774036640603.png",
    designTypes: [
      { title: "Wall-mounted", desc: "Floating minimal layout.", image: "/assets/services/tvu_hero_1774036640603.png" },
      { title: "Storage Heavy", desc: "Integrated cabinets for books and tech.", image: "/assets/services/tvu_hero_1774036640603.png" },
      { title: "Minimal", desc: "Sleek, slim profile backing.", image: "/assets/services/tvu_hero_1774036640603.png" },
    ],
    materialCats: [
      { id: "core", title: "Core", items: ["Engineered Wood", "Plywood", "MDF"] },
      { id: "finish", title: "Finish", items: ["Textured Laminate", "PU Paint", "Veneer Panels"] },
      { id: "hardware", title: "Hardware", items: ["Concealed Hinges", "Wire Management", "Mounting Brackets"] },
    ],
    costRange: {
      basic: "₹40K - ₹80K",
      premium: "₹80K - ₹1.4L",
      luxury: "₹1.4L - ₹2L+",
      note: "Based on linear length and incorporated LED arrays."
    },
    faqs: genericFaqs,
    calculator: {
      label1: "Unit Complexity",
      options1: ["Minimal Floating", "Full-wall Storage", "Corner Unit", "Theater Console"],
      label2: "Finish Palette",
      options2: ["Solid High Gloss", "Natural Wood Veneer", "Soft Matt Grey", "Marble Texture"],
    },
  },

  "dining-room": {
    slug: "dining-room",
    title: "Dining Room Interiors",
    tagline: "Designed for comfort, conversations, and style",
    intro: "Host unforgettable meals in a precisely engineered dining environment featuring robust furniture, perfect acoustics, and opulent lighting.",
    features: [
      { text: "Space optimization", icon: <Maximize className="w-8 h-8"/> },
      { text: "Modern design", icon: <Sparkles className="w-8 h-8"/> },
      { text: "Customization", icon: <PaintBucket className="w-8 h-8"/> },
      { text: "Premium finishes", icon: <Gem className="w-8 h-8"/> },
    ],
    introImage: "/assets/services/din_hero_1774036658153.png",
    designTypes: [
      { title: "Modern", desc: "Clean lines and geometric lighting.", image: "/assets/services/din_hero_1774036658153.png" },
      { title: "Luxury", desc: "Marble tables and chandelier.", image: "/assets/services/din_hero_1774036658153.png" },
      { title: "Minimal", desc: "Uncluttered, highly breathable layouts.", image: "/assets/services/din_hero_1774036658153.png" },
    ],
    materialCats: [
      { id: "table", title: "Table Tops", items: ["Italian Marble", "Toughened Glass", "White Ash Wood"] },
      { id: "chairs", title: "Chairs", items: ["Teak Wood", "Upholstered Velvet", "Ergonomic Slats"] },
      { id: "decor", title: "Decor", items: ["Chandelier", "Statement Wall", "Area Rug"] },
    ],
    costRange: {
      basic: "₹80K - ₹1.5L",
      premium: "₹1.5L - ₹2.2L",
      luxury: "₹2.2L - ₹3L+",
      note: "Final pricing determined heavily by seating capacity and stonework."
    },
    faqs: genericFaqs,
    calculator: {
      label1: "Seating Capacity",
      options1: ["4-Seater Compact", "6-Seater Family", "8-Seater Grand", "Circular Elite"],
      label2: "Table Surface",
      options2: ["Italian Marble", "Toughened Glass", "White Ash Wood", "Quartz Top"],
    },
  },

  "home-interiors": {
    slug: "home-interiors",
    title: "Complete Home Interiors",
    tagline: "Complete home interiors designed to perfection",
    intro: "Experience peace of mind with our turnkey end-to-end home interior execution. From empty layouts to beautifully liveable masterpieces.",
    features: [
      { text: "End-to-end service", icon: <Home className="w-8 h-8"/> },
      { text: "Modern design", icon: <Sparkles className="w-8 h-8"/> },
      { text: "Customization", icon: <PaintBucket className="w-8 h-8"/> },
      { text: "Durability", icon: <ShieldCheck className="w-8 h-8"/> },
    ],
    introImage: "/assets/services/hom_hero_1774036677735.png",
    designTypes: [
      { title: "Full Home", desc: "Unified theme across all rooms.", image: "/assets/services/hom_hero_1774036677735.png" },
      { title: "2BHK Config", desc: "Smartly scaled for compact urban living.", image: "/assets/services/hom_hero_1774036677735.png" },
      { title: "3BHK Config", desc: "Family-oriented spacious designs.", image: "/assets/services/hom_hero_1774036677735.png" },
      { title: "Luxury Villa", desc: "Limitless customization and opulence.", image: "/assets/services/hom_hero_1774036677735.png" },
    ],
    materialCats: [
      { id: "structure", title: "Structure", items: ["BWR Plywood", "HDHMR", "Solid Teak"] },
      { id: "finish", title: "Finishes", items: ["Acrylic Laminate", "PU Polish", "Italian Marble"] },
      { id: "automation", title: "Smart Home", items: ["Touch Controls", "Mood Lighting", "Voice Assist Icons"] },
    ],
    costRange: {
      basic: "₹3L - ₹6L",
      premium: "₹6L - ₹10L",
      luxury: "₹10L - ₹15L+",
      note: "Comprehensive projects scaled accurately to your exact apartment square footage."
    },
    faqs: genericFaqs,
    calculator: {
      label1: "Home Configuration",
      options1: ["1BHK Apartment", "2BHK Standard", "3BHK Premium", "Luxury Villa/Duplex"],
      label2: "Interior Concept",
      options2: ["Modern European", "Contemporary Indian", "Classic Traditional", "Ultra-Minimalist"],
    },
  },

  "study-room": {
    slug: "study-room",
    title: "Study Room Interiors",
    tagline: "Focused and functional spaces for productivity",
    intro: "Work and learn effectively in a distraction-free, highly ergonomic, and storage-optimized environment tailored to modern workflows.",
    features: [
      { text: "Space optimization", icon: <Maximize className="w-8 h-8"/> },
      { text: "Ergonomics", icon: <Sofa className="w-8 h-8"/> },
      { text: "Customization", icon: <PaintBucket className="w-8 h-8"/> },
      { text: "Easy maintenance", icon: <ShieldCheck className="w-8 h-8"/> },
    ],
    introImage: "/assets/services/stu_hero_1774036705690.png",
    designTypes: [
      { title: "Compact", desc: "Integrated logically into small bedrooms.", image: "/assets/services/stu_hero_1774036705690.png" },
      { title: "Minimal", desc: "Zero clutter, massive focus.", image: "/assets/services/stu_hero_1774036705690.png" },
      { title: "Modern Home Office", desc: "Professional executive aesthetic.", image: "/assets/services/stu_hero_1774036705690.png" },
    ],
    materialCats: [
      { id: "desk", title: "Desk Area", items: ["Matte Laminate", "Toughened Top", "Integrated Wire Box"] },
      { id: "storage", title: "Storage", items: ["Wall Mounted Shelves", "Closed Cabinets", "Box Drawers"] },
      { id: "light", title: "Lighting", items: ["Adjustable LEDs", "Shadow-free Desk", "Soft Coves"] },
    ],
    costRange: {
      basic: "₹40K - ₹80K",
      premium: "₹80K - ₹1.4L",
      luxury: "₹1.4L - ₹2L+",
      note: "Cost depends heavily on custom shelving volume."
    },
    faqs: genericFaqs,
    calculator: {
      label1: "Desk Configuration",
      options1: ["Sleek Wall-mounted", "Robust L-Shaped", "Executive Suite", "Dual-shared Station"],
      label2: "Wood Quality",
      options2: ["Commercial Plywood", "Marine Grade BWP", "Natural Solid Oak", "High-density MDF"],
    },
  },

  "kids-bedroom": {
    slug: "kids-bedroom",
    title: "Kids Bedroom Designs",
    tagline: "Creative and safe spaces for your child",
    intro: "Fuel their imagination safely. We design playful, vibrant, non-toxic, and incredibly highly adaptable rooms that grow with your children.",
    features: [
      { text: "Space optimization", icon: <Maximize className="w-8 h-8"/> },
      { text: "Child safety", icon: <Shield className="w-8 h-8"/> },
      { text: "Custom themes", icon: <PaintBucket className="w-8 h-8"/> },
      { text: "Durability", icon: <ShieldCheck className="w-8 h-8"/> },
    ],
    introImage: "/assets/services/kid_hero_1774036723519.png",
    designTypes: [
      { title: "Theme-based", desc: "Astrophysics, Jungle, or Castles.", image: "/assets/services/kid_hero_1774036723519.png" },
      { title: "Modern", desc: "Aesthetic pastel neutrality.", image: "/assets/services/kid_hero_1774036723519.png" },
      { title: "Playful", desc: "Climbing walls and dynamic bunkers.", image: "/assets/services/kid_hero_1774036723519.png" },
    ],
    materialCats: [
      { id: "safe", title: "Safety", items: ["Non-toxic Paints", "Soft Edges", "Frictionless Slides"] },
      { id: "themes", title: "Thematics", items: ["Custom Murals", "Shaped Beds", "Activity Walls"] },
      { id: "fabrics", title: "Fabrics", items: ["Organic Cotton", "Anti-dust Mats", "Soft Curtains"] },
    ],
    costRange: {
      basic: "₹80K - ₹1.5L",
      premium: "₹1.5L - ₹2.2L",
      luxury: "₹2.2L - ₹3L+",
      note: "Complex thematic beds increase scope of investment."
    },
    faqs: genericFaqs,
    calculator: {
      label1: "Theme Complexity",
      options1: ["Essential Standard", "Semi-Thematic Accent", "Full Luxury Theme", "Playful Bunk Hybrid"],
      label2: "Paint Finish",
      options2: ["Anti-bacterial Matt", "Easy-clean Silk", "Vibrant Gloss", "Texture Murals"],
    },
  },

  "false-ceiling": {
    slug: "false-ceiling",
    title: "False Ceiling Designs",
    tagline: "Enhance interiors with elegant ceiling designs",
    intro: "Look up and behold perfection. We specialize in intricate structural ceiling designs that deeply enhance acoustics and interior lighting.",
    features: [
      { text: "Thermal Control", icon: <Maximize className="w-8 h-8"/> },
      { text: "Modern design", icon: <Sparkles className="w-8 h-8"/> },
      { text: "Customization", icon: <PaintBucket className="w-8 h-8"/> },
      { text: "Easy maintenance", icon: <ShieldCheck className="w-8 h-8"/> },
    ],
    introImage: "/assets/services/fal_hero_1774036738777.png",
    designTypes: [
      { title: "Gypsum Flat", desc: "Seamless and minimal.", image: "/assets/services/fal_hero_1774036738777.png" },
      { title: "Layered Drops", desc: "Complex depth generation.", image: "/assets/services/fal_hero_1774036738777.png" },
      { title: "LED Integrations", desc: "Cove and spotlight mastery.", image: "/assets/services/fal_hero_1774036738777.png" },
    ],
    materialCats: [
      { id: "gyp", title: "Boarding", items: ["Gypsum Boards", "Saint Gobain Rails", "Fiber Mesh"] },
      { id: "grid", title: "Grid System", items: ["Metal Sectioning", "Wall Perimeter", "Cross T-bars"] },
      { id: "light", title: "Embedded", items: ["COB Spotlights", "Panel LEDs", "Magnetic Tracks"] },
    ],
    costRange: {
      basic: "₹80 / sq ft",
      premium: "₹110 / sq ft",
      luxury: "₹150+ / sq ft",
      note: "Pricing is precisely based on sqft volume and electrical drops."
    },
    faqs: genericFaqs,
    calculator: {
      label1: "Ceiling Type",
      options1: ["Standard Gypsum Flat", "Multi-layered Peripheral", "LED/Cove Specialized", "Wooden Inlay Premium"],
      label2: "Accent Lighting",
      options2: ["Warm White Coves", "RGB Mood Controlled", "Linear Track Lights", "Concealed Spotlights"],
    },
  },

  "space-saving": {
    slug: "space-saving",
    title: "Space-Saving Interiors",
    tagline: "Smart solutions to maximize your space",
    intro: "Small footprint, massive comfort. We engineer incredible foldable, multi-functional furniture allowing tiny apartments to breathe.",
    features: [
      { text: "Space optimization", icon: <Maximize className="w-8 h-8"/> },
      { text: "Flexibility", icon: <RefreshIcon /> },
      { text: "Customization", icon: <PaintBucket className="w-8 h-8"/> },
      { text: "Durability", icon: <ShieldCheck className="w-8 h-8"/> },
    ],
    introImage: "/assets/services/spa_hero_1774036758219.png",
    designTypes: [
      { title: "Foldable", desc: "Murphy beds and collapsible dining.", image: "/assets/services/spa_hero_1774036758219.png" },
      { title: "Multi-functional", desc: "Staircase storage and hidden compartments.", image: "/assets/services/spa_hero_1774036758219.png" },
    ],
    materialCats: [
      { id: "mech", title: "Mechanism", items: ["Hydraulic Pistons", "Slide-out Trays", "Folding Latches"] },
      { id: "support", title: "Support", items: ["Steel Framework", "Reinforced Hinges", "Lightweight Ply"] },
      { id: "finish", title: "Finish", items: ["Laminate Polish", "Hidden Pulls", "Matte Decor"] },
    ],
    costRange: {
      basic: "Custom Quote",
      premium: "Custom Quote",
      luxury: "Custom Quote",
      note: "Pricing is entirely custom based on mechanical hardware and size."
    },
    faqs: genericFaqs,
    calculator: {
      label1: "Solution Type",
      options1: ["Hydraulic Murphy Bed", "Foldable Dining Station", "Staircase Storage", "Hidden Utility Closet"],
      label2: "Mechanism Tier",
      options2: ["Standard Manual", "Heavy-Duty Soft", "Automatic Hydraulic", "Elite Precision Silent"],
    },
  },

  "guest-bedroom": {
    slug: "guest-bedroom",
    title: "Guest Bedroom Interiors",
    tagline: "Comfortable and welcoming spaces for guests",
    intro: "Offer unmatched hospitality. Create a universally welcoming, hotel-standard room for your loved ones with extreme operational adaptability.",
    features: [
      { text: "Space optimization", icon: <Maximize className="w-8 h-8"/> },
      { text: "Modern design", icon: <Sparkles className="w-8 h-8"/> },
      { text: "Customization", icon: <PaintBucket className="w-8 h-8"/> },
      { text: "Cozy appeal", icon: <Heart className="w-8 h-8"/> },
    ],
    introImage: "/assets/services/mbr_hero_1774036536559.png",
    designTypes: [
      { title: "Minimal", desc: "Clean and highly breathable.", image: "/assets/services/mbr_hero_1774036536559.png" },
      { title: "Modern", desc: "Slight luxury with hotel aesthetics.", image: "/assets/services/mbr_hero_1774036536559.png" },
      { title: "Compact", desc: "Hybrid study-guest integration.", image: "/assets/services/mbr_hero_1774036536559.png" },
    ],
    materialCats: [
      { id: "main", title: "Comfort", items: ["Queen Size Bed", "Soft Upholstery", "Side Tables"] },
      { id: "storage", title: "Storage", items: ["Minimal Wardrobe", "Luggage Racks", "Open Shelves"] },
      { id: "light", title: "Ambience", items: ["Warm Sconces", "Cove Lighting", "Focus LEDs"] },
    ],
    costRange: {
      basic: "₹80K - ₹1.4L",
      premium: "₹1.4L - ₹2L",
      luxury: "₹2L - ₹2.5L+",
      note: "Cost scales primarily with bed quality and wardrobe size."
    },
    faqs: genericFaqs,
    calculator: {
      label1: "Room Configuration",
      options1: ["Minimal Stay", "Standard Double", "Premium Suite", "Multi-functional Flex"],
      label2: "Overall Finish",
      options2: ["Budget Friendly Laminate", "Premium Textured Decor", "Luxury PU Polish"],
    },
  }
};
