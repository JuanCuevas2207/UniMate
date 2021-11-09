import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import residenceReducer from './Store/Reducers/residenceReducer';
import thunk from 'redux-thunk'
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

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
      <Routes>
        <Route path="/"
          element={
            <Home />}
        >
        </Route>
        <Route path="/signIn"
          element={
            <SignIn />}
        >
        </Route>
        <Route path="/signUp"
          element={
            <SignUp />}
        >
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
