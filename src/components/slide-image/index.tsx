import React from 'react';
import Image from 'next/image';
import { SlideImageComponent } from './styled';

interface SlideImageProps {
  content?: any;
  width?: any;
}

const SlideImage = ({ content, width }: SlideImageProps) => (
  <SlideImageComponent widthImage={width}>
    <Image width={2400} src={content} height={963} priority alt={'Slide image'} />
  </SlideImageComponent>
);

export default SlideImage;
