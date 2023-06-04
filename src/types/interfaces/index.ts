import { ReactNode } from 'react';

export interface ButtonType {
  label: string;
  route?: any;
  variant: variantButtonTypes;
  onClick?: any;
  target?: linkTargetTypes;
}
export type variantButtonTypes = 'primary' | 'secondary' | 'tiertiary';
type linkTargetTypes = '_blank' | '_self';

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
  paragraphSize?: paragrapSizeTypes;
  children?: any;
}

type paragrapSizeTypes = 'text-huge' | 'text-large' | 'text-medium' | 'text-small' | 'text-caption';

export interface HeadlineType {
  children?: string;
  color?: string;
}

export interface PageLayoutTypes {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
}

export interface MainBannerType {
  headline: string;
  paragraph: string;
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
  first: string | number;
  last?: string | number;
}
export interface ProjectMainInterface {
  company: string;
  featuredImage: FeaturedImageTypes;
  role: string;
  slug: string;
  title: string;
  year: string | number;
}

export interface FeaturedImageTypes {
  altText: string;
  sourceUrl: string;
}

export type ProjectAllTypes = ProjectInternalInfoTypes;

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

export interface MetaInfoProps {
  description: string;
  mainTitle: string;
  previewImage: string;
}

export interface ExperienceProps {
  country?: string;
  company: string;
  position: string;
  years: YearsTypes;
}

export interface HeaderTypes {
  bgColor?: string;
  scrollTop?: number;
  limitScroll?: number;
  isOpen?: boolean;
}

export interface ThemeMode {
  darkMode: boolean;
  callback: () => void;
}
