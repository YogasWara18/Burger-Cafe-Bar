"use client";

import dynamic from "next/dynamic";

// Import komponen biasa
import About from "./sections/About";
import Booking from "./sections/Booking";
import Chefs from "./sections/Chefs";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Footermain from "./sections/Footermain";
import Gallery from "./sections/Gallery";
import Menu from "./sections/Menu";
import Specials from "./sections/Specials";
import Testimonials from "./sections/Testimonials";

// Dynamic import untuk komponen yang bermasalah di SSR
const Hero = dynamic(() => import("./sections/Hero"), { ssr: false });
const Events = dynamic(() => import("./sections/Events"), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Menu />
        <Specials />
        <Events />
        <Booking />
        <Testimonials />
        <Gallery />
        <Chefs />
        <Contact />
        <Footer />
        <Footermain />
      </main>
    </>
  );
}