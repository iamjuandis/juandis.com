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
  .color {
    font-size: 1em;
    transition: all ease 0.3s;
    position: relative;
    &::after {
      bottom: 0;
      content: ' ';
      background: linear-gradient(90deg, #ffca00 25%, #09f 50%, #f00 75%, #ffca00 100%);
      background-size: 200% auto;
      height: 3px;
      left: 0;
      margin: auto;
      width: 0%;
      opacity: 0;
      position: absolute;
      transition: all ease 0.3s;
      animation: shine 1s linear infinite;
    }
  }
  &:hover {
    .color {
      &::after {
        opacity: 1;
        transition: all ease 0.3s;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 700px) {
    grid-column: 1 / -1;
    .color {
      &::after {
        height: 2px;
        opacity: 1;
        transition: all ease 0.3s;
        width: 100%;
      }
    }
  }
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

export const ParagraphsContainerMainBanner = styled.div`
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
