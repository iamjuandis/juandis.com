import styled, { css } from 'styled-components';
import { responsiveMobile } from '../../../assets/utils/components';

export const PageLayoutContainer = styled.div`
  padding-top: 110px;
  width: 100%;
  ${responsiveMobile(css`
    padding-top: 80px;
  `)}
`;

export const PageMainContent = styled.main`
  width: 100%;
`;
