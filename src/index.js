import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import ContactApp from './page/ContactApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactApp />
  </React.StrictMode>
);