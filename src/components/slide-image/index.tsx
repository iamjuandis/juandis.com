import { SlideImageComponent } from './styled';

interface SlideImageProps {
  content?: any;
  width?: any;
}

const SlideImage = ({ content, width }: SlideImageProps) => (
  <SlideImageComponent widthImage={width} src={content} />
);

export default SlideImage;
