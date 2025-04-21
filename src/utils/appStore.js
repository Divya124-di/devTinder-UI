import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import feedR from "./feedSlice";

const appStore = configureStore({
    reducer : {
        user: userReducer,
        feed: feedR,
    },
});

export default appStore; 