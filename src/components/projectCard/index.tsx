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
} from './styled';

export interface ProjectCardComponentTypes {
  gridRange?: any[];
  background?: string;
}

type ProjectCardType = ProjectMainTypes & ProjectCardComponentTypes;

const ProjectCard = ({
  mainColor,
  client,
  headline,
  slug,
  coverImages,
  gridRange,
}: ProjectCardType) => {
  return (
    <Link href={`/project/${slug}`} passHref>
      <ProjectCardContainer title={client} gridRange={gridRange}>
        <ProjectCardCoverContainer background={mainColor} gridRange={gridRange}>
          <ProjectCardCoverImage
            src={gridRange && gridRange[2] === 'big' ? coverImages[1] : coverImages[0]}
            alt={client}
          />
        </ProjectCardCoverContainer>
        <ProjectCardTextContainer
          background={gridRange && gridRange[2] === 'big' ? 'transparent' : `${mainColor}11`}
          gridRange={gridRange}
        >
          <Paragraph>{client}</Paragraph>
          <Headline
            color={gridRange && gridRange[2] === 'big' ? COLOR.white_cloud : mainColor}
            typeHeadline="h3"
          >
            {headline}
          </Headline>
        </ProjectCardTextContainer>
      </ProjectCardContainer>
    </Link>
  );
};

export default ProjectCard;
