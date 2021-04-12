import Link from 'next/link';
import COLOR from '../../assets/style/colors';
import { NavOptionType } from '../../types/interfaces';
import { NavOptionContainer } from './styled';

const NavOption = ({
  highlightColor = COLOR.blue_universe,
  label = 'Link',
  type,
  route,
  icon: Icon,
  isExternal,
  onClick,
}: NavOptionType) => {
  return type === 'link' ? (
    <Link href={`${route}`} passHref>
      <NavOptionContainer
        highlightColor={highlightColor}
        type={type}
        target={isExternal ? '_blank' : '_self'}
      >
        {Icon ? <Icon /> : label}
      </NavOptionContainer>
    </Link>
  ) : (
    <NavOptionContainer highlightColor={highlightColor} type={type} onClick={onClick}>
      {Icon ? <Icon /> : label}
    </NavOptionContainer>
  );
};

export default NavOption;
