import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBd1-Edg800NNxW8oz-yoQNlpwEZdB8VmA",
  authDomain: "ecommerce-abramzon.firebaseapp.com",
  projectId: "ecommerce-abramzon",
  storageBucket: "ecommerce-abramzon.appspot.com",
  messagingSenderId: "1040269826848",
  appId: "1:1040269826848:web:646fa9dca70cd0393f5545"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
