import { productAPI } from '../../api/productAPI'
// import { cartAPI } from '../../api/cartAPI'
// import { storageService } from '../../services/storage.service';


export const getProductList = () => async dispatch => {
    console.log('hi getProductList on actions')
    try {
        const res = await productAPI.query();
        console.log('res', res)
        dispatch({ type: 'GET_PRODUCT_LIST', payload: res });
    }
    catch (err) { console.log('Error with getProductList') }
}