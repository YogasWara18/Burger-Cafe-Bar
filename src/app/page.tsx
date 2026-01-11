"use client";

import nextDynamic from "next/dynamic";

// Komponen yang bermasalah di SSR → pakai dynamic
const Hero = nextDynamic(() => import("./sections/Hero"), { ssr: false });
const Events = nextDynamic(() => import("./sections/Events"), { ssr: false });
const Testimonials = nextDynamic(() => import("./sections/Testimonials"), { ssr: false });

// Komponen lain bisa import biasa
import About from "./sections/About";
import Menu from "./sections/Menu";
import Specials from "./sections/Specials";
import Booking from "./sections/Booking";
import Gallery from "./sections/Gallery";
import Chefs from "./sections/Chefs";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Footermain from "./sections/Footermain";

// Tambahkan ini untuk memaksa halaman tidak di‑SSG/SSR
export const dynamic = "force-dynamic";

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