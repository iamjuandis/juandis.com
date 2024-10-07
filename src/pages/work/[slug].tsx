import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
//import { META_INFO } from '../../assets/content/index';
import ProjectLayout from '../../layouts/projectLayout';
import { MetaInfoProps, ProjectAllTypes } from '../../types/interfaces';
import { getAllProjectsSlug } from '../../lib/api';

interface Props {
  metaInfo: MetaInfoProps;
  project: ProjectAllTypes;
  notFound: boolean;
}

const ProjectPage = ({ metaInfo, project, notFound }: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (notFound) {
      router.push('/404');
    }
  }, []);

  return <ProjectLayout project={project} metaInfo={metaInfo} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllProjectsSlug();

  return {
    paths: allPosts?.edges?.map(({ node }: any) => `${node.slug}`) || [],
    fallback: 'blocking',
  };
};

/* export const getStaticProps: GetStaticProps = async (context) => {
  const project: any = await getPreviewProjectBySlug(`${context?.params?.slug}`).then(
    (value: any) => {
      if (value === 'null' || value === null) {
        return {
          props: {
            metaInfo: META_INFO,
            project: {},
            notFound: true,
          },
        };
      } else {
        return {
          props: {
            metaInfo: META_INFO,
            project: value,
            notFound: false,
          },
        };
      }
    }
  );

  return project;
}; */

export default ProjectPage;
