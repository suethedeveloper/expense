import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from './components/Expenses/Expenses';

export interface Expense {
  id: string; 
  title: string; 
  amount: number; 
  date: Date;
}
// export interface Expense2 {
//     title: string;
//     amount: string;
//     date: Date;
// }

function App() {
  let expenses = [
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

  const adExpenseHandler = (expense: Expense) => {
    console.log("APP", expense)
    expenses.push(expense);
    console.log("--APP", expenses)
  }

  return (
    <div>
      <NewExpense onAddExpense={adExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  ); 
}

export default App;