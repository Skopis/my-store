import { productAPI } from '../../api/productAPI'
import { cartAPI } from '../../api/cartAPI'


export const getProductList = (selectedCategory, sortBy) => async (dispatch) => {
    try {
        const res = await productAPI.query(selectedCategory, sortBy);
        dispatch({ type: 'GET_PRODUCT_LIST', payload: res });
    }
    catch (err) { console.log('Error with getProductList') }
}


export const addToCart = (product) => async (dispatch) => {
    try {
        const productAdded = await cartAPI.addToCart(product)
        console.log('productAdded', productAdded)
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
        dispatch({ type: 'GET_CATEGORIES', payload: categories })
    }
    catch (err) { console.log('Error with getCategories') }
}


export const setCategory = (categoryName) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_CATEGORY', payload: categoryName })
    }
    catch (err) { console.log('Error with setCategory') }
}


export const setPageNum = (pageNum) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_PAGE_NUM', payload: pageNum })
    }
    catch (err) { console.log('Error with setPageNum') }
}


export const checkOut = (didCheckOut, invoiceTotal = 0) => async (dispatch) => {
    try {
        const { isCheckOut, emptyCart } = await cartAPI.checkOut(didCheckOut)
        dispatch({ type: 'CHECK_OUT', payload: { isCheckOut, emptyCart, invoiceTotal } });
    }
    catch (err) { console.log('Error with checkOut') }
}


export const getProductForModal = (productId) => async (dispatch) => {
    try {
        const productForModal = await cartAPI.getProductById(productId)
        dispatch({ type: 'GET_PRODUCT_FOR_MODAL', payload: productForModal });
    }
    catch (err) { console.log('Error with checkOut') }
} 
