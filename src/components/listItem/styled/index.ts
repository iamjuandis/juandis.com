import styled, { css } from 'styled-components';
import COLORS from '../../../assets/style/colors';
import { responsiveMobile } from '../../../assets/utils/components';

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
  ${responsiveMobile(css`
    display: inline-flex;
    flex-flow: row wrap;
  `)}
`;
