import styled from 'styled-components';
import { HandleAlignment } from '../../../assets/utils/components';
import { ProjectSectionType } from '../../../types/interfaces';

export const ProjectSectionContainer = styled.div`
  width: 100%;
`;

export const ProjectSectionContent = styled.div<ProjectSectionType>`
  display: grid;
  grid-template-columns: ${(props) => HandleAlignment(`${props.alignment}`).gridTemplate};
  margin: auto;
  max-width: ${(props) => HandleAlignment(`${props.alignment}`).maxWidth};
  width: calc(100% - 60px);
`;

export const ProjectSectionTexts = styled.div`
  margin: auto;
  max-width: 848px;
  padding: 50px 0 100px 0;
  width: 100%;
`;
