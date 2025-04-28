import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import feedR from "./feedSlice";
import connectionsR from "./connectionsSlice";
import requestsR from "./requestsSlice";

const appStore = configureStore({
    reducer : {
        user: userReducer,
        feed: feedR,
        connections: connectionsR,
        requests: requestsR,
    },
});

export default appStore; 