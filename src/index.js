import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  Provider } from 'react-redux';
import { createStore,applyMiddleware, compose } from 'redux';
import rootReducer from './Todo/todoreducer';
import thunk from "redux-thunk";
const middleWare = [thunk];

const store = createStore(rootReducer,compose(
    applyMiddleware(...middleWare)
  )
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
 document.getElementById('root'));
