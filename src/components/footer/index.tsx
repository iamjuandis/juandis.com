import Headline from '../headline';
import Paragraph from '../paragraph';
import { FooterContainer, FooterContent, FooterTextContent } from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Headline typeHeadline="h2">Get in touch</Headline>
        <FooterTextContent>
          <Paragraph children="Juan David Pérez" />
          <Paragraph
            children={`<a href="mailto:hello@juandis.com" title="hello@juandis.com">
              hello@juandis.com
            </a>`}
          />
          <Paragraph children={`Designed & built by me.`} />
          <Paragraph
            children={`<a href="https://juandis.com/resume" title="Resume">
              Resume
            </a>`}
          />
          <Paragraph
            children={`<a href="tel:573122659625" title="+57 312 265 9625">
              +57 312 265 9625
            </a>`}
          />
          <Paragraph children={`© ${new Date().getFullYear()}. All rights reserved.`} />
        </FooterTextContent>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
