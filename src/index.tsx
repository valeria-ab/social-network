import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store  from './redux/redux-store'
import {BrowserRouter} from 'react-router-dom';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree)

