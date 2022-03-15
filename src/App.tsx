import { useState } from "react";
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
const DUMMY_EXPENSES = [
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
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: Expense) => {
    console.log("NEW", expenses)
    setExpenses((prevExpenses) => {
      console.log("BBB", prevExpenses)
      console.log("AFTER", [expense, ...prevExpenses])
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