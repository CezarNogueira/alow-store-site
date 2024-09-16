import React, { useState } from 'react';
import './Carousel.css';

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([
      { id: 1, src: 'https://i.pinimg.com/originals/41/48/ef/4148efe63e8abb83f62438fb023e03ea.jpg', alt: 'Image 1' },
      { id: 2, src: 'https://www.designi.com.br/images/preview/10295188.jpg', alt: 'Image 2' },
    ]);
  
    const handleDotClick = (index) => {
        setCurrentIndex(index);
      };
  
    return (
        <div className="carousel-container">
            <div className="carousel-content">
                <div className="carousel-item active">
                    <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
                    <div className="carousel-nav">
                        {images.map((image, index) => (
                            <button
                            key={image.id}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                            >
                            &#8226;
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}