import Errors from '../components/errors';
import PageLayout from '../layouts/pageLayout/intex';

const Error404 = () => {
  return (
    <PageLayout title={`Error 404 • Juan David Pérez • Portfolio`}>
      <Errors typeError={404} />
    </PageLayout>
  );
};

export default Error404;
