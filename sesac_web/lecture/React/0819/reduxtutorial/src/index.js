import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import App2 from './App2';
import counterReducer from './store/counterReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore( counterReducer );
root.render(
  <>
    <App />
    <hr/>
    <Provider store={store}>
      <App2/>
    </Provider>
  </>
);
