import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { OTHER_PROJECTS, MAIN_BANNER_TEXTS, META_INFO } from '../assets/content/index';
import { scrollToIDElement } from '../assets/utils/components';
import MainBanner from '../components/mainBanner';
import ProjectsBanner from '../components/projects';
import PageLayout from '../layouts/pageLayout/index';
import { ListBannerProps, MainBannerType, MetaInfoProps } from '../types/interfaces';
import { getAllProjects } from '../lib/api';
import ListBanner from '../components/listBanner';
import CTABanner from '../components/ctaBanner';
import ButtonLink from '../components/buttonLink';

interface Props {
  otherProjects: ListBannerProps[];
  projects: any;
  metaInfo: MetaInfoProps;
  bannerTexts: MainBannerType;
}

const Home = ({ otherProjects, projects, metaInfo, bannerTexts }: Props) => {
  //console.log('PROJECTS:', projects);
  const router = useRouter();
  useEffect(() => {
    if (router.query.g && router.query.g === 'projects') {
      scrollToIDElement(router.query.g);
    }
  }, []);
  return (
    <PageLayout image={metaInfo?.previewImage} description={metaInfo?.description}>
      <MainBanner headline={bannerTexts?.headline} paragraph={bannerTexts?.paragraph} />
      <ProjectsBanner projects={projects.nodes} />
      <CTABanner
        title="Know more about me"
        mainCTA={<ButtonLink label="About me" route="/about" variant="tiertiary" />}
        secondaryCTA={<ButtonLink label="Get resume" route="/resume" variant="primary" />}
      />
      <ListBanner list={otherProjects} title={`Other projects I've worked on`} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects(false);
  return {
    props: {
      otherProjects: OTHER_PROJECTS,
      projects: projects,
      metaInfo: META_INFO,
      bannerTexts: MAIN_BANNER_TEXTS,
    },
  };
};

export default Home;
