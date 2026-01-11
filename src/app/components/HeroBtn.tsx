import React from "react";
import "./heroBtn.css";

export default function HeroBtn({
  name,
  target,
}: {
  name: string;
  target: string;
}) {
  const handleScrollTo = (section: string) => {
    const header = document.querySelector<HTMLElement>("#header");
    const targetEl = document.querySelector<HTMLElement>(`#${section}`);

    if (!targetEl) return;

    const offset = header ? header.offsetHeight : 0;
    const elementPosition = targetEl.offsetTop;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };

  return (
    <a
      onClick={() => handleScrollTo(target)}
      className={`btn-hero animated fadeInUp scrollto ${
        name.toLowerCase().includes("book") ? "ms-4" : ""
      }`}
    >
      {name}
    </a>
  );
}