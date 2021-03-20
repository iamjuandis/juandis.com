import { ParagraphType } from '../../types/interfaces';
import { ParagraphContainer } from './styled';

const Paragraph = ({ color, size, children }: ParagraphType) => (
  <ParagraphContainer color={color} size={size}>
    {children}
  </ParagraphContainer>
);

export default Paragraph;
