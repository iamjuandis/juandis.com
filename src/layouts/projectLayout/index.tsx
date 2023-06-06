import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '../../components/footer';
import HeadTags from '../../components/head';
import Header from '../../components/header/header';
import Paragraph from '../../components/paragraph';
import { MetaInfoProps } from '../../types/interfaces';
import {
  ProjectCompanyContainer,
  ProjectCompanyTexts,
  ProjectFooter,
  ProjectLayoutContainer,
  ProjectRoleBanner,
  ProjectRoleBannerContent,
  ProjectRoleTextBoxes,
  ProjectContent,
} from './styled';
import ProjectMainBanner from '../../components/projectMainBanner';
import COLORS from '../../assets/style/colors';
import hoursBetweenDates from '../../assets/utils/functions/hoursBetweenDates';
import ProjectAuthForm from '../../components/projectAuthForm';

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

  // Block auth to protected projects
  const blockAuth = () => {
    // Sets false Auth
    localStorage.setItem('authLocal', 'false');
    // Clean date local
    localStorage.removeItem('dateAuthLocal');
    setAuth(false);
  };

  // Hook to check project protection status
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      //Validate if projects needs protection
      if (project?.acfProjects?.protected === true) {
        let authLocal = localStorage.getItem('authLocal');
        let dateAuthLocal = localStorage.getItem('dateAuthLocal');

        if (authLocal === null) {
          blockAuth();
          setLoading(false);
        } else if (authLocal === 'true' && dateAuthLocal !== null) {
          if (hoursBetweenDates(dateAuthLocal) > 12) {
            blockAuth();
            setLoading(false);
          } else {
            setAuth(true);
            setLoading(false);
          }
        } else {
          blockAuth();
          setLoading(false);
        }
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
      localStorage.setItem('authLocal', 'true');
      localStorage.setItem('dateAuthLocal', `${new Date().toISOString()}`);
      setAuth(true);
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
        image={project.featuredImage.sourceUrl}
      />
      <Header />

      {loading ? (
        <h1>LOADING</h1>
      ) : auth === false ? (
        <ProjectAuthForm
          onSubmitForm={checkPassword}
          onChangeInput={onChangePassword}
          passwordValue={enteredPassword}
          errorPassword={errorPassword}
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
          <ProjectRoleBanner>
            <ProjectRoleBannerContent>
              <ProjectRoleTextBoxes>
                <h3>Role</h3>
                <Paragraph children={project.acfProjects.role} />
                <ProjectCompanyContainer
                  color={project.mainColor}
                  oneColorIcon={project.ownerCompany?.oneColorIcon}
                >
                  {/* {project.ownerCompany.icon && (
                <div dangerouslySetInnerHTML={{ __html: project.ownerCompany?.icon }} />
              )} */}
                  <ProjectCompanyTexts>
                    <Paragraph children={`<strong>${project.acfProjects.company}</strong>`} />
                    <Paragraph>{project.acfProjects.location}</Paragraph>
                  </ProjectCompanyTexts>
                </ProjectCompanyContainer>
              </ProjectRoleTextBoxes>
            </ProjectRoleBannerContent>
          </ProjectRoleBanner>
          {/* <ProjectSliderContainer>
        <ProjectSliderContent>
          <Slider mainColor={project.mainColor} slides={project.images.sliderImages} />
        </ProjectSliderContent>
      </ProjectSliderContainer> */}
          <ProjectContent dangerouslySetInnerHTML={{ __html: project.content }} />{' '}
        </>
      )}

      <ProjectFooter>
        <Paragraph
          color={`${COLORS.green_dark}55`}
          children={`© ${
            project?.years?.first !== new Date()?.getFullYear() ? `${project.years?.first} - ` : ''
          }${new Date()?.getFullYear()}. All rights reserved.<br/> No part of this project may be reproduced, distributed, or transmitted in any form by any means, without the prior written permission of the author, except in the case of certain other non-commercial uses permitted by copyright law.`}
        />
      </ProjectFooter>
      <Footer />
    </ProjectLayoutContainer>
  );
};

export default ProjectLayout;
