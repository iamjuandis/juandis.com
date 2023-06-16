import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';
import Link from 'next/link';
import Image from 'next/image';
import COLORS from '../../../assets/style/colors';

interface ProjectCardLocalInterface {
  title: string;
}

export const ProjectCardContainer = styled(Link)<ProjectCardLocalInterface>`
  display: flex;
  flex-direction: column;
  background: ${COLOR.white_cloud};
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
  max-height: 450px;
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
  @media screen and (max-width: 750px) {
    display: flex;
    height: 100%;
    object-position: center;
    position: relative;
  }
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
  @media screen and (max-width: 750px) {
    position: relative;
    h3 {
      text-shadow: none;
      width: 100%;
    }
  }
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
  background: hsla(0, 0%, 100%, 0.2);
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
`;
