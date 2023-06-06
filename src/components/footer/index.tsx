import { useEffect, useState } from 'react';
import COLOR from '../../assets/style/colors';
import { formatDate } from '../../assets/utils/components';
import Paragraph from '../paragraph';
import { FooterContainer, FooterContent, FooterTextContent } from './styled';
import ButtonLink from '../buttonLink';
interface FooterProps {
  mainColor?: string;
}

const Footer = ({ mainColor = COLOR.green_dark }: FooterProps) => {
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
    <FooterContainer>
      <FooterContent>
        <h3>Get in touch</h3>
        <FooterTextContent>
          <ButtonLink route="mailto:me@juandis.com" label="me@juandis.com" variant="tiertiary" />
          <ButtonLink route="/resume" label="Resume" variant="tiertiary" />
          <ButtonLink route="/in" label="LinkedIn" variant="tiertiary" />
        </FooterTextContent>
      </FooterContent>
      <p>
        Designed and developed by Juan David Perez. © {new Date().getFullYear()}. All rights
        reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;
