import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
// import Expense2 from "../../App";

interface Expense2 {
    title: string;
    amount: number;
    date: Date;
}
const Expenses = (props: {items: Expense2[]}) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    }

  return (
    <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
        {
            props.items.map((expense: Expense2, index: number) => (
            <ExpenseItem 
                key={index}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            ></ExpenseItem>
            ))
        }
        </Card>
    </div>
  );
};

export default Expenses;