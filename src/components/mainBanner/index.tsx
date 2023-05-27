import COLOR from '../../assets/style/colors';
import { MainBannerType } from '../../types/interfaces';
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
          <h1 dangerouslySetInnerHTML={{ __html: `${headline}` }} />
        </HeadlineMainBanner>
        <ParagraphsContainerMainBanner>
          <Paragraph
            size={1}
            columns={1}
            children={paragraph}
            highlightColor={COLOR.yellow_sunrise}
          />
        </ParagraphsContainerMainBanner>
      </MainBannerContent>
    </MainBannerContainer>
  );
};

export default MainBanner;
