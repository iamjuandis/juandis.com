import Headline from '../headline';
import Paragraph from '../paragraph';
import { ErrorContainer, ErrorContent } from './styled';

interface ErrorsType {
  typeError: string;
}

const Errors = ({ typeError }: ErrorsType) => {
  return (
    <ErrorContainer>
      <ErrorContent>
        <Headline
          children={
            typeError === '404'
              ? `Not found`
              : typeError === '500'
              ? `Internal Server Error`
              : `Somthing is not working`
          }
          typeHeadline="h1"
        />
        {typeError === '404' && <Paragraph children={`Error ${typeError}`} />}
        <Paragraph
          children={
            typeError === '404'
              ? `Ooops, the page you're looking doesn't exist.`
              : `There is an error on the server. Hope it's fixed soon.`
          }
        />
        <br />
        <Paragraph children={`<a href="/" title="Back home">Back home</a>`} />
      </ErrorContent>
    </ErrorContainer>
  );
};

export default Errors;
