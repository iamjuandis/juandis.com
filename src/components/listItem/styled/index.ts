import styled from 'styled-components';
import COLORS from '../../../assets/style/colors';

export const ListItemContainer = styled.div`
  width: 100%;
`;

export const ListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  width: 100%;
`;

export const ListMetaInfo = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  p {
    color: ${COLORS.green_pale};
  }
`;
