import { DotComponent, DotsComponent } from './styled';

interface DotProps {
  active?: boolean;
  callback?: any;
  slideNumber?: number;
  mainColor?: string;
}

interface DotsProps {
  slides?: any;
  activeSlide?: number;
  callbackDots?: any;
  mainColor?: string;
}

const Dot = ({ active, callback, slideNumber, mainColor }: DotProps) => (
  <DotComponent mainColor={mainColor} active={active} onClick={() => callback(slideNumber)} />
);

const Dots = ({ slides, activeSlide, callbackDots, mainColor }: DotsProps) => (
  <DotsComponent>
    {slides?.map((slide: any, idx: number) => (
      <Dot
        key={slide + idx}
        active={activeSlide === idx}
        slideNumber={idx}
        callback={callbackDots}
        mainColor={mainColor}
      />
    ))}
  </DotsComponent>
);

export default Dots;
