
import { legacy_createStore } from "redux";
// action: {type: string, amount?: null | number | undefined
const counterReducer = (state = {counter: 0}, action: {type: string, amount?: any}) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === "increase") {
        return {
            counter: state.counter + action.amount
        }
    }
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

const store = legacy_createStore(counterReducer);

export default store;