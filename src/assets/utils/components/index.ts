import { css } from 'styled-components';
import { variantButtonTypes } from '../../../types/interfaces';
import COLORS from '../../style/colors';

export const scrollToIDElement = (id: any) => {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const yOffset = -50;
    const element = document.getElementById(id);
    const yPos = (element?.getBoundingClientRect()?.top ?? 0) + window.pageYOffset + yOffset;
    return window.scrollTo({ top: yPos, behavior: 'smooth' });
  }
};

const months: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export const HandleAlignment = (alignment: string) => {
  const splitAlignment: string[] = alignment.split('-');
  const size: string = splitAlignment[0];
  const position: string = splitAlignment[1];

  switch (size) {
    case 'wide':
      return {
        maxWidth: '1200px',
        gridTemplate: position === 'left' || position === 'right' ? 'repeat(14, 1fr)' : '1fr',
        direction: position === 'up' || position === 'right' ? 'ltr' : 'rtl',
        size: size,
        position: position,
        gridColumnText: position === 'left' ? '7 / 11' : position === 'right' ? '3 / 7' : '1 / -1',
        gridColumnImage: position === 'left' ? '1 / 7' : position === 'right' ? '7 / -1' : '1 / -1',
      };

    case 'mid':
      return {
        maxWidth: '1024px',
        gridTemplate: position === 'left' || position === 'right' ? 'repeat(12, 1fr)' : '1fr',
        direction: position === 'up' || position === 'right' ? 'ltr' : 'rtl',
        size: size,
        position: position,
        gridColumnText: position === 'left' ? '7 / -1' : position === 'right' ? '1 / 7' : '1 / -1',
        gridColumnImage: position === 'left' ? '1 / 7' : position === 'right' ? '7 / -1' : '1 / -1',
      };

    default:
      return {
        maxWidth: '1200px',
        gridTemplate: 'repeat(14, 1fr)',
        direction: 'rtl',
      };
  }
};

/* export const SetYearFromString = (stringDate: string) => {
  const month: string = stringDate.split('/')[0];
  const year: number | string = stringDate.split('/')[1];
  if (month === 'Present') return month;
  return `${months[parseFloat(month) - 1]}. ${year}`;
}; */

export const ButtonVariantColor = (variant: variantButtonTypes) => {
  switch (variant) {
    case 'primary':
      return {
        default: {
          background: COLORS.green_dark,
          font: COLORS.white_cloud,
        },
        hover: {
          background: COLORS.green_pale,
          font: COLORS.white_cloud,
        },
      };
    case 'secondary':
      return {
        default: {
          background: COLORS.green_light,
          font: COLORS.green_dark,
        },
        hover: {
          background: COLORS.green_pale,
          font: COLORS.white_cloud,
        },
      };
    case 'tiertiary':
      return {
        default: {
          background: 'transparent',
          font: COLORS.green_dark,
        },
        hover: {
          background: 'transparent',
          font: COLORS.green_pale,
        },
      };
  }
};

// Mobile media queries
export const responsiveMobile = (styles: any) => css`
  @media screen and (max-width: 724px) {
    ${styles}
  }
`;
