import images from "../data/images";

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`${
            index > 1 ? "hidden lg:block" : "block"
          } w-full h-auto rounded-lg transform lg:${image.rotationClass}`}
        />
      ))}
    </div>
  );
}
