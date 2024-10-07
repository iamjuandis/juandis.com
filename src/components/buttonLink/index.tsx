import { ButtonType } from '../../types/interfaces';
import { ButtonClickStyle, ButtonLinkStyle } from './styled';

const ButtonLink = ({ label, route, variant, onClick, target, accentColor }: ButtonType) => {
  if (typeof route === 'string' && route !== undefined) {
    return (
      <ButtonLinkStyle
        href={route}
        className={variant}
        variant={variant}
        target={target}
        accentColor={accentColor}
      >
        <span className="text-medium">{label}</span>
      </ButtonLinkStyle>
    );
  } else {
    return (
      <ButtonClickStyle
        className={variant}
        onClick={onClick}
        variant={variant}
        accentColor={accentColor}
      >
        <span className="text-medium">{label}</span>
      </ButtonClickStyle>
    );
  }
};

export default ButtonLink;
