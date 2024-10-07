import styled, { css } from 'styled-components';
import { responsiveMobile } from '../../../assets/utils/components';

export const ProjectsContainer = styled.div`
  width: 100%;
  ${responsiveMobile(css`
    padding: 48px 0;
  `)}
`;

export const ProjectsContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 100%;
  h2 {
    box-sizing: border-box;
    display: block;
    margin: auto;
    max-width: 996px;
    padding: 0 48px;
    width: 100%;
  }
  ${responsiveMobile(css`
    padding: 16px;
    row-gap: 16px;
  `)}
`;

export const ProjectsGrid = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 calc(20% - 40px);
  gap: 32px;
  max-width: 1440px;
  margin: auto;
  padding: 0 48px;
  padding-bottom: 120px;
  width: 100%;
  ${responsiveMobile(css`
    grid-template-columns: 1fr;
  `)}
`;
