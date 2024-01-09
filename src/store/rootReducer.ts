import {combineReducers} from "redux";
import cartSlice from "./slices/cartSlice";

// global depo
const rootReducer = combineReducers({
	cart: cartSlice, //  global depo altındaki "cart" isimli alt depo
});

export default rootReducer