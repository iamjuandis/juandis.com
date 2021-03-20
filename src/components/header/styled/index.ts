import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
`;

export const HeaderContent = styled.div`
  box-sizing: border-box;
  margin: auto;
  max-width: 1200px;
  padding: 20px 30px;
  width: 100%;
`;

export const LogoContainer = styled.a`
  flex-direction: row;
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    strong {
      font-weight: 800;
    }
    span {
      font-size: 14px;
    }
  }
  svg {
    height: 40px;
    margin-right: 10px;
    width: 40px;
    path {
      fill: ${COLOR.blue_universe};
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
`;
