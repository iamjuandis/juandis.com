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
  icon: ReactNode;
  oneColorIcon?: boolean;
}

export interface ProjectImagesTypes {
  cardImage?: string;
  metaImage?: string;
  coverImages: string[];
  sliderImages?: string[];
}

export interface ProjectInternalInfoTypes {
  myRole: string;
  overview: string;
  ownerCompany: OwnerCompanyTypes;
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
