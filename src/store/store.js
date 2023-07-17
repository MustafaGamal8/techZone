import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./fetchSlice"



const store = configureStore({reducer:{productsReducer}}) 

export default store;
