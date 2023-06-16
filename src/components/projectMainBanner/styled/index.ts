import styled from 'styled-components';
import COLORS from '../../../assets/style/colors';

export const BannerContainer = styled.div`
  background-color: ${COLORS.green_opacity};
  box-sizing: border-box;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  padding: 48px;
  justify-self: center;
  margin: auto;
  margin-bottom: 48px;
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
  flex-direction: row;
  column-gap: 12px;
  img {
    height: 60px;
    width: 60px;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }
`;
