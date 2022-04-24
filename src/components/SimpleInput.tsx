import React, { FormEvent, useState, useRef, useEffect } from "react";

const SimpleInput = () => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredNameIsValid, setenteredNameIsValid] = useState<boolean>(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState<boolean>(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("Name Input is valid!");
    }
  },[enteredNameIsValid]);

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setenteredNameIsValid(false);
      return;
    }
  }
  
  const nameInputChaneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = (event: FormEvent) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setenteredNameIsValid(false);
      return;
    }

    setenteredNameIsValid(true);

    const enteredValue = nameInputRef.current?.value;
    console.log("enteredName", enteredName);
    console.log("enteredValue", enteredValue);
    //using state vs ref on validation
    // nameInputRef.current.value = ""; ==> NOT IDEAL. DON'T MANIPULATE THE DOM
    setEnteredName('');
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text' id='name'
          onBlur={nameInputBlurHandler}
          onChange={nameInputChaneHandler}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
