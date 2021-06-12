import { productAPI } from '../../api/productAPI'
import { cartAPI } from '../../api/cartAPI'
// import { storageService } from '../../services/storage.service';


export const getProductList = (selectedCategory) => async (dispatch) => {
    console.log('hi getProductList on actions')
    try {
        const res = await productAPI.query(selectedCategory);
        console.log('res', res)
        dispatch({ type: 'GET_PRODUCT_LIST', payload: res });
    }
    catch (err) { console.log('Error with getProductList') }
}


export const addToCart = (productId) => async (dispatch) => {
    console.log('hi addToCart on actions')
    try {
        const productAdded = await cartAPI.addToCart(productId)
        dispatch({ type: 'ADD_TO_CART', payload: productAdded });
    }
    catch (err) { console.log('Error with addToCart') }
}

export const getCart = () => async (dispatch) => {
    console.log('hi addToCart on actions')
    try {
        const cartItems = await cartAPI.getCart()
        dispatch({ type: 'GET_CART', payload: cartItems });
    }
    catch (err) { console.log('Error with addToCart') }
}


export const getCategories = () => async (dispatch) => {
    console.log('hi getCategories on actions')
    try {
        const categories = await productAPI.getCategories()
        dispatch({ type: 'GET_CATEGORIES', payload: categories})
    }
    catch (err) { console.log('Error with getCategories') }
}

export const setCategory = (categoryName) => async (dispatch) => {
    console.log('hi setCategory on actions')
    try {
        dispatch({ type: 'SET_CATEGORY', payload: categoryName})
    }
    catch (err) { console.log('Error with setCategory') }
}


export const setPageNum = (pageNum) => async (dispatch) => {
    console.log('hi setPageNum on actions')
    try {
        dispatch({ type: 'SET_PAGE_NUM', payload: pageNum})
    }
    catch (err) { console.log('Error with setPageNum') }
}