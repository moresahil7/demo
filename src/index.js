import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    
    <Route path="/" element={<Signup />} />
    <Route path="/login" element={<Signin />} />
  </Routes>
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
