"use client";

import React, { useEffect } from "react";
import Glightbox from "glightbox";
import "./hero.css";
import HeroBtn from "../components/HeroBtn";

export default function Hero() {
  useEffect(() => {
    Glightbox({
      selector: ".glightbox",
    });
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
              Burger Cafe <span> & Bar</span>
            </h1>
            <h2>Crafting burgers & bar moments since 2007</h2>

            <div className="btns">
              <HeroBtn name="Our menu" target="menu" />
              <HeroBtn name="book a table" target="book-a-table" />
            </div>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://www.youtube.com/watch?v=V5w1OGknhlc"
              className="glightbox play-btn"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}
