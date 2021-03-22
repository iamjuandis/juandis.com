import Errors from '../components/errors';
import PageLayout from '../layouts/pageLayout/intex';

const Error = ({ statusCode }: any) => {
  return (
    <PageLayout title={`Error ${statusCode} • Juan David Pérez`}>
      <Errors typeError={statusCode} />
    </PageLayout>
  );
};

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
