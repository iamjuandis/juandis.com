import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import COLORS from '../../../assets/style/colors';
import { responsiveMobile } from '../../../assets/utils/components';

interface ProjectCardLocalInterface {
  title: string;
}

export const ProjectCardContainer = styled(Link)<ProjectCardLocalInterface>`
  display: flex;
  flex-direction: column;
  background: ${COLORS.white_cloud};
  position: relative;
  width: 100%;
  @media screen and (min-width: 750px) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const ProjectCardCoverImage = styled(Image)`
  border-radius: 24px;
  object-fit: cover;
  object-position: center;
  height: auto;
  max-height: 506px;
  width: 100%;
  &:first-child {
    div {
      height: 100%;
      img {
        height: 100%;
        object-position: top center;
        width: 100%;
      }
    }
  }
  ${responsiveMobile(css`
    border-radius: 16px;
    display: flex;
    height: 100%;
    object-position: center;
    position: relative;
  `)}
`;

export const ProjectCardTextContainer = styled.div`
  align-items: flex-start;
  color: ${COLORS.green_dark};
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  justify-content: flex-end;
  padding: 24px 0;
  h3 {
    color: ${(props) => props.theme.text};
    width: 100%;
  }
  ${responsiveMobile(css`
    position: relative;
    padding: 16px 0;
    h3 {
      text-shadow: none;
      width: 100%;
    }
  `)}
`;

export const ProjectSkillElement = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  font-size: 1em;
  font-weight: 500;
  &:not(:last-child) {
    ::after {
      content: '•';
      padding: 0 5px;
    }
  }
  @media screen and (max-width: 750px) {
    font-size: 0.8em;
  }
`;

export const ProtectedLabel = styled.div`
  background: ${COLORS.green_opacity};
  -webkit-backdrop-filter: blur(8px) saturate(180%);
  backdrop-filter: blur(8px);
  backface-visibility: hidden;
  border-radius: 40px;
  padding: 12px 24px;
  position: absolute;
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  top: 24px;
  right: 24px;
  span {
    color: ${COLORS.white_cloud};
  }
  ${responsiveMobile(css`
    top: 16px;
    right: 16px;
    padding: 8px 16px;
  `)}
`;
