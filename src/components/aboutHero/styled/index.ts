import styled from 'styled-components';

export const AboutHeroContainer = styled.section`
  display: grid;
  grid-template-columns: 5fr 7fr;
  grid-column-gap: 32px;
  box-sizing: border-box;
  max-width: 996px;
  margin: auto;
  padding: 48px;
  width: calc(100% - 96px);
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
