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
      className={`relative w-1/2 mt-8 lg:mt-0 ${className} ${
        position === "right"
          ? "text-right lg:text-right"
          : "text-left lg:text-left"
      } `}
    >
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">
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
      <h3 className="text-xl text-gray-600 mb-6">{subheading}</h3>
      <Button className={`absolute ${position}-0`} icon={icon} onClick={onButtonClick}>
        {buttonLabel}
      </Button>
    </div>
  );
}
