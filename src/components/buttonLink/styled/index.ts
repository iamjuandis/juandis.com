import Link from 'next/link';
import styled from 'styled-components';
import { ButtonVariantColor } from '../../../assets/utils/components';
import { variantButtonTypes } from '../../../types/interfaces';

interface ButtonStyleType {
  variant: variantButtonTypes;
}

export const ButtonLinkStyle = styled(Link)<ButtonStyleType>`
  background-color: ${(props) => ButtonVariantColor(props.variant)?.background};
  border-radius: 40px;
  padding: 12px ${(props) => (props.variant === 'tiertiary' ? 0 : '24px')};
  span,
  label {
    color: ${(props) => ButtonVariantColor(props.variant)?.font};
  }
`;

export const ButtonClickStyle = styled.button<ButtonStyleType>`
  border: 0;
  border-style: none;
  outline-style: none;
  background-color: ${(props) => ButtonVariantColor(props.variant)?.background};
  border-radius: 40px;
  cursor: pointer;
  padding: 12px ${(props) => (props.variant === 'tiertiary' ? 0 : '24px')};
  span,
  label {
    color: ${(props) => ButtonVariantColor(props.variant)?.font};
  }
`;
