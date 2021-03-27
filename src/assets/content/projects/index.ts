import { ProjectsType } from '../../../types/interfaces';
import { LOGO_WE_ARE_ANGULAR } from '../../images';

export const PROJECTS: ProjectsType = {
  proper: {
    client: 'Proper',
    conclusion:
      'Personally, it was a big journey where I had the opportunity to discover new knowledge, be curious, and show the value of design building an user-based product.',
    discovery: {
      description:
        'Talking with users and experts, we found that we should focus on the next specific <strong>principles</strong> that would allowed us build a comprehensive product.',
      items: ['Easy to use', 'Diverse', 'Secure', '“You are the owner”', 'Open'],
    },
    focusProject: {
      description: 'We focused on 4 main problems',
      items: ['Bureaucracy', 'Safety', 'Accesibility', 'Time'],
      longDescription:
        'Thanks to the vision and the discoveries found in the first iteration, we built the first functional prototype to keep testing on users.<br/> In this new iteration I had the opportunity to lead the design process and the Frontend Development.',
    },
    headline: 'Shaping a new & open real state investment experience.',
    mainColor: '#E20B21',
    slug: 'proper',
    images: {
      footerImage: '/assets/images/projects/proper/proper-cover.png',
      coverImage: '/assets/images/projects/proper/proper-cover.png',
      discoveryImage: '/assets/images/projects/proper/proper-cover.png',
      metaImage: '/assets/images/projects/proper/test-small.png',
      cardImages: [
        '/assets/images/projects/proper/test-small.png',
        '/assets/images/projects/proper/test-small.png',
      ],
      sliderImages: [
        '/assets/images/projects/proper/test-small.png',
        '/assets/images/projects/proper/test-small.png',
        '/assets/images/projects/proper/test-small.png',
      ],
      middleImage: '/assets/images/projects/proper/test-small.png',
      smallImages: [
        '/assets/images/projects/proper/test-small.png',
        '/assets/images/projects/proper/test-small.png',
        '/assets/images/projects/proper/test-small.png',
      ],
    },
    midSection: {
      title: 'Understand',
      paragraph: `Understand the current flow to invest in Real State.<br/><br/>
      Understand the technology involved in the process. <br/><br/>
      Understand the whole new investment flow and the user perspective.`,
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
