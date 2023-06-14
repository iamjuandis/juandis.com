import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../../components/footer';
import HeadTags from '../../components/head';
import Header from '../../components/header/header';
import Paragraph from '../../components/paragraph';
import { MetaInfoProps } from '../../types/interfaces';
import { ProjectFooter, ProjectLayoutContainer, ProjectContent } from './styled';
import ProjectMainBanner from '../../components/projectMainBanner';
import COLORS from '../../assets/style/colors';
import hoursBetweenDates from '../../assets/utils/functions/hoursBetweenDates';
import ProjectAuthForm from '../../components/projectAuthForm';
import { getFullProjectById } from '../../lib/api';
import Loading from '../../components/loading';

interface Props {
  metaInfo: MetaInfoProps;
  project: any;
}

const ProjectLayout = ({ project }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentURL, setCurrentURL] = useState<string>('https://juandis.com/');
  const [auth, setAuth] = useState<boolean>(false);
  const [enteredPassword, setEnteredPassword] = useState<string>('');
  const [errorPassword, setErrorPassword] = useState<boolean>(false);
  const router = useRouter();
  const [content, setContent] = useState<any>(null);

  const getContent = async () => {
    setLoading(true);
    const postContent = await getFullProjectById(project.databaseId);
    //TODO - build a Node API to get posts information.
    //const testContent = await getProjectContentBySlug(project.slug);
    //console.log('TEST', testContent);
    setContent(postContent);
    setAuth(true);
    setLoading(false);
  };

  // Block auth to protected projects
  const blockAuth = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Sets false Auth
      localStorage.setItem('authLocal', 'false');
      // Clean date local
      localStorage.removeItem('dateAuthLocal');
      setAuth(false);
      setLoading(false);
    }
  };

  // Hook to check project protection status
  useEffect(() => {
    setLoading(true);
    if (typeof window !== 'undefined' && window.localStorage) {
      //Validate if projects needs protection
      if (project?.acfProjects?.protected === true) {
        let authLocal = localStorage.getItem('authLocal');
        let dateAuthLocal = localStorage.getItem('dateAuthLocal');

        if (authLocal === null) {
          blockAuth();
        } else if (authLocal === 'true' && dateAuthLocal !== null) {
          if (hoursBetweenDates(dateAuthLocal) > 12) {
            blockAuth();
          } else {
            // Get access
            getContent();
          }
        } else {
          blockAuth();
        }
      } else {
        getContent();
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentURL(
        `${window.location.protocol}//${window.location.host}${window.location.pathname}`
      );
    }
  }, []);

  const onChangePassword = (e: any) => {
    e.preventDefault();
    setEnteredPassword(e.target.value);
  };

  const checkPassword = (event: any) => {
    event.preventDefault();

    if (enteredPassword === process.env.PASSWORD) {
      // Get access
      localStorage.setItem('authLocal', 'true');
      localStorage.setItem('dateAuthLocal', `${new Date().toISOString()}`);
      getContent();
    } else {
      blockAuth();
      setErrorPassword(true);
    }
  };

  return (
    <ProjectLayoutContainer>
      <HeadTags
        title={`${project?.title}`}
        description={project.excerpt}
        locale={`${router.locale}`}
        currentURL={currentURL}
        image={project?.featuredImage?.node.sourceUrl}
      />
      <Header />

      {loading ? (
        <Loading />
      ) : project?.acfProjects?.protected === true && auth === false ? (
        <ProjectAuthForm
          onSubmitForm={checkPassword}
          onChangeInput={onChangePassword}
          passwordValue={enteredPassword}
          errorPassword={errorPassword}
          projectImage={project?.featuredImage?.node.sourceUrl}
          projectTitle={project.title}
          projectCompany={project.acfProjects.company}
        />
      ) : (
        <>
          <ProjectMainBanner
            title={project.title}
            company={project.acfProjects.company}
            location={project.acfProjects.location}
            role={project.acfProjects.role}
            year={project.acfProjects.year}
          />
          <ProjectContent dangerouslySetInnerHTML={{ __html: content }} />
        </>
      )}

      <ProjectFooter>
        <Paragraph
          color={`${COLORS.green_dark}55`}
          children={`© ${
            project?.acfProjects?.year !== new Date()?.getFullYear()
              ? `${project?.acfProjects?.year} - `
              : ''
          }${new Date()?.getFullYear()}. All rights reserved.<br/> No part of this project may be reproduced, distributed, or transmitted in any form by any means, without the prior written permission of the author, except in the case of certain other non-commercial uses permitted by copyright law.`}
        />
      </ProjectFooter>
      <Footer />
    </ProjectLayoutContainer>
  );
};

export default ProjectLayout;
