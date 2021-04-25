import styled from 'styled-components';

export const ButtonThemeContainer = styled.div`
  align-items: center;
  background: ${(props) => props.theme.background};
  border-radius: 50px;
  box-sizing: border-box;
  bottom: 30px;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  padding: 10px;
  position: relative;
  position: fixed;
  right: 30px;
  width: 40px;
  z-index: 100;
  svg {
    color: ${(props) => props.theme.text};
    height: 30px;
    width: 30px;
  }
  @media screen and (min-width: 510px) {
    &:hover {
      background: ${(props) => props.theme.text};
      color: ${(props) => props.theme.background};
      p {
        opacity: 1;
        right: 50px;
      }
      svg {
        color: ${(props) => props.theme.background};
      }
    }
  }
`;

export const TextTheme = styled.p`
  background: ${(props) => props.theme.background};
  border-radius: 50px;
  color: ${(props) => props.theme.text};
  font-size: 0.8em;
  opacity: 0;
  padding: 10px 20px;
  position: absolute;
  pointer-events: none;
  right: 0px;
  white-space: nowrap;
`;
