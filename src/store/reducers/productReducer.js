

const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'getProductList':
            return action.payload;
        case 'getCategories':
            return action.payload;
        case 'getProductListByCategory':
            return action.payload;
        case 'getProduct':
            return action.payload;
        default:
            return state;
    }
};

export default productReducer;