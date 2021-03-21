import Errors from '../components/errors';
import PageLayout from '../layouts/pageLayout/intex';

const Erro404 = () => {
  return (
    <PageLayout title={`Not found • Error 404 • Juan David Pérez`}>
      <Errors typeError="404" />
    </PageLayout>
  );
};

export default Erro404;
