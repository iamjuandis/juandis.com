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
    'I’m a pragmatic and curious Interactive & Product Designer from Colombia. For the last +5 years, I helped to shape the future by building people-based products.',
  previewImage:
    'https://res.cloudinary.com/juandis/image/upload/v1618336904/portfolio/assets/preview-juandis_mbq17j.jpg',
  mainTitle: 'Juan David Pérez • Portfolio • Product & Interactive Designer',
};

export const MAIN_BANNER_TEXTS: MainBannerType = {
  headline: `I’m a pragmatic and curious Interactive & Product Designer from <span class="color">Colombia</span>. For the last +5 years, I helped to shape the future by building people-based products.`,
  paragraph: `I got a BE. in Interaction Design and Human-Computer Interaction. Currently, I'm part of the UX and UI team at <a class="external-link" rel="noopener noreferrer" href="https://zemoga.com/" target="_blank" title="Zemoga &#8599;">Zemoga</a>, 
  and I'm building and designing <a class="external-link" rel="noopener noreferrer" href="https://somosaurora.co/" target="_blank" title="Aurora &#8599;">Aurora</a>, an e-Learning platform that we founded to transform education in Latam.`,
};

export const EXPERIENCES: ExperienceProps[] = [
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
    position: 'Lead Product Designer, Co-founder',
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
    position: 'Product Designer',
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
