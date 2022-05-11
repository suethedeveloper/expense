
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        descrement(state) {
            state.counter--;
        },
        increase(state: {counter: number}, action: any) {
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

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

export const counterActions = counterSlice.actions; //use on the component where we need actions (counter component)
export const authActions = authSlice.actions;

export default store;