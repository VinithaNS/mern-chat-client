import React from 'react';

import ReactDOM from 'react-dom/client';

import persistStore from 'redux-persist/es/persistStore';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import './index.css';
import store from './store';

const persistedStore = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
           <App />
        </PersistGate>
    </Provider>
    
  </React.StrictMode>
);
