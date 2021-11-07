import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import  {Provider} from 'react-redux'
import residenceReducer from './Store/Reducers/residenceReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  residenceStore: residenceReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
