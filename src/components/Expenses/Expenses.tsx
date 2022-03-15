import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpesnesList from "./ExpensesList";
import "./Expenses.css";
// import Expense2 from "../../App";

interface Expense2 {
    title: string;
    amount: number;
    date: Date;
    id: string
}
const Expenses = (props: {items: Expense2[]}) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(item => (item.date.getFullYear()).toString() === filteredYear);

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpesnesList items={filteredExpenses}></ExpesnesList>
            </Card>
        </div>
  );
};

export default Expenses;