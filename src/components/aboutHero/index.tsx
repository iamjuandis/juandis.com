import { AboutContent, AboutHeroContainer, AboutTitle } from './styled';

const AboutHero = ({ title, content, button }: any) => {
  return (
    <AboutHeroContainer>
      <AboutTitle>
        <h1 dangerouslySetInnerHTML={{ __html: `${title}` }} />
        {button && button}
      </AboutTitle>

      <AboutContent dangerouslySetInnerHTML={{ __html: `${content}` }} />
    </AboutHeroContainer>
  );
};

export default AboutHero;
