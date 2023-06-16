import styled, { css } from 'styled-components';
import COLORS from '../../../assets/style/colors';

export const LoadingContainer = styled.div`
  box-sizing: border-box;
  margin: auto;
  max-width: 996px;
  width: calc(100% - 96px);
`;

export const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  box-sizing: border-box;
  width: 100%;
`;
// 15 25 40
const animatedBackground = (first: number, second: number, third: number) => css`
  background: ${`linear-gradient(
    110deg,
    ${COLORS.green_opacity} ${first}%,
    ${COLORS.white_cloud} ${second}%,
    ${COLORS.green_opacity} ${third}%
  )`};
  background-size: 200% 100%;
  animation: loading 1s linear infinite;
`;

export const LoadingSkeleton = styled.div`
  border-radius: 24px;
  margin: auto;
  width: 100%;

  @keyframes loading {
    to {
      background-position-x: -200%;
    }
  }

  &.image {
    ${animatedBackground(20, 30, 45)}
    min-height: 360px;
  }
  &.headline {
    ${animatedBackground(10, 20, 35)}
    min-height: 40px;
    max-width: 680px;
  }
  &.paragraph {
    ${animatedBackground(5, 15, 30)}
    min-height: 120px;
    max-width: 680px;
  }
`;
