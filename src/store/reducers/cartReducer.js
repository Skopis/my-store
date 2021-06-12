

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'getCart':
            return action.payload;
        case 'addToCart':
            return action.payload;
        case 'deleteCart':
            return action.payload;
        default:
            return state;
    }
};

export default cartReducer;