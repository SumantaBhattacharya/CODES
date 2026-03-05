// Basically, we can organise our store data in small pieces
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({// allows us to directly mutate the state
    name: "cart",
    initialState,
    reducers: { // pure functions
        // This is ES6 method
        add(state, action) {
            state.push(action.payload);
        },
        // traditional 
        remove: function(state, action) {
           // The .filter() method returns a new array, not mutating/changing the original.
            return state.filter((item) => {
                return item.id !== action.payload
            });
        }

    }
});

// The return value of `push` is the new array length, so we must not return it.
// return state.push(...), this will replace entire cart array with a number (the length)
// return state.filter() replaces the old state with this new array and uses this new array as the next state.

// Action creators(are functions that create action objects) that are generated for each case reducer function
export const {add, remove} = cartSlice.actions;
// export the reducer so you can plug it into configureStore in your store.js, Without it, the store wouldn't know how to handle the actions you dispatch.
export default cartSlice.reducer; // reducers get imported individually