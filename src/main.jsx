import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { RouterProvider, } from "react-router-dom";
import './assets/index.css';
import router from './app/router';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={ store }>
        <React.StrictMode>
            <RouterProvider router={ router } />
        </React.StrictMode>
    </Provider>
);
