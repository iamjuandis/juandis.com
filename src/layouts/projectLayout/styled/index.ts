import styled from 'styled-components';
import COLORS from '../../../assets/style/colors';

export const ProjectLayoutContainer = styled.section`
  background: ${COLORS.white_cloud};
  padding-top: 110px;
  width: 100%;
  /* @media (prefers-color-scheme: dark) {
    background: ${COLORS.black_background};
  } */
`;
/* 
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
`; */
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

/* export const ProjectSmallImgsContainer = styled.div`
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
`; */

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
    width: calc(100% - 96px);
    margin: auto;
    margin-bottom: 16px;
    max-width: 680px;
    padding: 0;
  }

  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    margin-top: 40px;
  }

  p,
  li {
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
      text-align: center;
    }

    img {
      height: auto;
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
      max-width: 680px;
    }

    // Pullquote
    &.wp-block-pullquote {
      blockquote {
        background: ${COLORS.green_opacity};
        border-radius: 24px;
        border: none;
        padding: 48px;
        p {
          font-family: 'San Francisco Pro Display';
          font-weight: 600;
          font-style: normal;
          font-size: 36px;
          line-height: 130%;
          text-align: center;
          width: 100%;
          &::before {
            content: none;
          }
        }
      }
    }
  }

  blockquote {
    display: flex;
    flex-direction: column;
    gap: 16px;

    //box-sizing: border-box;
    padding: 24px 48px;
    margin: auto;
    margin-bottom: 32px;
    margin-top: 24px;
    max-width: 680px;
    width: 100%;
    p {
      color: ${COLORS.green_dark};
      font-family: 'DM Serif Display', serif;
      font-weight: 300;
      font-size: 28px;
      font-style: italic;
      line-height: 40px;
      opacity: 0.8;
      text-align: center;
      &::before {
        content: '“\\A';
        font-size: 80px;
        line-height: 80px;
        white-space: pre-wrap;
        margin: auto;
        margin-bottom: -24px;
        display: block;
        width: fit-content;
      }
    }
    cite {
      color: ${COLORS.green_pale};
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      text-align: center;
    }
  }

  ul,
  ol {
    li {
      &::marker {
        color: ${COLORS.green_pale};
      }
    }
  }

  .wp-block-columns {
    flex-direction: row;
    column-gap: 32px;
    .wp-block-column {
      width: 100%;
    }
  }
  .is-layout-flow {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }

  .is-layout-flex {
    display: flex;
    flex-direction: row;
    column-gap: 32px;
  }

  .is-vertical {
    display: flex;
    flex-direction: column;
  }

  // Cusotmized Class Names
  .impact-card {
    background: ${COLORS.green_opacity};
    border-radius: 16px;
    box-sizing: border-box;
    padding: 24px;
    margin-bottom: 16px;
    width: 100%;
  }
`;

export const ProjectFooter = styled.div`
  margin: auto;
  margin-top: 50px;
  max-width: 680px;
  width: calc(100% - 96px);
`;
