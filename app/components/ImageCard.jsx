export default function ImageCard({ src, alt, rotationClass }) {
    return (
      <div className="relative ">
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto rounded-lg transform ${rotationClass}`}
        />
      </div>
    );
  }
  