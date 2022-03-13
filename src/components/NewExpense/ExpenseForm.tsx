import React, { useState } from 'react';
import './ExpenseForm.css';

interface onSaveExpenseDataFunc {
  onSaveExpenseData: (data: {
      title: string;
      amount: number;
      date: Date;
  }) => void;
}
const ExpenseForm = (props: onSaveExpenseDataFunc) => {
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [enteredDate, setDate] = useState<string>("");
    // const [userInput, setUserInput] = useState<object>({
    //     title: "",
    //     amount: "",
    //     date: ""
    // })
    
    const titleChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        // setUserInput((prevState: {}) => {
        //   return {...prevState, title: evt.target.value}
        // });
        setTitle(evt.target.value);
    }
   
    const amountChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
          // setUserInput((prevState: {}) => {
        //   return {...prevState, title: evt.target.value}
        // });
        setAmount(Number(evt.target.value));
    }
    
    const dataChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
                // setUserInput((prevState: {}) => {
        //   return {...prevState, title: evt.target.value}
        // });
        setDate(evt.target.value);
    }

    const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();
      const expenseData = {
        title,
        amount,
        date: new Date(enteredDate)
      }
      props.onSaveExpenseData(expenseData);
      setTitle("");
      setAmount(0);
      setDate("");
    }
    
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dataChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;