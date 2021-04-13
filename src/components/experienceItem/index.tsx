import { SetYearFromString } from '../../assets/utils/components';
import { ExperienceProps } from '../../types/interfaces';
import Headline from '../headline';
import Paragraph from '../paragraph';
import { ExperienceItemContainer, ExperienceItemContent } from './styled';

const ExperienceItem = ({ company, country, position, years }: ExperienceProps) => {
  return (
    <ExperienceItemContainer>
      <ExperienceItemContent>
        <Headline typeHeadline="h5" children={position} />
        <Paragraph size={0.9} children={`${company}, ${country}`} />
        <Paragraph
          size={0.9}
          children={`${SetYearFromString(`${years.first}`)}${
            years.last && ` - ${SetYearFromString(`${years.last}`)}`
          }`}
        />
      </ExperienceItemContent>
    </ExperienceItemContainer>
  );
};

export default ExperienceItem;
