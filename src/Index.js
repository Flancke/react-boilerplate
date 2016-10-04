import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import NoMatch from './components/No-match';
import App from './components/App';
import About from './components/About';
import MyReactTable from './components/My-react-table';

window.React = React;

render(
  (<Router history={hashHistory}>
    {/* So macht man redirects wenn man sie braucht*/}
    <Redirect from="/asdf" to="/" />
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/table" component={MyReactTable} />
    </Route>
    {/* This is the "catch-all"-Route */}
    <Route path="*" component={NoMatch} />
  </Router>), document.getElementById('content')
);
