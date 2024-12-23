"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import LeadContent from "../components/LeadContent";
import ImageGrid from "../components/ImageGrid";
import DomainCarousel from "../components/DomainCarousal";

export default function GeoAISection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<span class='text-blue-500'>land management</span>",
        "<span class='text-blue-500'>Agriculture</span>",
        "<span class='text-blue-500'>Environment</span>",
        "<span class='text-blue-500'>Disaster Management</span>",
        "<span class='text-blue-500'>Urban Planning</span>",
        "<span class='text-blue-500'>Infrastructure</span>",
      ],
      typeSpeed: 100,
      smartBackspace: false,
      backSpeed: 50,
      loop: true,
      contentType: "html", // Allow HTML tags in the strings
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="h-auto lg:h-screen mt-24 lg:mt-20 flex flex-col justify-evenly">
      <div className="container lg:mx-auto w-full flex lg:flex-row flex-col items-center gap-20 lg:gap-4 px-8 lg:px-0">
        <LeadContent
          heading={[
            "Incorporation of ",
            { text: "GeoAI", className: "text-blue-500" },
          ]}
          subheading="Geo AI is the future! Where geospatial technologies and artificial intelligence converge, opening doors to boundless possibilities. Join the current global wave: Explore map data, unlock location-based insights, and make intelligent decisions!"
          buttonLabel="Learn More"
          icon={true}
          position="left" // Align text to the left for this section
        />

        <div className="lg:w-1/2 text-center flex flex-col items-center gap-4 lg:text-left mt-8 lg:mt-0">
          {/* Typing Animation */}
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">
            GeoAI in{" "}
            <span
              ref={el}
              className="text-4xl font-semibold text-gray-800 mb-4"
            ></span>
          </h3>

          <ImageGrid />
        </div>
      </div>
      {/* <div className="w-full"> */}
        <DomainCarousel />
        {/* </div> */}
    </section>
  );
}
