import Image from 'next/image';
import { HandleAlignment } from '../../assets/utils/components';
import { ProjectSectionType } from '../../types/interfaces';
import Headline from '../headline';
import Paragraph from '../paragraph';
import {
  ProjectSectionContainer,
  ProjectSectionContent,
  ProjectSectionTexts,
  ProjectSectionImage,
} from './styled';

const ProjectSection = ({
  alignment,
  content,
  columns,
  image,
  mainColor,
  maxWidth,
  title,
}: ProjectSectionType) => {
  return (
    <ProjectSectionContainer>
      <ProjectSectionContent alignment={alignment} maxWidth={maxWidth}>
        {image &&
          (HandleAlignment(`${alignment}`).position === 'left' ||
            HandleAlignment(`${alignment}`).position === 'up') && (
            <ProjectSectionImage alignment={alignment}>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                objectFit="cover"
                quality={100}
                layout="responsive"
              />
            </ProjectSectionImage>
          )}
        <ProjectSectionTexts alignment={alignment}>
          {title && (
            <>
              <Headline color={mainColor} typeHeadline="h3" children={title} />
              <br />
            </>
          )}
          <Paragraph columns={columns} children={content} />
        </ProjectSectionTexts>
        {image &&
          (HandleAlignment(`${alignment}`).position === 'right' ||
            HandleAlignment(`${alignment}`).position === 'bottom') && (
            <ProjectSectionImage alignment={alignment}>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                objectFit="cover"
                quality={100}
                layout="responsive"
              />
            </ProjectSectionImage>
          )}
      </ProjectSectionContent>
    </ProjectSectionContainer>
  );
};

export default ProjectSection;