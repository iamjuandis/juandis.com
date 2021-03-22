import Head from 'next/head';
import { HeadTagsProps } from '../../types/interfaces';

const HeadTags = ({ title, description, image, currentURL, locale }: HeadTagsProps) => (
  <Head>
    <title>{title ?? 'Juan David Pérez • Portfolio'}</title>
    <meta name="title" property="title" content={title ?? 'Juan David Pérez • Portfolio'} />
    <meta
      name="description"
      property="description"
      content={description ?? 'Juan David Pérez • Portfolio'}
    />
    <meta name="og:title" property="og:title" content={title ?? 'Juan David Pérez • Portfolio'} />
    <meta
      name="og:description"
      property="og:description"
      content={description ?? 'Juan David Pérez • Portfolio'}
    />
    <meta name="og:image" property="og:image" content={image} />
    <meta name="og:url" property="og:url" content={currentURL} />
    <meta name="og:type" property="og:type" content="website" />
    <meta name="og:locale" property="og:locale" content={locale} />
    <meta name="twitter:url" property="twitter:url" content={currentURL} />
    <meta name="twitter:card" property="twitter:card" content="summary" />
    <meta
      name="twitter:title"
      property="twitter:title"
      content={title ?? 'Juan David Pérez • Portfolio'}
    />
    <meta
      name="twitter:description"
      property="twitter:description"
      content={description ?? 'Juan David Pérez • Portfolio'}
    />
  </Head>
);

export default HeadTags;