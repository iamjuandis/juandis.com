import Errors from '../components/errors';
import PageLayout from '../layouts/pageLayout/index';

const Error404 = () => {
  return (
    <PageLayout title={`Error 404 • Juan David Pérez • Portfolio`}>
      <Errors typeError={404} />
    </PageLayout>
  );
};

export default Error404;
