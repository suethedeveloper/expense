import React from "react";
import classes from "./Input.module.css";

interface InputProps {
    id: string;
    type: string;
    min: string;
    max: string;
    step: string;
    defaultValue: string;
}

type Props = {input: InputProps ; label: string };
type Ref = HTMLInputElement;

const Input = React.forwardRef<Ref, Props>((props, ref) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
    </div>
});

export default Input;