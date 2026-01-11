import React from 'react';
import './appBtn.css';

export default function AppBtn({ name }: { name: string }) {
  const handleScrollTo = (section: string) => {
    const header = document.querySelector<HTMLElement>('#header');
    const targetEl = document.querySelector<HTMLElement>(`#${section}`);

    if (!targetEl) return;

    const offset = header ? header.offsetHeight : 0;
    const elementPosition = targetEl.offsetTop;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  };

  return (
    <a
      className="app-btn scrollto d-none d-lg-flex"
      onClick={() => handleScrollTo('book-a-table')}
    >
      {name}
    </a>
  );
}