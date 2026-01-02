import React from 'react';
import aboutImage from '../../../public/About.jpg';
import './about.css';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className='about'>
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div 
                className="col-lg-6 order-1 order-lg-2"
                data-aos="zoom-in"
                data-aos-delay="100"
                >
                    <div className="about-img">
                        <Image src={aboutImage} alt="about image"/>
                    </div>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <h3>
                        Authentic flavor, unforgettable atmosphere Burger Café & Bar, your home of true enjoyment.
                    </h3>
                    <p className="fst-italic">
                        Juicy burgers, crafted cocktails, lively bar vibes every bite and sip brings delight, turning ordinary nights into unforgettable moments.
                    </p>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
  );
}
