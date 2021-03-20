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
    <Link href={`${route}`} passHref>
      <NavOptionContainer type={type} target={isExternal ? '_blank' : '_self'}>
        {Icon ? <Icon /> : label}
      </NavOptionContainer>
    </Link>
  ) : (
    <NavOptionContainer type={type} onClick={onClick}>
      {Icon ? <Icon /> : label}
    </NavOptionContainer>
  );
};

export default NavOption;
