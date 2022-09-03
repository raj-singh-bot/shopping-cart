import { combineReducers } from "redux";
import SetProducts from "./setProducts";

const rootReducer = combineReducers({
    products: SetProducts
});

export default rootReducer;