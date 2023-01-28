import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { 
    itemSoloReducer,
    itemListReducer,
    itemCreateReducer,
    itemUpdateReducer,
} from './reducers/index.js';


const reducer = combineReducers({
    itemList: itemListReducer,
    itemSolo: itemSoloReducer,
    itemCreate: itemCreateReducer,
    itemUpdate: itemUpdateReducer,
});

const middleware = [thunk];

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;



