import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';

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
  h1 {
    font-weight: bolder;
  }
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

export const ProjectFocusContainer = styled.div`
  padding: 50px 0;
  width: 100%;
`;

export const ProjectFocusContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 848px;
  width: calc(100% - 60px);
`;

export const ItemsFocusContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding: 50px 0;
  width: 100%;
`;

interface ItemFocusProps {
  color: string;
}

export const ItemFocus = styled.p<ItemFocusProps>`
  display: flex;
  width: 100%;
  span {
    background: ${(props) => (props.color ? `${props.color}1a` : `${COLOR.blue_universe}1a`)};
    color: ${(props) => (props.color ? props.color : COLOR.blue_universe)};
    font-size: 22px;
    padding: 10px 20px;
    width: fit-content;
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
`;

export const ProjectDiscoveryContainer = styled.div`
  padding-top: 30px;
  width: 100%;
`;
export const ProjectDiscoveryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;
  margin: auto;
  max-width: 1024px;
  width: calc(100% - 60px);
  img {
    display: flex;
    grid-column: 1 / 7;
    width: 100%;
  }
`;

export const ProjectDiscoveryTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 7 / -2;
  width: 100%;
`;

export const ProjectConclusionContainer = styled.div`
  padding-top: 50px;
  text-align: center;
  width: 100%;
  img {
    max-width: 1200px;
    margin: auto;
    height: auto;
    width: 100%;
  }
`;

export const ProjectConclusionContent = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-column-gap: 30px;
  padding-bottom: 50px;
  margin: auto;
  max-width: 848px;
  text-align: left;
  width: calc(100% - 60px);
`;
