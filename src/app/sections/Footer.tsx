import React from 'react';
import './footer.css';

// Footer

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";



export default function Footer() {
  return (
   <footer id="footer">
    <div className="footer-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="footer-info">
                        <h3>Burger Cafe & Bar</h3>
                        <p>
                            2031 E Oakland Park Blvd, Oakland Park, FL 33306, United States
                            <br />
                            <br />
                            <strong>Phone:</strong> +1234567890
                            <br />
                            <strong>Email:</strong> Burgercafe&bar@gmail.com
                            <br />
                        </p>
                        <div className="social-links mt-3">
                            <a href="#" className='twitter'>
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            <a href="#" className='facebook'>
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className='instagram'>
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className='youtube'>
                                <i className="bi bi-youtube"></i>
                            </a>
                            <a href="#" className='reddit'>
                                <i className="bi bi-reddit"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Usefull Links</h4>
                    <ul>
                        <li>
                            <i className="bx bx-chevron-right"><a href="#">Home</a></i>
                        </li>
                        <li>
                            <i className="bx bx-chevron-right"><a href="#">About Us</a></i>
                        </li>
                        <li>
                            <i className="bx bx-chevron-right"><a href="#">Menu</a></i>
                        </li>
                        <li>
                            <i className="bx bx-chevron-right"><a href="#">Events</a></i>
                        </li>
                        <li>
                            <i className="bc bc-chevron-right"></i>{' '}
                            <a href="#">Gallery</a>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li>
                            <i className="bx bx-chevron-right"></i>{' '}
                            <a href="#">Function</a>
                        </li>
                        <li>
                            <i className="bx bx-chevron-right"></i>{' '}
                            <a href="#">Parties</a>
                        </li>
                        <li>
                            <i className="bx bx-chevron-right"></i>{' '}
                            <a href="#">Events</a>
                        </li>
                        <li>
                            <i className="bx bx-chevron-right"></i>{' '}
                            <a href="#">Private Chef</a>
                        </li>
                        <li>
                            <i className="bx bx-chevron-right"></i>{' '}
                            <a href="#">Ceremony</a>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>
                        Burger cafe and bar, authentic flavor, friendly atmosphere
                    </p>
                    <form action="" method="post">
                        <input type="email" name="email" />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        </div>
    </div>   
</footer>

  )
}
