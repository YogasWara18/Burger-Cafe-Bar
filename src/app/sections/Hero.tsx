'use client';

import React, {useEffect} from 'react';
import Glightbox from 'glightbox';
import './hero.css';

export default function Hero() {
    useEffect(() => {
        new Glightbox({
            selector: '.glightbox',
        });
    }, []);

  return (
    <div>
      
    </div>
  )
}
