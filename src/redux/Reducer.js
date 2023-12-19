import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initstate={
    users:[]
}

export const userThunk= createAsyncThunk("users/setInitialState",async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
})

const userslice=createSlice({
    name:"users",
    initialState:initstate,
    reducers:{
        addinit:(state, action)=>{
            state.users=[...action.payload]
        }
    },
    extraReducers:(build)=>{
        build.addCase(userThunk.fulfilled,(state,action)=>{
            state.users=action.payload
        })
    }
})
export const detailaction=userslice.actions;
export const detailReducer=userslice.reducer;
export const detailSelector=(state)=>state.detailReducer.users