import styled from 'styled-components';

export const BannerContainer = styled.section`
  align-items: center;
  background: linear-gradient(to right, hsla(109, 100%, 50%, 0.1), rgba(255, 162, 0, 0.2));
  background-size: 400% 400%;
  animation: shinegradient 10s linear infinite;
  box-sizing: border-box;
  border-radius: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 280px;
  margin: auto;
  max-width: 996px;
  padding: 48px;
  width: calc(100% - 96px);

  @keyframes shinegradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const ButtonsBanner = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 32px;
`;
