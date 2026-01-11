"use client";

import nextDynamic from "next/dynamic";

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

// Dynamic import untuk komponen yang bermasalah di SSR
const Hero = nextDynamic(() => import("./sections/Hero"), { ssr: false });
const Events = nextDynamic(() => import("./sections/Events"), { ssr: false });
const Testimonials = nextDynamic(() => import("./sections/Testimonials"), { ssr: false });

export const dynamic = "force-dynamic"; // ini sekarang tidak konflik


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