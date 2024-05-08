"use client"
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <ThemeProvider attribute="class">
        <Navbar />
        <div className="p-40">halooooooo</div>
        <Footer />
      </ThemeProvider>
    </>
  );
}
