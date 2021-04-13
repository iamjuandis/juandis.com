import { SetYearFromString } from '../../assets/utils/components';
import { ExperienceProps } from '../../types/interfaces';
import Headline from '../headline';
import Paragraph from '../paragraph';
import { ExperienceItemContainer, ExperienceItemContent } from './styled';

const ExperienceItem = ({ company, country, position, years }: ExperienceProps) => {
  return (
    <ExperienceItemContainer>
      <ExperienceItemContent>
        <Headline typeHeadline="h4" children={position} />
        <Paragraph children={`${company}, ${country}`} />
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
