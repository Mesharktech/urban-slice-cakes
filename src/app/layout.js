import { Inter, Playfair_Display } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata = {
  title: { default: "Urban Slice Cakes | Above The Best", template: "%s | Urban Slice Cakes" },
  description: "Premium cakes & pastries in Nairobi. Custom orders, fresh daily. Above the Best.",
};

const TICKER_ITEMS = ["Premium Cakes", "Above The Best", "Fresh Daily", "Artisan Crafted", "Order via WhatsApp", "Nairobi Kenya"];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <div className="ticker-wrap" aria-hidden="true">
          <div className="ticker">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="ticker-item">
                {item} <span className="ticker-dot">✦</span>
              </span>
            ))}
          </div>
        </div>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
