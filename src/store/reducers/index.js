import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productListReducer from './productListReducer';
import categoriesReducer from "./categoriesReducer";
import productReducer from "./productReducer";
import categoryReducer from './categoryReducer'
import pageNumReducer from './pageNumReducer'
import checkOutReducer from './checkOutReducer'
import productForModalReducer from "./productForModalReducer";


export default combineReducers(
    {
        productList: productListReducer,
        product: productReducer,
        categories: categoriesReducer,
        cartItems: cartReducer,
        selectedCategory: categoryReducer,
        currentPageNum: pageNumReducer,
        checkOut: checkOutReducer,
        productForModal: productForModalReducer
    }
);
