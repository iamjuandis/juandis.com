import { ReactNode } from 'react';

export interface NavOptionType {
  label?: string;
  type: string;
  route?: string | undefined;
  icon?: any;
  isExternal?: boolean;
  onClick?: any;
  target?: any;
}

export interface ParagraphType {
  color?: string;
  columns?: number;
  highlightColor?: string;
  size?: number;
  children?: any;
}

export interface HeadlineType {
  children?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  typeHeadline: string;
}

export interface PageLayoutTypes {
  children: ReactNode;
  title: string;
  description?: string;
  image?: string;
}

export interface MainBannerType {
  headline: string;
  paragraphs: string[];
}

export interface OwnerCompanyTypes {
  name: string;
  country: string;
  icon: any;
  oneColorIcon?: boolean;
}

export interface ProjectImagesTypes {
  cardImages: string[];
  coverImage: string;
  discoveryImage: string;
  footerImage: string;
  middleImage: string;
  previewImage: string;
  sliderImages: string[];
  smallImages: string[];
}

export interface SectionTypes {
  title?: string;
  content: string;
  image?: string;
  alignement?: string;
}

export interface ProjectSectionType {
  title?: string;
  content?: string;
  columns?: number;
  image?: string;
  alignment?: string; // wide-up, wide-left, wide-right, wide-bottom, mid-up, mid-left, mid-right, mid-bottom
  mainColor?: string;
  maxWidth?: number;
}
export interface ProjectInternalInfoTypes {
  conclusion: string;
  discovery?: SectionTypes;
  firstProcess?: SectionTypes;
  future?: SectionTypes;
  nextProcess?: SectionTypes;
  myRole: string;
  opportunity: SectionTypes;
  overview: string;
  ownerCompany: OwnerCompanyTypes;
}

export interface YearsTypes {
  first: string;
  last?: string;
}
export interface ProjectMainTypes {
  client: string;
  headline: string;
  images: ProjectImagesTypes;
  mainColor: string;
  skills: string[];
  slug: string;
  years?: YearsTypes;
}

export type ProjectAllTypes = ProjectMainTypes & ProjectInternalInfoTypes;

export interface ProjectsType {
  [key: string]: ProjectAllTypes;
}

export interface HeadTagsProps {
  title: string;
  description: string;
  image: string;
  currentURL: string;
  locale: string;
  mainColor?: string;
}
