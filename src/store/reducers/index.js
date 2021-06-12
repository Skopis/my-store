import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productListReducer from './productListReducer';
import categoriesReducer from "./categoriesReducer";
import productReducer from "./productReducer";


export default combineReducers(
    {
        productList: productListReducer,
        product: productReducer,
        categories: categoriesReducer,
        cart: cartReducer
    }
);