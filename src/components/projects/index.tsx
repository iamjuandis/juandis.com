import { handleGridRangeProject } from '../../assets/utils/components';
import { ProjectMainTypes, ProjectsType } from '../../types/interfaces';
import Headline from '../headline';
import ProjectCard from '../projectCard';
import { ProjectsContainer, ProjectsContent, ProjectsHeadlineContainer } from './styled';

interface Props {
  projects: ProjectsType;
}

const ProjectsBanner = ({ projects }: Props) => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <ProjectsHeadlineContainer>
          <Headline typeHeadline="h5">Featured projects</Headline>
        </ProjectsHeadlineContainer>
        {Object.entries(projects).map(
          ([key, project]: [string, ProjectMainTypes], index: number) => {
            const lenghtProjects = Object.entries(projects).length;
            return (
              <ProjectCard
                client={project.client}
                gridRange={handleGridRangeProject(lenghtProjects, index)}
                slug={project.slug}
                images={project.images}
                key={`${key}-${index}`}
                mainColor={project.mainColor}
                headline={project.headline}
              />
            );
          }
        )}
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default ProjectsBanner;
