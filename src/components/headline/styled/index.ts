import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';
import { HeadlineType } from '../../../types/interfaces';

export const HeadlineElement = styled.div`
  width: 100%;
`;

export const HeadlineContainer = styled(HeadlineElement)<HeadlineType>`
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  a {
    color: ${(props) => (props.color ? props.color : COLOR.blue_universe)};
    border-bottom: 2px solid
      ${(props) => (props.color ? `${props.color}55` : `${COLOR.blue_universe}55`)};
    font-size: 1em;
  }
`;
