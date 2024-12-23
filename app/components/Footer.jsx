import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Vision Section */}
          <div>
            <h2 className="text-2xl font-light tracking-wider mb-4">
              Make your idea come to life!
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Strengthen your business strategies with MAPSCOPE's end-to-end
              digital transformation solutions.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-light uppercase tracking-widest mb-4">
              Contacts
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <p className="text-sm">
                  <span className="block font-medium text-white">Phone:</span>
                  +91 (674) 6629 301
                </p>
              </li>
              <li>
                <p className="text-sm">
                  <span className="block font-medium text-white">Email:</span>
                  info@mapscope.in
                </p>
              </li>
              <li>
                <p className="text-sm">
                  <span className="block font-medium text-white">Address:</span>
                  Infocity, Bhubaneswar, Odisha IN
                </p>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-lg font-light uppercase tracking-widest mb-4">
              Social
            </h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-gray-400 transition-colors"
              >
                <FaFacebookF className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-400 transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-400 transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:text-gray-400 transition-colors"
              >
                <FaLinkedinIn className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Logo Section */}
          <div>
            <Image src="/logo.webp" width={200} height={100} alt="logo" />

            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Empowering innovation and delivering sustainable solutions
              globally.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p className="mb-4 md:mb-0">
            © 2024 MAPSCOPE Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">
              F.A.Q
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
