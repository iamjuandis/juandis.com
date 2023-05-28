import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  padding-top: 100px;
  width: 100%;
  @media screen and (max-width: 750px) {
    padding-top: 50px;
  }
`;

export const ProjectsContent = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin: auto;
  max-width: 996px;
  padding: 48px;
  width: 100%;
  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProjectsHeadlineContainer = styled.div`
  grid-column: 1 / -1;
  margin-bottom: 20px;
  @media screen and (max-width: 750px) {
    margin-bottom: 10px;
  }
`;
