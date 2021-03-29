import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import COLOR from '../../assets/style/colors';
import Footer from '../../components/footer';
import HeadTags from '../../components/head';
import Header from '../../components/header/header';
import Headline from '../../components/headline';
import Paragraph from '../../components/paragraph';
import Slider from '../../components/slider';
import { ProjectAllTypes } from '../../types/interfaces';
import {
  ItemFocus,
  ItemsFocusContainer,
  ProjectCompanyContainer,
  ProjectCompanyTexts,
  ProjectConclusionContainer,
  ProjectConclusionContent,
  ProjectDiscoveryContainer,
  ProjectDiscoveryContent,
  ProjectDiscoveryTexts,
  ProjectFocusContainer,
  ProjectFocusContent,
  ProjectFooter,
  ProjectLayoutContainer,
  ProjectLayoutCoverImageContainer,
  ProjectLayoutMainBanner,
  ProjectLayoutMainBannerContent,
  ProjectLayoutMainBannerTextContainer,
  ProjectMidSectionContainer,
  ProjectMidSectionContent,
  ProjectMidSectionTexts,
  ProjectOverviewContainer,
  ProjectOverviewContent,
  ProjectRoleBanner,
  ProjectRoleBannerContent,
  ProjectRoleTextBoxes,
  ProjectSliderContainer,
  ProjectSliderContent,
  ProjectSmallImgsContainer,
  ProjectSmallImgsContent,
} from './styled';

interface Props {
  project: ProjectAllTypes;
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
        title={`${project.client}: ${project.headline} • Projects • Juan David Pérez`}
        description={project.headline}
        locale={`${router.locale}`}
        currentURL={currentURL}
        image={project.images.previewImage}
        mainColor={project.mainColor}
      />
      <Header bgColor={project.mainColor} />
      <ProjectLayoutMainBanner background={project.mainColor}>
        <ProjectLayoutMainBannerContent>
          <ProjectLayoutMainBannerTextContainer>
            <Paragraph color={COLOR.white_cloud} children={project.client} />
            <br />
            <Headline color={COLOR.white_cloud} typeHeadline="h1">
              {project.headline}
            </Headline>
          </ProjectLayoutMainBannerTextContainer>
          <ProjectLayoutCoverImageContainer>
            <img src={project.images.coverImage} alt={project.headline} />
          </ProjectLayoutCoverImageContainer>
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
              oneColorIcon={project.ownerCompany?.oneColorIcon}
            >
              {project.ownerCompany.icon && (
                <div dangerouslySetInnerHTML={{ __html: project.ownerCompany.icon }} />
              )}
              <ProjectCompanyTexts>
                <Paragraph size={0.7} children={`<strong>${project.ownerCompany.name}</strong>`} />
                <Paragraph size={0.7}>{project.ownerCompany.country}</Paragraph>
              </ProjectCompanyTexts>
            </ProjectCompanyContainer>
          </ProjectRoleTextBoxes>
        </ProjectRoleBannerContent>
      </ProjectRoleBanner>

      <ProjectSliderContainer>
        <ProjectSliderContent>
          <Slider mainColor={project.mainColor} slides={project.images.sliderImages} />
        </ProjectSliderContent>
      </ProjectSliderContainer>

      <ProjectOverviewContainer>
        <ProjectOverviewContent>
          <Headline typeHeadline="h3" color={project.mainColor}>
            Overview
          </Headline>
          <br />
          <Paragraph columns={2} children={project.overview} />
        </ProjectOverviewContent>
      </ProjectOverviewContainer>

      <ProjectMidSectionContainer>
        <ProjectMidSectionContent>
          <ProjectMidSectionTexts>
            <Headline typeHeadline="h3" color={project.mainColor}>
              {project.midSection?.title}
            </Headline>
            <br />
            <Paragraph children={project.midSection?.paragraph} />
          </ProjectMidSectionTexts>
          <img src={project.images.middleImage} alt={project.headline} />
        </ProjectMidSectionContent>
      </ProjectMidSectionContainer>

      <ProjectFocusContainer>
        <ProjectFocusContent>
          {project.focusProject?.headline && (
            <>
              <Headline
                typeHeadline="h3"
                children={project.focusProject?.headline}
                color={project.mainColor}
              />
              <br />
            </>
          )}
          <Paragraph children={project.focusProject?.description} />
          {project.focusProject?.items && project.focusProject?.items.length > 0 && (
            <ItemsFocusContainer>
              {project.focusProject?.items.map((item: string, idx: number) => (
                <ItemFocus key={idx} color={project.mainColor}>
                  <span>{item}</span>
                </ItemFocus>
              ))}
            </ItemsFocusContainer>
          )}
          <br />
          <Paragraph columns={2} children={project.focusProject?.longDescription} />
        </ProjectFocusContent>
      </ProjectFocusContainer>

      {project.images.smallImages && project.focusProject?.items.length > 0 && (
        <ProjectSmallImgsContainer>
          <ProjectSmallImgsContent>
            {project.images.smallImages.map((image: string, idx: number) => (
              <img key={idx} src={image} alt={`${idx + 1}. ${project.client}`} />
            ))}
          </ProjectSmallImgsContent>
        </ProjectSmallImgsContainer>
      )}

      <ProjectDiscoveryContainer>
        <ProjectDiscoveryContent>
          <img src={project.images.discoveryImage} alt={project.headline} />
          <ProjectDiscoveryTexts>
            {project.discovery.headline && (
              <Headline typeHeadline="h3" children={project.discovery.headline} />
            )}
            <Paragraph children={project.discovery.description} />
            <br />
            {project.discovery.items.map((item: string, idx: number) => (
              <span key={idx}>
                <Paragraph size={1.5} key={idx} children={item} />
                <br />
              </span>
            ))}
          </ProjectDiscoveryTexts>
        </ProjectDiscoveryContent>
      </ProjectDiscoveryContainer>

      <ProjectConclusionContainer>
        <ProjectConclusionContent>
          <div>
            <Headline typeHeadline="h3" children="Conclusion" color={project.mainColor} />
            <br />
            <Paragraph children={project.conclusion} />
          </div>
        </ProjectConclusionContent>
        {project.images.footerImage && (
          <img src={project.images.footerImage} alt={project.headline} />
        )}
      </ProjectConclusionContainer>

      <ProjectFooter>
        <Paragraph
          color={`${COLOR.blue_universe}55`}
          size={0.7}
          children={`© 2021. All rights reserved.<br/> No part of this project may be reproduced, distributed, or transmitted in any form by any means, without the prior written permission of the author, except in the case of certain other non-commercial uses permited by copyright law.`}
        />
      </ProjectFooter>
      <Footer mainColor={project.mainColor} />
    </ProjectLayoutContainer>
  );
};

export default ProjectLayout;
