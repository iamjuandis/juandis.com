import React from 'react';
import { ArrowComponent } from './styled';
import * as Icon from 'react-feather';
import COLOR from '../../assets/style/colors';

export interface ArrowProps {
  mainColor?: string | undefined;
  direction?: string;
  handleClick?: any;
  opacity?: number;
}
const Arrow = ({ mainColor = COLOR.green_dark, direction, handleClick, opacity }: ArrowProps) => (
  <ArrowComponent
    onClick={handleClick}
    direction={direction}
    opacity={opacity}
    mainColor={mainColor}
  >
    {direction === 'right' ? <Icon.ArrowRight /> : <Icon.ArrowLeft />}
  </ArrowComponent>
);

export default Arrow;
