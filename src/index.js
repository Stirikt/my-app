 
import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


 let rerenderEntireTree = (state) =>{

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
  </React.StrictMode>
);
}


rerenderEntireTree (store.getState ());

store.subscribe (rerenderEntireTree );

