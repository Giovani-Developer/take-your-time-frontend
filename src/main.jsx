import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

window.history.scrollRestoration = 'manual';

if (window.location.hash) {
  window.history.replaceState(
    null,
    '',
    window.location.pathname + window.location.search
  );
}

window.scrollTo(0, 0);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);