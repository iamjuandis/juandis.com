import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NAV_OPTIONS } from '../../assets/content/intex';
import { LOGO_JUANDIS } from '../../assets/images';
import COLOR from '../../assets/style/colors';
import { HeaderTypes, NavOptionType } from '../../types/interfaces';
import NavOption from '../navOption';
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
            {LOGO_JUANDIS}
            <div>
              <strong>Juan David Pérez</strong>
              <span>Product Designer & Frontend Developer</span>
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
          {NAV_OPTIONS.map((option: NavOptionType, idx: number) => (
            <NavOption
              highlightColor={
                bgColor && scrollTop !== undefined && limitScroll && scrollTop < limitScroll
                  ? COLOR.white_cloud
                  : bgColor
              }
              key={idx}
              type={option?.type}
              label={option?.label}
              icon={option?.icon}
              isExternal={option?.isExternal}
              onClick={() => {
                option?.onClick();
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
