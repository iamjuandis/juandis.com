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
  padding: 48px;
  row-gap: 32px;
  width: 100%;
`;

export const HeadlineMainBanner = styled.div`
  width: 100%;
  .color {
    background: linear-gradient(to right, #16c973 20%, #ffca00 30%, #62957c 70%, #16c973 80%);
    animation: shine 10s linear infinite;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 500% auto;
    -webkit-text-fill-color: transparent;
    transition: all ease 0.5s;
  }

  @keyframes shine {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

export const ParagraphsContainerMainBanner = styled.div`
  width: 100%;
`;
