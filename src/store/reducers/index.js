import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productListReducer from './productListReducer';
import categoriesReducer from "./categoriesReducer";
import productReducer from "./productReducer";
import categoryReducer from './categoryReducer'
import pageNumReducer from './pageNumReducer'

export default combineReducers(
    {
        productList: productListReducer,
        product: productReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        selectedCategory: categoryReducer,
        currentPageNum: pageNumReducer,
    }
);