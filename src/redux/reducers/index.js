import {combineReducers} from "redux";

import accountReducer from "./accountReducer";
import cartReducer from "./cartReducer";
import errorReducer from "./errorsReducer";

export default combineReducers({
    cart: cartReducer,
    account: accountReducer,
    errors: errorReducer
});