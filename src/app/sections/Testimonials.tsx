"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import "./testimonials.css";
import SectionTitle from "../components/SectionTitle";
import TestimonialsItem from "../components/TestimonialsItem";

// Define a type for your testimonials
type Testimonial = {
  id: number;
  content: string;
  avatar: string;
  client: string;
  position: string;
};

export default function Testimonials() {
  const [slides, setSlides] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/testimonials");
        const data = await res.json();
        setSlides(data);
      } catch (e: any) {
        console.error(e.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">

        {/* Logo di atas testimonial */}
        <div
          className="testimonials-logo"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <img
            src="/navbar-logo.png" // ganti dengan path logo kamu
            alt="Burger Café & Bar Logo"
            style={{ width: "110px", height: "auto" }}
          />
        </div>

        <SectionTitle
          title="Testimonials"
          subtitle="What they saying about us"
        />

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            slidesPerView={"auto"}
            speed={600}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".testimonials-swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="testimonials-slider"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <TestimonialsItem item={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonials-swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}