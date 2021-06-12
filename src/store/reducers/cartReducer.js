

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_CART':
            return action.payload;

        default:
            return state;
    }
};

export default cartReducer;