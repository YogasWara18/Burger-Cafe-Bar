'use client'

import React, {useState, useEffect} from 'react';
import './header.css';

// logo
import Link from 'next/link';
import Image from 'next/image';
import AppBtn from './AppBtn';
import Nav from './Nav';

export default function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);


  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${scroll > 100 ? 'header-scrolled' : undefined }`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <Link href="/" className="logo me-auto me-lg-0">
            <Image
              src="/navbar-logo.png"
              alt="Burger Cafe & Bar Logo"
              width={170}
              height={40}
              className="img-fluid"
            />
          </Link>

          <Nav/>
          <AppBtn name="Order Now"/>
      </div>
    </header>
  )
}
