import Button from "./Button";

export default function LeadContent({
  heading,
  subheading,
  buttonLabel,
  icon = false,
  onButtonClick,
  className = "",
  position = "left", // Accepts "left" or "right"
}) {
  return (
    <div
      className={`relative w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-${position} ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
        {Array.isArray(heading)
          ? heading.map((part, index) =>
              typeof part === "string" ? (
                <span key={index}>{part}</span>
              ) : (
                <span key={index} className={part.className}>
                  {part.text}
                </span>
              )
            )
          : heading}
      </h2>
      <h3 className="text-lg sm:text-xl text-gray-600 mb-6">{subheading}</h3>
      <div className="flex justify-center lg:justify-start">
        <Button
          className="mt-4 flex text-white"
          icon={icon}
          onClick={onButtonClick}
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
