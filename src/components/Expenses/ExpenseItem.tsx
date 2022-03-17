import {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// import {ExpenseType} from "../../interface";

function ExpenseItem(props: {date: Date, title: string, amount: number}) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated Title!");
    console.log("OLD Title:", title)
  }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div className="expense-item__descrition">
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}
  
export default ExpenseItem;