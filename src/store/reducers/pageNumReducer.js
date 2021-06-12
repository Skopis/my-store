

const pageNumReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_PAGE_NUM':
            return action.payload;

        default:
            return state;
    }
};

export default pageNumReducer;