import { useRouter } from 'next/router';
import { useEffect } from 'react';

const WorkPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/?g=projects');
  }, []);
  return <div></div>;
};

export default WorkPage;
