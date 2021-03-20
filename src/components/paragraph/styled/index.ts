import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';
import { ParagraphType } from '../../../types/interfaces';

export const ParagraphContainer = styled.p<ParagraphType>`
  color: ${(props) => (props.color ? props.color : COLOR.blue_universe)};
  line-height: 150%;
  font-size: ${(props) => (props.size ? props.size : 20)};
`;
