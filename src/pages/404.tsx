import Errors from '../components/errors';
import PageLayout from '../layouts/pageLayout/index';

const Error404 = () => {
  return (
    <PageLayout title={`Not found · Error 404`}>
      <Errors typeError={404} />
    </PageLayout>
  );
};

export default Error404;
