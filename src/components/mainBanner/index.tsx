import { MainBannerType } from '../../types/interfaces';
import Headline from '../headline';
import Paragraph from '../paragraph';
import {
  HeadlineMainBanner,
  MainBannerContainer,
  MainBannerContent,
  ParagraphsContainerMainBanner,
} from './styled';

const MainBanner = ({ headline, paragraphs }: MainBannerType) => {
  return (
    <MainBannerContainer>
      <MainBannerContent>
        <HeadlineMainBanner>
          <Headline typeHeadline="h1">{headline}</Headline>
        </HeadlineMainBanner>
        <ParagraphsContainerMainBanner>
          {paragraphs?.map((paragraph: string, idx: number) => (
            <Paragraph size={22} key={idx}>
              {paragraph}
            </Paragraph>
          ))}
        </ParagraphsContainerMainBanner>
      </MainBannerContent>
    </MainBannerContainer>
  );
};

export default MainBanner;
