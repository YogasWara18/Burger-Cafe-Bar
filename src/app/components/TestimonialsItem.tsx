import React from 'react';
import './testimonialsItem.css';

export default function TestimonialsItem({
    item,
}: {
    item: {
        id: number;
        content: string;
        avatar: string;
        client: string;
        position: string;
    };
}) {
  return (
    <div className="testimonial-item">
        <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            {item.content}
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        <img src={item.avatar}  className="testimonial-img" alt="testimonial image" />
        <h3>{item.client}</h3>
        <h4>{item.position}</h4>
    </div>
  );
}
