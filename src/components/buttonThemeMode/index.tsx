import { ICON_SUN } from '../../assets/images';
import { ButtonThemeContainer, TextTheme } from './styled';

interface ThemeMode {
  callback: () => void;
}

const ButtonThemeMode = ({ callback }: ThemeMode) => {
  return (
    <ButtonThemeContainer onClick={callback} title="Disable dark mode">
      {ICON_SUN} <TextTheme>Disable dark mode</TextTheme>
    </ButtonThemeContainer>
  );
};

export default ButtonThemeMode;
