import Image from 'next/image';
import Link from 'next/link';
import { darken } from 'polished';
import useDarkMode from 'use-dark-mode';
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
  const darkmode = useDarkMode();
  return (
    <Link href={`/projects/${slug}`} passHref>
      <ProjectCardContainer title={client} gridRange={gridRange}>
        <ProjectCardCoverContainer background={mainColor} gridRange={gridRange}>
          <ProjectCardCoverImage gridRange={gridRange}>
            <Image
              alt={client}
              height={gridRange && gridRange[2] === 'big' ? 1091 : 1000}
              objectFit="cover"
              objectPosition="top center"
              quality={100}
              src={
                gridRange && gridRange[2] === 'big' ? images?.cardImages[1] : images?.cardImages[0]
              }
              width={gridRange && gridRange[2] === 'big' ? 1000 : 1139}
            />
          </ProjectCardCoverImage>
        </ProjectCardCoverContainer>
        <ProjectCardTextContainer
          background={
            gridRange && gridRange[2] === 'big'
              ? 'transparent'
              : darkmode.value
              ? darken(0.1, mainColor)
              : `${mainColor}11`
          }
          gridRange={gridRange}
          mainColor={mainColor}
        >
          <Paragraph
            children={client}
            color={
              gridRange && gridRange[2] === 'big'
                ? COLOR.white_cloud
                : darkmode.value
                ? COLOR.white_cloud
                : mainColor
            }
          />
          <br />
          <Headline
            color={
              gridRange && gridRange[2] === 'big'
                ? COLOR.white_cloud
                : darkmode.value
                ? COLOR.white_cloud
                : mainColor
            }
            typeHeadline="h3"
            fontSize={30}
          >
            {headline}
          </Headline>
          <br />
          {skills && skills.length > 0 && (
            <ProjectSkillsContainer>
              {skills.slice(0, 2).map((skill: string, idx: number) => (
                <ProjectSkillElement
                  mainColor={
                    gridRange && gridRange[2] === 'big'
                      ? COLOR.white_cloud
                      : darkmode.value
                      ? COLOR.white_cloud
                      : mainColor
                  }
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
