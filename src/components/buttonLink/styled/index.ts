import Link from 'next/link';
import styled from 'styled-components';
import { ButtonVariantColor } from '../../../assets/utils/components';
import { variantButtonTypes } from '../../../types/interfaces';

interface ButtonStyleType {
  variant: variantButtonTypes;
}

export const ButtonStyle = styled(Link)<ButtonStyleType>`
  background-color: ${(props) => ButtonVariantColor(props.variant).background};
  border-radius: 40px;
  padding: 12px 24px;
  p {
    color: ${(props) => ButtonVariantColor(props.variant).font};
  }
`;
