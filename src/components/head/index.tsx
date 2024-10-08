import Head from 'next/head';
import { HeadTagsProps } from '../../types/interfaces';

const HeadTags = ({ title, description, image, currentURL, locale, mainColor }: HeadTagsProps) => {
  return (
    <Head>
      <meta
        name="apple-mobile-web-app-title"
        content={`${
          title !== 'undefined' ? `${title} · ` : ''
        }Juan David · Product Designer & Frontend Hobbyist`}
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="application-name"
        content={`${
          title !== 'undefined' ? `${title} · ` : ''
        }Juan David · Product Designer & Frontend Hobbyist`}
      />
      {mainColor && <meta name="theme-color" content={mainColor} />}
      <title>{`${
        title !== 'undefined' ? `${title} · ` : ''
      }Juan David · Product Designer & Frontend Hobbyist`}</title>
      <meta
        name="title"
        property="title"
        content={`${
          title !== 'undefined' ? `${title} · ` : ''
        }Juan David · Product Designer & Frontend Hobbyist`}
      />
      <meta
        name="description"
        property="description"
        content={description ?? 'Juan David · Product Designer & Frontend Hobbyist'}
      />
      <meta
        name="og:title"
        property="og:title"
        content={`${
          title !== 'undefined' ? `${title} · ` : ''
        }Juan David · Product Designer & Frontend Hobbyist`}
      />
      <meta
        name="og:description"
        property="og:description"
        content={description ?? 'Juan David · Product Designer & Frontend Hobbyist'}
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
        content={`${
          title !== 'undefined' ? `${title} · ` : ''
        }Juan David · Product Designer & Frontend Hobbyist`}
      />
      <meta
        name="twitter:description"
        property="twitter:description"
        content={description ?? 'Juan David · Product Designer & Frontend Hobbyist'}
      />
      <link rel="shortcut icon" href={`/assets/images/favicon/favicon-dark.png`} />
      <link rel="icon" sizes="192x192" href={`/assets/images/favicon/favicon-dark.png`} />
    </Head>
  );
};

export default HeadTags;
