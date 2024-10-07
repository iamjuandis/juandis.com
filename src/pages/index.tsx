import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MAIN_BANNER_TEXTS, META_INFO } from '../assets/content/index';
import { scrollToIDElement } from '../assets/utils/components';
import MainBanner from '../components/mainBanner';
import PageLayout from '../layouts/pageLayout/index';
import { ListBannerProps, MainBannerType, MetaInfoProps } from '../types/interfaces';
import { AVAILABLE_PROJECTS } from '../assets/content/availableProjects';

interface Props {
  otherProjects: ListBannerProps[];
  projects: any;
  metaInfo: MetaInfoProps;
  bannerTexts: MainBannerType;
}

const Home = ({ metaInfo, bannerTexts }: Props) => {
  const router = useRouter();
  useEffect(() => {
    if (router.query.g && router.query.g === 'projects') {
      scrollToIDElement(router.query.g);
    }
  }, []);
  return (
    <PageLayout image={metaInfo?.previewImage} description={metaInfo?.description}>
      <MainBanner headline={bannerTexts?.headline} paragraph={bannerTexts?.paragraph} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  //const projects = await getAllProjects(false);
  return {
    props: {
      projects: AVAILABLE_PROJECTS,
      metaInfo: META_INFO,
      bannerTexts: MAIN_BANNER_TEXTS,
    },
  };
};

export default Home;
