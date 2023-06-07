import React, { useState } from 'react';
import {
  SliderComponent,
  SliderComponentContainer,
  SliderContent,
  SliderElement,
  SliderFooter,
  ContainerArrows,
  SliderNumbers,
} from './styled';
import Arrow from '../slider-arrows';
import SlideImage from '../slide-image';

interface SliderProps {
  slides: string[];
  showArrows?: boolean;
  showFooter?: boolean;
  mainColor?: string;
  marginTop?: number;
}

const Slider = ({
  slides,
  showArrows = true,
  showFooter = true,
  mainColor,
  marginTop = 0,
}: SliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [translate, setTranslate] = useState(0);
  const widthSlide = 100 / slides?.length;

  const prevSlide = () => {
    setTranslate(translate > widthSlide ? translate - widthSlide : 0);
    setActiveSlide(translate > widthSlide ? activeSlide - 1 : 0);
  };

  const nextSlide = () => {
    setTranslate(translate < 100 - widthSlide ? translate + widthSlide : 100 - widthSlide);
    setActiveSlide(activeSlide < slides?.length - 1 ? activeSlide + 1 : slides?.length - 1);
  };

  return (
    <SliderComponent marginTop={marginTop}>
      <SliderComponentContainer>
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
            <Arrow
              mainColor={mainColor}
              direction="left"
              handleClick={prevSlide}
              opacity={activeSlide !== 0 ? 1 : 0}
            />
            <Arrow
              mainColor={mainColor}
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
          </SliderFooter>
        ) : null}
      </SliderComponentContainer>
    </SliderComponent>
  );
};

export default Slider;
