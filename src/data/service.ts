import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectDining from "@/assets/project-dining.jpg";
import heroImage from "@/assets/hero-living-room.jpg";

/* =========================
   PROJECTS (Images Grid)
========================= */
export const serviceProjects = {
  residential: [
    {
      id: 1,
      title: "Modern Living Space",
      location: "Indiranagar, Bengaluru",
      image: heroImage,
      gallery: [
        heroImage,
        projectBedroom,
        projectDining,
        projectKitchen,
      ],
    },
    {
      id: 2,
      title: "Serene Master Bedroom",
      location: "Whitefield, Bengaluru",
      image: projectBedroom,
       gallery: [
        heroImage,
        projectBedroom,
        projectDining,
        projectKitchen,
      ],
    },
    {
      id: 3,
      title: "Contemporary Kitchen",
      location: "Jayanagar, Bengaluru",
      image: projectKitchen,
       gallery: [
        heroImage,
        projectBedroom,
        projectDining,
        projectKitchen,
      ],
    },
  ],

  commercial: [
    {
      id: 4,
      title: "Executive Office",
      location: "MG Road, Bengaluru",
      image: projectOffice,
       gallery: [
        heroImage,
        projectBedroom,
        projectDining,
        projectKitchen,
      ],
    },
    {
      id: 5,
      title: "Corporate Workspace",
      location: "Electronic City, Bengaluru",
      image: projectOffice,
       gallery: [
        heroImage,
        projectBedroom,
        projectDining,
        projectKitchen,
      ],
    },
  ],

  modular: [
    {
      id: 6,
      title: "Elegant Modular Kitchen",
      location: "Sarjapur Road, Bengaluru",
      image: projectDining,
       gallery: [
        heroImage,
        projectBedroom,
        projectDining,
        projectKitchen,
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
        projectBedroom,
        projectDining,
        projectKitchen,
      ],
    },
  ],

  consultation: [
    {
      id: 8,
      title: "Design Consultation Session",
      location: "Across Bengaluru",
      image: heroImage,
       gallery: [
        heroImage,
        projectBedroom,
        projectDining,
        projectKitchen,
      ],
    },
  ],
};

/* =========================
   SERVICE CONTENT (Text)
========================= */
export const serviceContent = {
  residential: {
    title: "Residential & Home Interiors",
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
    title: "Modular Kitchens & Storage",
    description:
      "Stylish, functional modular kitchens and storage units designed for modern living.",
    services: [
      "Modular Kitchen Design",
      "Wardrobes & Storage Units",
      "Soft-close fittings",
      "Premium hardware",
    ],
    highlights: [
      "Optimized layouts",
      "Premium finishes",
      "Long-lasting durability",
    ],
  },

  turnkey: {
    title: "Turnkey Interior Solutions",
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

  consultation: {
    title: "Design Consultation",
    description:
      "Professional interior design consultation sessions available both online and onsite.",
    services: [
      "Requirement analysis",
      "Space planning",
      "Design guidance",
      "Material suggestions",
    ],
    highlights: [
      "Expert guidance",
      "Clear budgeting",
      "Design clarity",
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
