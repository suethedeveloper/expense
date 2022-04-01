import React, { useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// type State = {
//   value: string;
//   isValid: boolean;
// }
// type Action = 

const emailReducer = (state: any, action: {
  type:string;
  val?: string;
}) => {
  if (action.type === "USER_INPUT"){
    return {value: action.val, isValid: action.val?.includes("@")}  
  }
  if (action.type === "INPUT_BLUR"){
    return {value: state.value, isValid: state.value!.includes("@")}  
  }
  return {value: "", isValid: false}
};

const Login = (props: {
  onLogin: (enteredEmail: string, enteredPassword: string) => void
}) => {
  const [enteredPassword, setEnteredPassword] = useState<string>('');
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false
  });

  const emailChangeHandler = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    dispatchEmail({type: "USER_INPUT", val: target.value});

    setFormIsValid(
      emailState.isValid && target.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setEnteredPassword(target.value);

    setFormIsValid(
      emailState.isValid && target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: "INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;