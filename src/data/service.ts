import projectBedroom from "@/assets/project-bedroom.jpg";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectDining from "@/assets/project-dining.jpg";
import heroImage from "@/assets/hero-living-room.jpg";

export const serviceProjects = {
  residential: [
    {
      id: 1,
      title: "Modern Living Space",
      location: "Mumbai, Maharashtra",
      image: heroImage,
    },
    {
      id: 2,
      title: "Serene Master Bedroom",
      location: "Pune, Maharashtra",
      image: projectBedroom,
    },
    {
      id: 3,
      title: "Contemporary Kitchen",
      location: "Bangalore, Karnataka",
      image: projectKitchen,
    },
  ],

  commercial: [
    {
      id: 4,
      title: "Executive Office",
      location: "Delhi NCR",
      image: projectOffice,
    },
    {
      id: 5,
      title: "Corporate Workspace",
      location: "Hyderabad, Telangana",
      image: projectOffice,
    },
  ],

  modular: [
    {
      id: 6,
      title: "Elegant Modular Kitchen",
      location: "Chennai, Tamil Nadu",
      image: projectDining,
    },
  ],

  turnkey: [
    {
      id: 7,
      title: "Luxury Turnkey Villa",
      location: "Goa",
      image: heroImage,
    },
  ],

  consultation: [
    {
      id: 8,
      title: "Design Consultation Session",
      location: "Online / Onsite",
      image: heroImage,
    },
  ],
};
