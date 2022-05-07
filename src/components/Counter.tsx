import { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Counter.module.css';

class Counter extends Component {
  incremenetHandler() {
    this.props.increment();
  }

  decremenetHandler() {
    this.props.decrement();
  }

  toggleCounterHandler(){

  };
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incremenetHandler.bind(this)}>Incremenet</button>
          <button onClick={this.decremenetHandler.bind(this)}>Decremenet</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
  
}
const mapStateToProps = (state: {counter: number}) => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = (dispatch: ({}) => void) => {
  return {
    increment: () => dispatch({type: "increment"}),
    decrement: () => dispatch({type: "decrement"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
