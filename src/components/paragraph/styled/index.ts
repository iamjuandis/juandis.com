import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';
import { ParagraphType } from '../../../types/interfaces';

export const ParagraphContainer = styled.p<ParagraphType>`
  color: ${(props) => (props.color ? props.color : COLOR.blue_universe)};
  line-height: 150%;
  font-size: ${(props) => (props.size ? `${props.size}px` : '20px')};
  a {
    color: ${(props) => (props.color ? props.color : COLOR.blue_universe)};
    border-bottom: 1px solid
      ${(props) => (props.color ? `${props.color}55` : `${COLOR.blue_universe}55`)};
  }
`;
