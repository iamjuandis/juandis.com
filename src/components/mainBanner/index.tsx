import React from 'react';
import { MainBannerType } from '../../types/interfaces';
import Paragraph from '../paragraph';
import {
  HeadlineMainBanner,
  MainBannerContainer,
  MainBannerContent,
  ParagraphsContainerMainBanner,
} from './styled';
import ButtonLink from '../buttonLink';

const MainBanner = ({ headline, paragraph }: MainBannerType) => {
  return (
    <MainBannerContainer>
      <MainBannerContent>
        <HeadlineMainBanner>
          <h1 dangerouslySetInnerHTML={{ __html: `${headline}` }} />
        </HeadlineMainBanner>
        <ParagraphsContainerMainBanner>
          <Paragraph paragraphSize="text-huge" columns={1} children={paragraph} />
          <ButtonLink
            label="Portfolio"
            variant="primary"
            route="https://portfolio.juandis.com"
            target="_blank"
          />
        </ParagraphsContainerMainBanner>
      </MainBannerContent>
    </MainBannerContainer>
  );
};

export default MainBanner;
