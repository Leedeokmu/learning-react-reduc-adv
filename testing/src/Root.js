import React from "react";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./reducers";
import async from "./middlewares/async";
import stateValidator from "./middlewares/stateValidator";

const Root = (props) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers, props.initialState || {},
    composeEnhancers(applyMiddleware(async, stateValidator))
  );
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default Root;