import React, { FormEvent, useState, useRef } from "react";

const SimpleInput = () => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [enteredName, setEnteredName] = useState<string>("");
  
  const nameInputChaneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredValue = nameInputRef.current?.value;
    console.log("enteredName", enteredName);
    console.log("enteredValue", enteredValue);
    //using state vs ref on validation
    // nameInputRef.current.value = ""; ==> NOT IDEAL. DON'T MANIPULATE THE DOM
    setEnteredName('');
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChaneHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
