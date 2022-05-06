import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incremenetHandler = () => {
    dispatch({type: "increment"});
  }

  const decremenetHandler = () => {
    dispatch({type: "decrement"})
  }

  const toggleCounterHandler = () => {};
  console.log("counter", counter)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incremenetHandler}>Incremenet</button>
        <button onClick={decremenetHandler}>Decremenet</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
