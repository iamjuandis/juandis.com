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
          <Paragraph paragraphSize="text-huge" columns={1} children={paragraph} />
        </ParagraphsContainerMainBanner>
      </MainBannerContent>
    </MainBannerContainer>
  );
};

export default MainBanner;
