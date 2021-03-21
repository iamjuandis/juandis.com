import styled from 'styled-components';

interface BannerProps {
  background: string;
}

export const ProjectLayoutContainer = styled.section`
  width: 100%;
`;

export const ProjectLayoutMainBanner = styled.div<BannerProps>`
  background: ${(props) => props.background};
  height: 300px;
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
`;

export const ProjectLayoutMainBannerContent = styled.div`
  margin: auto;
  max-width: 1200px;
  width: calc(100% - 60px);
`;
