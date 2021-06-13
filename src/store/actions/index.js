import { productAPI } from '../../api/productAPI'
import { cartAPI } from '../../api/cartAPI'
// import { storageService } from '../../services/storage.service';


export const getProductList = (selectedCategory) => async (dispatch) => {
    try {
        const res = await productAPI.query(selectedCategory);
        dispatch({ type: 'GET_PRODUCT_LIST', payload: res });
    }
    catch (err) { console.log('Error with getProductList') }
}


export const addToCart = (product) => async (dispatch) => {
    try {
        const productAdded = await cartAPI.addToCart(product)
        dispatch({ type: 'ADD_TO_CART', payload: productAdded });
    }
    catch (err) { console.log('Error with addToCart') }
}

export const getCart = () => async (dispatch) => {
    try {
        const cartItems = await cartAPI.getCart()
        dispatch({ type: 'GET_CART', payload: cartItems });
    }
    catch (err) { console.log('Error with addToCart') }
}


export const getCategories = () => async (dispatch) => {
    try {
        const categories = await productAPI.getCategories()
        dispatch({ type: 'GET_CATEGORIES', payload: categories})
    }
    catch (err) { console.log('Error with getCategories') }
}

export const setCategory = (categoryName) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_CATEGORY', payload: categoryName})
    }
    catch (err) { console.log('Error with setCategory') }
}


export const setPageNum = (pageNum) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_PAGE_NUM', payload: pageNum})
    }
    catch (err) { console.log('Error with setPageNum') }
}