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
        {image && <Image src={image} width={1024} height={580} objectFit="cover" />}
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
