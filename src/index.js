import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import "./Project2/Css/alert.css"
import App0 from "./Project2/App0";
// import UserProvider from "./Project2/Context/Context";
import "./Project2/Css/Card.css";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
      <App0 />
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
