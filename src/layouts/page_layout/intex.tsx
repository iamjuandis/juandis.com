import { ReactNode } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header/header';
import { PageLayoutContainer, PageMainContent } from './styled';

interface PageLayoutTypes {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutTypes) => {
  return (
    <PageLayoutContainer>
      <Header />
      <PageMainContent>{children}</PageMainContent>
      <Footer />
    </PageLayoutContainer>
  );
};

export default PageLayout;
