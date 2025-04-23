import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import feedR from "./feedSlice";
import connectionsR from "./connectionsSlice";

const appStore = configureStore({
    reducer : {
        user: userReducer,
        feed: feedR,
        connections: connectionsR,
    },
});

export default appStore; 