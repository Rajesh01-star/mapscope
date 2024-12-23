import Link from "next/link";
import { FaDigitalOcean, FaGlobe, FaBolt, FaDatabase } from "react-icons/fa";

export default function WhyChoose() {
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
      icon: <FaDigitalOcean className="text-blue-500 text-3xl" />,
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
      icon: <FaGlobe className="text-blue-500 text-3xl" />,
    },
    {
      heading: "AI/ML for Climate",
      subTexts: [
        "Early Warning Systems",
        "Trend Detection Algorithms",
        "Optimized Resource Allocation",
        "Informed Adaptation Planning",
      ],
      icon: <FaBolt className="text-blue-500 text-3xl" />,
    },
    {
      heading: "Spatial Data Infrastructure",
      subTexts: [
        "Robust Storage Solutions",
        "Secure Data Organization",
        "Collaborative Workflows",
        "Geospatial Insights",
      ],
      icon: <FaDatabase className="text-blue-500 text-3xl" />,
    },
  ];

  return (
    <section className="h-screen flex flex-col justify-center border-black">
      <h2 className="text-center text-5xl font-bold text-gray-800 mb-8">
        Why Choose <span className="text-blue-500">MAPSCOPE?</span>
      </h2>
      <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
        Strengthen your strategies with MAPSCOPE's digital solutions for
        efficient workflows and data-driven decision-making.
      </p>
      <div className="flex flex-col items-center justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition-shadow w-96 h-auto cursor-pointer flex flex-col justify-between"
            >
              {/* Icon and Heading */}
              <div className="flex items-center justify-start space-x-4 mb-4">
                <div className="text-blue-500 text-3xl">{card.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {card.heading}
                </h3>
              </div>

              {/* Subtexts */}
              <ul className="space-y-3">
                {card.subTexts.map((subText, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <FaDigitalOcean className="text-blue-500" />
                    <Link href={"#"} className="w-full font-normal transition-all ease-in-out hover:font-bold">
                      {subText}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
