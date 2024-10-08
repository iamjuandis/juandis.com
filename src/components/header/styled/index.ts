import styled, { css } from 'styled-components';
import COLORS from '../../../assets/style/colors';
import { HeaderTypes } from '../../../types/interfaces';
import Link from 'next/link';
import { responsiveMobile } from '../../../assets/utils/components';

export const HeaderContainer = styled.header<HeaderTypes>`
  background: transparent;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  max-width: 1440px;
  padding: 32px;
  width: 100%;
  ${responsiveMobile(css`
    padding: 16px;
  `)}
`;

export const LogoContainer = styled(Link)`
  flex-direction: row;
  cursor: pointer;
  display: flex;
  background: hsla(148, 60%, 98%, 0.7);
  -webkit-backdrop-filter: blur(8px) saturate(180%);
  backdrop-filter: blur(8px);
  backface-visibility: hidden;
  border-radius: 40px;

  p {
    color: ${COLORS.green_dark};
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 0 24px 0 16px;
  }

  img {
    border-radius: 40px;
  }
`;

export const NavContainer = styled.nav<HeaderTypes>`
  background: hsla(148, 60%, 98%, 0.7);
  -webkit-backdrop-filter: blur(8px) saturate(180%);
  backdrop-filter: blur(8px);
  backface-visibility: hidden;
  border-radius: 40px;
  column-gap: 24px;
  display: flex;
  flex-direction: row;
  padding-left: 24px;
  @media screen and (max-width: 640px) {
    background: hsla(148, 60%, 98%, 1);
    backdrop-filter: blur(px);
    box-shadow: 0px 0px 50px #00000022;
    box-sizing: border-box;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    left: 16px;
    height: fit-content;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    padding: 24px;
    position: fixed;
    pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
    right: 16px;
    row-gap: 16px;
    top: ${(props) => (props.isOpen ? '80px' : '-100vh')};
    z-index: 99;
  }
`;

export const MenuMobileContainer = styled.p<HeaderTypes>`
  color: ${COLORS.green_vibrant};
  display: none;
  @media screen and (max-width: 640px) {
    display: none;
    position: relative;
    z-index: 100;
  }
`;

export const MenuCloser = styled.div<HeaderTypes>`
  background: transparent;
  bottom: 0;
  display: none;
  height: 100vh;
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0%;
  width: 100%;
  z-index: 10;
  @media screen and (max-width: 640px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  }
`;
