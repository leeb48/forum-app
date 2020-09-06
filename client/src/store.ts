import { createStore, applyMiddleware, Middleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export interface AppState {}

export function configureStore(): Store<AppState> {
  const middleware: Middleware[] = [thunk];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, undefined, composedEnhancers);

  return store;
}
