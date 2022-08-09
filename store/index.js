import { createStore, combineReducers } from 'redux';

import CategoryReducer from './reducers/category.reducer';
import DescriptionReducer from './reducers/description.reducer';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    description: DescriptionReducer
});

export default createStore(RootReducer);