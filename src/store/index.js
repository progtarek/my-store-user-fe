import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas';
import * as logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const reduxLogger = logger.createLogger();
const sagaMiddleware = createSagaMiddleware();

/*eslint-disable */
const composeSetup =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/*eslint-enable */

export default function configureStore(preloadState) {
  const store = createStore(
    rootReducer,
    preloadState,
    composeSetup(applyMiddleware(reduxLogger, sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
