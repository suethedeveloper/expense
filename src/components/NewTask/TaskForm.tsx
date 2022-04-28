import React, { useRef } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = ({onEnterTask, loading} : {
  onEnterTask: (value: string) => void;
  loading: boolean;
}) => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current!.value;

    if (enteredValue.trim().length > 0) {
      onEnterTask(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' ref={taskInputRef} />
      <button>{loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
