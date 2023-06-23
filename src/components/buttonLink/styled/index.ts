import Link from 'next/link';
import styled from 'styled-components';
import { ButtonVariantColor } from '../../../assets/utils/components';
import { variantButtonTypes } from '../../../types/interfaces';
import COLORS from '../../../assets/style/colors';

interface ButtonStyleType {
  variant: variantButtonTypes;
}

export const ButtonLinkStyle = styled(Link)<ButtonStyleType>`
  background-color: ${(props) => ButtonVariantColor(props.variant)?.default.background};
  border-radius: 40px;
  padding: 12px ${(props) => (props.variant === 'tiertiary' ? 0 : '24px')};
  transition: all ease 0.3s;
  span,
  label {
    color: ${(props) => ButtonVariantColor(props.variant)?.default.font};
    display: block;
    font-weight: 600;
    white-space: nowrap;
    text-align: center;
    text-decoration: ${(props) => (props.variant === 'tiertiary' ? 'dotted' : 'none')};
    text-decoration-line: ${(props) => (props.variant === 'tiertiary' ? 'underline' : 'none')};
    text-decoration-color: ${(props) =>
      props.variant === 'tiertiary' ? COLORS.green_pale : 'transparent'};
    text-underline-offset: 4px;
    width: 100%;
  }
  &:hover {
    background-color: ${(props) => ButtonVariantColor(props.variant)?.hover.background};
    span,
    label {
      color: ${(props) => ButtonVariantColor(props.variant)?.hover.font};
    }
  }
`;

export const ButtonClickStyle = styled.button<ButtonStyleType>`
  border: 0;
  border-style: none;
  outline-style: none;
  background-color: ${(props) => ButtonVariantColor(props.variant)?.default.background};
  border-radius: 40px;
  cursor: pointer;
  padding: 12px ${(props) => (props.variant === 'tiertiary' ? 0 : '24px')};
  transition: all ease 0.3s;
  span,
  label {
    color: ${(props) => ButtonVariantColor(props.variant)?.default.font};
    display: block;
    font-weight: 600;
    white-space: nowrap;
    text-align: center;
    text-decoration: ${(props) => (props.variant === 'tiertiary' ? 'dotted' : 'none')};
    text-decoration-line: ${(props) => (props.variant === 'tiertiary' ? 'underline' : 'none')};
    text-decoration-color: ${(props) =>
      props.variant === 'tiertiary' ? COLORS.green_pale : 'transparent'};
    text-underline-offset: 4px;
    width: 100%;
  }
  &:hover {
    background-color: ${(props) => ButtonVariantColor(props.variant)?.hover.background};
    span,
    label {
      color: ${(props) => ButtonVariantColor(props.variant)?.hover.font};
    }
  }
`;
