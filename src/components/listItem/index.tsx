import { ListBannerProps } from '../../types/interfaces';
import { ListItemContainer, ListItemContent, ListMetaInfo } from './styled';

const ListItem = ({ location, company, title, years }: ListBannerProps) => {
  return (
    <ListItemContainer>
      <ListItemContent>
        <h5>{title}</h5>
        <ListMetaInfo>
          {company && <p className="text-medium">{company}</p>}
          {location && <p className="text-medium">{location}</p>}
          {years.first && (
            <p className="text-medium">
              {years.first}
              {years.last && ` - ${years.last}`}
            </p>
          )}
        </ListMetaInfo>
      </ListItemContent>
    </ListItemContainer>
  );
};

export default ListItem;
