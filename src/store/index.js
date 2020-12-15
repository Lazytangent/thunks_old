//Redux Imports
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

//Middleware Imports
/* TO DO */

//Reducers
import card from './card';

//Combines Reducers into one reducer
const rootReducer = combineReducers({
    card,
});

// Allow Redux tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Apply middleware
/* TO DO */
const storeEnhancer = composeEnhancers(applyMiddleware());

// Define Store
const configureStore = () => createStore(rootReducer, storeEnhancer);

export default configureStore;
