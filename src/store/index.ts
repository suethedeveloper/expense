
import { createSlice, configureStore } from "@reduxjs/toolkit";

// export const INCREMENT = "increment";

const initialState = {counter: 0, showCounter: true};

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
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

//to get hold of the identifiers use counterSlice.actions
// counterSlice.actions.toggleCounter

const store = configureStore({
    reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions; //use on the component where we need actions (counter component)

export default store;