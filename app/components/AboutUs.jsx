import LeadContent from "./LeadContent"; // Import the LeadContent component
import ImageCard from "./ImageCard";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="flex ">
      <ImageCard src={"/images/about.webp"} alt={"about"}/>
      {/* <LeadContent
        heading={[
          "MAPSCOPE",
          { text: "About us", className: "text-blue-500" }
        ]}
        subheading="MAPSCOPE, a next generation technology company, committed to empowering organizations and enthusiasts in pursuing research, development and solutions. Leveraging over 25 years of Geo-ICT expertise from our parent company SPARC Pvt. Ltd., we specialize in addressing global issues using cutting-edge technologies like AI/ML, Blockchain, IoT, Geo AI, all aimed at ensuring a better, sustainable future."
        buttonLabel="Learn More"
        icon={true}
        position="right" // or "right" depending on your layout preference
      /> */}
    </section>
  );
}
