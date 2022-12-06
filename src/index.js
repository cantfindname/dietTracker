import React  from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import WebFont from "webfontloader";
import App from "./App";

//WebFont.load({
 // google: {
  //  families: ["Poppins", "Roboto:700"],
 // },
//});


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router> 
  <App />
</Router>,
  rootElement
);