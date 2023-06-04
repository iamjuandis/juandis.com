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
  notFound: boolean;
}

const ProjectPage = ({ metaInfo, project, notFound }: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (notFound) {
      console.log('va a 404');
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

export const getStaticProps: GetStaticProps = async (context) => {
  const metaInfo = META_INFO;
  const project: any = await getProjectBySlug(`${context?.params?.slug}`).then((value: any) => {
    if (value === 'null' || value === null) {
      return {
        props: {
          metaInfo: metaInfo,
          project: {},
          notFound: true,
        },
      };
    } else {
      return {
        props: {
          metaInfo: metaInfo,
          project: value,
          notFound: false,
        },
      };
    }
  });

  return project;
};

export default ProjectPage;
