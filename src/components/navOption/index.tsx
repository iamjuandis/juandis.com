import Link from 'next/link';
import { NavOptionType } from '../../types/interfaces';
import { NavOptionContainer } from './styled';

const NavOption = ({
  label = 'Link',
  type,
  route,
  icon: Icon,
  isExternal,
  onClick,
}: NavOptionType) => {
  return type === 'link' ? (
    <Link href={`${route}`}>
      <a target={isExternal ? '_blank' : '_self'}>
        <NavOptionContainer>{Icon ? <Icon /> : label}</NavOptionContainer>
      </a>
    </Link>
  ) : (
    <NavOptionContainer onClick={onClick}>{Icon ? <Icon /> : label}</NavOptionContainer>
  );
};

export default NavOption;
