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
  const onSaveExpenseDataHandler = (data: {amount: number; date:Date; title: string;}) => {
    const expenseData: Expense = { 
      ...data, 
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;