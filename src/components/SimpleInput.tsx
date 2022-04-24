import React, { FormEvent, useState, useRef } from "react";

const SimpleInput = () => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredNameValid, setEnteredNameValid] = useState<boolean>(true);
  
  const nameInputChaneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = (event: FormEvent) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameValid(false);
      return;
    }

    setEnteredNameValid(true);

    const enteredValue = nameInputRef.current?.value;
    console.log("enteredName", enteredName);
    console.log("enteredValue", enteredValue);
    //using state vs ref on validation
    // nameInputRef.current.value = ""; ==> NOT IDEAL. DON'T MANIPULATE THE DOM
    setEnteredName('');
  }

  const nameInputClasses = enteredNameValid
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChaneHandler} />
        {!enteredNameValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
