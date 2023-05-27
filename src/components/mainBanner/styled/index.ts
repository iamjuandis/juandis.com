import styled from 'styled-components';

export const MainBannerContainer = styled.div`
  width: 100%;
`;

export const MainBannerContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 996px;
  padding: 100px 48px 48px 48px;
  row-gap: 32px;
  width: 100%;
`;

export const HeadlineMainBanner = styled.div`
  width: 100%;
  .color {
    color: #16c973;
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

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

export const ParagraphsContainerMainBanner = styled.div`
  width: 100%;
`;
