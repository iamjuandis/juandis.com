import styled, { css } from 'styled-components';
import { responsiveMobile } from '../../../assets/utils/components';

interface ContainerInterface {
  background?: boolean;
}

export const ListBannerContainer = styled.div<ContainerInterface>`
  background: ${(props: any) => props.background ?? 'transparent'};
  width: 100%;
  @media screen and (max-width: 700px) {
    padding-top: 24px;
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
  ${responsiveMobile(css`
    display: flex;
    flex-direction: column;
    row-gap: 0px;
    padding: 16px;
    width: 100%;
  `)}
`;

export const ListContainerHeadline = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 100%;
  a {
    width: fit-content;
  }
  @media screen and (max-width: 700px) {
    margin-bottom: 30px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: 100%;
  ${responsiveMobile(css`
    row-gap: 24px;
  `)}
`;
