import styled from 'styled-components';
import { HandleAlignment } from '../../../assets/utils/components';
import { ProjectSectionType } from '../../../types/interfaces';

export const ProjectSectionContainer = styled.div`
  width: 100%;
`;

export const ProjectSectionContent = styled.div<ProjectSectionType>`
  display: grid;
  grid-template-columns: ${(props) => HandleAlignment(`${props.alignment}`).gridTemplate};
  grid-column-gap: 30px;
  margin: auto;
  max-width: ${(props) => HandleAlignment(`${props.alignment}`).maxWidth};
  width: calc(100% - 60px);
`;

export const ProjectSectionTexts = styled.div<ProjectSectionType>`
  grid-column: ${(props) => HandleAlignment(`${props.alignment}`).gridColumnText};
  margin: auto;
  max-width: 848px;
  padding: ${(props) =>
    HandleAlignment(`${props.alignment}`).position === 'up'
      ? '50px 0 100px 0'
      : HandleAlignment(`${props.alignment}`).position === 'bottom'
      ? '100px 0 50px 0'
      : '0'};
  width: 100%;
`;

export const ProjectSectionImage = styled.div<ProjectSectionType>`
  display: inline-block;
  grid-column: ${(props) => HandleAlignment(`${props.alignment}`).gridColumnImage};
  width: 100%;
`;
