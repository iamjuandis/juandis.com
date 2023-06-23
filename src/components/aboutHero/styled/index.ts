import styled, { css } from 'styled-components';
import { responsiveMobile } from '../../../assets/utils/components';

export const AboutHeroContainer = styled.section`
  display: grid;
  grid-template-columns: 5fr 7fr;
  grid-column-gap: 32px;
  box-sizing: border-box;
  max-width: 996px;
  margin: auto;
  padding: 48px;
  width: calc(100% - 96px);
  ${responsiveMobile(css`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    padding: 24px;
    width: 100%;
  `)}
`;

export const AboutTitle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  a {
    width: fit-content;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`;
