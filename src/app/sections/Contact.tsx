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
          style={{ border: 0, width: "100%", height: "350px" }}
          src="https://www.google.com/maps/search/burger+cafe+%26+bar+/@-15.3980333,106.3218634,5.25z?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
          allowFullScreen
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

              <div className="opeb-hours">
                <i className="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>
                  Monday - Saturday:
                  <br />
                  11:00 AM - 23:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
