import LeadContent from "./LeadContent";
import MotionDiv from "./MotionDiv";

export default function ResearchTrainingSection() {
  return (
    <MotionDiv>
      <section className="py-12 lg:py-20 px-6">
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
          <div className="mt-10 lg:mt-0 lg:w-1/2 text-center lg:text-left">
            <p className="text-lg text-gray-600 leading-relaxed">
              Upscale your career with tailored courses—specialized workshops
              and bootcamps for seasoned GIS experts, certification programs for
              beginners and young professionals, and real-life project-based
              research programs. Join us in shaping the future of geospatial
              technology and collaborate with industry experts.
            </p>
          </div>
        </div>
      </section>
    </MotionDiv>
  );
}
