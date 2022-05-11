import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
// import {INCREMENT} from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: {counter: number}) => state.counter);
  const show = useSelector((state: {showCounter: boolean}) => state.showCounter);

  const incremenetHandler = () => {
    // dispatch({type: INCREMENT});
    dispatch({type: 'increment'});
  }

  const increaseHandler = () => {
    dispatch({type: "increase", amount: 5});
  }

  const decremenetHandler = () => {
    dispatch({type: "decrement"})
  }

  const toggleCounterHandler = () => {
    dispatch({type: "toggle"})
  };
  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incremenetHandler}>Incremenet</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decremenetHandler}>Decremenet</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// import { Component } from 'react';
// import { connect } from 'react-redux';

// import classes from './Counter.module.css';

// class Counter extends Component {
//   incremenetHandler() {
//     this.props.increment();
//   }

//   decremenetHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler(){

//   };
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incremenetHandler.bind(this)}>Incremenet</button>
//           <button onClick={this.decremenetHandler.bind(this)}>Decremenet</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
  
// }
// const mapStateToProps = (state: {counter: number}) => {
//   return {
//     counter: state.counter
//   }
// }
// const mapDispatchToProps = (dispatch: ({}) => void) => {
//   return {
//     increment: () => dispatch({type: "increment"}),
//     decrement: () => dispatch({type: "decrement"})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

