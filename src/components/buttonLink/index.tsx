import { ButtonType } from '../../types/interfaces';
import { ButtonStyle } from './styled';

const ButtonLink = ({ label, route, variant, onClick, target }: ButtonType) => {
  return (
    <ButtonStyle
      href={route}
      className={variant}
      onClick={onClick}
      variant={variant}
      target={target}
    >
      <p className="text-medium">{label}</p>
    </ButtonStyle>
  );
};

export default ButtonLink;
