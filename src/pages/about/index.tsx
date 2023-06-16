import { GetStaticProps } from 'next';
import ListBanner from '../../components/listBanner';
import PageLayout from '../../layouts/pageLayout';
import { EXPERIENCE, INTRODUCTION } from '../../assets/content';
import AboutHero from '../../components/aboutHero';
import ButtonLink from '../../components/buttonLink';

const AboutPage = ({ experience, introduction }: any) => {
  return (
    <PageLayout title="About">
      <AboutHero
        title="Hi there!"
        content={introduction}
        button={<ButtonLink label="Get resume" route="/resume" variant="secondary" />}
      />
      <ListBanner
        list={experience}
        title="Professional experience"
        button={{ variant: 'primary', label: 'Get resume', route: '/resume' }}
      />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      experience: EXPERIENCE,
      introduction: INTRODUCTION,
    },
  };
};

export default AboutPage;
