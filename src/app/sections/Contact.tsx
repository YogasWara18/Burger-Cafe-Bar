import React from "react";
import "./contact.css";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Contact" subtitle="Contact Us" />
      </div>

      <div data-aos="fade-up">
        <iframe
          title="Google Maps - The Burger Bar"
          style={{ border: 0, width: "100%", height: "350px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1106.017547!2d-97.8300229!3d30.4796034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2d003ff032a1%3A0x2334eaef506faa26!2sThe%20Burger%20Bar!5e0!3m2!1sen!2sus!4v1704970000000!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location</h4>
                <p>2031 E Oakland Park Blvd, Oakland Park, FL 33306, United States</p>
              </div>

              <div className="open-hours">
                <i className="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>
                  Monday - Saturday:
                  <br />
                  11:00 AM - 11:00 PM
                </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>burgercafe.bar@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 234 567 890</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form role="form" className="contact-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your Message has been sent. Thank You!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}