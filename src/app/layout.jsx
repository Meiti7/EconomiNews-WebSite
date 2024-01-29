import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/Organism/Footer";

export const metadata = {
  title: "ECONOMICIAN",
  description: "Developed By Mehdi Dini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
