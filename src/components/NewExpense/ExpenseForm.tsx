import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    //@ts-ignore
    const [title, setTitle] = useState("");
    const titleChangeHandler = (evt: any) => {
        setTitle(evt.target.value);
    }
    //@ts-ignore
    const [amount, setAmount] = useState("");
    const amountChangeHandler = (evt: any) => {
        setAmount(evt.target.value);
    }
    //@ts-ignore
    const [date, setDate] = useState("");
    const dataChangeHandler = (evt: any) => {
        setDate(evt.target.value);
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