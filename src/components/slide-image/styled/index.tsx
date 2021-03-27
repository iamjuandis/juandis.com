import styled from 'styled-components';

interface SlideImageProps {
  widthImage?: any;
}

export const SlideImageComponent = styled.img`
  height: 100%;
  width: ${(props: SlideImageProps) => `${props.widthImage}%`}; // Change to variable
  object-fit: cover;
`;
