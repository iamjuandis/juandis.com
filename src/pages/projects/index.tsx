import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProjectsPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, []);
  return <div>404</div>;
};

export default ProjectsPage;
