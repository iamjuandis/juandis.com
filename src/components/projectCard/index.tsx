import { Lock } from 'react-feather';
import { ProjectMainInterface } from '../../types/interfaces';
import Paragraph from '../paragraph';
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
        <Paragraph children={company} />
        <h3>{title}</h3>
        <ProjectSkillElement>
          {role && <p>{role}</p>}
          {year && <p>{year}</p>}
        </ProjectSkillElement>
      </ProjectCardTextContainer>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
