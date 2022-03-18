import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpesnesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import { ExpenseType } from "../../interface";

// interface Expense2 {
//     title: string;
//     amount: number;
//     date: Date;
//     id: string
// }
const Expenses = (props: {items: ExpenseType[]}) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(item => (item.date.getFullYear()).toString() === filteredYear);

    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpesnesList items={filteredExpenses}></ExpesnesList>
            </Card>
        </div>
  );
};

export default Expenses;