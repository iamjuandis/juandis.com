import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import COLOR from '../../assets/style/colors';
import Footer from '../../components/footer';
import HeadTags from '../../components/head';
import Header from '../../components/header/header';
import Headline from '../../components/headline';
import Paragraph from '../../components/paragraph';
import Slider from '../../components/slider';
import { MetaInfoProps, ProjectAllTypes, ProjectSectionType } from '../../types/interfaces';
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
  ProjectSliderContainer,
  ProjectSliderContent,
  ProjectSmallImgsContainer,
  ProjectSmallImgsContent,
} from './styled';
import ProjectSection from '../../components/projectSection';
import Image from 'next/image';

interface Props {
  metaInfo: MetaInfoProps;
  project: ProjectAllTypes;
}

const ProjectLayout = ({ metaInfo, project }: Props) => {
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
        title={`${project.client}: ${project.headline} • ${metaInfo?.mainTitle}`}
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
            <Headline color={COLOR.white_cloud} typeHeadline="h1" fontSize={50}>
              {project.headline}
            </Headline>
            <br />
            <Paragraph
              color={COLOR.white_cloud}
              children={`${project.years?.first}${
                project.years?.last ? ` - ${project.years?.last}` : ''
              }`}
            />
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
            <Paragraph children={project.myRole} />
            <ProjectCompanyContainer
              color={project.mainColor}
              oneColorIcon={project.ownerCompany?.oneColorIcon}
            >
              {project.ownerCompany.icon && (
                <div dangerouslySetInnerHTML={{ __html: project.ownerCompany?.icon }} />
              )}
              <ProjectCompanyTexts>
                <Paragraph size={0.7} children={`<strong>${project.ownerCompany?.name}</strong>`} />
                <Paragraph size={0.7}>{project.ownerCompany?.country}</Paragraph>
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

      <ProjectSection
        alignment="mid-up"
        title="Overview"
        content={project.overview}
        columns={2}
        mainColor={project.mainColor}
      />

      {project.sections &&
        Object.entries(project.sections)?.map(
          ([key, section]: [string, ProjectSectionType], index: number) => {
            return (
              <ProjectSection
                alignment={section.alignment}
                columns={section.columns}
                content={section.content}
                image={section.image}
                key={`${key}-${index}`}
                mainColor={project.mainColor}
                marginBottom={section.marginBottom}
                title={section.title}
              />
            );
          }
        )}

      {project.images?.smallImages && (
        <ProjectSmallImgsContainer>
          <ProjectSmallImgsContent>
            {project.images?.smallImages?.map((image: string, idx: number) => (
              <Image
                alt={`${idx + 1}. ${project.client}`}
                key={idx}
                quality={100}
                src={image}
                height={340}
                width={340}
              />
            ))}
          </ProjectSmallImgsContent>
        </ProjectSmallImgsContainer>
      )}

      {project.conclusion && project.conclusion?.content && (
        <ProjectSection
          alignment="wide-bottom"
          image={project.conclusion?.image}
          title={project.conclusion?.title ?? 'Conclusion'}
          content={project.conclusion?.content}
          columns={project.conclusion?.columns}
          mainColor={project.mainColor}
        />
      )}

      <ProjectFooter>
        <Paragraph
          color={`${COLOR.blue_universe}55`}
          size={0.7}
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
