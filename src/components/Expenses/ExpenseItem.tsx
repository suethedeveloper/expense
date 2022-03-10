import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props: {date: Date, title: string, amount: number}) {
  let title = props.title;
  const clickHandler = () => {
    // console.log("Clicked", event)
    title = "updated!";
    console.log("TITLE", title)
  }
  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div className="expense-item__descrition">
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </div>
  );
}
  
export default ExpenseItem;