import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "BechDal.com - Buy. Sell. Anything.",
  description: "India's largest second-hand marketplace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen pt-4 pb-12">{children}</main>
      </body>
    </html>
  );
}
