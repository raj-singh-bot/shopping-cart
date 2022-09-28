import { combineReducers } from "redux";
import SetProducts from "./setProducts";
import setCart from "./setCart";

const rootReducer = combineReducers({
    products: SetProducts,
    cartProducts:setCart
});

export default rootReducer;