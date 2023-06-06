import { ButtonType } from '../../types/interfaces';
import { ButtonClickStyle, ButtonLinkStyle } from './styled';

const ButtonLink = ({ label, route, variant, onClick, target }: ButtonType) => {
  if (typeof route === 'string' && route !== undefined) {
    return (
      <ButtonLinkStyle href={route} className={variant} variant={variant} target={target}>
        <span className="text-medium">{label}</span>
      </ButtonLinkStyle>
    );
  } else {
    return (
      <ButtonClickStyle className={variant} onClick={onClick} variant={variant}>
        <span className="text-medium">{label}</span>
      </ButtonClickStyle>
    );
  }
};

export default ButtonLink;
