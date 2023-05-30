import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberofgood: 0,
    login: false
}



const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state) =>{
            state.numberofgood = state.numberofgood + 1
        },

        decrement: (state) =>{
            state.numberofgood = state.numberofgood - 1
        }, 
        checkLogin: (state) =>{
            state.login = !state.login
        }
    }
})

export default counterSlice.reducer
export const {increment, decrement, checkLogin} = counterSlice.actions