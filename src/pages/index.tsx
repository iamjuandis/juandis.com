import MainBanner from '../components/mainBanner';
import PageLayout from '../layouts/page_layout/intex';

const Home = () => {
  return (
    <PageLayout
      title="Juan David Pérez • Portfolio"
      description="I’m an Interactive Designer & Frontend Developer and I love design comprehensive and user-based products & services for startups and companies."
    >
      <MainBanner />
    </PageLayout>
  );
};

export default Home;
