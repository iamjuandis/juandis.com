import React, { useEffect, useState } from 'react';
import {
  SliderComponent,
  SliderComponentContainer,
  SliderContent,
  SliderElement,
  SliderFooter,
  ContainerArrows,
  SliderNumbers,
} from './styled';
import Dots from '../slider-dots';
import Arrow from '../slider-arrows';
import SlideImage from '../slide-image';
import Link from 'next/link';

interface SliderProps {
  slides: string[];
  showArrows?: boolean;
  showFooter?: boolean;
  linkMoreURL?: any;
  linkMoreText?: any;
  marginTop?: number;
}

const Slider = ({
  slides,
  showArrows = true,
  showFooter = true,
  linkMoreURL,
  linkMoreText,
  marginTop = 0,
}: SliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [translate, setTranslate] = useState(0);
  const widthSlide = 100 / slides?.length;

  // Swipe const
  const [touchstartX, setTouchstartX] = useState(0);
  const [touchendX, setTouchendX] = useState(0);

  const prevSlide = () => {
    setTranslate(translate > widthSlide ? translate - widthSlide : 0);
    setActiveSlide(translate > widthSlide ? activeSlide - 1 : 0);
  };

  const nextSlide = () => {
    setTranslate(translate < 100 - widthSlide ? translate + widthSlide : 100 - widthSlide);
    setActiveSlide(activeSlide < slides?.length - 1 ? activeSlide + 1 : slides?.length - 1);
  };

  const callbackDots = (e: any) => {
    setTranslate(widthSlide * e);
    setActiveSlide(e);
  };

  const handleGesure = () => {
    if (Math.abs(touchendX - touchstartX) > 20) {
      if (touchendX < touchstartX) {
        nextSlide();
      }
      if (touchendX > touchstartX) {
        prevSlide();
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const element = document.getElementById('slider');
      const handleTouchStart = (event: any) => {
        setTouchstartX(event.changedTouches[0].screenX);
      };
      const handleTouchEnd = (event: any) => {
        setTouchendX(event.changedTouches[0].screenX);
        handleGesure();
      };
      element?.addEventListener('touchstart', handleTouchStart);
      element?.addEventListener('touchend', handleTouchEnd);

      return () => {
        element?.removeEventListener('touchstart', handleTouchStart);
        element?.removeEventListener('touchend', handleTouchEnd);
      };
    }
  });

  return (
    <SliderComponent marginTop={marginTop}>
      <SliderComponentContainer id="slider">
        <SliderElement>
          <SliderContent cantSlides={slides?.length} translate={translate}>
            {slides && slides.length > 0
              ? slides?.map((slide: any, i: any) => (
                  <SlideImage key={slide + i} content={slide} width={100 / slides?.length} />
                ))
              : 'No elements to show in the slider'}
          </SliderContent>
        </SliderElement>

        {showArrows && (
          <ContainerArrows>
            <Arrow direction="left" handleClick={prevSlide} opacity={activeSlide !== 0 ? 1 : 0} />
            <Arrow
              direction="right"
              handleClick={nextSlide}
              opacity={activeSlide !== slides.length - 1 ? 1 : 0}
            />
          </ContainerArrows>
        )}
        {showFooter ? (
          <SliderFooter>
            <SliderNumbers>
              {activeSlide + 1} / {slides.length}
            </SliderNumbers>
            <Dots slides={slides} activeSlide={activeSlide} callbackDots={callbackDots} />
            {linkMoreText && linkMoreURL ? (
              <Link href={linkMoreURL}>
                <a>
                  <strong>{linkMoreText}</strong>
                </a>
              </Link>
            ) : null}
          </SliderFooter>
        ) : null}
      </SliderComponentContainer>
    </SliderComponent>
  );
};

export default Slider;
