import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props: any, ref: any) => {
  const inputRef = useRef();

  const activate = () => {
    const current = inputRef.current as unknown as HTMLInputElement;
    current!.focus();
  }

  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  })

  return <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
    <label htmlFor={props.id}>{props.label}</label>
    <input
      ref={useRef}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  </div>;
});

export default Input;