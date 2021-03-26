import { useEffect, useState } from 'react';
import { formatDate } from '../../assets/utils/components';
import Headline from '../headline';
import Paragraph from '../paragraph';
import { FooterContainer, FooterContent, FooterTextContent } from './styled';

const Footer = () => {
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/iamjuandis/juandis.com/branches/main')
      .then((response) => {
        response.json().then((json) => setLastUpdated(json.commit.commit.author.date));
      })
      .catch((error) => {
        console.error('error', error);
      });
  }, []);
  return (
    <FooterContainer>
      <FooterContent>
        <Headline typeHeadline="h2">Get in touch</Headline>
        <FooterTextContent>
          <Paragraph
            children={`<a href="https://juandis.com/resume" title="Resume">
              Resume
            </a>`}
          />

          <Paragraph
            children={`<a href="mailto:me@juandis.com" title="me@juandis.com">
              me@juandis.com
            </a>`}
          />
          <Paragraph children={`© ${new Date().getFullYear()}. All rights reserved.`} />

          <Paragraph children={`Designed & built by me.`} />

          <Paragraph
            children={`<a href="tel:573122659625" title="+57 312 265 9625">
              +57 312 265 9625
            </a>`}
          />
          {lastUpdated && <Paragraph children={`Updated ${formatDate(`${lastUpdated}`)}`} />}
        </FooterTextContent>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
