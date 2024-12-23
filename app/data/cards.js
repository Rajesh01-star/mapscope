import { FaDigitalOcean, FaGlobe, FaBolt, FaDatabase } from "react-icons/fa";
const cards = [
  {
    heading: "Digital Transformation",
    subTexts: [
      "GIS Integration",
      "Spatial Analytics",
      "Cloud Migration",
      "IoT Implementation",
      "Environmental Monitoring",
    ],
    icon: <FaDigitalOcean />,
  },
  {
    heading: "Environmental Analysis",
    subTexts: [
      "Pollution Monitoring",
      "Decision Support Systems",
      "Habitat Connectivity Analysis",
      "Ecosystem Services Assessment",
      "Climate Change Analysis",
    ],
    icon: <FaGlobe />,
  },
  {
    heading: "AI/ML for Climate",
    subTexts: [
      "Early Warning Systems",
      "Trend Detection Algorithms",
      "Optimized Resource Allocation",
      "Informed Adaptation Planning",
    ],
    icon: <FaBolt />,
  },
  {
    heading: "Spatial Data Infrastructure",
    subTexts: [
      "Robust Storage Solutions",
      "Secure Data Organization",
      "Collaborative Workflows",
      "Geospatial Insights",
    ],
    icon: <FaDatabase />,
  },
];
export default cards;