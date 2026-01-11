"use client";

import React, { useState, useEffect } from "react";
import { navs } from "../data/data";
import "./nav.css";
import { useRouter, usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [navList, setNavlist] = useState(navs);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScroll(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleScrollTo = (section: string) => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const header = document.querySelector<HTMLElement>("#header");
    const targetEl = document.querySelector<HTMLElement>(`#${section}`);

    if (!targetEl) return;

    const offset = header ? header.offsetHeight : 0;
    const elementPosition = targetEl.offsetTop;

    if (pathname === "/") {
      if (typeof window !== "undefined") {
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    } else {
      router.push(`/#${section}`);
    }
  };

  const handleNavActive = () => {
    if (typeof document === "undefined") return;

    const position = scroll + 200;
    setNavlist(
      navList.map((nav) => {
        nav.active = false;
        const targetSection = document.querySelector<HTMLElement>(
          "#" + nav.target
        );

        if (
          targetSection &&
          position >= targetSection.offsetTop &&
          position <= targetSection.offsetTop + targetSection.offsetHeight
        ) {
          nav.active = true;
        }
        return nav;
      })
    );
  };

  useEffect(() => {
    handleNavActive();
  }, [scroll]);

  return (
    <nav
      id="navbar"
      className={`navbar order-last order-lg-0 ${open ? "navbar-mobile" : ""}`}
    >
      <ul>
        {navList.map((nav) => (
          <li key={nav.id}>
            <a
              className={`nav-link scrollto ${nav.active ? "active" : ""}`}
              onClick={() => handleScrollTo(nav.target)}
            >
              {nav.name === "Home" ? (
                <i className="bi bi-house-door-fill"></i>
              ) : (
                nav.name
              )}
            </a>
          </li>
        ))}
      </ul>
      <i
        className="bi bi-list mobile-nav-toggle"
        onClick={handleToggleMenu}
      ></i>
    </nav>
  );
}