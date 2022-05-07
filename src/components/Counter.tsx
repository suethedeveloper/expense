import { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Counter.module.css';

class Counter extends Component {
  incremenetHandler() {
    // dispatch({type: "increment"});
  }

  decremenetHandler() {
    // dispatch({type: "decrement"})
  }

  toggleCounterHandler(){

  };
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{counter}</div>
        <div>
          <button onClick={this.incremenetHandler}>Incremenet</button>
          <button onClick={this.decremenetHandler}>Decremenet</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
  
}

export default connect()(Counter);
