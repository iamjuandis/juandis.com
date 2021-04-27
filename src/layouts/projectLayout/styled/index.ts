import styled from 'styled-components';

interface BannerProps {
  background: string;
}

interface CompanyProps {
  color: string;
  oneColorIcon: boolean | undefined;
}

export const ProjectLayoutContainer = styled.section`
  background: ${(props) => props.theme.background};
  width: 100%;
`;

export const ProjectLayoutMainBanner = styled.div<BannerProps>`
  background: ${(props) => props.background};
  height: auto;
  padding-top: 150px;
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
  @media screen and (max-width: 510px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectLayoutMainBannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  grid-column: 1 / 8;
  height: 100%;
  h1 {
    font-weight: bolder;
  }
  @media screen and (max-width: 510px) {
    grid-column: 1 / -1;
    width: 100%;
  }
`;

export const ProjectLayoutCoverImageContainer = styled.div`
  grid-column: 8 / -1;
  padding-top: 100px;
  position: relative;
  width: 100%;
  img {
    position: absolute;
    width: 100%;
  }
  @media screen and (max-width: 510px) {
    grid-column: 1 / -1;
    padding-top: 0px;
    width: 100%;
  }
`;

export const ProjectRoleBanner = styled.div`
  padding: 50px 0;
  width: 100%;
  @media screen and (max-width: 510px) {
    padding-top: 240px;
  }
`;

export const ProjectRoleBannerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-column-gap: 30px;
  height: 100%;
  margin: auto;
  max-width: 1200px;
  width: calc(100% - 60px);
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectRoleTextBoxes = styled.div`
  grid-column: 3 / 9;
  width: 100%;
  @media screen and (max-width: 700px) {
    grid-column: 1 / -1;
  }
`;

export const ProjectCompanyContainer = styled.div<CompanyProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  width: 100%;

  svg {
    height: 50px;
    width: 50px;
    ${(props) =>
      props.oneColorIcon &&
      `
      path {
        fill: ${props.color}
      }
      `}
  }
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
  @media screen and (max-width: 510px) {
    width: 100%;
  }
`;

export const ProjectSmallImgsContainer = styled.div`
  width: 100%;
`;

export const ProjectSmallImgsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  margin: auto;
  max-width: 1024px;
  width: calc(100% - 60px);
  img {
    object-fit: cover;
    height: 340px;
    width: 100%;
  }
  @media screen and (max-width: 510px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
`;

export const ProjectFooter = styled.div`
  margin: auto;
  margin-top: 50px;
  max-width: 848px;
  width: calc(100% - 60px);
`;
