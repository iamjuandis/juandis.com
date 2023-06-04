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
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 996px;
  padding: 48px;
  width: 100%;
`;
