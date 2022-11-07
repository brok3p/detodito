import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let element = document.getElementById('root');
element.setAttribute('class', 'layout-fixed');
const root = ReactDOM.createRoot(element);
// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
