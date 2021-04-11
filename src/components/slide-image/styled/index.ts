import styled from 'styled-components';

interface SlideImageProps {
  widthImage?: any;
}

export const SlideImageComponent = styled.div<SlideImageProps>`
  height: 100%;
  width: ${(props) => `${props.widthImage}%`}; // Change to variable
`;
