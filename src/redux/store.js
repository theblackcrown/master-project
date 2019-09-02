import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import CreateSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewars = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewars.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewars));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);


export default { store, persistor }; 