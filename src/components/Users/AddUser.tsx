import React, { useRef, useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = (props: {onAddUser: (username: string, age: number) => void}) => {
    const nameInputRef = useRef<HTMLInputElement | null | undefined>();
    const ageInputRef = useRef<HTMLInputElement | null | undefined>();
    const [error, setError] = useState<{title:string; message:string} | null>();

  const addUserHandler = (event: React.FormEvent) => {
    event.preventDefault();
    //Form validation
    // const enteredName = nameInputRef?.current?.value;
    // const enteredUserAge = ageInputRef?.current?.value;
    const enteredName = nameInputRef.current!.value;
    const enteredUserAge = ageInputRef.current!.value;
    if (!enteredName || !enteredUserAge) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name & age"
      })
      return;
    }
    //enteredAge: string. 
    //+enteredAge: number => + will convert string to number
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)"
      }) 
      return;
    }
    props.onAddUser(enteredName, +enteredUserAge);
    nameInputRef.current!.value = '';
    ageInputRef.current!.value = '';
  };


  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      { error && 
        <ErrorModal 
          title={error.title} 
          message={error.message} 
          onConfirm={errorHandler} 
        /> 
      }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;