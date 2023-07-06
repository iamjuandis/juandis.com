import { GetStaticProps } from 'next';
import ListBanner from '../../components/listBanner';
import PageLayout from '../../layouts/pageLayout';
import { EXPERIENCE, INTRODUCTION } from '../../assets/content';
import AboutHero from '../../components/aboutHero';

const AboutPage = ({ experience, introduction }: any) => {
  return (
    <PageLayout title="About">
      <AboutHero title="Hi there!" content={introduction} />
      <ListBanner
        list={experience}
        title="Professional experience"
        button={{ variant: 'primary', label: 'Get resume', route: '/resume', target: '_blank' }}
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
