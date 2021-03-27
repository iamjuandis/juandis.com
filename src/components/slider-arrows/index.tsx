import { ArrowComponent } from './styled';
import * as Icon from 'react-feather';

interface ArrowProps {
  direction?: string;
  handleClick?: any;
  opacity?: number;
}
const Arrow = ({ direction, handleClick, opacity }: ArrowProps) => (
  <ArrowComponent onClick={handleClick} direction={direction} opacity={opacity}>
    {direction === 'right' ? <Icon.ArrowRight /> : <Icon.ArrowLeft />}
  </ArrowComponent>
);

export default Arrow;
