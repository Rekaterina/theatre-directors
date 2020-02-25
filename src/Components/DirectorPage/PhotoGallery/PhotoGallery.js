import React from 'react';
import ImageGallery from 'react-image-gallery';
import './PhotoGallery.css';




function PhotoGallery(props) {
  const { data } = props;
  const { photos } = data;
  const images = [
      {
        original: photos[0].src,
        thumbnail: photos[0].src,
      },
      {
          original: photos[1].src,
          thumbnail: photos[1].src,
      },
      {
          original: photos[2].src,
          thumbnail: photos[2].src,
      },
    ];
  return (
      <div className='photo-gallery'>
         <p>{data.gallery}</p>
         <ImageGallery items={images} />
      </div>
  );
}

export default PhotoGallery;
