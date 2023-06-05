import { ProjectMainBannerInterface } from '../../types/interfaces';
import { BannerContainer, MetaInfoBanner, MetaInfoItemStyle } from './styled';

const MetaInfoItem = ({ label, content }: any) => {
  return (
    <MetaInfoItemStyle>
      <p>{label}</p>
      <p>{content}</p>
    </MetaInfoItemStyle>
  );
};

const ProjectMainBanner = ({
  title,
  company,
  location,
  role,
  year,
}: ProjectMainBannerInterface) => {
  return (
    <BannerContainer>
      <h1>{title}</h1>
      <MetaInfoBanner>
        <MetaInfoItem label={location} content={company} />
        <MetaInfoItem label="Role" content={role} />
        <MetaInfoItem label="Year" content={year} />
      </MetaInfoBanner>
    </BannerContainer>
  );
};

export default ProjectMainBanner;
