
import { legacy_createStore } from "redux";
// redux.createStore();

const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === "incremenet") {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === "decremenet") {
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

const store = legacy_createStore(counterReducer);

export default store;