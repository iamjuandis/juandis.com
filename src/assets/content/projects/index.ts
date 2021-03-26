import { ProjectsType } from '../../../types/interfaces';
import { LOGO_WE_ARE_ANGULAR } from '../../images';

export const PROJECTS: ProjectsType = {
  proper: {
    client: 'Proper',
    headline: 'Shaping a new & open real state investment experience.',
    mainColor: '#ff0000',
    slug: 'proper',
    images: {
      cardImage: '/assets/images/projects/proper/test-small.png',
      metaImage: '/assets/images/projects/proper/test-small.png',
      coverImages: [
        '/assets/images/projects/proper/test-small.png',
        '/assets/images/projects/proper/test-small.png',
      ],
      sliderImages: [
        '/assets/images/projects/proper/test-small.png',
        '/assets/images/projects/proper/test-small.png',
        '/assets/images/projects/proper/test-small.png',
      ],
    },
    myRole:
      'I led the project, the user interface and experience design for the first and last functional prototype. Also, I develop from scratch the functional web prototype to get precise and deep feedback about the product.',
    overview:
      'Proper (formerly Squarepin) is a real estate platform founded in Colombia and Mexico. It mainly focuses on make easier and secure the real estate investment process. We worked side-by-side with real estate experts from Mexico and Colombia, that helped us to understand and illustrate the constrains and opportunities.',
    ownerCompany: {
      name: 'We Are Angular',
      country: 'Colombia',
      icon: LOGO_WE_ARE_ANGULAR,
      oneColorIcon: true,
    },
  },
};
