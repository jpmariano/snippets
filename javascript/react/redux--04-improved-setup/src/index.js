import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //5 
import { createStore, combineReducers } from 'redux'; //1

import counterReducer from './store/reducers/counter'; //3
import resultReducer from './store/reducers/result'; //3
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//4
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const store = createStore(rootReducer); //2

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
