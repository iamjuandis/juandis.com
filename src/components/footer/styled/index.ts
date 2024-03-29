import styled, { css } from 'styled-components';
import COLORS from '../../../assets/style/colors';
import { responsiveMobile } from '../../../assets/utils/components';

export const FooterContainer = styled.footer`
  padding: 48px 0;
  width: 100%;
  p {
    color: ${COLORS.green_pale};
    margin: auto;
    max-width: 996px;
    padding: 48px;
    text-align: center;
    width: calc(100% - 96px);
  }
  ${responsiveMobile(css`
    padding: 24px 0;
    width: 100%;
  `)}
`;

export const FooterContent = styled.div`
  background: ${COLORS.green_opacity};
  border-radius: 32px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 5fr 7fr;
  grid-column-gap: 32px;
  align-items: center;
  margin: auto;
  max-width: 996px;
  padding: 48px;
  width: calc(100% - 96px);
  ${responsiveMobile(css`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    width: calc(100% - 32px);
  `)}
`;

export const FooterTextContent = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 32px;
  width: 100%;
  ${responsiveMobile(css`
    align-items: center;
    justify-content: center;
    display: inline-flex;
    flex-flow: row wrap;
  `)}
`;

export const FooterTextGroup = styled.div`
  width: 100%;
`;
