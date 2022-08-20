import { createStore, combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import CategoryReducer from './reducers/category.reducer';
import DescriptionReducer from './reducers/description.reducer';
import CartReducer from './reducers/cart.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    description: DescriptionReducer,
    cart: CartReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));