import { createStore, combineReducers } from 'redux';
import formsReducer from '../lib/form/redux/reducer';
const rootReducer = combineReducers({
    formsReducer,
});

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}