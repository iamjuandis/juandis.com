import {
  ExperienceProps,
  MainBannerType,
  MetaInfoProps,
  NavOptionType,
} from '../../types/interfaces';
import { scrollToIDElement } from '../utils/components';
import Router from 'next/router';

export const NAV_OPTIONS: NavOptionType[] = [
  {
    label: 'Home',
    type: 'link',
    route: '/',
    isExternal: false,
  },
  {
    label: 'Projects',
    type: 'action',
    onClick: () => {
      if (window?.location?.pathname !== '/') {
        Router.push({ pathname: '/', query: { g: 'projects' } });
      }
      scrollToIDElement('projects');
    },
  },
  {
    label: 'Resume',
    type: 'link',
    route: '/resume',
    isExternal: true,
  },
  {
    label: 'LinkedIn',
    type: 'link',
    route: 'http://bit.ly/linkedinjuandis',
    isExternal: true,
  },
];

export const META_INFO: MetaInfoProps = {
  description:
    'Juan David is an experienced Product Designer driven to build future and friendly things, based in Colombia.',
  previewImage:
    'https://res.cloudinary.com/juandis/image/upload/v1618336904/portfolio/assets/preview-juandis_mbq17j.jpg',
  mainTitle: 'Juan David Perez · Product Designer & Frontend Hobbyistr',
};

export const MAIN_BANNER_TEXTS: MainBannerType = {
  headline: `<span class="color">Juan David</span> is an experienced Product Designer driven to build future and friendly things, based in Colombia.`,
  paragraph: `Recently designing intuitive and efficient tools for Walmart, Bridgestone and Design Systems at Verizon.`,
};

export const EXPERIENCES: ExperienceProps[] = [
  {
    company: 'Zemoga Inc.',
    position: 'Senior Product Designer at Walmart',
    years: {
      first: '06/2022',
      last: '2023',
    },
  },
  {
    company: 'Zemoga Inc.',
    position: 'User Experience Designer',
    years: {
      first: '06/2021',
      last: 'Present',
    },
  },
  {
    company: 'Aurora',
    country: 'Colombia',
    position: 'Product Designer, Co-founder',
    years: {
      first: '04/2020',
      last: '09/2021',
    },
  },
  {
    company: 'We Are Angular',
    country: 'Colombia',
    position: 'Lead Product Designer, Partner',
    years: {
      first: '08/2019',
      last: '05/2021',
    },
  },
  {
    company: 'We Are Angular',
    country: 'Colombia',
    position: 'Product Designer & Frontend Developer',
    years: {
      first: '08/2017',
      last: '08/2019',
    },
  },
  {
    company: 'Icesi University',
    country: 'Colombia',
    position: 'Designer at UXLab Icesi',
    years: {
      first: '01/2019',
      last: '08/2020',
    },
  },
  {
    company: 'Pródigos',
    country: 'Colombia',
    position: 'Mobile Developer',
    years: {
      first: '08/2018',
      last: '01/2019',
    },
  },
  {
    company: 'Icesi University',
    country: 'Colombia',
    position: 'Visual Designer',
    years: {
      first: '07/2017',
      last: '12/2018',
    },
  },
  {
    company: 'Freelance',
    country: 'Colombia',
    position: 'Web Designer & Developer',
    years: {
      first: '01/2014',
      last: '12/2017',
    },
  },
];
