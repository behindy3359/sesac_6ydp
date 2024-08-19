import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import rootReducer from './store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore( rootReducer );
root.render(
  <>
    <App />
    <hr/>
    <Provider store={store}>
      <App2/>
      <hr/>
      <App3/>
      <hr/>
      <App4/>
    </Provider>
  </>
);
