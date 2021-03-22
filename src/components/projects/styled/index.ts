import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  padding-top: 100px;
  width: 100%;
`;

export const ProjectsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin: auto;
  max-width: 1024px;
  width: calc(100% - 60px);
`;

export const ProjectsHeadlineContainer = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 20px;
`;
