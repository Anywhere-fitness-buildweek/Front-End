import React from 'react';
import ReactDOM from 'react-dom';

// import logger from "redux-logger";
// import thunk from "redux-thunk"

// import { createStore, applyMiddleware } from "redux";
// import { provider } from "react-redux";
// import { reducer } from "./reducers";

import './index.css';
import App from './App';

// const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);


