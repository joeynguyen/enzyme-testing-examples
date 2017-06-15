import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import App from './app/App.jsx';
import TodosApp from './todos/TodosApp.jsx';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/todos" component={TodosApp}/>
    </Router>
  </Provider>,
  document.getElementById('app')
);

