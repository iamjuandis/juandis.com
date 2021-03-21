import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import COLOR from '../../assets/style/colors';
import Footer from '../../components/footer';
import HeadTags from '../../components/head';
import Header from '../../components/header/header';
import Headline from '../../components/headline';
import Paragraph from '../../components/paragraph';
import { ProjectAllTypes } from '../../types/interfaces';
import {
  ProjectLayoutContainer,
  ProjectLayoutMainBanner,
  ProjectLayoutMainBannerContent,
} from './styled';

interface Props {
  project: ProjectAllTypes;
}

const ProjectLayout = ({ project }: Props) => {
  const [currentURL, setCurrentURL] = useState('https://juandis.com/');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentURL(
        `${window.location.protocol}//${window.location.host}${window.location.pathname}`
      );
    }
  }, []);
  return (
    <ProjectLayoutContainer>
      <HeadTags
        title={`${project.client}, ${project.headline} • Projects • Juan David Pérez`}
        description={project.headline}
        locale={`${router.locale}`}
        currentURL={currentURL}
        image={`https://juandis.com/`}
      />
      <Header />
      <ProjectLayoutMainBanner background={project.mainColor}>
        <ProjectLayoutMainBannerContent>
          <Paragraph color={COLOR.white_cloud}>{project.client}</Paragraph>
          <Headline color={COLOR.white_cloud} typeHeadline="h1">
            {project.headline}
          </Headline>
        </ProjectLayoutMainBannerContent>
      </ProjectLayoutMainBanner>
      <Footer />
    </ProjectLayoutContainer>
  );
};

export default ProjectLayout;
