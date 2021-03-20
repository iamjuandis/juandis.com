import Link from 'next/link';

const ProjectsBanner = ({ projects }: any) => {
  console.info('p', projects);
  return (
    <div>
      {Object.keys(projects).map((key: any) => {
        return (
          <div key={key}>
            {projects[key].headline} - <Link href={`/projects/${key}`}>Ver</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsBanner;
