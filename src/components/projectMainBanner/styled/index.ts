import styled from 'styled-components';

export const BannerContainer = styled.div`
  background-color: #f8f8f8;
  box-sizing: border-box;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  padding: 48px;
  justify-self: center;
  margin: auto;
  margin-top: 112px;
  max-width: 996px;
  width: calc(100% - 96px);
`;

export const MetaInfoBanner = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 32px;
  width: 100%;
`;

export const MetaInfoItemStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
