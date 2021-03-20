import { MAIN_BANNER_TEXTS } from '../assets/content/intex';
import { PROJECTS } from '../assets/content/projects';
import MainBanner from '../components/mainBanner';
import ProjectsBanner from '../components/projects';
import PageLayout from '../layouts/page_layout/intex';

const Home = () => {
  return (
    <PageLayout
      title="Juan David Pérez • Portfolio"
      description="I’m an Interactive Designer & Frontend Developer and I love design comprehensive and user-based products & services for startups and companies."
    >
      <MainBanner headline={MAIN_BANNER_TEXTS.headline} paragraphs={MAIN_BANNER_TEXTS.paragraphs} />
      <ProjectsBanner projects={PROJECTS} />
    </PageLayout>
  );
};

export default Home;
