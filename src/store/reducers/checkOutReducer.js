

const checkOutReducer = (state = { isCheckOut: false, emptyCart: [], invoiceTotal: 0 }, action) => {
    switch (action.type) {
        case 'CHECK_OUT':
            return action.payload;

        default:
            return state;
    }
};

export default checkOutReducer;