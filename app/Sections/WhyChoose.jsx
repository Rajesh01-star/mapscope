import Link from "next/link";
import cards from "../data/cards";
import { FaDigitalOcean } from "react-icons/fa";
import MotionDiv from "../components/MotionDiv";

export default function WhyChoose() {
  return (
    <MotionDiv>
      <section className="mt-24 flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 xl:px-24">
        {/* Title and Subtitle */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          Why Choose <span className="text-blue-500">MAPSCOPE?</span>
        </h2>
        <p className="text-center text-gray-600 text-base md:text-lg max-w-3xl mx-auto mb-12">
          Strengthen your strategies with MAPSCOPE's digital solutions for
          efficient workflows and data-driven decision-making.
        </p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition-shadow cursor-pointer flex flex-col justify-between"
            >
              {/* Icon and Heading */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-blue-500 text-4xl">{card.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {card.heading}
                </h3>
              </div>

              {/* Subtexts */}
              <ul className="space-y-2">
                {card.subTexts.map((subText, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <FaDigitalOcean className="text-blue-500" />
                    <Link
                      href={"#"}
                      className="w-full font-normal transition-all ease-in-out hover:font-semibold"
                    >
                      {subText}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </MotionDiv>
  );
}
