import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './normalize.css';
import './index.css';
import App from './App';
import configureStore from './store';

// import * as cardActions from './store/card';
import { getRandomCard } from './store/card';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
    window.store = store;
    window.getRandomCard = getRandomCard;
}

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
);
