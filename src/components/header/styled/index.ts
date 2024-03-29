import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';
import { HeaderTypes } from '../../../types/interfaces';

export const HeaderContainer = styled.header<HeaderTypes>`
  background: ${(props) =>
    props.bgColor &&
    props.scrollTop !== undefined &&
    props.limitScroll &&
    props.scrollTop < props.limitScroll
      ? `${props.bgColor}55`
      : `${props.theme.background}77`};
  backdrop-filter: blur(20px);
  position: fixed;
  width: 100%;
  z-index: 100;
  /* Firefox */
  @-moz-document url-prefix() {
    background: ${(props) =>
      props.bgColor &&
      props.scrollTop !== undefined &&
      props.limitScroll &&
      props.scrollTop < props.limitScroll
        ? props.bgColor
        : COLOR.white_cloud};
  }
`;

export const HeaderContent = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  max-width: 1200px;
  padding: 20px 0px;
  width: calc(100% - 60px);
`;

export const LogoContainer = styled.a<HeaderTypes>`
  flex-direction: row;
  cursor: pointer;
  display: flex;
  div {
    justify-content: center;
    display: flex;
    flex-direction: column;
    strong {
      color: ${(props) =>
        props.bgColor &&
        props.scrollTop !== undefined &&
        props.limitScroll &&
        props.scrollTop < props.limitScroll
          ? COLOR.white_cloud
          : props.theme.text};
      font-size: 0.8em;
      font-weight: 800;
    }
    span {
      color: ${(props) =>
        props.bgColor &&
        props.scrollTop !== undefined &&
        props.limitScroll &&
        props.scrollTop < props.limitScroll
          ? COLOR.white_cloud
          : props.theme.text};
      font-size: 0.7em;
    }
  }
  svg {
    height: 40px;
    margin-right: 10px;
    width: 40px;
    path {
      fill: ${(props) =>
        props.bgColor &&
        props.scrollTop !== undefined &&
        props.limitScroll &&
        props.scrollTop < props.limitScroll
          ? COLOR.white_cloud
          : props.theme.text};
    }
  }

  @media (max-width: 640px) {
    div {
      strong {
        font-size: 1em;
      }
      span {
        display: none;
      }
    }
  }
`;

export const NavContainer = styled.nav<HeaderTypes>`
  a,
  p {
    color: ${(props) =>
      props.bgColor &&
      props.scrollTop !== undefined &&
      props.limitScroll &&
      props.scrollTop < props.limitScroll
        ? COLOR.white_cloud
        : props.theme.text};
  }
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 640px) {
    box-shadow: 0px 0px 50px #00000022;
    box-sizing: border-box;
    background: ${(props) =>
      props.bgColor &&
      props.scrollTop !== undefined &&
      props.limitScroll &&
      props.scrollTop < props.limitScroll
        ? props.bgColor
        : props.theme.background};
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    flex-direction: column;
    height: fit-content;
    left: 0;
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    padding: 50px 30px;
    position: fixed;
    pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
    right: 0;
    top: ${(props) => (props.isOpen ? '0px' : '-100vh')};
    width: 100%;
    z-index: 99;
    a,
    p {
      font-size: 1.5em;
    }
  }
`;

export const MenuMobileContainer = styled.p<HeaderTypes>`
  color: ${(props) =>
    props.bgColor &&
    props.scrollTop !== undefined &&
    props.limitScroll &&
    props.scrollTop < props.limitScroll
      ? COLOR.white_cloud
      : props.theme.text};
  display: none;
  @media screen and (max-width: 640px) {
    display: block;
    position: relative;
    z-index: 100;
  }
`;

export const MenuContactInfo = styled.div<HeaderTypes>`
  display: none;
  p,
  a {
    color: ${(props) =>
      props.bgColor &&
      props.scrollTop !== undefined &&
      props.limitScroll &&
      props.scrollTop < props.limitScroll
        ? COLOR.white_cloud
        : props.theme.text};
  }
  a {
    border-bottom-color: ${(props) =>
      props.bgColor &&
      props.scrollTop !== undefined &&
      props.limitScroll &&
      props.scrollTop < props.limitScroll
        ? COLOR.white_cloud
        : props.theme.text};
  }
  @media screen and (max-width: 640px) {
    box-sizing: border-box;
    display: block;
    font-size: 0.6em;
    margin-top: 30px;
    padding: 0 20px;
    width: 100%;
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
