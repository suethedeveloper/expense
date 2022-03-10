import ExpenseItem from './components/Expenses//ExpenseItem';
/* #36
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>

    </div>
  );
}

#38
function App() {
  const expenses = [
    {
      id: 'e1',
      title: "TP",
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}


function App() {
  const expenses = [
    {
      id: 'e1',
      title: "TP",
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
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <ExpenseItem 
  //       title={expenses[0].title}
  //       amount={expenses[0].amount}
  //       date={expenses[0].date}
  //     ></ExpenseItem>
  //     <ExpenseItem 
  //       title={expenses[1].title}
  //       amount={expenses[1].amount}
  //       date={expenses[1].date}
  //     ></ExpenseItem>
  //     <ExpenseItem 
  //       title={expenses[2].title}
  //       amount={expenses[2].amount}
  //       date={expenses[2].date}
  //     ></ExpenseItem>
  //   </div>
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
*/

interface Expense {
  id: string; 
  title: string; 
  amount: number; 
  date: Date;
}

function App() {
  const expenses = [
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
  return (
    <div>
      <h2>Let's get started!</h2>
      {
        expenses.map((expense: Expense, index: number) => (
          <ExpenseItem 
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))
      }
    </div>
  ); 
}

export default App;