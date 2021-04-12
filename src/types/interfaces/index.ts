import { ReactNode } from 'react';

export interface NavOptionType {
  label?: string;
  highlightColor?: string;
  icon?: any;
  isExternal?: boolean;
  onClick?: any;
  route?: string | undefined;
  target?: any;
  type: string;
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
  previewImage: string;
  sliderImages: string[];
  smallImages: string[];
}

type AlignementTypes =
  | 'wide-up'
  | 'wide-left'
  | 'wide-right'
  | 'wide-bottom'
  | 'mid-up'
  | 'mid-left'
  | 'mid-right'
  | 'mid-bottom';

interface ImageInterface {
  height: number;
  priority?: boolean;
  src: string;
  width: number;
}

export interface ProjectSectionType {
  alignment?: AlignementTypes;
  columns?: 0 | 1 | 2 | 3;
  content?: string;
  image?: ImageInterface;
  mainColor?: string;
  marginBottom?: boolean;
  maxWidth?: number;
  title?: string;
}

export interface SectionsType {
  [key: string]: ProjectSectionType;
}
export interface ProjectInternalInfoTypes {
  conclusion: ProjectSectionType;
  myRole: string;
  overview: string;
  ownerCompany: OwnerCompanyTypes;
  sections: SectionsType;
}

export interface YearsTypes {
  first: number;
  last?: string | number;
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
