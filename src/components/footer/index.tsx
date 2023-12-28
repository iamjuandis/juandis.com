import React from 'react';
import { FooterContainer, FooterContent, FooterTextContent } from './styled';
import ButtonLink from '../buttonLink';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h4>Get in touch</h4>
        <FooterTextContent>
          <ButtonLink
            route="mailto:me@juandis.com"
            label="Contact me@juandis.com"
            variant="tiertiary"
          />
          <ButtonLink route="/in" label="LinkedIn" variant="tiertiary" />
        </FooterTextContent>
        <p>
          Designed and developed by Juan David Perez. © {new Date().getFullYear()}. Made in
          Colombia.
        </p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
