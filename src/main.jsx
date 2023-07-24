import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from './App.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>,
);
