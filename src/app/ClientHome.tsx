// src/app/ClientHome.tsx
"use client";

import dynamic from "next/dynamic";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Specials from "./sections/Specials";
import Booking from "./sections/Booking";
import Gallery from "./sections/Gallery";
import Chefs from "./sections/Chefs";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Footermain from "./sections/Footermain";

const Hero = dynamic(() => import("./sections/Hero"), { ssr: false });
const Events = dynamic(() => import("./sections/Events"), { ssr: false });
const Testimonials = dynamic(() => import("./sections/Testimonials"), { ssr: false });

export default function ClientHome() {
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