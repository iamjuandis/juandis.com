import styled from 'styled-components';
import { HeadlineType } from '../../../types/interfaces';

export const HeadlineElement = styled.div`
  width: 100%;
`;
const tag = (props: HeadlineType) =>
  props.typeHeadline ? { as: props.typeHeadline } : { as: 'p' };

const sizeHeadline = (type: string) => {
  switch (type) {
    case 'h1':
      return { size: 40, weight: 400 };
    case 'h2':
      return { size: 30, weight: 400 };
    case 'h3':
      return { size: 26, weight: 400 };
    case 'h4':
      return { size: 24, weight: 400 };
    case 'h5':
      return { size: 22, weight: 700 };
    case 'h6':
      return { size: 20, weight: 700 };
    default:
      return { size: 20, weight: 500 };
  }
};

export const HeadlineContainer = styled(HeadlineElement).attrs(tag)<HeadlineType>`
  line-height: ${(props) =>
    props.typeHeadline === 'h6' || props.typeHeadline === 'h5' || props.typeHeadline === 'h4'
      ? '140%'
      : '150%'};
  font-size: ${(props) => `${sizeHeadline(props.typeHeadline).size}px`};
  font-weight: ${(props) => sizeHeadline(props.typeHeadline).weight};
`;
