import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PROJECTS } from '../../assets/content/projects';
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

  const { client, mainColor, headline } = project;

  return (
    <div>
      Project: {client} {mainColor} {headline}
    </div>
  );
};

ProjectPage.getInitialProps = ({ query }: any) => {
  const projectSelected = PROJECTS[query.slug];
  if (projectSelected) {
    return {
      project: PROJECTS[query.slug],
      isValid: true,
    };
  } else {
    return {
      project: {},
      isValid: false,
    };
  }
};

export default ProjectPage;
