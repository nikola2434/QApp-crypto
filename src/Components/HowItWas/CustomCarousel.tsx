import { useState, useEffect } from 'react';
import './CustomCarousel.css';

type CarouselProps = {
  images: string[];
  onClose: () => void;
};

export const CustomCarousel = ({ images, onClose }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Автопрокрутка (опционально)
  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="carousel-overlay">
      <div className="carousel-container">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="carousel-slide">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image" />
        </div>

        <button className="nav-btn prev-btn" onClick={goPrev}>
          &#10094;
        </button>
        <button className="nav-btn next-btn" onClick={goNext}>
          &#10095;
        </button>

        <div className="indicators">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`indicator ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
