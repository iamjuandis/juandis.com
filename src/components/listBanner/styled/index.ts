import styled from 'styled-components';

interface ContainerInterface {
  background?: boolean;
}

export const ListBannerContainer = styled.div<ContainerInterface>`
  background: ${(props: any) => props.background ?? 'transparent'};
  padding-top: 100px;
  width: 100%;
  @media screen and (max-width: 700px) {
    padding-top: 50px;
  }
`;

export const ListBannerContent = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 5fr 7fr;
  grid-column-gap: 32px;
  margin: auto;
  max-width: 996px;
  padding: 48px;
  width: calc(100% - 96px);
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ListContainerHeadline = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 100%;
  @media screen and (max-width: 700px) {
    margin-bottom: 30px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 100%;
`;
