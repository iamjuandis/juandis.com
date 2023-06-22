import React from 'react';
import ProjectCard from '../projectCard';
import { ProjectsContainer, ProjectsContent } from './styled';

interface Props {
  projects: any;
}

const ProjectsBanner = ({ projects }: Props) => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <h2>Featured work</h2>
        {projects &&
          projects.map((project: any, index: number) => {
            return (
              <ProjectCard
                company={project?.acfProjects.company}
                featuredImage={project?.featuredImage.node}
                key={`${index}`}
                protectedProject={project?.acfProjects.protected}
                role={project?.acfProjects.role}
                slug={project?.slug}
                title={project?.title}
                year={project?.acfProjects.year}
              />
            );
          })}
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default ProjectsBanner;
