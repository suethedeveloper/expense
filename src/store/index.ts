
import { createSlice, configureStore } from "@reduxjs/toolkit";

//could do this but logically makes no sense since auth is nothing to do with counter
//better to create brand new slice
// const initialState = {counter: 0, showCounter: true, isAuthenticated: false};
const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // login() {

        // },
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

const initialAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

//to get hold of the identifiers use counterSlice.actions
// counterSlice.actions.toggleCounter

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
})

export const counterActions = counterSlice.actions; //use on the component where we need actions (counter component)

export default store;