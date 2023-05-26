import { useEffect, useState } from 'react';
import COLOR from '../../assets/style/colors';
import { formatDate } from '../../assets/utils/components';
import Headline from '../headline';
import Paragraph from '../paragraph';
import { FooterContainer, FooterContent, FooterTextContent } from './styled';

interface FooterProps {
  mainColor?: string;
}

const Footer = ({ mainColor = COLOR.blue_universe }: FooterProps) => {
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/iamjuandis/juandis.com/branches/main')
      .then((response) =>
        response.json().then((json) => setLastUpdated(json.commit.commit.author.date))
      )
      .catch((error) => {
        console.error('error', error);
        return error;
      });
  }, []);
  return (
    <FooterContainer suppressHydrationWarning={true}>
      <FooterContent>
        <Headline typeHeadline="h3">Get in touch</Headline>
        <FooterTextContent>
          <Paragraph
            highlightColor={mainColor}
            children={`<a href="/resume" title="Resume" target="_blank" rel="noopener noreferrer">
            Resume
          </a> • <a href="/in" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a> • <a href="/github" title="GitHub" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>`}
          />

          <Paragraph
            highlightColor={mainColor}
            children={`<a href="mailto:me@juandis.com" title="me@juandis.com" target="_blank" rel="noopener noreferrer">
              me@juandis.com
            </a>`}
          />

          <Paragraph highlightColor={mainColor} children={`Designed & built by me.`} />

          <Paragraph
            highlightColor={mainColor}
            children={`© ${new Date().getFullYear()}. All rights reserved.`}
          />

          {lastUpdated && (
            <Paragraph
              highlightColor={mainColor}
              children={`Updated ${formatDate(`${lastUpdated}`)}`}
            />
          )}
        </FooterTextContent>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
