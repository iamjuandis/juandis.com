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
  marginBottom,
  maxWidth,
  title,
}: ProjectSectionType) => {
  return (
    <ProjectSectionContainer marginBottom={marginBottom}>
      <ProjectSectionContent alignment={alignment} maxWidth={maxWidth}>
        {image &&
          (HandleAlignment(`${alignment}`).position === 'left' ||
            HandleAlignment(`${alignment}`).position === 'up') && (
            <ProjectSectionImage alignment={alignment}>
              <Image
                alt="Project Image"
                src={image.src}
                width={image.width}
                height={image.height}
                priority={image.priority}
                quality={100}
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
                alt="Project section"
                src={image.src}
                width={image.width}
                height={image.height}
                priority={image.priority}
                quality={100}
              />
            </ProjectSectionImage>
          )}
      </ProjectSectionContent>
    </ProjectSectionContainer>
  );
};

export default ProjectSection;
