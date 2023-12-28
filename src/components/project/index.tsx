import Image from 'next/image';
import { ProjectContainer } from './styled';
import ButtonLink from '../buttonLink';

const Project = ({ title, slug, mockup, year, company, accentColor }: any) => {
  return (
    <ProjectContainer title={title} accentColor={accentColor}>
      <div className="texts">
        <p>{company}</p>
        <h5>{title}</h5>
        <p>{year}</p>
      </div>
      <Image src={mockup} alt={company} />
      <ButtonLink
        label="View"
        route={`https://portfolio.juandis.com/${slug}`}
        variant="secondary"
        accentColor={accentColor}
      />
    </ProjectContainer>
  );
};

export default Project;
