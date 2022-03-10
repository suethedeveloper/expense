import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    //@ts-ignore
    const [userInput, setUserInput] = useState({
        title: "",
        amount: "",
        date: ""
    })
    
    const titleChangeHandler = (evt: any) => {
        setUserInput({...userInput, title: evt.target.value});
    }
   
    const amountChangeHandler = (evt: any) => {
        setUserInput({...userInput, amount: evt.target.value});
    }
    
    const dataChangeHandler = (evt: any) => {
        setUserInput({...userInput, date: evt.target.value});
    }
    
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
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