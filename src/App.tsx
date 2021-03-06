import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from './components/Expenses/Expenses';

// export interface Expense {
//   id: string; 
//   title: string; 
//   amount: number; 
//   date: Date;
// }
import { ExpenseType } from "./interface";

const DUMMY_EXPENSES: ExpenseType[]  = [
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
];

function App() {
  // let expenses = 
  const [expenses, setExpenses] = useState<ExpenseType[]>(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: ExpenseType) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  ); 
}

export default App;