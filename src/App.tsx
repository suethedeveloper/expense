import ExpenseItem from './components/Expenses//ExpenseItem';
import NewExpense from "./components/NewExpense/NewExpense";

interface Expense {
  id: string; 
  title: string; 
  amount: number; 
  date: Date;
}

function App() {
  const expenses = [
    {
      id: 'e1',
      title: "Toilet Papaer",
      amount: 94.12,
      date: new Date(2020, 7, 4)
    },
    {
      id: 'e2',
      title: "new TV",
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28)
    }
  ]
  return (
    <div>
      <div><NewExpense></NewExpense></div>    
      {
        expenses.map((expense: Expense, index: number) => (
          <ExpenseItem 
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))
      }
    </div>
  ); 
}

export default App;