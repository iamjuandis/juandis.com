import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';

export const ButtonThemeContainer = styled.div`
  align-items: center;
  background: ${(props) => props.theme.background};
  border-radius: 50px;
  box-sizing: border-box;
  bottom: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-width: 47px;
  padding: 10px;
  position: relative;
  position: fixed;
  right: 30px;
  color: ${COLOR.white_cloud};
  z-index: 100;
  svg {
    color: ${COLOR.white_cloud};
  }
  &:hover {
    background: ${COLOR.white_cloud};
    color: ${(props) => props.theme.background};
    p {
      color: ${(props) => props.theme.background};
      opacity: 1;
      position: relative;
      margin-right: 0px;
    }
    svg {
      color: ${(props) => props.theme.background};
    }
  }
`;

export const TextTheme = styled.p`
  color: ${COLOR.white_cloud};
  opacity: 0;
  margin-left: 15px;
  position: relative;
  pointer-events: none;
  margin-right: -172px;
  white-space: nowrap;
`;
