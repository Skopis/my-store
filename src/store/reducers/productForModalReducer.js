

const productForModalReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_FOR_MODAL':
            return action.payload;

        default:
            return state;
    }
};

export default productForModalReducer;