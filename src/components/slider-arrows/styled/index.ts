import styled from 'styled-components';
import { ArrowProps } from '..';
import COLOR from '../../../assets/style/colors';

export const ArrowComponent = styled.div<ArrowProps>`
  align-items: center;
  display: flex;
  ${(props) => (props.direction === 'right' ? `right: 25px` : `left: 25px`)};
  height: 50px;
  width: 50px;
  justify-content: center;
  background: ${COLOR.white_cloud};
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.2s;
  opacity: ${(props) => props.opacity};
  pointer-events: ${(props) => (props.opacity && props.opacity === 1 ? 'all' : 'none')};
  &:hover {
    transform: scale(1.1);
  }
  svg {
    color: ${(props) => (props.mainColor ? props.mainColor : COLOR.blue_universe)};
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
