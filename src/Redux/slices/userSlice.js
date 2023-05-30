import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    token: {}
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        checkLogin: (state) =>{
            state.login = !state.login
        },

        tokenInfo: (state, action) =>{
            state.token = action.payload
        }
    }

})

export default userSlice
export const {checkLogin, tokenInfo} = userSlice.reducer