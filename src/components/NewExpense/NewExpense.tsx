import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props: any) => {
  const onSaveExpenseDataHandler = (data: {}) => {
    const expenseData = { 
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