import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 100px 0;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;
  width: calc(100% - 60px);
`;

export const FooterTextContent = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr 4fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  margin-top: 50px;
  width: 100%;
`;

export const FooterTextGroup = styled.div`
  width: 100%;
`;
