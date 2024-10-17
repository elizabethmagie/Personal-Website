import React, { useEffect, useState } from 'react';
import './CyclePhotos.css';

import grad_photo from '../Images/grad_photo.jpeg';
import ski from '../Images/ski.jpg';
import peru from '../Images/peru.jpg';
import golf_photo from '../Images/golf_photo.jpg';

const photos = [
    grad_photo,
    peru,
    ski,
    golf_photo
];

export const CyclePhotos: React.FC = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
        setFade(false);

      setTimeout(() => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
        setFade(true);
      }, 500); 
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`photo-spot ${fade ? 'fade-in' : 'fade-out'}`}>
      <img src={photos[currentPhoto]} alt={`Photo${currentPhoto + 1}`} />
    </div>
  );
};
