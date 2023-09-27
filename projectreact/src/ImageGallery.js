import React, { useState, useEffect } from "react";
import "./App.css";

const ImageGallery = () => {
  const images = [
    "/img1.jpg", // Replace with your image URLs
    "/img2.jpg",
    "/game2.jpg",
    "/game1.jpg",
    "/img3.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % images.length;
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="image-gallery">
      <button className="arrow-button prev" onClick={goToNextSlide}>
        &lt;
      </button>

      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="gallery-slide medium-image"
      />

      <button className="arrow-button next" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default ImageGallery;