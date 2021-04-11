import { MainBannerType, NavOptionType } from '../../types/interfaces';
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

export const MAIN_BANNER_TEXTS: MainBannerType = {
  headline: `I’m an Interactive Designer & Frontend Developer from Colombia. I lead the Product
  Development area at <a href="https://weareangular.com/" target="_blank" title="We Are Angular &#8599;">We Are Angular</a> where we design comprehensive and user-based products
  & services for startups and companies.`,
  paragraphs: [
    `I have a BsC. in IxDesign and Human Computer Interaction and I love build, design and
    code user-based products & services.`,
    `Also, I co-founded and lead the Product Design Team at <a href="https://somosaurora.co/" target="_blank" title="Aurora &#8599;">Aurora</a>, an eLearning platform to
    transform education in Latam.`,
  ],
};

export const EXPERIENCES: any = [
  {
    years: [],
    position: 'Position',
    company: 'We Arre Angular',
  },
];

export const ALL_PROJECTS: any = [
  {
    years: [],
    position: 'Name',
    company: 'We Arre Angular',
    mainActivities: [],
  },
];
