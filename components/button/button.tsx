import { ComponentProps, FC } from 'react';

import './button.css';

type ButtonProps = ComponentProps<'button'> & {
  className?: string | undefined;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Button: FC<ButtonProps> = ({ className, size, ...rest }) => {
  const sizeClass = size ? `qar-button--${size}` : '';
  const classes = ['qar-button', sizeClass, className].filter(Boolean).join(' ');

  return <button className={classes} {...rest}></button>;
};
