import React from 'react';
import Image from 'next/image';
import { ProjectMainBannerInterface } from '../../types/interfaces';
import { BannerContainer, MetaInfoBanner, MetaInfoItemStyle } from './styled';

const MetaInfoItem = ({ label, content, image }: any) => {
  return (
    <MetaInfoItemStyle>
      {image && <Image src={image} alt={`${content} logo`} width={60} height={60} />}
      <div className="text-container">
        <p className="label text-medium">{label}</p>
        <p className="content text-huge">{content}</p>
      </div>
    </MetaInfoItemStyle>
  );
};

const ProjectMainBanner = ({
  title,
  company,
  companyImage,
  location,
  role,
  year,
}: ProjectMainBannerInterface) => {
  return (
    <BannerContainer>
      <h1>{title}</h1>
      <MetaInfoBanner>
        <MetaInfoItem label={location} content={company} image={companyImage} />
        <MetaInfoItem label="Role" content={role} />
        <MetaInfoItem label="Year" content={year} />
      </MetaInfoBanner>
    </BannerContainer>
  );
};

export default ProjectMainBanner;
