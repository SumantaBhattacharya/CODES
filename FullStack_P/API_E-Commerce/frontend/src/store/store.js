import { configureStore } from '@reduxjs/toolkit';

import cartReducer from "./cartSlice.js"
// import productReducer from "./productSlice.js"

// The Store doesn't know what to do with that message until it passes it to the Reducer.
// the Redux store itself doesn't work with an object of reducer functions for a single slice; it needs one single reducer function for that slice.
const store = configureStore({
    reducer: {// The reducer is the logic engine that actually calculates the new state based on the action.
        cart: cartReducer,
        // product: productReducer,
    }
});

export default store;