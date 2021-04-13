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
  width: calc(100% - 60px);
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const HeadlineMainBanner = styled.div`
  grid-column: 2 / 11;
  width: 100%;
  @media screen and (max-width: 700px) {
    grid-column: 1 / -1;
  }
`;

export const ParagraphsContainerMainBanner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 4fr);
  grid-column-gap: 30px;
  grid-column: 3 / 11;
  padding-top: 60px;
  width: 100%;
  @media screen and (max-width: 700px) {
    grid-column: 1 / -1;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    padding-top: 30px;
  }
`;
