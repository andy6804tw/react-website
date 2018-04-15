import React, { Component } from 'react';
// import package
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'ress/dist/ress.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';

import Home from './Home/Home';
import NotFound from './NotFound';

const Main = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;

