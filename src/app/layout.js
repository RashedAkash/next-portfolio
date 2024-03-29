import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.variable} ${roboto_mono.variable}`}>
        <div className=" max-w-6xl mx-auto">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
