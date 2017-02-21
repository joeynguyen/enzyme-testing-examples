import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './app/App.jsx';
import TodosApp from './todos/TodosApp.jsx';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/todos" component={TodosApp}/>
  </Router>
), document.getElementById('app'));

