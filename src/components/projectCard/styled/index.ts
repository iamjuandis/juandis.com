import styled from 'styled-components';
import { ProjectCardComponentTypes } from '..';
import COLOR from '../../../assets/style/colors';

export const ProjectCardContainer = styled.a<ProjectCardComponentTypes>`
  display: ${(props) => (props.gridRange && props.gridRange[2] === 'large' ? 'grid' : 'flex')};
  flex-direction: column;
  grid-template-columns: 57.1289% 5fr;
  background: ${COLOR.white_cloud};
  grid-column: ${(props) => props.gridRange && `${props.gridRange[0]} / ${props.gridRange[1]}`};
  position: relative;
  width: 100%;
  &:hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 750px) {
    display: flex;
  }
`;

export const ProjectCardCoverContainer = styled.div<ProjectCardComponentTypes>`
  display: flex;
  background: ${(props) => props.background};
  height: ${(props) =>
    props.gridRange && props.gridRange[2] === 'small'
      ? '360px'
      : props.gridRange && props.gridRange[2] === 'big'
      ? '100%'
      : 'auto'};
  position: relative;
  width: 100%;
  @media screen and (max-width: 750px) {
    display: flex;
  }
`;

export const ProjectCardCoverImage = styled.div<ProjectCardComponentTypes>`
  object-fit: cover;
  object-position: ${(props) =>
    props.gridRange && props.gridRange[2] === 'large' ? 'top' : 'center'};
  height: ${(props) => (props.gridRange && props.gridRange[2] === 'large' ? '360px' : '100%')};
  position: ${(props) =>
    props.gridRange && props.gridRange[2] === 'big' ? 'absolute' : 'relative'};
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

export const ProjectCardTextContainer = styled.div<ProjectCardComponentTypes>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: ${(props) => props.background};
  bottom: ${(props) => (props.gridRange && props.gridRange[2] === 'big' ? 0 : 'auto')};
  padding: 30px;
  position: ${(props) =>
    props.gridRange && props.gridRange[2] === 'big' ? 'absolute' : 'relative'};
  h3 {
    text-shadow: ${(props) =>
      props.gridRange && props.gridRange[2] === 'big' ? `0px 0px 15px ${props.mainColor}` : 'none'};
    font-weight: bolder;
    width: ${(props) => (props.gridRange && props.gridRange[2] === 'big' ? '60%' : '100%')};
  }
  @media screen and (max-width: 750px) {
    background: ${(props) =>
      props.gridRange && props.gridRange[2] === 'big' ? props.mainColor : props.background};
    position: relative;
    h3 {
      text-shadow: none;
      width: 100%;
    }
  }
`;

export const ProjectSkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProjectSkillElement = styled.strong<ProjectCardComponentTypes>`
  color: ${(props) => props.mainColor};
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
