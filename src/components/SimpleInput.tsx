import React, {FormEvent, useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredNameTouched, setEnteredNameTouched] = useState<boolean>(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  let formIsValid = false;

  const nameInputChaneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  }
  
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState<boolean>(false);

  const enteredEmailIsValid = enteredEmail.length && enteredEmail.trim().includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  
    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
    }

  const emailInputChaneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  }
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = (event: FormEvent) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

    const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';  

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text' id='name'
          onBlur={nameInputBlurHandler}
          onChange={nameInputChaneHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='text' id='email'
          onBlur={emailInputBlurHandler}
          onChange={emailInputChaneHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
