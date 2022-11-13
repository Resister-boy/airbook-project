import { createStore } from "redux"
import { applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "@redux-saga/core"

import rootSaga from "./modules/rootSaga"
import reducer from "./modules/reducer"

const sagaMiddelware = createSagaMiddleware();

const create = () => {
  const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(sagaMiddelware)));

  sagaMiddelware.run(rootSaga);

  return store;
}

export default create;