import styled from 'styled-components';
import COLORS from '../../../assets/style/colors';

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
`;

export const FooterContent = styled.div`
  background: ${COLORS.gray_light};
  border-radius: 48px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 356px auto;
  grid-column-gap: 32px;
  align-items: center;
  margin: auto;
  max-width: 996px;
  padding: 48px;
  width: calc(100% - 96px);
`;

export const FooterTextContent = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 32px;
  width: 100%;
  @media screen and (max-width: 510px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterTextGroup = styled.div`
  width: 100%;
`;
