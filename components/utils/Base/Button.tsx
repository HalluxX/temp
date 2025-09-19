import React, { ForwardRefRenderFunction, forwardRef, ReactNode, useCallback } from 'react';
import Icon from './Icon';
import { ElementWithIconProps } from '../interface';

export interface ButtonProps extends ElementWithIconProps {
    variant : 'success' | 'warning' | 'danger';
    type?: 'button' | 'submit' | 'reset' | undefined;
    children?: ReactNode | undefined;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    variant,
    className = '',
    icon = '',
    onClick,
    type = 'button',
    children,
  },
  ref
) => {
  const renderButton = () => (
    <button
      ref={ref}
      type={type}
      className={`button button-${variant} ${className}`}
      onClick={(e) => {
        if (onClick) onClick();
      }}
    >
        <span className="text-nowrap">{children}</span>
        <Icon icon={icon} />
    </button>
  );

  return (
    <>
    {
        renderButton()
    }
    </>
  );
};

export default forwardRef(Button);
