import { HeadlineType } from '../../types/interfaces';
import { HeadlineContainer } from './styled';

const Headline = ({ color, typeHeadline, children }: HeadlineType) => (
  <HeadlineContainer color={color} typeHeadline={typeHeadline}>
    {children}
  </HeadlineContainer>
);

export default Headline;
