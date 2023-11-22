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
    label: 'Portfolio',
    variant: 'primary',
    route: 'https://portfolio.juandis.com',
    target: '_blank',
  },
];

export const META_INFO: MetaInfoProps = {
  description:
    'Juan David is an experienced Product Designer driven to build a better future for everyone by designing friendly and inclusive products - based in Colombia.',
  previewImage:
    'https://res.cloudinary.com/juandis/image/upload/v1618336904/portfolio/assets/preview-juandis_mbq17j.jpg',
  mainTitle: 'Juan David Perez · Product Designer & Frontend Hobbyistr',
};

export const MAIN_BANNER_TEXTS: MainBannerType = {
  headline: `<span class="color">Juan David</span> is a senior product designer from Colombia.`,
  paragraph: `Juan David has over 7 years of experience designing digital products. Recently collaborated with amazing product design teams at Verizon, Bridgestone, Media.Monks, and Walmart. Currently partnering with startups at Wandr Studio to design intuitive and efficient products.`,
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

export const EXPERIENCE: ListBannerProps[] = [
  {
    company: 'Wandr Studio',
    location: 'California, United States',
    title: 'Senior Product Designer',
    years: {
      first: 'Jul 2023',
      last: 'Present',
    },
  },
  {
    company: 'Zemoga Inc.',
    location: 'United States',
    title: 'Senior Product Designer at Walmart',
    years: {
      first: 'Jan 2022',
      last: 'Mar 2023',
    },
  },
  {
    company: 'Zemoga Inc.',
    location: 'United States',
    title: 'Product Designer & Design Systems at Verizon',
    years: {
      first: 'Aug 2021',
      last: 'Jan 2022',
    },
  },
  {
    company: 'Zemoga Inc.',
    location: 'United States',
    title: 'UX Designer at University of Arizona Global Campus',
    years: {
      first: 'Jun 2021',
      last: 'Aug 2023',
    },
  },
  {
    company: 'Aurora',
    location: 'Colombia',
    title: 'Lead Product Designer & Frontend Developer',
    years: {
      first: 'Mar 2020',
      last: 'Jun 2021',
    },
  },
  {
    company: 'We Are Angular',
    location: 'Colombia',
    title: 'Senior Product Designer',
    years: {
      first: 'Jan 2019',
      last: 'Mar 2020',
    },
  },
  {
    company: 'We Are Angular',
    location: 'Colombia',
    title: 'Product Designer & Frontend Developer',
    years: {
      first: 'Aug 2017',
      last: 'Jan 2019',
    },
  },
  {
    company: 'Icesi University',
    location: 'Colombia',
    title: 'UX Designer at UXLab Icesi',
    years: {
      first: '2019',
      last: '2020',
    },
  },
  {
    company: 'Pródigos',
    location: 'Colombia',
    title: 'React Mobile Developer',
    years: {
      first: '2018',
      last: '2019',
    },
  },
  {
    company: 'Icesi University',
    location: 'Colombia',
    title: 'Creative Designer',
    years: {
      first: '2017',
      last: '2018',
    },
  },
  {
    company: 'Freelance',
    location: 'Colombia',
    title: 'Web Designer & Developer',
    years: {
      first: '2014',
      last: '2018',
    },
  },
];

export const INTRODUCTION = `<p class="text-large">I've been designing and building digital products for over 6 years.</p>
<p class="text-large">I hold a BE in Interactive Design with an emphasis on Human-Computer Interaction from Icesi University, Colombia, where I started a joyful career in tech by driving design decisions to build intuitive and friendly human experiences.</p> 
<p class="text-large">Fun fact - I'm one of those designers with a close and genuine interest in coding.</p>`;
