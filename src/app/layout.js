import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${inter.variable} ${roboto_mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
