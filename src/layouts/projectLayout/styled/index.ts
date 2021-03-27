import styled from 'styled-components';

interface BannerProps {
  background: string;
}

interface CompanyProps {
  color: string;
  oneColorIcon: boolean | undefined;
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
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-column-gap: 30px;
  height: 100%;
  margin: auto;
  max-width: 1200px;
  width: calc(100% - 60px);
`;

export const ProjectLayoutMainBannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  grid-column: 1 / 8;
  height: 100%;
`;

export const ProjectLayoutCoverImageContainer = styled.div`
  grid-column: 8 / -1;
  padding-top: 70px;
  position: relative;
  width: 100%;
  img {
    position: absolute;
    width: 100%;
  }
`;

export const ProjectFooter = styled.div`
  margin: auto;
  margin-top: 50px;
  max-width: 848px;
  width: calc(100% - 60px);
`;

export const ProjectRoleBanner = styled.div`
  padding: 50px 0;
  width: 100%;
`;

export const ProjectRoleBannerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-column-gap: 30px;
  height: 100%;
  margin: auto;
  max-width: 1200px;
  width: calc(100% - 60px);
`;

export const ProjectRoleTextBoxes = styled.div`
  grid-column: 3 / 8;
  width: 100%;
`;

export const ProjectCompanyContainer = styled.div<CompanyProps>`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  width: 100%;
  ${(props) =>
    props.oneColorIcon &&
    `
    svg {
      path {
        fill: ${props.color}
      }
    }
  `}
`;

export const ProjectCompanyTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const ProjectSliderContainer = styled.div`
  width: 100%;
`;

export const ProjectSliderContent = styled.div`
  margin: auto;
  max-width: 1200px;
  width: calc(100% - 60px);
`;

export const ProjectOverviewContainer = styled.div`
  padding: 50px 0;
  width: 100%;
`;

export const ProjectOverviewContent = styled.div`
  margin: auto;
  max-width: 848px;
  width: calc(100% - 60px);
`;

export const ProjectMidSectionContainer = styled.div`
  width: 100%;
`;

export const ProjectMidSectionContent = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-column-gap: 30px;
  margin: auto;
  max-width: 1200px;
  width: calc(100% - 60px);
  img {
    grid-column: 7 / -1;
    width: 100%;
  }
`;

export const ProjectMidSectionTexts = styled.div`
  grid-column: 3 / 7;
  margin: auto;
`;
