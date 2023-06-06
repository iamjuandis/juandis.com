import { ExperienceProps } from '../../types/interfaces';
import ExperienceItem from '../experienceItem';
import {
  ExperienceBannerContainer,
  ExperienceBannerContent,
  ExperiencesContainerHeadline,
  ExperiencesContainerList,
} from './styled';

interface Props {
  experiences: ExperienceProps[];
}

const ExperienceBanner = ({ experiences }: Props) => {
  return (
    <ExperienceBannerContainer>
      <ExperienceBannerContent>
        <ExperiencesContainerHeadline>
          <h2>Experience</h2>
        </ExperiencesContainerHeadline>
        <ExperiencesContainerList>
          {experiences?.map((experience: ExperienceProps, index: number) => (
            <ExperienceItem
              key={index}
              company={experience?.company}
              country={experience?.country}
              years={experience?.years}
              position={experience?.position}
            />
          ))}
        </ExperiencesContainerList>
      </ExperienceBannerContent>
    </ExperienceBannerContainer>
  );
};

export default ExperienceBanner;
