import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { EXPERIENCES, MAIN_BANNER_TEXTS, META_INFO } from '../assets/content/intex';
import { PROJECTS } from '../assets/content/projects';
import { scrollToIDElement } from '../assets/utils/components';
import ExperienceBanner from '../components/experienceBanner';
import MainBanner from '../components/mainBanner';
import ProjectsBanner from '../components/projects';
import PageLayout from '../layouts/pageLayout/index';
import { ExperienceProps, MainBannerType, MetaInfoProps, ProjectsType } from '../types/interfaces';

interface Props {
  experiences: ExperienceProps[];
  projects: ProjectsType;
  metaInfo: MetaInfoProps;
  bannerTexts: MainBannerType;
}

const Home = ({ experiences, projects, metaInfo, bannerTexts }: Props) => {
  const router = useRouter();
  useEffect(() => {
    if (router.query.g && router.query.g === 'projects') {
      scrollToIDElement(router.query.g);
    }
  }, []);
  return (
    <PageLayout image={metaInfo?.previewImage} description={metaInfo?.description}>
      <MainBanner headline={bannerTexts?.headline} paragraph={bannerTexts?.paragraph} />
      <ProjectsBanner projects={projects} />
      <ExperienceBanner experiences={experiences} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      experiences: EXPERIENCES,
      projects: PROJECTS,
      metaInfo: META_INFO,
      bannerTexts: MAIN_BANNER_TEXTS,
    },
  };
};

export default Home;
