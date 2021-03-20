import { NavOptionType } from '../../types/interfaces';
import { scrollToIDElement } from '../utils/components';

export const NAV_OPTIONS: NavOptionType[] = [
  {
    label: 'Work',
    type: 'action',
    onClick: scrollToIDElement('work'),
  },
  {
    label: 'Resume',
    type: 'link',
    route: 'https://weareangular.com',
    isExternal: true,
  },
];
