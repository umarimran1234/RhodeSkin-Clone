import { Geist, Geist_Mono, Quantico } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Announcement from "@/components/Announcement";
import Navbar from "@/components/Navbar";
import HeaderAndFooter from "@/components/HeaderFooter";
import "sweetalert2/dist/sweetalert2.min.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add weight option for Quantico font
const quantico = Quantico({
  variable: "--font-quantico",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify supported weights
});

export const metadata = {
  title: "Zalmar Store",
  description: "style that speaks your life style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${quantico.variable} antialiased`}>
        <div className="fixed bottom-5 right-5 z-50">
          <a
            href="https://wa.me/+923292299694"
            target="_blank"
            className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <Image
              height={40}
              width={40}
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
            />
          </a>
        </div>

        <HeaderAndFooter>{children}</HeaderAndFooter>
      </body>
    </html>
  );
}
