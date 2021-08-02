import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

firebase.initializeApp ({
  apiKey: "AIzaSyDalR8teBk1hbZDsrGWkhWaHOYoT4-gcMA",
  authDomain: "movie-85e61.firebaseapp.com",
  projectId: "movie-85e61",
  storageBucket: "movie-85e61.appspot.com",
  messagingSenderId: "610243243216",
  appId: "1:610243243216:web:287da1c4d056b8afd402d5",
  measurementId: "G-4V90K23157"
});

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
