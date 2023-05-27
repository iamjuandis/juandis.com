import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NAV_OPTIONS } from '../../assets/content/index';
import { PROFILE_JUAN } from '../../assets/images';
import { ButtonType, HeaderTypes } from '../../types/interfaces';
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

const Header = ({ bgColor }: HeaderTypes) => {
  const limitScroll: number = 460;
  const [scrollTop, setScrollTop] = useState<number>(1);
  const [mounted, setMounted] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onScroll = (e: any) => {
    setScrollTop(e.target.documentElement.scrollTop);
  };

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!mounted) {
      if (typeof window !== undefined && bgColor) {
        window.addEventListener('scroll', onScroll);
        setMounted(true);
      }
    }
  }, []);

  return (
    <HeaderContainer bgColor={bgColor} scrollTop={scrollTop} limitScroll={limitScroll}>
      <HeaderContent>
        <Link href="/">
          <LogoContainer bgColor={bgColor} scrollTop={scrollTop} limitScroll={limitScroll}>
            <Image src={PROFILE_JUAN} alt={`Juan David's profile picture`} width={40} height={40} />
            <div className="name">
              <p className="text-medium">Juan David Perez</p>
            </div>
          </LogoContainer>
        </Link>
        <MenuMobileContainer
          onClick={openMenu}
          bgColor={bgColor}
          scrollTop={scrollTop}
          limitScroll={limitScroll}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </MenuMobileContainer>
        <NavContainer
          bgColor={bgColor}
          scrollTop={scrollTop}
          limitScroll={limitScroll}
          isOpen={isMenuOpen}
        >
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
          <MenuContactInfo bgColor={bgColor} scrollTop={scrollTop} limitScroll={limitScroll}>
            <Paragraph
              highlightColor={bgColor}
              children={`<a href="mailto:me@juandis.com" title="me@juandis.com" target="_blank" rel="noopener noreferrer">
              me@juandis.com
            </a>`}
            />
            <br />
            <br />
            <Paragraph
              highlightColor={bgColor}
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
