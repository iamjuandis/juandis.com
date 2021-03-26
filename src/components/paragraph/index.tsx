import { ParagraphType } from '../../types/interfaces';
import { ParagraphContainer } from './styled';

const Paragraph = ({ color, highlightColor, size, children }: ParagraphType) => (
  <ParagraphContainer
    highlightColor={highlightColor}
    color={color}
    size={size}
    dangerouslySetInnerHTML={{ __html: children }}
  />
);

export default Paragraph;
