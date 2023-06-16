import { ParagraphType } from '../../types/interfaces';
import { ParagraphContainer } from './styled';

const Paragraph = ({
  color,
  columns = 1,
  highlightColor,
  paragraphSize,
  children,
}: ParagraphType) => (
  <ParagraphContainer
    className={paragraphSize}
    columns={columns}
    highlightColor={highlightColor}
    color={color}
    dangerouslySetInnerHTML={{ __html: children }}
  />
);

export default Paragraph;
