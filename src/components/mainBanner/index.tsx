import COLOR from '../../assets/style/colors';
import { MainBannerType } from '../../types/interfaces';
import Headline from '../headline';
import Paragraph from '../paragraph';
import {
  HeadlineMainBanner,
  MainBannerContainer,
  MainBannerContent,
  ParagraphsContainerMainBanner,
} from './styled';

const MainBanner = ({ headline, paragraph }: MainBannerType) => {
  return (
    <MainBannerContainer>
      <MainBannerContent>
        <HeadlineMainBanner>
          <Headline fontSize={45} typeHeadline="h1">
            {headline}
          </Headline>
        </HeadlineMainBanner>
        <ParagraphsContainerMainBanner>
          <Paragraph
            size={1}
            columns={2}
            children={paragraph}
            highlightColor={COLOR.yellow_sunrise}
          />
        </ParagraphsContainerMainBanner>
      </MainBannerContent>
    </MainBannerContainer>
  );
};

export default MainBanner;
