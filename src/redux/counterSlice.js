import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counterApp',
    initialState:{
        value:0
    },
    //actions are created inside reducers key
    reducers: {
        //function to increment value
        increment:(state,action)=>{
            //function with argument - value will be obtained in action.payload
            state.value+=action.payload
        },
        //function to decrement
        decrement:(state,action)=>{
            state.value-=action.payload
        },
        //function to reset
        reset:(state)=>{
            state.value = 0
        }
    }
})

// actions are used by components to access the state
export const {increment,decrement,reset}=counterSlice.actions

//reducer is required for store to change the value of state
export default counterSlice.reducer