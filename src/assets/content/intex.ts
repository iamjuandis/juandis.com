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
    'Product, Interactive Designer & Frontend Developer that loves design and build products for people.',
  previewImage:
    'https://res.cloudinary.com/juandis/image/upload/v1618336904/portfolio/assets/preview-juandis_mbq17j.jpg',
  mainTitle: 'Juan David Pérez',
};

export const MAIN_BANNER_TEXTS: MainBannerType = {
  headline: `I’m a curious Product Designer & Frontend Developer from <span class="color">Colombia</span> that helps companies to build user-based products that deliver value to people through design and technology.`,
  paragraph: `I have a BE. in Interaction Design and Human-Computer Interaction and I love to build, design and code. Currently, I lead the Product Design projects at <a rel="noopener noreferrer" href="https://weareangular.com/" target="_blank" title="We Are Angular &#8599;">We Are Angular</a> and I co-founded and lead the Product Design Team at <a rel="noopener noreferrer" href="https://somosaurora.co/" target="_blank" title="Aurora &#8599;">Aurora</a>, an e-Learning platform created to transform education in Latam.`,
};

export const EXPERIENCES: ExperienceProps[] = [
  {
    company: 'Aurora',
    country: 'Colombia',
    position: 'Co-Founder & Product Design Lead',
    years: {
      first: '04/2020',
      last: 'Present',
    },
  },
  {
    company: 'We Are Angular',
    country: 'Colombia',
    position: 'Product Design Manager',
    years: {
      first: '08/2019',
      last: 'Present',
    },
  },
  {
    company: 'We Are Angular',
    country: 'Colombia',
    position: 'Project Manager & Board Member',
    years: {
      first: '01/2020',
      last: '12/2020',
    },
  },
  {
    company: 'We Are Angular',
    country: 'Colombia',
    position: 'Frontend Developer',
    years: {
      first: '01/2018',
      last: '07/2019',
    },
  },
  {
    company: 'We Are Angular',
    country: 'Colombia',
    position: 'Design Consultant',
    years: {
      first: '08/2017',
      last: '08/2019',
    },
  },
  {
    company: 'UXLab Icesi',
    country: 'Colombia',
    position: 'Designer',
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
    position: 'Designer',
    years: {
      first: '07/2017',
      last: '12/2018',
    },
  },
];
