import { LOGO_JUANDIS } from '../../assets/images';
import { HeaderContainer } from './styled';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <a href="#" className="logo-link">
          <img src={LOGO_JUANDIS} alt="Logo Juan David Pérez" />
        </a>
        <div className="navigation-links">
          <a className="nav-link" href="#me">
            me
          </a>
          <a className="nav-link" href="#work">
            work
          </a>
          <a className="nav-link" href="#contact">
            contact
          </a>
        </div>
      </div>
    </HeaderContainer>
  );
};
export default Header;
