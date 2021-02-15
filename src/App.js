import React from 'react';
import './assets/scss/apple-travel.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './views/Home/Home';
import Register from './views/Register/RegisterPage';
import Login from './views/Login/LoginPage';

const App = () => {
  return (
    <Router >
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
