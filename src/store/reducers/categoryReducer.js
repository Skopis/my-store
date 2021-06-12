

const categoryReducer = (state = 'none', action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return action.payload;
            
        default:
            return state;
    }
};

export default categoryReducer;