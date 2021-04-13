import { ExperienceProps } from '../../types/interfaces';
import Headline from '../headline';
import Paragraph from '../paragraph';
import { ExperienceItemContainer, ExperienceItemContent } from './styled';

const ExperienceItem = ({ company, position, years }: ExperienceProps) => {
  return (
    <ExperienceItemContainer>
      <ExperienceItemContent>
        <Headline typeHeadline="h4" children={position} />
        <Paragraph children={company} />
        <Paragraph children={years.first} />
      </ExperienceItemContent>
    </ExperienceItemContainer>
  );
};

export default ExperienceItem;
