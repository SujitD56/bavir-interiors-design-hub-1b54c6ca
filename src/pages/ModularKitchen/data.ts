import projectKitchen from "@/assets/project-kitchen.jpg";
import kitchenDetail from "@/assets/kitchen-detail.png";
import projectDining from "@/assets/project-dining.jpg";
import heroImage from "@/assets/hero-living-room.jpg";

import lShapedImg from "@/assets/l-shaped.png";
import uShapedImg from "@/assets/u-shaped.png";
import parallelImg from "@/assets/parallel.png";
import islandImg from "@/assets/island.png";
import straightImg from "@/assets/straight.png";

export const modularKitchenData = {
  hero: {
    title: "Modular Kitchen Designs – Smart, Stylish & Functional",
    subtext: "Upgrade your cooking space with modern modular kitchen designs tailored to your lifestyle, space, and budget.",
    image: projectKitchen,
  },
  intro: {
    heading: "What is a Modular Kitchen?",
    content: "A modular kitchen is a modern kitchen design concept made up of pre-designed cabinet modules that are assembled to fit your space perfectly. It combines functionality, efficiency, and style to create a seamless cooking experience.",
    image: kitchenDetail,
  },
  layouts: [
    {
      name: "L-Shaped Kitchen",
      description: "Perfect for small to medium spaces with efficient corner utilization.",
      image: lShapedImg,
    },
    {
      name: "U-Shaped Kitchen",
      description: "Maximum storage and workspace for larger kitchens.",
      image: uShapedImg,
    },
    {
      name: "Parallel Kitchen",
      description: "Two-sided layout ideal for compact and efficient cooking.",
      image: parallelImg,
    },
    {
      name: "Island Kitchen",
      description: "Modern open kitchen with a central island for extra workspace.",
      image: islandImg,
    },
    {
      name: "Straight Kitchen",
      description: "Simple and space-saving layout for smaller homes.",
      image: straightImg,
    },
  ],
  materials: {
    heading: "Materials & Finishes We Offer",
    categories: [
      {
        id: "cabinets",
        title: "Cabinets",
        items: ["MDF", "Plywood", "HDHMR"],
      },
      {
        id: "finishes",
        title: "Finishes",
        items: ["Laminate", "Acrylic", "PU", "Membrane"],
      },
      {
        id: "countertops",
        title: "Countertops",
        items: ["Granite", "Quartz", "Marble"],
      },
      {
        id: "accessories",
        title: "Accessories",
        items: ["Soft-close drawers", "Pull-out units", "Organizers"],
      },
    ]
  },
  features: {
    heading: "Why Choose a Modular Kitchen?",
    points: [
      "Space optimization",
      "Modern aesthetics",
      "Easy maintenance",
      "Customizable designs",
      "Durable materials",
      "Smart storage solutions",
    ]
  },
  portfolio: [
    { id: 1, category: "Luxury", image: projectKitchen, title: "Modern Luxury Setup" },
    { id: 2, category: "Small", image: kitchenDetail, title: "Compact & Efficient" },
    { id: 3, category: "Budget", image: projectKitchen, title: "Smart Budget Kitchen" },
    { id: 4, category: "Luxury", image: projectDining, title: "Open Island Design" },
    { id: 5, category: "Small", image: kitchenDetail, title: "Parallel Small Kitchen" },
    { id: 6, category: "Luxury", image: projectKitchen, title: "Premium Finishes" },
  ],
  process: [
    { step: 1, title: "Consultation", description: "We understand your cooking habits and space." },
    { step: 2, title: "Design & Layout", description: "We create 2D/3D kitchen designs." },
    { step: 3, title: "Material Selection", description: "You choose finishes, colors, and accessories." },
    { step: 4, title: "Manufacturing & Installation", description: "We build and install your kitchen." },
    { step: 5, title: "Final Handover", description: "Ready-to-use kitchen delivered." },
  ],
  pricing: [
    {
      tier: "Basic Kitchen",
      priceRange: "₹1,50,000 – ₹2,50,000",
      features: ["Standard HDHMR", "Laminate Finish", "Basic Accessories"]
    },
    {
      tier: "Premium Kitchen",
      priceRange: "₹2,50,000 – ₹4,50,000",
      features: ["Premium Plywood", "Acrylic/PU Finish", "Soft-close Hettich/Blum", "Quartz Countertop"],
      highlight: true
    },
    {
      tier: "Luxury Kitchen",
      priceRange: "₹4,50,000+",
      features: ["BWR Plywood / Marine", "Premium PU/Glass finish", "Smart Organizers & Auto-lift", "Premium Marble/Quartz"]
    }
  ],
  faqs: [
    {
      q: "How long does installation take?",
      a: "Typically 2–4 weeks from the date of finalizing designs and materials."
    },
    {
      q: "Which material is best?",
      a: "Plywood and HDHMR are highly durable options suited for Indian cooking environments."
    },
    {
      q: "Can I customize my kitchen?",
      a: "Yes, our modular kitchens are fully customizable as per your space, needs, and lifestyle."
    },
    {
      q: "Is modular kitchen easy to maintain?",
      a: "Yes, it is designed for easy cleaning and maintenance with accessible corners and wipe-friendly surfaces."
    }
  ],
  testimonials: [
    {
      text: "Our kitchen looks amazing and highly functional. The entire process from design to installation was super smooth. Great work team!",
      author: "Sneha R.",
      location: "Luxury Apartment"
    },
    {
      text: "We wanted a space-saving solution for our compact home, and they delivered perfectly. The quality is top-notch.",
      author: "Rahul M.",
      location: "3BHK Villa"
    },
    {
      text: "The acrylic finish and smart organizers have completely transformed how I cook. Highly recommend their service.",
      author: "Priyanka S.",
      location: "Independent House"
    }
  ]
};
