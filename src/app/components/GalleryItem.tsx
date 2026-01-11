import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import './galleryItem.css';
import Image from 'next/image';

export default function GalleryItem({
  item,
}: {
  item: {
    id: number;
    image: string;
  };
}) {
  useEffect(() => {
    GLightbox({
      selector: '.gallery-lightbox',
    });
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
            width={500}
            height={300}
            style={{
              width: '100%',
              height: 'auto',
            }}
            src={item.image}
            alt="Gallery"
            className="img-fluid"
          />
        </a>
      </div>
    </div>
  );
}