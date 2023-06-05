import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import COLOR from '../../assets/style/colors';
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
  ProjectLayoutCoverImageContainer,
  ProjectLayoutMainBanner,
  ProjectLayoutMainBannerContent,
  ProjectLayoutMainBannerTextContainer,
  ProjectRoleBanner,
  ProjectRoleBannerContent,
  ProjectRoleTextBoxes,
  ProjectContent,
  ProjectSmallImgsContainer,
  ProjectSmallImgsContent,
} from './styled';
import ProjectSection from '../../components/projectSection';
import Image from 'next/image';

interface Props {
  metaInfo: MetaInfoProps;
  project: any;
}

const ProjectLayout = ({ project }: Props) => {
  const [currentURL, setCurrentURL] = useState<string>('https://juandis.com/');
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
        title={`${project?.title}`}
        description={project.excerpt}
        locale={`${router.locale}`}
        currentURL={currentURL}
        image={project.featuredImage.sourceUrl}
      />
      <Header />
      <ProjectLayoutMainBanner>
        <ProjectLayoutMainBannerContent>
          <ProjectLayoutMainBannerTextContainer>
            <Paragraph color={COLOR.white_cloud} children={project.client} />
            <br />
            <h1>{project?.title}</h1>
            <br />
            <Paragraph
              color={COLOR.white_cloud}
              children={`${project.years?.first}${
                project.years?.last ? ` - ${project.years?.last}` : ''
              }`}
            />
          </ProjectLayoutMainBannerTextContainer>
          <ProjectLayoutCoverImageContainer>
            <img src={project.featuredImage.sourceUrl} alt={project.title} />
          </ProjectLayoutCoverImageContainer>
        </ProjectLayoutMainBannerContent>
      </ProjectLayoutMainBanner>

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

      <ProjectContent dangerouslySetInnerHTML={{ __html: project.content }} />

      <ProjectFooter>
        <Paragraph
          color={`${COLOR.blue_universe}55`}
          children={`© ${
            project?.years?.first !== new Date()?.getFullYear() ? `${project.years?.first} - ` : ''
          }${new Date()?.getFullYear()}. All rights reserved.<br/> No part of this project may be reproduced, distributed, or transmitted in any form by any means, without the prior written permission of the author, except in the case of certain other non-commercial uses permitted by copyright law.`}
        />
      </ProjectFooter>
      <Footer mainColor={project.mainColor} />
    </ProjectLayoutContainer>
  );
};

export default ProjectLayout;
