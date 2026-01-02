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
                        The Heart of Burger Café & Bar
                    </h3>
                    <p className="fst-italic">
                        Juicy burgers, crafted cocktails, lively bar vibes every bite and sip brings delight, turning ordinary nights into unforgettable moments.
                    </p>
                    <ul>
                        <li>
                            Signature Burgers with Bold Flavors
                        </li>
                        <li>
                            Lively Bar Atmosphere
                        </li>
                        <li>
                            Community & Comfort
                        </li>
                    </ul>
                     <p>
                        Burger Café & Bar is more than just a place to eat it’s a destination where flavor, atmosphere, and community come together. With signature burgers crafted from fresh ingredients, a lively bar that sets the perfect mood, and a welcoming space to gather, every visit becomes an experience worth remembering. Whether you come for the taste, the vibe, or the people, Burger Café & Bar is where unforgettable moments are made.
                    </p>
                </div>
            </div>
        </div>

    </section>
  );
}
