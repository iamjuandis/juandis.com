import { handleGridRangeProject } from '../../assets/utils/components';
//import { ProjectMainTypes } from '../../types/interfaces';
//import Headline from '../headline';
import ProjectCard from '../projectCard';
import { ProjectsContainer, ProjectsContent, ProjectsHeadlineContainer } from './styled';

interface Props {
  projects: any;
}

const ProjectsBanner = ({ projects }: Props) => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <ProjectsHeadlineContainer>
          <h2>Featured work</h2>
        </ProjectsHeadlineContainer>
        {projects &&
          projects.map((project: any, index: number) => {
            const lenghtProjects = projects.length;
            return (
              <ProjectCard
                client={project?.client}
                gridRange={handleGridRangeProject(lenghtProjects, index)}
                slug={project?.slug}
                skills={project?.skills}
                images={project?.featuredImage}
                key={`${index}`}
                mainColor={project?.mainColor}
                headline={project?.title}
                years={project?.date}
              />
            );
          })}
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default ProjectsBanner;
