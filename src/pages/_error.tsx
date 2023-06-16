import Errors from '../components/errors';
import PageLayout from '../layouts/pageLayout/index';

const Error = ({ statusCode }: any) => {
  return (
    <PageLayout title={`Error ${statusCode}`}>
      <Errors typeError={statusCode} />
    </PageLayout>
  );
};

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
