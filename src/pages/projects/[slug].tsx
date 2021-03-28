import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PROJECTS } from '../../assets/content/projects';
import ProjectLayout from '../../layouts/projectLayout';
import { ProjectAllTypes } from '../../types/interfaces';

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

export const getServerSideProps = async ({ query }: any) => {
  const projectSelected = PROJECTS[query.slug];

  if (projectSelected) {
    return {
      props: {
        project: PROJECTS[query.slug],
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
