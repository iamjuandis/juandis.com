import Headline from '../headline';
import { HeadlineMainBanner, MainBannerContainer, MainBannerContent } from './styled';

const MainBanner = () => {
  return (
    <MainBannerContainer>
      <MainBannerContent>
        <HeadlineMainBanner>
          <Headline typeHeadline="h1">
            I’m an Interactive Designer & Frontend Developer from Colombia. I lead the Product
            Development area at We Are Angular where we design comprehensive and user-based products
            & services for startups and companies.
          </Headline>
        </HeadlineMainBanner>
      </MainBannerContent>
    </MainBannerContainer>
  );
};

export default MainBanner;
