import React from "react";
import {Provider} from "react-redux";
import {applyMiddleware, createStore, compose} from "redux";
import reducers from "./reducers";
import reduxPromise from "redux-promise"
const Root = (props) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers, props.initialState || {},
    composeEnhancers(applyMiddleware(reduxPromise))
  );
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default Root;