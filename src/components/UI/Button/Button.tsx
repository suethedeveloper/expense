import React from 'react';
import { ReactChild } from 'react';
import classes from './Button.module.css';

const Button = (props: {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactChild,
  className?: string
}) => {

  console.log('BUTTON RUNNING');

  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
//props.onClick === props.prvious.onClick (false)
export default React.memo(Button);
