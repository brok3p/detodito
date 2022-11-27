import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByIvTCrFe7Q9o2xoFTQXu7SMgfOUkr1fk",
  authDomain: "detodito-8a694.firebaseapp.com",
  projectId: "detodito-8a694",
  storageBucket: "detodito-8a694.appspot.com",
  messagingSenderId: "170470906203",
  appId: "1:170470906203:web:309c52d559b904be0ae27e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let element = document.getElementById('root');
element.setAttribute('class', 'layout-fixed');
const root = ReactDOM.createRoot(element);
// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
