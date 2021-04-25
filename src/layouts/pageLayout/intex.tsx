import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import COLOR from '../../assets/style/colors';
import Footer from '../../components/footer';
import HeadTags from '../../components/head';
import Header from '../../components/header/header';
import { PageLayoutTypes } from '../../types/interfaces';
import { PageLayoutContainer, PageMainContent } from './styled';

const PageLayout = ({ children, description, image, title }: PageLayoutTypes) => {
  const [currentURL, setCurrentURL] = useState('https://juandis.com/');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentURL(
        `${window.location.protocol}//${window.location.host}${window.location.pathname}`
      );
    }
  }, []);
  return (
    <PageLayoutContainer>
      <HeadTags
        title={title ?? 'Juan David Pérez • Portfolio'}
        description={description ?? 'Juan David Pérez • Portfolio'}
        locale={`${router.locale}`}
        currentURL={currentURL}
        image={`${image}`}
      />
      <Header />
      <PageMainContent>{children}</PageMainContent>
      <Footer mainColor={COLOR.yellow_sunrise} />
    </PageLayoutContainer>
  );
};

export default PageLayout;
