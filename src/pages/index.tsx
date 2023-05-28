import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { EXPERIENCES, MAIN_BANNER_TEXTS, META_INFO } from '../assets/content/index';
//import { PROJECTS } from '../assets/content/projects';
import { scrollToIDElement } from '../assets/utils/components';
import ExperienceBanner from '../components/experienceBanner';
import MainBanner from '../components/mainBanner';
import ProjectsBanner from '../components/projects';
import PageLayout from '../layouts/pageLayout/index';
import { ExperienceProps, MainBannerType, MetaInfoProps } from '../types/interfaces';
//import { postsToProjects } from '../lib/functions';
import { getAllProjects } from '../lib/api';

interface Props {
  experiences: ExperienceProps[];
  projects: any;
  metaInfo: MetaInfoProps;
  bannerTexts: MainBannerType;
}

const Home = ({ experiences, projects, metaInfo, bannerTexts }: Props) => {
  console.log('PROJECTS:', projects);
  //console.log('GPOSTS', gposts.nodes);

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
  // Projects category: 5
  //const postsData = await fetch(`${process.env.WORDPRESS_API_URL}/posts?categories=5`);
  //const posts = await postsData.json();
  //const projects = await postsToProjects(posts);
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
