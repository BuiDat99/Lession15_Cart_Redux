import { act } from 'react-dom/test-utils';
import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];



const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            var { product, quantity } = action;
            var index = -1;
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]

        case types.DELETE_CART:
            var index = findIndex(state, action.id)
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        case types.ADD_ONE_CART:
            var index = findIndex(state, action.id)
            if (index !== -1) {
                state[index].quantity = state[index].quantity -1;
                if(state[index].quantity == 0){
                    state.splice(index, 1);
                }
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        case types.SUBTRACT_ONE_CART:
            console.log('111111');
            var index = findIndex(state, action.id)
            if (index !== -1) {
                state[index].quantity = state[index].quantity + 1;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        default: return [...state]
    }
}

var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

var findIndex = (carts, id) => {
    var result = -1;
    carts.forEach((cart, index) => {
        if (cart.product.id === id) {
            result = index;
        }
    });
    return result;
}

export default cart;