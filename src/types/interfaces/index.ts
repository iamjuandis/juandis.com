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
  highlightColor?: string;
  size?: number;
  children?: any;
}

export interface HeadlineType {
  color?: string;
  typeHeadline: string;
  children?: string;
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
  metaImage?: string;
  coverImage: string;
  sliderImages: string[];
  middleImage: string;
}

export interface MidSectionType {
  title: string;
  paragraph: string;
}
export interface ProjectInternalInfoTypes {
  conclusion: string;
  myRole: string;
  overview: string;
  ownerCompany: OwnerCompanyTypes;
  midSection: MidSectionType;
}
export interface ProjectMainTypes {
  client: string;
  headline: string;
  mainColor: string;
  slug: string;
  images: ProjectImagesTypes;
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
}
