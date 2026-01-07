'use client';

import React, { useState } from 'react';
import './booking.css';
import SectionTitle from '../components/SectionTitle';

export default function Booking() {
    const intialState = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        message: '',
        validate: '',
    };

    const [text, setText] = useState(intialState);

    const handleTextChange = (e: Event | any) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value, validate: '' });
    };

    const handleSubmitBooking = async (e: Event | any) => {
        e.preventDefault();
        if (
            text.name === '' ||
            text.email === '' ||
            text.date === '' ||
            text.time === ''
        ) {
            setText({ ...text, validate: 'incomplete' });
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(text),
            });

            setText({ ...text, validate: 'loading' });

            const result = await response.json();
            if (result) {
                setText({ ...text, validate: 'succes' });
                // console.log('Success', result);
            }
        } catch (error) {
            setText({ ...text, validate: 'error' });
            // console.error('Error:', error);
        }
    };

  return (
    <section id="book-a-table" className='book-a-table'>
        <div className="container" data-aos="fade-up">
            <SectionTitle title="Reservation" subtitle="Order Your Burgers"/>

        <form 
            onSubmit={handleSubmitBooking}
            className='booking-form'
            data-aos="fade-up"
            data-aos-delay="100"
        >
            <div className="row">
                <div className="col-lg-4 col-md-6 form-group">
                    <input 
                    type="text"
                    name="name"
                    value={text.name}
                    className='form-control'
                    placeholder='Your Name'
                    onChange={handleTextChange} 
                    />
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                    <input 
                    type="email" 
                    className='form-control'
                    name="email"
                    value={text.email}
                    placeholder='Your Email'
                    onChange={handleTextChange}
                    />
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                    <input 
                    type="text" 
                    className='form-control'
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
                    className='form-control'
                    value={text.date}
                    placeholder='Date'
                    onChange={handleTextChange}
                    />
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3">
                    <input 
                    type="time"
                    className='form-control'
                    name="time"
                    value={text.time}
                    placeholder='Time'
                    onChange={handleTextChange} 
                    />
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3">
                    <input 
                    type="number" 
                    className='form-control'
                    name="people"
                    value={text.people}
                    placeholder='Of People'
                    onChange={handleTextChange}
                    />
                </div>
                <div className="form-group mt-3">
                   <textarea 
                    className='form-control'
                    name="message"
                    value={text.message}
                    rows={5}
                    placeholder='Message'
                    onChange={handleTextChange}
                   ></textarea>
                </div>
                <div className="mb-3">
                    {text.validate === 'loading' && (
                        <div className="loading">Send Order</div>
                    )}
                    {text.validate === 'incomplete' && (
                        <div className="error-message">
                            Please fill in all above details for order
                        </div>
                    )}
                    {text.validate === 'succes' && (
                        <div className="sent-message">
                            Your order request was sent. We will call back or send on Email to confirm your order. Thank you!
                        </div>
                    )}
                    {text.validate === 'error' && (
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
  )
}
