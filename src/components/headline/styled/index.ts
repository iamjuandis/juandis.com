import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';
import { HeadlineType } from '../../../types/interfaces';

export const HeadlineElement = styled.div`
  width: 100%;
`;
const tag = (props: HeadlineType) =>
  props.typeHeadline ? { as: props.typeHeadline } : { as: 'p' };

const sizeHeadline = (type: string) => {
  switch (type) {
    case 'h1':
      return { size: 2, sizeMobile: 1.5, weight: 700 };
    case 'h2':
      return { size: 1.5, sizeMobile: 1.4, weight: 400 };
    case 'h3':
      return { size: 1.3, sizeMobile: 1.3, weight: 400 };
    case 'h4':
      return { size: 1.2, sizeMobile: 1.2, weight: 400 };
    case 'h5':
      return { size: 1.1, sizeMobile: 1.1, weight: 700 };
    case 'h6':
      return { size: 1, sizeMobile: 1, weight: 700 };
    default:
      return { size: 1, sizeMobile: 1, weight: 500 };
  }
};

export const HeadlineContainer = styled(HeadlineElement).attrs(tag)<HeadlineType>`
  color: ${(props) => (props.color ? props.color : COLOR.blue_universe)};
  line-height: ${(props) =>
    props.typeHeadline === 'h6' || props.typeHeadline === 'h5' || props.typeHeadline === 'h4'
      ? '140%'
      : '150%'};
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}px` : `${sizeHeadline(props.typeHeadline).size}em`};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : sizeHeadline(props.typeHeadline).weight};
  a {
    color: ${(props) => (props.color ? props.color : COLOR.blue_universe)};
    border-bottom: 2px solid
      ${(props) => (props.color ? `${props.color}55` : `${COLOR.blue_universe}55`)};
    font-size: 1em;
  }
  @media (max-width: 510px) {
    font-size: ${(props) => `${sizeHeadline(props.typeHeadline).sizeMobile}em`};
  }
`;
