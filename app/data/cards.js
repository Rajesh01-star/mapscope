import { FaLeaf } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { FaHouseCrack } from "react-icons/fa6";
import { MdOutlineSatelliteAlt } from "react-icons/md";

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
    icon: <LuBrainCircuit />,
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
    icon: <FaLeaf />,
  },
  {
    heading: "Climate Change Analysis",
    subTexts: [
      "Early Warning Systems",
      "Trend Detection Algorithms",
      "Optimized Resource Allocation",
      "Informed Adaptation Planning",
    ],
    icon: <FaHouseCrack />,
  },
  {
    heading: "Spatial Data Infrastructure",
    subTexts: [
      "Robust Storage Solutions",
      "Secure Data Organization",
      "Collaborative Workflows",
      "Geospatial Insights",
    ],
    icon: <MdOutlineSatelliteAlt />,
  },
];
export default cards;
