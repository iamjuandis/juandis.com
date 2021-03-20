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
  children?: string;
}

export interface HeadlineType {
  color?: string;
  typeHeadline: string;
  children?: string;
}

export interface PageLayoutTypes {
  children: ReactNode;
  title: string;
  description: string;
  image?: string;
}

export interface MainBannerType {
  headline: string;
  paragraphs: string[];
}

export interface ProjectTypes {
  client: string;
  headline: string;
  mainColor: string;
}
export interface ProjectsType {
  [key: string]: ProjectTypes;
}
