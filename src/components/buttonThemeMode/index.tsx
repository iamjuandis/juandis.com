import { ICON_MOON, ICON_SUN } from '../../assets/images';
import { ButtonThemeContainer, TextTheme } from './styled';

interface ThemeMode {
  darkMode: boolean;
  callback: () => void;
}

const ButtonThemeMode = ({ callback, darkMode }: ThemeMode) => {
  return (
    <ButtonThemeContainer onClick={callback} title="Disable dark mode">
      {darkMode ? ICON_SUN : ICON_MOON} <TextTheme>Lights {darkMode ? 'on' : 'off'}</TextTheme>
    </ButtonThemeContainer>
  );
};

export default ButtonThemeMode;
