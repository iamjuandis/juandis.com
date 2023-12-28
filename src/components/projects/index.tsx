import React from 'react';
import { ProjectsContainer, ProjectsContent, ProjectsGrid } from './styled';
import Project from '../project';

interface Props {
  projects: any;
}

const ProjectsBanner = ({ projects }: Props) => {
  console.log('PROJECTS', projects);
  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>
        <h2>Featured work</h2>
        <ProjectsGrid>
          {projects &&
            projects.map((project: any, index: number) => {
              return (
                <>
                  {/* <ProjectCard
                company={project?.acfProjects.company}
                featuredImage={project?.featuredImage.node}
                key={`${index}`}
                protectedProject={project?.acfProjects.protected}
                role={project?.acfProjects.role}
                slug={project?.slug}
                title={project?.title}
                year={project?.acfProjects.year}
              /> */}
                  <Project
                    key={`${index}`}
                    title={project.title}
                    year={project.year}
                    company={project.company}
                    slug={project?.slug}
                    accentColor={project.accentColor}
                  />
                </>
              );
            })}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default ProjectsBanner;
