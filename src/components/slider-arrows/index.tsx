import { ArrowComponent } from './styled';

interface ArrowProps {
  direction?: string;
  handleClick?: any;
  opacity?: number;
}
const Arrow = ({ direction, handleClick, opacity }: ArrowProps) => (
  <ArrowComponent onClick={handleClick} direction={direction} opacity={opacity}>
    {direction === 'right' ? 'RIGHT' : 'LEFT'}
  </ArrowComponent>
);

export default Arrow;
