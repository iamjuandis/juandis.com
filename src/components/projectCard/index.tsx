import React from 'react';
import { Lock } from 'react-feather';
import { ProjectMainInterface } from '../../types/interfaces';
import {
  ProjectCardContainer,
  ProjectCardCoverImage,
  ProjectCardTextContainer,
  ProjectSkillElement,
  ProtectedLabel,
} from './styled';
import COLORS from '../../assets/style/colors';

const ProjectCard = ({
  company,
  featuredImage,
  protectedProject,
  role,
  slug,
  title,
  year,
}: ProjectMainInterface) => {
  return (
    <ProjectCardContainer href={`/work/${slug}`} title={title}>
      <ProjectCardCoverImage
        alt={featuredImage.altText}
        quality={100}
        src={featuredImage.sourceUrl}
        width={996}
        height={450}
      />
      {protectedProject && (
        <ProtectedLabel>
          <Lock size={20} color={COLORS.white_cloud} /> <span>Protected</span>
        </ProtectedLabel>
      )}
      <ProjectCardTextContainer>
        <p className="text-large semibold">{company}</p>
        <h3>{title}</h3>
        <ProjectSkillElement>
          {role && <p className="text-large">{role}</p>}
          {year && <p className="text-large">{year}</p>}
        </ProjectSkillElement>
      </ProjectCardTextContainer>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
