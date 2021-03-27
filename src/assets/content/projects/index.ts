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
      footerImage:
        'https://res.cloudinary.com/juandis/image/upload/v1616888580/portfolio/projects/proper/slider-proper-05_nzzk7h.jpg',
      coverImage:
        'https://res.cloudinary.com/juandis/image/upload/v1616888368/portfolio/projects/proper/proper-cover_syhtut.png',
      discoveryImage:
        'https://res.cloudinary.com/juandis/image/upload/v1616889181/portfolio/projects/proper/proper-footer_cfvcxj.png',
      cardImages: [
        'https://res.cloudinary.com/juandis/image/upload/v1616888120/portfolio/projects/proper/proper-card-small_haobsu.png',
        'https://res.cloudinary.com/juandis/image/upload/v1616888116/portfolio/projects/proper/proper-card-big_fiya0m.png',
      ],
      sliderImages: [
        'https://res.cloudinary.com/juandis/image/upload/v1616888572/portfolio/projects/proper/slider-proper-01_tfkbsx.jpg',
        'https://res.cloudinary.com/juandis/image/upload/v1616888582/portfolio/projects/proper/slider-proper-02_xzs0a1.jpg',
        'https://res.cloudinary.com/juandis/image/upload/v1616888577/portfolio/projects/proper/slider-proper-03_m3dyeq.jpg',
        'https://res.cloudinary.com/juandis/image/upload/v1616888577/portfolio/projects/proper/slider-proper-04_n0brjc.jpg',
      ],
      middleImage:
        'https://res.cloudinary.com/juandis/image/upload/v1616889180/portfolio/projects/proper/proper-mid_kozz3y.png',
      previewImage:
        'https://res.cloudinary.com/juandis/image/upload/v1616888115/portfolio/projects/proper/proper-preview-image_jggvr4.png',
      smallImages: [
        'https://res.cloudinary.com/juandis/image/upload/v1616889178/portfolio/projects/proper/proper-ind-1_yv5p7o.png',
        'https://res.cloudinary.com/juandis/image/upload/v1616889179/portfolio/projects/proper/proper-ind-2_lp2aej.png',
        'https://res.cloudinary.com/juandis/image/upload/v1616889180/portfolio/projects/proper/proper-ind-3_ouv9ei.png',
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
