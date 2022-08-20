import {CART} from '../../data/cart';
import { REMOVE_ITEM } from '../actions/cart.actions';

const INITIAL_STATE = {
    items: CART,
    total: 30000
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ITEM:
            let updatedCart = [];
        
            if (state.items.find(item => item.id === action.item.id)){
                updatedCart = state.items.map(item => {
                    if (item.id === action.item.id) item.quantity++;
                    return item;
                } );
            } else {
                const item = {...action.item, quantity: 1};
                updatedCart = [...state.items, action.item];
            }

            return {
                ...state,
                items: updatedCart,
                total: sumTotal(updatedCart)
            };

        case REMOVE_ITEM:
            const filteredCart = state.items.filter(item => item.id !== action.itemID);
            return {
                ...state,
                items: filteredCart,
                total: sumTotal(filteredCart)
            };
        case CONFIRM_CART:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: action.payload.quantity
                        };
                    } else {
                        return item;
                    }
                })
            };
        default:
            return state;
    }
}

export default CartReducer;