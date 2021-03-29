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
  coverImage: string;
  discoveryImage: string;
  footerImage: string;
  middleImage: string;
  previewImage: string;
  sliderImages: string[];
  smallImages: string[];
}

export interface MidSectionType {
  title: string;
  paragraph: string;
}

export interface DiscoveryType {
  headline?: string;
  description: string;
  items: string[];
}

export interface FocusType {
  headline?: string;
  description: string;
  items: string[];
  longDescription: string;
}
export interface ProjectInternalInfoTypes {
  conclusion: string;
  discovery: DiscoveryType;
  focusProject: FocusType;
  myRole: string;
  overview: string;
  ownerCompany: OwnerCompanyTypes;
  midSection: MidSectionType;
}
export interface ProjectMainTypes {
  client: string;
  headline: string;
  images: ProjectImagesTypes;
  mainColor: string;
  skills: string[];
  slug: string;
  year?: string;
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
