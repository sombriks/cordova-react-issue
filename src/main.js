import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";

const appInit = _ =>
  ReactDOM.render(React.createElement(App), document.getElementById("app"));

if (window.cordova) document.addEventListener("deviceready", appInit);
else appInit();
