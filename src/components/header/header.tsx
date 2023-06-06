import { useState } from 'react';
import { NAV_OPTIONS } from '../../assets/content/index';
import { PROFILE_JUAN } from '../../assets/images';
import { ButtonType } from '../../types/interfaces';
import Paragraph from '../paragraph';
import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  MenuCloser,
  MenuContactInfo,
  MenuMobileContainer,
  NavContainer,
} from './styled';
import Image from 'next/image';
import ButtonLink from '../buttonLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer href="/">
          <Image src={PROFILE_JUAN} alt={`Juan David's profile picture`} width={40} height={40} />
          <p className="text-medium">Juan David Perez</p>
        </LogoContainer>
        <MenuMobileContainer>
          <ButtonLink
            onClick={openMenu}
            label={isMenuOpen ? 'Close' : 'Menu'}
            variant={isMenuOpen ? 'secondary' : 'primary'}
          />
        </MenuMobileContainer>

        <NavContainer isOpen={isMenuOpen}>
          {NAV_OPTIONS.map((option: ButtonType, idx: number) => (
            <ButtonLink
              key={idx}
              variant={option?.variant}
              label={option?.label}
              target={option?.target}
              onClick={() => {
                setIsMenuOpen(false);
              }}
              route={option?.route}
            />
          ))}
          <MenuContactInfo>
            <Paragraph
              children={`<a href="mailto:me@juandis.com" title="me@juandis.com" target="_blank" rel="noopener noreferrer">
              me@juandis.com
            </a>`}
            />
            <Paragraph
              children={`<a href="tel:573122659625" title="+57 312 265 9625">
              +57 312 265 9625
            </a>`}
            />
          </MenuContactInfo>
        </NavContainer>
      </HeaderContent>
      <MenuCloser onClick={openMenu} isOpen={isMenuOpen} />
    </HeaderContainer>
  );
};
export default Header;
