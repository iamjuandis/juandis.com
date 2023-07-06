import React from 'react';
import { FooterContainer, FooterContent, FooterTextContent } from './styled';
import ButtonLink from '../buttonLink';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <h4>Get in touch</h4>
        <FooterTextContent>
          <ButtonLink route="mailto:me@juandis.com" label="me@juandis.com" variant="tiertiary" />
          <ButtonLink route="/resume" label="Resume" variant="tiertiary" target="_blank" />
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
