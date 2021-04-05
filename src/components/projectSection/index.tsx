import Image from 'next/image';
import { ProjectSectionType } from '../../types/interfaces';
import Headline from '../headline';
import Paragraph from '../paragraph';
import { ProjectSectionContainer, ProjectSectionContent, ProjectSectionTexts } from './styled';

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
        {image && (
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            objectFit="cover"
            quality={100}
            layout="responsive"
          />
        )}
        <ProjectSectionTexts>
          {title && (
            <>
              <Headline color={mainColor} typeHeadline="h3" children={title} />
              <br />
            </>
          )}
          <Paragraph columns={columns} children={content} />
        </ProjectSectionTexts>
      </ProjectSectionContent>
    </ProjectSectionContainer>
  );
};

export default ProjectSection;
