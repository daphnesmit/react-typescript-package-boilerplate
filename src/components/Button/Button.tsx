import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Button type to use
   */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  /**
   * Button variant to use
   */
  variant?: 'primary' | 'secondary';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const StyledButton = styled.button<Omit<ButtonProps, 'label'>>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${switchProp('variant', {
    primary: css`
        color: white;
        background-color: #1ea7fd;
    `,
    secondary: css`
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    `,
  })}
  
  ${switchProp('size', {
    small: css`
      font-size: 12px;
      padding: 10px 16px;
    `,
    medium: css`
        font-size: 14px;
        padding: 11px 20px;
    `,
    large: css`
        font-size: 16px;
        padding: 12px 24px;
    `,
  })}
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  type = 'button',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      style={{ backgroundColor }}
      {...props}>
      {label}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
};
