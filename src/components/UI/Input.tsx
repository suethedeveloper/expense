import React from "react";
import classes from "./Input.module.css";


type Props = {input: {
    id: string,
    type: string,
    min: any,
    max: any,
    step: any,
    defaultValue: any
} ; label: string };

export type Ref = HTMLInputElement;

const Input = React.forwardRef<Ref, Props>((props, ref) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
    </div>
});

export default Input;