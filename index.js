import React from 'react';
import ReactDom from 'react-dom';
import Main from './src/page/Main';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from './src/redux/reducers';
import './src/resource/styles/normalize.css';
import { composeWithDevTools } from 'redux-devtools-extension';

const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("root"));