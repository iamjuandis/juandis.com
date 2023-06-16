import { BannerContainer, ButtonsBanner } from './styled';

interface CTABannerTypes {
  title: string;
  mainCTA: any;
  secondaryCTA?: any;
}

const CTABanner = ({ title, mainCTA, secondaryCTA }: CTABannerTypes) => {
  return (
    <BannerContainer>
      <h4>{title}</h4>
      <ButtonsBanner>
        {secondaryCTA && secondaryCTA}
        {mainCTA && mainCTA}
      </ButtonsBanner>
    </BannerContainer>
  );
};

export default CTABanner;
