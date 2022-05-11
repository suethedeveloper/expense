
import { createSlice, configureStore } from "@reduxjs/toolkit";

// export const INCREMENT = "increment";

const initialState = {counter: 0, showCounter: true};
// const initialAction = {type: "increment", amount: 0};
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        descrement(state) {
            state.counter--;
        },
        increase(state: {counter: number}, action: any) {
        // increase(state: {counter: number}, action: {type: string, amount: number}) {
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

//CreatStore only works with one reducer. not idea for a big application. 
// const store = createStore(counterReducer);
//configureStore

const store = configureStore({
    reducer: counterSlice.reducer //one
    // reducer: {
    //     counter: counterSlice.reducer // multiple
    // }
})

export default store;