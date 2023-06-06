import styled from 'styled-components';
import COLORS from '../../../assets/style/colors';

interface CompanyProps {
  color: string;
  oneColorIcon: boolean | undefined;
}

export const ProjectLayoutContainer = styled.section`
  background: ${COLORS.white_cloud};
  padding-top: 110px;
  width: 100%;
  /* @media (prefers-color-scheme: dark) {
    background: ${COLORS.black_background};
  } */
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
/* 
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
`; */

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

export const ProjectContent = styled.div`
  width: 100%;

  /* WordPress Content */

  // Width
  & > p,
  & > hr,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6,
  & > img,
  & > table,
  & > div,
  & > ul,
  & > ol {
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    margin-bottom: 16px;
    max-width: 996px;
    padding: 0 48px;
  }

  p {
    font-size: 20px;
    line-height: 28px;
  }

  figure {
    box-sizing: border-box;
    margin: auto;
    margin-bottom: 24px;
    width: 100%;
    figcaption {
      font-size: 14px;
      line-height: 18px;
      opacity: 0.5;
    }

    img {
      border-radius: 24px;
      width: 100%;
    }

    &.alignfull {
      max-width: 100% !important;
      img {
        border-radius: 0px;
      }
    }
    &.alignwide {
      max-width: 1200px !important;
      padding: 0 48px;
    }
    &.size-large {
      max-width: 996px;
      padding: 0 48px;
    }
  }

  blockquote {
    box-sizing: border-box;
    padding-left: 32px;
    margin: 24px 0;
    width: 100%;
    border-left: 1px solid #000;
    p {
      font-size: 32px;
      line-height: 40px;
      &::before {
        content: '“';
      }
      &::after {
        content: '”';
      }
    }
    cite {
      font-size: 16px;
      font-style: italic;
      line-height: 24px;
    }
  }

  .wp-block-columns {
    flex-direction: row;
    .wp-block-column {
      width: 100%;
    }
  }

  .is-layout-flex {
    display: flex;
    column-gap: 32px;
  }
`;

export const ProjectFooter = styled.div`
  margin: auto;
  margin-top: 50px;
  max-width: 848px;
  width: calc(100% - 60px);
`;
