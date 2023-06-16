import { DefaultTheme } from 'styled-components';
import COLORS from '../colors';

export const lightTheme: DefaultTheme = {
  text: COLORS.green_dark,
  background: COLORS.white_base,
  containerBackground: COLORS.gray_light,
};
export const darkTheme: DefaultTheme = {
  text: COLORS.white_cloud,
  background: COLORS.black_background,
  containerBackground: COLORS.green_dark,
};
