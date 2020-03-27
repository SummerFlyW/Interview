import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Question from "./Question";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Question />
  </React.StrictMode>,
  rootElement
);
