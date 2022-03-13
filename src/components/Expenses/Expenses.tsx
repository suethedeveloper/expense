import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

// interface ExpensesFilterProps { onChangeFiler: (data: {}) => void; }

const Expenses = (props: any) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear: string) => {
        setFilteredYear(selectedYear);
    }

  return (
    <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
        {
            props.items.map((expense: any, index: number) => (
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