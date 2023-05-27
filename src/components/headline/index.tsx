import { HeadlineType } from '../../types/interfaces';
import { HeadlineContainer } from './styled';

const Headline = ({ children, color }: HeadlineType) => (
  <HeadlineContainer color={color} dangerouslySetInnerHTML={{ __html: `${children}` }} />
);
export default Headline;
