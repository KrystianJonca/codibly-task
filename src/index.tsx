import React from 'react';
import ReactDOM from 'react-dom/client';
import PaginationContextProvider from './context/PaginationContext';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PaginationContextProvider>
      <App />
    </PaginationContextProvider>
  </React.StrictMode>
);
