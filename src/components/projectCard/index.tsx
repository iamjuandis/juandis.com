import Link from 'next/link';
import COLOR from '../../assets/style/colors';
import { ProjectMainTypes } from '../../types/interfaces';
import Headline from '../headline';
import Paragraph from '../paragraph';
import {
  ProjectCardContainer,
  ProjectCardCoverContainer,
  ProjectCardCoverImage,
  ProjectCardTextContainer,
  ProjectSkillElement,
  ProjectSkillsContainer,
} from './styled';

export interface ProjectCardComponentTypes {
  gridRange?: any[];
  background?: string;
  mainColor?: string;
}

type ProjectCardType = ProjectMainTypes & ProjectCardComponentTypes;

const ProjectCard = ({
  mainColor,
  client,
  headline,
  slug,
  skills,
  images,
  gridRange,
}: ProjectCardType) => {
  return (
    <Link href={`/projects/${slug}`} passHref>
      <ProjectCardContainer title={client} gridRange={gridRange}>
        <ProjectCardCoverContainer background={mainColor} gridRange={gridRange}>
          <ProjectCardCoverImage
            gridRange={gridRange}
            src={
              gridRange && gridRange[2] === 'big' ? images?.cardImages[1] : images?.cardImages[0]
            }
            alt={client}
          />
        </ProjectCardCoverContainer>
        <ProjectCardTextContainer
          background={gridRange && gridRange[2] === 'big' ? 'transparent' : `${mainColor}11`}
          gridRange={gridRange}
        >
          <Paragraph
            children={client}
            color={gridRange && gridRange[2] === 'big' ? COLOR.white_cloud : mainColor}
          />
          <br />
          <Headline
            color={gridRange && gridRange[2] === 'big' ? COLOR.white_cloud : mainColor}
            typeHeadline="h3"
          >
            {headline}
          </Headline>
          <br />
          {skills && skills.length > 0 && (
            <ProjectSkillsContainer>
              {skills.map((skill: string, idx: number) => (
                <ProjectSkillElement
                  mainColor={gridRange && gridRange[2] === 'big' ? COLOR.white_cloud : mainColor}
                  key={idx}
                >
                  {skill}
                </ProjectSkillElement>
              ))}
            </ProjectSkillsContainer>
          )}
        </ProjectCardTextContainer>
      </ProjectCardContainer>
    </Link>
  );
};

export default ProjectCard;
