import LeadContent from "./LeadContent";

export default function ResearchTrainingSection() {
  return (
    <section className="h-screen py-12 px-6 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
        {/* Left Section: Paragraph */}
        <LeadContent
          heading={
            <>
              Welcome to <span className="text-blue-500">MAPSCOPE</span>
              <br />
              Research and Training Program!
            </>
          }
          subheading=""
          buttonLabel="Learn More"
          icon={true}
          position="left"
        />

        {/* Right Section: Heading and Button */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-lg text-gray-600 leading-relaxed">
            Upscale your career with tailored courses—specialized workshops and
            bootcamps for seasoned GIS experts, certification programs for
            beginners and young professionals, and real-life project-based
            research programs. Join us in shaping the future of geospatial
            technology and collaborate with industry experts.
          </p>
        </div>
      </div>
    </section>
  );
}