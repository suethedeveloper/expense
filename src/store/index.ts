
import { createStore } from "redux";

interface State {
    counter:number;
    showCounter:boolean
}
interface Action {
    type: string;
    amount: number;
}

// export const INCREMENT = "increment";

const initialState = {counter: 0, showCounter: true};
const initialAction = {type: "increment", amount: 0};

//not working...  action: {type: string, amount?: null | number | undefined
const counterReducer =
(state: State = initialState, action: Action = initialAction) => {
    // if (action.type === INCREMENT) {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === "increase") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === "toggle") {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state;
}

//@ts-ignore
const store = createStore(counterReducer);

export default store;