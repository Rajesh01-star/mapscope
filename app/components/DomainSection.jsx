import Button from "./Button";

export default function DomainsSection() {
  const domains = [
    { title: "Land Management", image: "/images/land.jpg" },
    { title: "Forestry", image: "/images/forest.jpg" },
    { title: "Mining", image: "/images/mine.jpg" },
    { title: "Agriculture", image: "/images/agriculture.jpg" },
    { title: "Environment", image: "/images/envio.jpg" },
    { title: "Utility", image: "/images/utility.jpg" },
    { title: "Governance", image: "/images/governance.jpg" },
    { title: "Urban Development", image: "/images/urban.jpg" },
  ];

  return (
    <section className="h-screen flex items-center px-6">
      <div className="container mx-auto text-center">
        {/* Heading and Subtext */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Domains</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Elevate Your Vision: Geospatial Solutions for Sustainable Land,
          Forestry, Mining, Agriculture, Urban Development, Governance, and
          Utilities Excellence.
        </p>

        {/* Images and Titles */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
          {domains.map((domain, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-20 h-20 bg-cover bg-center rounded-full shadow-md hover:scale-105 transition-transform"
                style={{ backgroundImage: `url(${domain.image})` }}
              ></div>
              <p className="text-sm text-gray-700 mt-2">{domain.title}</p>
            </div>
          ))}
        </div>
        <Button className="mx-auto" icon={true}>Learn More</Button>

      </div>
    </section>
  );
}
