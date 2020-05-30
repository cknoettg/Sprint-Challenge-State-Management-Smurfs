import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import "./index.css";
import App from "./components/App";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));