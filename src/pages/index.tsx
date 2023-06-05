import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { EXPERIENCES, MAIN_BANNER_TEXTS, META_INFO } from '../assets/content/index';
import { scrollToIDElement } from '../assets/utils/components';
import ExperienceBanner from '../components/experienceBanner';
import MainBanner from '../components/mainBanner';
import ProjectsBanner from '../components/projects';
import PageLayout from '../layouts/pageLayout/index';
import { ExperienceProps, MainBannerType, MetaInfoProps } from '../types/interfaces';
import { getAllProjects } from '../lib/api';

interface Props {
  experiences: ExperienceProps[];
  projects: any;
  metaInfo: MetaInfoProps;
  bannerTexts: MainBannerType;
}

const Home = ({ experiences, projects, metaInfo, bannerTexts }: Props) => {
  console.log('PROJECTS:', projects);

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
      <ExperienceBanner experiences={experiences} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects(false);
  return {
    props: {
      experiences: EXPERIENCES,
      projects: projects,
      metaInfo: META_INFO,
      bannerTexts: MAIN_BANNER_TEXTS,
    },
  };
};

export default Home;
