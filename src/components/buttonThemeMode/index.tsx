import { ICON_MOON, ICON_SUN } from '../../assets/images';
import { ThemeMode } from '../../types/interfaces';
import { ButtonThemeContainer, TextTheme } from './styled';

const ButtonThemeMode = ({ callback, darkMode }: ThemeMode) => {
  return (
    <ButtonThemeContainer onClick={callback} title={`Lights ${darkMode ? 'on' : 'off'}`}>
      {darkMode ? ICON_SUN : ICON_MOON} <TextTheme>Lights {darkMode ? 'on' : 'off'}</TextTheme>
    </ButtonThemeContainer>
  );
};

export default ButtonThemeMode;
