import * as types from './../constants/ActionTypes';

export const actAddToCart=(product,quantity)=>{
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
};

export const actDeleteCart=(id)=>{
    return {
        type: types.DELETE_CART,
        id
    }
};

export const actAddOneCart=(id)=>{
    return {
        type: types.ADD_ONE_CART,
        id
    }
};

export const actSubOneCart=(id)=>{
    return {
        type: types.SUBTRACT_ONE_CART,
        id
    }
};

export const actBuySuccess=()=>{
    return {
        type: types.BUY_SUCCESS,
    }
};

export const actEditCartSuccess=()=>{
    return {
        type: types.UPDATE_CART_SUCCESS,
    }
};

export const actDeleteCartSuccess=()=>{
    return {
        type: types.DELETE_CART_SUCCESS,
    }
};


