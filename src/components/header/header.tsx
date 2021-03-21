import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NAV_OPTIONS } from '../../assets/content/intex';
import { LOGO_JUANDIS } from '../../assets/images';
import { NavOptionType } from '../../types/interfaces';
import NavOption from '../navOption';
import { HeaderContainer, HeaderContent, LogoContainer, NavContainer } from './styled';

export interface HeaderTypes {
  bgColor?: string;
  scrollTop?: number;
  limitScroll?: number;
}

const Header = ({ bgColor }: HeaderTypes) => {
  const limitScroll: number = 460;
  const [scrollTop, setScrollTop] = useState<number>(1);

  const onScroll = (e: any) => {
    setScrollTop(e.target.documentElement.scrollTop);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', onScroll);
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
        <NavContainer bgColor={bgColor} scrollTop={scrollTop} limitScroll={limitScroll}>
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
