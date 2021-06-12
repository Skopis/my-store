

const productListReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_PRODUCT_LIST':
            return action.payload;
            
        default:
            return state;
    }
};

export default productListReducer;