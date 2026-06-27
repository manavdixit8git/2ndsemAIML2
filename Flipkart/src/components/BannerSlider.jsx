import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bannerElectronics from '../assets/banner_electronics.png';
import bannerFashion from '../assets/banner_fashion.png';

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    { id: 1, image: bannerElectronics, alt: 'Electronics Deal' },
    { id: 2, image: bannerFashion, alt: 'Fashion Deal' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // changes every 5 seconds
    return () => clearInterval(timer);
  }, [banners.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  return (
    <div className="banner-slider">
      {banners.map((banner, index) => (
        <div 
          key={banner.id} 
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={banner.image} alt={banner.alt} className="slide-img" />
        </div>
      ))}
      
      <button className="slider-btn prev" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      <div className="slider-dots">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
