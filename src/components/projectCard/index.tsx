import { ProjectMainInterface } from '../../types/interfaces';
import Paragraph from '../paragraph';
import {
  ProjectCardContainer,
  ProjectCardCoverImage,
  ProjectCardTextContainer,
  ProjectSkillElement,
} from './styled';

const ProjectCard = ({ company, featuredImage, role, slug, title, year }: ProjectMainInterface) => {
  return (
    <ProjectCardContainer href={`/work/${slug}`} title={title}>
      <ProjectCardCoverImage
        alt={featuredImage.altText}
        quality={100}
        src={featuredImage.sourceUrl}
        width={996}
        height={450}
      />
      <ProjectCardTextContainer>
        <Paragraph children={company} />
        <h3>{title}</h3>
        <ProjectSkillElement>
          {role}
          {year}
        </ProjectSkillElement>
      </ProjectCardTextContainer>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
