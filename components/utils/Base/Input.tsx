import React, { ForwardRefRenderFunction, forwardRef, ReactNode, useCallback } from 'react';
import Icon from './Icon';
import { ElementWithIconProps } from '../interface';

export interface InputProps extends ElementWithIconProps {
    variant : 'default' | 'success' | 'warning' | 'danger';
    value? : string;
    placeholder? : string;
    children?: ReactNode | undefined;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    className = '',
    icon = '',
    iconPos = 'left',
    placeholder,
    value,
    onChange,
    children,
  },
  ref
) => {
  const renderInput = () => (
    <div className={`input flex w-full ${className}`}>
      {
        iconPos === 'left' ? <Icon icon={icon} /> :  <></>
      }
      <input
        ref={ref}
        className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
        placeholder={placeholder ? placeholder : ''}
        value={value ? value: ''}
        onChange={(e) => {
          if(onChange) onChange(e);
        }}
      >
      </input>
      {
        iconPos === 'right' ? <Icon icon={icon} size='xl' className='mx-auto my-auto h-full icon-bg ' /> :  <></>
      }
    </div>
    
  );

  return (
    <>
    {
        renderInput()
    }
    </>
  );
};

export default forwardRef(Input);