import styled from 'styled-components';

export const ExperienceBannerContainer = styled.div`
  padding-top: 100px;
  width: 100%;
  @media screen and (max-width: 700px) {
    padding-top: 50px;
  }
`;

export const ExperienceBannerContent = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  grid-column-gap: 30px;
  margin: auto;
  max-width: 1024px;
  width: calc(100% - 60px);
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ExperiencesContainerHeadline = styled.div`
  width: 100%;
  @media screen and (max-width: 700px) {
    margin-bottom: 30px;
  }
`;

export const ExperiencesContainerList = styled.div`
  display: grid;
  grid-row-gap: 30px;
  width: 100%;
  @media screen and (max-width: 700px) {
    grid-row-gap: 20px;
  }
`;
