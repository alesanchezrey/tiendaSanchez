import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2a_uujYDQw8XyfetzyNRwmQIagBqYlqw",
  authDomain: "coderhouse-ecommerce-7283a.firebaseapp.com",
  projectId: "coderhouse-ecommerce-7283a",
  storageBucket: "coderhouse-ecommerce-7283a.appspot.com",
  messagingSenderId: "217885743283",
  appId: "1:217885743283:web:43e8e1225053e59fa438c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
