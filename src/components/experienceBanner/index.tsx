import { ExperienceProps } from '../../types/interfaces';
import ExperienceItem from '../experienceItem';
import Headline from '../headline';
import { ExperienceBannerContainer, ExperienceBannerContent } from './styled';

interface Props {
  experiences: ExperienceProps[];
}

const ExperienceBanner = ({ experiences }: Props) => {
  return (
    <ExperienceBannerContainer>
      <ExperienceBannerContent>
        <Headline children="Experience" typeHeadline="h5" />
        {experiences?.map((experience: ExperienceProps, index: number) => (
          <ExperienceItem
            key={index}
            company={experience?.company}
            country={experience?.country}
            years={experience?.years}
            position={experience?.position}
          />
        ))}
      </ExperienceBannerContent>
    </ExperienceBannerContainer>
  );
};

export default ExperienceBanner;
