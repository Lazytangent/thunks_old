//Redux Imports
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

//Middleware Imports
import thunk from 'redux-thunk';

//Reducers
import cards from './cards';

//Combines Reducers into one reducer
const rootReducer = combineReducers({
    cards,
});

// Allow Redux tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Apply middleware
const storeEnhancer = composeEnhancers(applyMiddleware(thunk));

// Define Store
const configureStore = () => createStore(rootReducer, storeEnhancer);

export default configureStore;
