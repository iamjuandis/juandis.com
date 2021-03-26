import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import COLOR from '../../assets/style/colors';
import Footer from '../../components/footer';
import HeadTags from '../../components/head';
import Header from '../../components/header/header';
import Headline from '../../components/headline';
import Paragraph from '../../components/paragraph';
import { ProjectAllTypes } from '../../types/interfaces';
import {
  ProjectCompanyContainer,
  ProjectCompanyTexts,
  ProjectFooter,
  ProjectLayoutContainer,
  ProjectLayoutMainBanner,
  ProjectLayoutMainBannerContent,
  ProjectLayoutMainBannerTextContainer,
  ProjectRoleBanner,
  ProjectRoleBannerContent,
  ProjectRoleTextBoxes,
} from './styled';

interface Props {
  project: ProjectAllTypes;
}

const ProjectLayout = ({ project }: Props) => {
  const [currentURL, setCurrentURL] = useState('https://juandis.com/');
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
        title={`${project.client}, ${project.headline} • Projects • Juan David Pérez`}
        description={project.headline}
        locale={`${router.locale}`}
        currentURL={currentURL}
        image={`https://juandis.com/`}
      />
      <Header bgColor={project.mainColor} />
      <ProjectLayoutMainBanner background={project.mainColor}>
        <ProjectLayoutMainBannerContent>
          <ProjectLayoutMainBannerTextContainer>
            <Paragraph color={COLOR.white_cloud}>{project.client}</Paragraph>
            <Headline color={COLOR.white_cloud} typeHeadline="h1">
              {project.headline}
            </Headline>
          </ProjectLayoutMainBannerTextContainer>
        </ProjectLayoutMainBannerContent>
      </ProjectLayoutMainBanner>
      <ProjectRoleBanner>
        <ProjectRoleBannerContent>
          <ProjectRoleTextBoxes>
            <Headline typeHeadline="h3" color={project.mainColor}>
              Role
            </Headline>
            <br />
            <Paragraph
              children={`I led the project, the user interface and experience design for the first and last functional prototype. Also, I develop from scratch the functional web prototype to get precise and deep feedback about the product.`}
            />
            <ProjectCompanyContainer
              color={project.mainColor}
              oneColorIcon={Boolean(project.ownerCompany.oneColorIcon)}
            >
              {project.ownerCompany.icon}
              <ProjectCompanyTexts>
                <Paragraph size={14} children={`<strong>${project.ownerCompany.name}</strong>`} />
                <Paragraph size={14}>{project.ownerCompany.country}</Paragraph>
              </ProjectCompanyTexts>
            </ProjectCompanyContainer>
          </ProjectRoleTextBoxes>
        </ProjectRoleBannerContent>
      </ProjectRoleBanner>
      <ProjectFooter>
        <Paragraph
          color={`${COLOR.blue_universe}55`}
          size={14}
          children={`© 2021. All rights reserved.<br/> No part of this project may be reproduced, distributed, or transmitted in any form by any means, without the prior written permission of the author, except in the case of certain other non-commercial uses permited by copyright law. `}
        />
      </ProjectFooter>
      <Footer mainColor={project.mainColor} />
    </ProjectLayoutContainer>
  );
};

export default ProjectLayout;
