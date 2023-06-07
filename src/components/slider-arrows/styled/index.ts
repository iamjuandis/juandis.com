import styled from 'styled-components';
import { ArrowProps } from '..';
import COLOR from '../../../assets/style/colors';

export const ArrowComponent = styled.div<ArrowProps>`
  align-items: center;
  background: ${COLOR.white_cloud};
  border-radius: 50%;
  box-shadow: 0px 0px 50px ${(props) => `${props.mainColor}77`};
  cursor: pointer;
  display: flex;
  ${(props) => (props.direction === 'right' ? `right: 25px` : `left: 25px`)};
  height: 50px;
  justify-content: center;
  opacity: ${(props) => props.opacity};
  pointer-events: ${(props) => (props.opacity && props.opacity === 1 ? 'all' : 'none')};
  transition: transform ease-in 0.2s;
  width: 50px;
  &:hover {
    transform: scale(1.1);
  }
  svg {
    color: ${(props) => (props.mainColor ? props.mainColor : COLOR.green_dark)};
    &:focus {
      outline: 0;
    }
  }
  @media screen and (max-width: 500px) {
    height: 40px;
    width: 40px;
    margin-top: 5px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
