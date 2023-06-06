import { ButtonType, ListBannerProps } from '../../types/interfaces';
import ButtonLink from '../buttonLink';
import ListItem from '../listItem';
import {
  ListBannerContainer,
  ListBannerContent,
  ListContainerHeadline,
  ListContainer,
} from './styled';

interface Props {
  list: ListBannerProps[];
  button?: ButtonType;
  background?: boolean;
  title: string;
}

const ListBanner = ({ list, button, background, title }: Props) => {
  return (
    <ListBannerContainer background={background}>
      <ListBannerContent>
        <ListContainerHeadline>
          <h3>{title}</h3>
          {button && (
            <ButtonLink
              variant={button.variant}
              label={button?.label}
              route={button?.route}
              onClick={button?.onClick}
            />
          )}
        </ListContainerHeadline>
        <ListContainer>
          {list?.map((item: ListBannerProps, index: number) => (
            <ListItem
              key={index}
              company={item?.company}
              location={item?.location}
              years={item?.years}
              title={item?.title}
            />
          ))}
        </ListContainer>
      </ListBannerContent>
    </ListBannerContainer>
  );
};

export default ListBanner;
