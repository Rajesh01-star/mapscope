import { Montserrat } from "next/font/google";
import "./globals.css";

// Import Montserrat font
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "MapScope",
  description: "MapScope",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${montserrat.variable} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
