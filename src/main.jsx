import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './App.css'
import { AppRouter } from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <CssBaseline/>
        <AppRouter/>      
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
)
