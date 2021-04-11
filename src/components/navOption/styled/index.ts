import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';
import { NavOptionType } from '../../../types/interfaces';

export const LinkTag = styled.a`
  text-decoration: none;
`;

export const Nav = styled.div<NavOptionType>`
  color: ${COLOR.blue_universe};
  cursor: pointer;
  font-size: 0.8em;
  margin-left: 20px;
  &::after {
    border-bottom: 1px solid ${(props) => props.highlightColor};
    bottom: -3px;
    content: ' ';
    display: block;
    margin: auto;
    opacity: 1;
    position: relative;
    transition: all ease 0.3s;
    width: 0%;
  }
  &:hover {
    color: ${(props) => props.highlightColor};
    &::after {
      opacity: 1;
      transition: all ease 0.3s;
      width: 100%;
    }
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
