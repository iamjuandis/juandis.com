import { DotComponent, DotsComponent } from './styled';

interface DotProps {
  active?: boolean;
  callback?: any;
  slideNumber?: number;
}

interface DotsProps {
  slides?: any;
  activeSlide?: number;
  callbackDots?: any;
}

const Dot = ({ active, callback, slideNumber }: DotProps) => (
  <DotComponent active={active} onClick={() => callback(slideNumber)} />
);

const Dots = ({ slides, activeSlide, callbackDots }: DotsProps) => (
  <DotsComponent>
    {slides?.map((slide: any, idx: number) => (
      <Dot
        key={slide + idx}
        active={activeSlide === idx}
        slideNumber={idx}
        callback={callbackDots}
      />
    ))}
  </DotsComponent>
);

export default Dots;
