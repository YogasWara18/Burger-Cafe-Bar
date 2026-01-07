"use client";

import React, { useState } from "react";
import "./booking.css";
import SectionTitle from "../components/SectionTitle";

type BookingForm = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  people: string;
  message: string;
  validate: string;
};

export default function Booking() {
  const initialState: BookingForm = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
    validate: "",
  };

  const [text, setText] = useState<BookingForm>(initialState);

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setText((prev) => ({ ...prev, [name]: value, validate: "" }));
  };

  const handleSubmitBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      text.name === "" ||
      text.email === "" ||
      text.date === "" ||
      text.time === ""
    ) {
      setText((prev) => ({ ...prev, validate: "incomplete" }));
      return;
    }
    try {
      setText((prev) => ({ ...prev, validate: "loading" }));

      const response = await fetch("http://localhost:3000/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      });

      const result = await response.json();
      if (result) {
        setText((prev) => ({ ...prev, validate: "success" }));
      }
    } catch (error) {
      setText((prev) => ({ ...prev, validate: "error" }));
      console.error("Error:", error);
    }
  };

  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Reservation" subtitle="Order Your Burgers" />

        <form
          onSubmit={handleSubmitBooking}
          className="booking-form"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <input
                type="text"
                name="name"
                value={text.name}
                className="form-control"
                placeholder="Your Name"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                value={text.email}
                placeholder="Your Email"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="text"
                className="form-control"
                name="phone"
                value={text.phone}
                placeholder="Your Phone"
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="date"
                name="date"
                className="form-control"
                value={text.date}
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="time"
                className="form-control"
                name="time"
                value={text.time}
                onChange={handleTextChange}
              />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="number"
                className="form-control"
                name="people"
                value={text.people}
                placeholder="Number of People"
                onChange={handleTextChange}
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="message"
                value={text.message}
                rows={5}
                placeholder="Message"
                onChange={handleTextChange}
              ></textarea>
            </div>
            <div className="mb-3">
              {text.validate === "loading" && (
                <div className="loading">Sending Order...</div>
              )}
              {text.validate === "incomplete" && (
                <div className="error-message">
                  Please fill in all required details for your order
                </div>
              )}
              {text.validate === "success" && (
                <div className="sent-message">
                  Your order request was sent. We will call back or send an
                  email to confirm. Thank you!
                </div>
              )}
              {text.validate === "error" && (
                <div className="error-message">Server Error</div>
              )}
            </div>
            <div className="text-center">
              <button type="submit">Order Now</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
