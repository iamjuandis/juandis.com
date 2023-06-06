import { SetYearFromString } from '../../assets/utils/components';
import { ExperienceProps } from '../../types/interfaces';
import Paragraph from '../paragraph';
import { ExperienceItemContainer, ExperienceItemContent } from './styled';

const ExperienceItem = ({ company, country, position, years }: ExperienceProps) => {
  return (
    <ExperienceItemContainer>
      <ExperienceItemContent>
        <h5>{position}</h5>
        <Paragraph children={`${company}${country ? `, ${country}` : ''}`} />
        <Paragraph
          children={`${SetYearFromString(`${years.first}`)}${
            years.last && ` - ${SetYearFromString(`${years.last}`)}`
          }`}
        />
      </ExperienceItemContent>
    </ExperienceItemContainer>
  );
};

export default ExperienceItem;
