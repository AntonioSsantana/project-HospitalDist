import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import App from './App.jsx';
import {
  Checkout,
  AccountPage
} from './pages/index.js';

// Css
import { GlobalStyle } from './GlobalStyle.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/checkout/cart' element={<Checkout />} />
        <Route path='/u/account' element={<AccountPage /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
