import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { META_INFO } from '../../assets/content/index';
import ProjectLayout from '../../layouts/projectLayout';
import { MetaInfoProps, ProjectAllTypes } from '../../types/interfaces';
import { getAllProjectsSlug, getProjectBySlug } from '../../lib/api';

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
  const allPosts = await getAllProjectsSlug();

  return {
    paths: allPosts?.edges?.map(({ node }: any) => `${node.slug}`) || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const project = await getProjectBySlug(`${context?.params?.slug}`);
  const metaInfo = META_INFO;

  if (project) {
    return {
      props: {
        metaInfo: metaInfo,
        project: project,
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
