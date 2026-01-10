'use client'

import React, { useState, useEffect} from 'react';

import SectionTitle from '../components/SectionTitle';
import Preloader from '../components/Preloader';
import GalleryItem from '../components/GalleryItem';

export default function Gallery() {
  const [images, setImages] = useState<any | []>([]);

  const getGalleryData = () => {
    fetch('http://localhost:3000/api/gallery')
    .then(res => res.json())
    .then(data => setImages(data))
    .catch(e => console.log(e.message));
  };

  useEffect(() => {
    getGalleryData();
  }, []);

  return (
    <section id="gallery" className='gallery'>
      <div className="container" data-aos="fade-up">
        <SectionTitle
        title="Gallery"
        subtitle="Some photos from our Burgers Cafe & Bar"
        />
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {!images ? (
            <Preloader/>
          ) : images.length > 0 ? (
            images.map((image: { id: number; image: string }) => (
              <GalleryItem key={image.id} item={image}/>
            ))
          ) : (
            <Preloader/>
          )}
        </div>
      </div>

    </section>
  );
}
