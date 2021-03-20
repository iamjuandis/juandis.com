import Link from 'next/link';
import { NAV_OPTIONS } from '../../assets/content/intex';
import { LOGO_JUANDIS } from '../../assets/images';
import { NavOptionType } from '../../types/interfaces';
import NavOption from '../navOption';
import { HeaderContainer, HeaderContent, LogoContainer, NavContainer } from './styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <LogoContainer>
            {LOGO_JUANDIS}
            <div>
              <strong>Juan David Pérez</strong>
              <span>Product Designer & Frontend Developer</span>
            </div>
          </LogoContainer>
        </Link>
        <NavContainer>
          {NAV_OPTIONS.map((option: NavOptionType, idx: number) => (
            <NavOption
              key={idx}
              type={option?.type}
              label={option?.label}
              icon={option?.icon}
              isExternal={option?.isExternal}
              onClick={option?.onClick}
              route={option?.route}
            />
          ))}
        </NavContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};
export default Header;
