import ImageCard from "./ImageCard"; // import the ImageCard component

export default function ImageGrid() {
  const images = [
    { src: "/images/geo1.webp", alt: "GeoAI Image 1", rotationClass: "rotate-2" },
    { src: "/images/geo2.webp", alt: "GeoAI Image 2", rotationClass: "-rotate-3" },
    { src: "/images/geo3.webp", alt: "GeoAI Image 3", rotationClass: "rotate-6" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
      {images.map((image, index) => (
        <ImageCard
          key={index}
          src={image.src}
          alt={image.alt}
          rotationClass={image.rotationClass}
        />
      ))}
    </div>
  );
}
