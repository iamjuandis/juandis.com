import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { META_INFO } from '../../assets/content/index';
import { PROJECTS } from '../../assets/content/projects';
import ProjectLayout from '../../layouts/projectLayout';
import { MetaInfoProps, ProjectAllTypes, ProjectsType } from '../../types/interfaces';

interface Props {
  metaInfo: MetaInfoProps;
  project: ProjectAllTypes;
  isValid: boolean;
}

const ProjectPage = ({ metaInfo, project, isValid }: Props) => {
  const router = useRouter();
  useEffect(() => {
    if (!isValid) {
      router.push('/404');
    }
  }, []);

  return <ProjectLayout project={project} metaInfo={metaInfo} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects: ProjectsType = PROJECTS;

  const paths = Object.keys(projects)?.map((project) => ({
    params: { slug: projects[project].slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projectSelected = PROJECTS[`${context?.params?.slug}`];
  const metaInfo = META_INFO;

  if (projectSelected) {
    return {
      props: {
        metaInfo: metaInfo,
        project: PROJECTS[`${context?.params?.slug}`],
        isValid: true,
      },
    };
  } else {
    return {
      props: {
        metaInfo: metaInfo,
        project: {},
        isValid: false,
      },
    };
  }
};

export default ProjectPage;
