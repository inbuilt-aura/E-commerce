import React, { useState, useEffect, useCallback } from "react";

interface Slide {
  url: string;
  href: string;
}

interface ImageSliderProps {
  slides: Slide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides, autoPlay = false, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    if (slides.length === 0) return;
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    if (autoPlay && slides.length > 0) {
      const interval = setInterval(goToNext, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [goToNext, autoPlay, autoPlayInterval, slides.length]);

  const goToPrevious = () => {
    if (slides.length === 0) return;
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < slides.length) {
      setCurrentIndex(slideIndex);
    }
  };

  const slideStyles = slides.length > 0 ? {
    backgroundImage: `url(${slides[currentIndex].url})`,
  } : {};

  return (
    <div className="carousel sliderStyles">
      {slides.length > 0 && (
        <>
          <div>
            <div onClick={goToPrevious} className="leftArrowStyles">
              ❰
            </div>
            <div onClick={goToNext} className="rightArrowStyles">
              ❱
            </div>
          </div>

          <a href={slides[currentIndex].href}>
          <div style={slideStyles} className="slideStyles"></div>
        </a>
          {/* <p>{slides[currentIndex].title}</p> */}
          <div className="dotsContainerStyles">
            {slides.map((_, slideIndex) => (
              <div
                className={`dotStyle ${slideIndex === currentIndex ? 'activeDot' : ''}`}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                ●
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
