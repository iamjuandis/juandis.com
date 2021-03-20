import styled from 'styled-components';

export const MainBannerContainer = styled.div`
  width: 100%;
`;

export const MainBannerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-column-gap: 30px;
  margin: auto;
  max-width: 1200px;
  padding-top: 100px;
  width: 100%;
`;

export const HeadlineMainBanner = styled.div`
  grid-column: 2 / 11;
  width: 100%;
`;

export const ParagraphsContainerMainBanner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 4fr);
  grid-column-gap: 30px;
  grid-column: 3 / 11;
  padding-top: 60px;
  width: 100%;
`;
