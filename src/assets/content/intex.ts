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
    'Product Designer from Colombia with nearly 6 years collaborating with experienced product teams to shape solutions for people.',
  previewImage:
    'https://res.cloudinary.com/juandis/image/upload/v1618336904/portfolio/assets/preview-juandis_mbq17j.jpg',
  mainTitle: 'Juan David Perez · Product Designer & Frontend Hobbyistr',
};

export const MAIN_BANNER_TEXTS: MainBannerType = {
  headline: `Hey there! I am Juan David, a pragmatic and curious Product Designer from <span class="color">Colombia</span>. For nearly 6 years, I've been collaborating with experienced product teams to shape solutions for people.`,
  paragraph: `I got a BE. in Interaction Design and Human-Computer Interaction. I've collaborated with cross-functional teams to build reliable, empathetic, and user-obsessed products. I'm currently collaborating with world-class teams at <a class="external-link" rel="noopener noreferrer" href="https://zemoga.com/" target="_blank" title="Zemoga &#8599;">Zemoga Inc.</a> 
  Previously, I empowered a team of +10 designers, developers, and strategists, to push solutions for a diverse group of industries and audiences.`,
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
