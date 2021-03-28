import COLOR from '../../assets/style/colors';
import { HeadlineType } from '../../types/interfaces';
import { HeadlineContainer } from './styled';

const Headline = ({ color = COLOR.blue_universe, typeHeadline, children }: HeadlineType) => (
  <HeadlineContainer
    color={color}
    typeHeadline={typeHeadline}
    dangerouslySetInnerHTML={{ __html: `${children}` }}
  />
);
export default Headline;
