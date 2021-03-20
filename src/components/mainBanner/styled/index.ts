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
