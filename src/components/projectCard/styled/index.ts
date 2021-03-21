import styled from 'styled-components';
import { ProjectCardComponentTypes } from '..';
import COLOR from '../../../assets/style/colors';

export const ProjectCardContainer = styled.a<ProjectCardComponentTypes>`
  background: ${COLOR.white_cloud};
  grid-column: ${(props) => props.gridRange && `${props.gridRange[0]} / ${props.gridRange[1]}`};
  position: relative;
  width: 100%;
  &:hover {
    transform: scale(1.03);
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
  position: 'relative';
  width: 100%;
`;

export const ProjectCardCoverImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const ProjectCardTextContainer = styled.div<ProjectCardComponentTypes>`
  background: ${(props) => props.background};
  bottom: ${(props) => (props.gridRange && props.gridRange[2] === 'big' ? 0 : 'auto')};
  padding: 30px;
  position: ${(props) =>
    props.gridRange && props.gridRange[2] === 'big' ? 'absolute' : 'relative'};
`;
