import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MAIN_BANNER_TEXTS } from '../assets/content/intex';
import { PROJECTS } from '../assets/content/projects';
import { scrollToIDElement } from '../assets/utils/components';
import MainBanner from '../components/mainBanner';
import ProjectsBanner from '../components/projects';
import PageLayout from '../layouts/pageLayout/intex';
import { ProjectsType } from '../types/interfaces';

interface Props {
  projects: ProjectsType;
}

const Home = ({ projects }: Props) => {
  const router = useRouter();
  useEffect(() => {
    if (router.query.g && router.query.g === 'projects') {
      scrollToIDElement(router.query.g);
    }
  }, []);
  return (
    <PageLayout
      title="Juan David Pérez • Portfolio"
      description="I’m an Interactive Designer & Frontend Developer and I love design comprehensive and user-based products & services for startups and companies."
    >
      <MainBanner headline={MAIN_BANNER_TEXTS.headline} paragraphs={MAIN_BANNER_TEXTS.paragraphs} />
      <ProjectsBanner projects={projects} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: PROJECTS,
    },
  };
};

export default Home;
