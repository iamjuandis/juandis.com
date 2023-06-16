import { AboutContent, AboutHeroContainer, AboutTitle } from './styled';

const AboutHero = ({ title, content, button }: any) => {
  return (
    <AboutHeroContainer>
      <AboutTitle>
        <h1>{title}</h1>
        {button && button}
      </AboutTitle>

      <AboutContent dangerouslySetInnerHTML={{ __html: `${content}` }} />
    </AboutHeroContainer>
  );
};

export default AboutHero;
