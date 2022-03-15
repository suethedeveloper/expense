import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

interface Expense {
  id: string; 
  title: string; 
  amount: number; 
  date: Date;
}

interface NewExpenseProps { onAddExpense: (data: Expense) => void; }

const NewExpense = (props: NewExpenseProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDataHandler = (data: {amount: number; date:Date; title: string;}) => {
    const expenseData: Expense = { 
      ...data, 
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;