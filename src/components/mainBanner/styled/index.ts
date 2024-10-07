import styled, { css } from 'styled-components';
import { responsiveMobile } from '../../../assets/utils/components';

export const MainBannerContainer = styled.div`
  padding-bottom: 48px;
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
  ${responsiveMobile(css`
    padding: 16px;
    row-gap: 16px;
  `)}
`;

export const HeadlineMainBanner = styled.div`
  width: 100%;
  .color {
    font-family: 'Ogg Text';
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
  display: grid;
  flex-direction: column;
  row-gap: 32px;
  width: 100%;
`;
