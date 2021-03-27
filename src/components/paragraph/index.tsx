import { ParagraphType } from '../../types/interfaces';
import { ParagraphContainer } from './styled';

const Paragraph = ({ color, columns = 1, highlightColor, size, children }: ParagraphType) => (
  <ParagraphContainer
    columns={columns}
    highlightColor={highlightColor}
    color={color}
    size={size}
    dangerouslySetInnerHTML={{ __html: children }}
  />
);

export default Paragraph;
