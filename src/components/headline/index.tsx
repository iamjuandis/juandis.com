import COLOR from '../../assets/style/colors';
import { HeadlineType } from '../../types/interfaces';
import { HeadlineContainer } from './styled';

const Headline = ({
  children,
  color = COLOR.blue_universe,
  fontSize,
  fontWeight,
  typeHeadline,
}: HeadlineType) => (
  <HeadlineContainer
    color={color}
    dangerouslySetInnerHTML={{ __html: `${children}` }}
    fontSize={fontSize}
    fontWeight={fontWeight}
    typeHeadline={typeHeadline}
  />
);
export default Headline;
