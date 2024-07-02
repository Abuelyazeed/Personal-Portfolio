import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeContextProvidor } from './common/ThemeContextProvidor.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvidor>
      <App />
    </ThemeContextProvidor>
  </React.StrictMode>
);
