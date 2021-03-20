import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';
import { NavOptionType } from '../../../types/interfaces';

export const LinkTag = styled.a`
  text-decoration: none;
`;

export const Nav = styled.div`
  color: ${COLOR.blue_universe};
  cursor: pointer;
  &:hover {
    color: ${COLOR.blue_sky};
  }
`;

const tag = (props: NavOptionType) => (props.type === 'link' ? { as: 'a' } : { as: 'p' });

export const NavOptionContainer = styled(Nav).attrs(tag)<NavOptionType>`
  width: fit-content;
  svg {
    height: 20px;
    width: 20px;
  }
`;
