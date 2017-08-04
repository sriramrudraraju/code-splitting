import { createStore as _createStore, applyMiddleware } from 'redux';
import baseReducers from '../reducers';
import Registry from './registry/registry';
import registryMiddleware from './registry/middleware';

export default function createStore(initialState = {}) {
  //instead combining all the reduces. we pass them as a object to the registry
  //constructor as 'basereducers'
  // here we starting base reducer with dummy reducer
  const registry = new Registry(baseReducers);

  let finalCreateStore = applyMiddleware(registryMiddleware(registry));

  // if we have redux devtools installed hook into it.
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    finalCreateStore = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      finalCreateStore
    );
  }

  const store = finalCreateStore(_createStore)(
    registry.initialReducers,
    initialState
  );

  // assign the created store to our registry
  //so that we can interact with redux store's api methods for reducer replacements
  registry.store = store;

  return store;
}
