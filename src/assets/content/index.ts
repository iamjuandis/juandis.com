import { ButtonType, ListBannerProps, MainBannerType, MetaInfoProps } from '../../types/interfaces';

export const NAV_OPTIONS: ButtonType[] = [
  {
    label: 'Home',
    variant: 'tiertiary',
    route: '/',
    target: '_self',
  },
  {
    label: 'About',
    variant: 'tiertiary',
    route: '/about',
    target: '_self',
  },
  {
    label: 'LinkedIn',
    variant: 'tiertiary',
    route: 'http://bit.ly/linkedinjuandis',
    target: '_blank',
  },
  {
    label: 'Get resume',
    variant: 'primary',
    route: '/resume',
    target: '_blank',
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

export const OTHER_PROJECTS: ListBannerProps[] = [
  {
    location: 'US, Canada & Mexico',
    company: 'Walmart',
    title: 'Designing a better shift management experience for +1M Walmart hourly associates.',
    years: {
      first: '2022',
    },
  },
  {
    location: 'United States',
    company: 'Verizon',
    title: 'Leading the Design System for Verizon Family Money',
    years: {
      first: '2021',
    },
  },
  {
    location: 'United States',
    company: 'Zemoga Inc. acquired by Media.Monks',
    title: 'Designing a new admission experience for the University of Arizona Global Campus',
    years: {
      first: '2021',
    },
  },
  {
    company: 'Personal Project',
    title: 'Designing a seamless personal finance experience for Gen Ys and Xs.',
    years: {
      first: '2022',
    },
  },
];

export const EXPERIENCES: ListBannerProps[] = [
  {
    company: 'Zemoga Inc.',
    title: 'Senior Product Designer at Walmart',
    years: {
      first: '06/2022',
      last: '2023',
    },
  },
  {
    company: 'Zemoga Inc.',
    title: 'User Experience Designer',
    years: {
      first: '06/2021',
      last: 'Present',
    },
  },
  {
    company: 'Aurora',
    location: 'Colombia',
    title: 'Product Designer, Co-founder',
    years: {
      first: '04/2020',
      last: '09/2021',
    },
  },
  {
    company: 'We Are Angular',
    location: 'Colombia',
    title: 'Lead Product Designer, Partner',
    years: {
      first: '08/2019',
      last: '05/2021',
    },
  },
  {
    company: 'We Are Angular',
    location: 'Colombia',
    title: 'Product Designer & Frontend Developer',
    years: {
      first: '08/2017',
      last: '08/2019',
    },
  },
  {
    company: 'Icesi University',
    location: 'Colombia',
    title: 'Designer at UXLab Icesi',
    years: {
      first: '01/2019',
      last: '08/2020',
    },
  },
  {
    company: 'Pródigos',
    location: 'Colombia',
    title: 'Mobile Developer',
    years: {
      first: '08/2018',
      last: '01/2019',
    },
  },
  {
    company: 'Icesi University',
    location: 'Colombia',
    title: 'Visual Designer',
    years: {
      first: '07/2017',
      last: '12/2018',
    },
  },
  {
    company: 'Freelance',
    location: 'Colombia',
    title: 'Web Designer & Developer',
    years: {
      first: '01/2014',
      last: '12/2017',
    },
  },
];
