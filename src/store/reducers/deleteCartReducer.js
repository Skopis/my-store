

const deleteCartReducer = (state = [], action) => {
    switch (action.type) {
        case 'DELETE_CART':
            return action.payload;

        default:
            return state;
    }
};

export default deleteCartReducer;