import {
  FaLaptopCode,
  FaSearch,
  FaBullhorn,
  FaRobot,
  FaCloud,
  FaNetworkWired,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaDatabase,
  FaCogs,
  FaBuilding,
  FaUsers,
  FaBriefcase,
  FaTree,
  FaMountain,
  FaTractor,
  FaLeaf,
  FaPlug,
  FaGavel,
  FaCity,
  FaBookOpen, // New icon added
} from "react-icons/fa";

export const links = [
  {
    name: "Services",
    submenu: [
      { name: "Web Development", icon: <FaLaptopCode /> },
      { name: "SEO", icon: <FaSearch /> },
      { name: "Marketing", icon: <FaBullhorn /> },
      {
        name: "AI/ML",
        icon: <FaRobot />,
        subtext: "Implementing ML into existing operations",
      },
      {
        name: "Cloud Computing",
        icon: <FaCloud />,
        subtext: "Seamless Hybrid Cloud Integration",
      },
      {
        name: "IoT",
        icon: <FaNetworkWired />,
        subtext: "Synchronized Ecosystems",
      },
      {
        name: "Blockchain",
        icon: <FaShieldAlt />,
        subtext: "Cybersecurity in Blockchain",
      },
      {
        name: "GeoAI",
        icon: <FaMapMarkedAlt />,
        subtext: "Leveraging Geospatial data through AI",
      },
      {
        name: "Big Data Analysis",
        icon: <FaDatabase />,
        subtext: "Transform data into actionable insights",
      },
      {
        name: "Geo Database Development & Management",
        icon: <FaCogs />,
        subtext: "Efficient Geo Database Architecture",
      },
      {
        name: "Spatial Data Management & Analytics",
        icon: <FaCogs />,
        subtext: "From Data Points to Decisions",
      },
    ],
  },
  {
    name: "Domains",
    submenu: [
      {
        name: "Land Management",
        icon: <FaMapMarkedAlt />,
        subtext: "Efficient land-use planning and monitoring",
      },
      {
        name: "Forestry",
        icon: <FaTree />,
        subtext: "Sustainable forest management solutions",
      },
      {
        name: "Mining",
        icon: <FaMountain />,
        subtext: "Optimized mining operations and analysis",
      },
      {
        name: "Agriculture",
        icon: <FaTractor />,
        subtext: "Smart farming through data and technology",
      },
      {
        name: "Environment",
        icon: <FaLeaf />,
        subtext: "Preserving ecosystems through innovation",
      },
      {
        name: "Utility",
        icon: <FaPlug />,
        subtext: "Powering seamless utility operations",
      },
      {
        name: "Governance",
        icon: <FaGavel />,
        subtext: "Technology-driven policy management",
      },
      {
        name: "Urban Development",
        icon: <FaCity />,
        subtext: "Shaping smarter cities for the future",
      },
    ],
  },
  {
    name: "About",
    submenu: [
      {
        name: "Research & Training",
        icon: <FaBookOpen />,
        subtext: "Empowering knowledge through innovation",
      },
      {
        name: "Company",
        icon: <FaBuilding />,
        subtext: "Get to know us better",
      },
      {
        name: "Team",
        icon: <FaUsers />,
        subtext: "Meet the people behind our success",
      },
      {
        name: "Careers",
        icon: <FaBriefcase />,
        subtext: "Join our growing team",
      },
    ],
  },
];
