// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import combineReducer from './combinedReducer'
import logger from 'redux-logger';
import thunk from "redux-thunk";

const store = createStore(combineReducer, applyMiddleware(logger,thunk));
export default store;
