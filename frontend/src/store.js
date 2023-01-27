import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { 
    itemSoloReducer,
    itemListReducer,
} from './reducers/index.js';


const reducer = combineReducers({
    itemList: itemListReducer,
    itemSolo: itemSoloReducer,
});

const middleware = [thunk];

const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;



