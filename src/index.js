import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom"; 

import Main from './layouts/Main';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import "./assets/loading.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route path="/main" render={(props) => <Main {...props} />} />
      <Redirect to="/main/home" />
    </Switch>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
