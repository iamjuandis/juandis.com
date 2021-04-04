import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PROJECTS } from '../../assets/content/projects';
import ProjectLayout from '../../layouts/projectLayout';
import { ProjectAllTypes, ProjectsType } from '../../types/interfaces';

interface Props {
  project: ProjectAllTypes;
  isValid: boolean;
}

const ProjectPage = ({ project, isValid }: Props) => {
  const router = useRouter();
  useEffect(() => {
    if (!isValid) {
      router.push('/404');
    }
  }, []);

  return <ProjectLayout project={project} />;
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

  if (projectSelected) {
    return {
      props: {
        project: PROJECTS[`${context?.params?.slug}`],
        isValid: true,
      },
    };
  } else {
    return {
      props: {
        project: {},
        isValid: false,
      },
    };
  }
};

export default ProjectPage;
