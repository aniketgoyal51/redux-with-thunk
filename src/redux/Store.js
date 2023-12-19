import { configureStore } from "@reduxjs/toolkit";
import {detailReducer} from '../redux/reducer'
import { thunk } from "redux-thunk";


export const myStore = configureStore({
    reducer:{
        detailReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})