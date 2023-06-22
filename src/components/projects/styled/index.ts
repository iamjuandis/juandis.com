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
  margin: auto;
  max-width: 996px;
  padding: 48px;
  width: 100%;
  ${responsiveMobile(css`
    padding: 16px;
    row-gap: 16px;
  `)}
`;
