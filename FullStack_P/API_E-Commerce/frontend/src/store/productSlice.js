import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Object.freeze() freezes an object. A frozen object can no longer be changed.
export const STATUSES = Object.freeze({// To re-use the status
    // We can use enum
    IDLE: "idle",// naming convention for object is UPPERCASE 
    LOADING: "loading",
    ERROR: "error",
});

// createSlice is a function (not a class)
const productSlice = createSlice({ // createSlice is a function (not a class), not need of new before it
    name: "product",
    initialState: {
        data: [], // product list
        dataProduct: null, // Object or null for single product
        status: STATUSES.IDLE,// idle, loading, error
        error: null,
    },
    reducers: {// reducers property you write inside createSlice is an object.
        /*setProducts: function(state, action) {
            // The word "thunk" is a programming term that means "a piece of code that does some delayed work" Rather than excute some logic now, we can write a function body or code that can be used to perform the work later.
            state.data = action.payload;
        },*/
        setProduct: function(state, action) {
            state.dataProduct = action.payload;// action.payload is an OBJECT
        },
        setStatus: function(state, action) {
            state.status = action.payload;
        },
        setError: function(state, action) {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
            state.error = action.error.message;
        })
    }
})

export const {setProducts, setStatus, setError, setProduct} = productSlice.actions; // productSlice is an object and actions is a field in that object
export default productSlice.reducer;// automatically generates a single reducer function.

// Thunks
// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState){
//         dispatch(setStatus(STATUSES.LOADING));
//         try{
//             const res = await fetch("https://fakestoreapi.com/products");

//             if (!res.ok) {
//                 dispatch(setError(`Failed to fetch products, HTTP error! status: ${res.status}`))
//                 throw new Error(
//                   `Failed to fetch products, HTTP error! status: ${res.status}`,
//                 ); // throw immediately stops execution and jumps to the catch block.
//             }

//             const data = await res.json();

//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         }catch(err){
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//             dispatch(setError(err.message));
//         }
//     }
// }

export const fetchProducts =  createAsyncThunk('products/fetch', async () => {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
        // dispatch(setError(`Failed to fetch products, HTTP error! status: ${res.status}`))
        //     throw new Error(
        //       `Failed to fetch products, HTTP error! status: ${res.status}`,
        //     ); // throw immediately stops execution and jumps to the catch block.
        // return rejectWithValue(`Failed to fetch products, HTTP error! status: ${res.status}`);
        throw new Error(
          `Failed to fetch products, HTTP error! status: ${res.status}`,
        ); // throw immediately stops execution and jumps to the catch block. ii. Creates an Error object with stack trace iii. Error available as error.message 
    }

    const data = await res.json();

    return data;

});// identifier, 

export function fetchProductById(productId) {
    return async function fetchProductByIdThunk(dispatch, getState){
        dispatch(setStatus(STATUSES.LOADING));

        try{
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
            
            if (!res.ok) {
                dispatch(setError(`Failed to fetch products, HTTP error! status: ${res.status}`)); // we could have use object to send key value pairs for e.g., msg: "" and status: res.status
                throw new Error(
                  `Failed to fetch products, HTTP error! status: ${res.status}`,
                ); // throw immediately stops execution and jumps to the catch block.
            }
            
            const data = await res.json();

            dispatch(setProduct(data));
            dispatch(setStatus(STATUSES.IDLE));
        }catch(err){
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
            dispatch(setError(err.message));
        }
    }
}