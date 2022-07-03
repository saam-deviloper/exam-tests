import { combineReducers } from "redux";
import numberReducer from "./Number/numberReducer";
import counterReducer from "./Counter/counterReducer";
import usersReducer from "./Users/usersReducer";
import productReducer from "./Product/productReducer";
import { reducer } from "./Person/personReducer";

 const  combineReducer = combineReducers({
    number : numberReducer,
    counter: counterReducer,
    usersData:usersReducer,
    productData:productReducer,
    personData:reducer
})
export default combineReducer;