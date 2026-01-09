import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css'; 
import './galleryItem.css';
import Image from 'next/image';

type GalleryItemProps = {
  item: {
    id: number;
    image: string;
  };
};

export default function GalleryItem({ item }: GalleryItemProps) {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.gallery-lightbox',
    });

    return () => {
      lightbox.destroy(); 
    };
  }, []);

  return (
    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a
          href={item.image}
          className="gallery-lightbox"
          data-gallery="gallery-item"
        >
          <Image
            src={item.image}
            alt={`Gallery image ${item.id}`}
            width={500}
            height={300}
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
        </a>
      </div>
    </div>
  );
}