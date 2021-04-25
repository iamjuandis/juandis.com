import { HeadlineType } from '../../types/interfaces';
import { HeadlineContainer } from './styled';

const Headline = ({ children, color, fontSize, fontWeight, typeHeadline }: HeadlineType) => (
  <HeadlineContainer
    color={color}
    dangerouslySetInnerHTML={{ __html: `${children}` }}
    fontSize={fontSize}
    fontWeight={fontWeight}
    typeHeadline={typeHeadline}
  />
);
export default Headline;
