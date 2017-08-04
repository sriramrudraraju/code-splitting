import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import Reducers from '../reducers';

export default createStore(Reducers, {}, applyMiddleware(logger));
