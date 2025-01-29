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

const quantico = Quantico({
  variable: "--font-quantico",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Zalmar - Premium Clothing Brand",
  description:
    "Shop high-quality fashion at Zalmar. Explore the latest trends in clothing.",
  keywords:
    "zalmar, clothing, fashion, online store, premium wear, buy clothes online in Pakistan, best clothing brand in Pakistan, trendy fashion wear in Pakistan, online clothing store Pakistan, affordable fashion for men & women, buy designer clothes in Pakistan, latest fashion trends 2024, branded clothes for men & women, top online shopping sites for clothing, fashionable dresses for sale, zalmar fashion brand Pakistan, zalmar online clothing store, zalmar premium wear for men & women, zalmar trendy clothes for sale, buy zalmar clothes online in Pakistan",
  openGraph: {
    title: "Zalmar - Premium Clothing",
    description: "Discover the latest fashion trends with Zalmar. Shop now!",
    url: "https://zalmar.store",
    siteName: "Zalmar",
    images: [
      {
        url: "https://zalmar.store/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zalmar Clothing Store",
      },
    ],
    type: "website",
  },
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
