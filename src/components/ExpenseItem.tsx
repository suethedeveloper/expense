import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

/** #36
function ExpenseItem() {   
    const expenseDate: Date = new Date(2021, 2, 28);
    const expenseTitle: string = 'Car Insurance';
    const expenseAmount: number = 294.67;

    return (
      <div className="expense-item">
        <div>{expenseDate.toString()} | {expenseDate.toISOString()}</div>
        <div className="expense-item__descrition">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </div>
    );
  }  

#38
function ExpenseItem(props: {date: Date, title: string, amount: number}) {
  
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();

    return (
      <div className="expense-item">
        <div>
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
        </div>
        
        <div className="expense-item__descrition">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    );
  }
         
#38
function ExpenseItem(props: {date: Date, title: string, amount: number}) {

  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();

    return (
      <div className="expense-item">
        <div>
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
        </div>
        
        <div className="expense-item__descrition">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    );
  }

#39
function ExpenseItem(props: {date: Date, title: string, amount: number}) {
    return (
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__descrition">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    );
  }
*/

//#40
import Card from "./Card";
function ExpenseItem(props: {date: Date, title: string, amount: number}) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <div className="expense-item__descrition">
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
  
  export default ExpenseItem;