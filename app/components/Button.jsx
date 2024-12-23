// components/Button.jsx
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Button({
  children,
  onClick,
  icon = false,
  className = "",
  link,
}) {
  return (
    <Link
      href={link}
      onClick={onClick}
      className={`group bg-blue-500 py-2 px-6 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-600 transition ${className}`}
    >
      <span>{children}</span>
      {icon && (
        <FaArrowRight className="transform transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
