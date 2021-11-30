import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { reducer } from './reducer';
import saga from './saga';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  // applyMiddleware(thunk),
  // other store enhancers if any
);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  enhancer
  );

sagaMiddleware.run(saga)

export default store
