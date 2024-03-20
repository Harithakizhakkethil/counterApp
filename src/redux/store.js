import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store =configureStore({
    //reducer is a predefined key which stores an object that can hold more than one reducer as key value pairs.
    reducer:{
        counter:counterSlice
    }
})