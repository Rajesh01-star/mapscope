// components/Button.jsx
import { FaArrowRight } from "react-icons/fa";

export default function Button({
  children,
  onClick,
  icon = false,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`group bg-blue-500 text-white py-2 px-6 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-600 transition ${className}`}
    >
      <span>{children}</span>
      {icon && (
        <FaArrowRight className="transform transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </button>
  );
}
