import * as types from './../constants/ActionTypes';
import * as Message from './../constants/Message';

var initialState = Message.MSG_WELCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case types.BUY_SUCCESS:
            return Message.MSG_ADD_TO_CART_SUCCESS;
        case types.UPDATE_CART_SUCCESS:
            return Message.MSG_UPDATE_CART_SUCCESS;
        case types.DELETE_CART_SUCCESS:
            return Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS;
        default: return state;
    }
}

export default message;